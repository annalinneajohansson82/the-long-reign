---
title: Technical Architecture
id: 08-technical/architecture

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/why
  - 00-foundation/principles
  - 00-foundation/project-structure

used_by:
  - All engineering documents
  - Chief Engineer
  - All subagents

tags:
  - technical
  - architecture
  - systems
  - browser-game
---

# Purpose

This document defines the high-level technical architecture of **The Long Reign**. It describes the major system boundaries, how components communicate, and the architectural constraints that all implementation must respect.

---

# Overview

The Long Reign is a browser-based, single-player kingdom-building simulation. The architecture is organized around a client-side simulation engine rendered with PixiJS, persistent state stored in LocalStorage, and a documentation-first development methodology driven by AI collaborators.

The architecture is divided into five major domains:

1. **Rendering** — PixiJS-based canvas rendering, camera, and visual layer
2. **Simulation** — Game logic, tick-based simulation, entity state
3. **Persistence** — Save/load, LocalStorage, JSON serialization
4. **UI** — React-based interface, HUD, menus, panels
5. **Documentation** — The specification layer that drives implementation

The architecture reflects the project's philosophy: the documentation is the source of truth, and the codebase implements the documentation.

---

# System Boundaries

```text
┌─────────────────────────────────────────────────────────┐
│                     Browser                              │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │          │  │          │  │          │  │         │ │
│  │  PixiJS  │  │  React   │  │  Game    │  │  Save   │ │
│  │  Render  │◄─┤  UI      │◄─┤  Engine  │──┤  System │ │
│  │          │  │          │  │          │  │         │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
│       ▲                          ▲            │        │
│       │                          │            ▼        │
│  ┌────┴─────┐              ┌─────┴──────┐  ┌─────────┐ │
│  │  Camera  │              │ Simulation │  │ Local   │ │
│  │  System  │              │  Systems   │  │ Storage │ │
│  └──────────┘              └────────────┘  └─────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

# Domain Responsibilities

## Rendering Domain

The rendering domain is responsible for all visual output.

- **PixiJS**: The primary rendering library. All game visuals — settlements, villagers, roads, resources, world map — are rendered to a PixiJS canvas.
- **Camera**: Manages viewport position, zoom, and panning. Camera state is part of session persistence.
- **Performance**: The rendering domain is responsible for frame rate, culling, and draw call optimization (see `Performance.md`).

## Simulation Domain

The simulation domain is responsible for all game logic and world state.

- **Tick-based simulation**: The world advances on a fixed timestep. Time does not pass while the game is closed (no offline progress).
- **Entity systems**: Villagers, heroes, resources, buildings, and colonies are all simulated entities.
- **System interactions**: Production chains, logistics, combat, seasons, research, and economy are simulation systems that operate on entities.
- **State ownership**: The simulation domain owns all mutable game state. The UI reads state; it does not mutate it directly.

## Persistence Domain

The persistence domain is responsible for saving and restoring game state.

- **LocalStorage**: The primary storage mechanism. All save data lives in the browser.
- **JSON serialization**: Save data is serialized to JSON for storage and export.
- **Save slots**: Multiple save slots are supported.
- **Versioning**: Save files carry a version number for forward compatibility.
- **Session persistence**: Camera position, zoom, selected building, open panels, expedition state, game speed, and world state are all restored on load.

See `Save System.md` for full specification.

## UI Domain

The UI domain is responsible for all user interface elements outside the game canvas.

- **React**: The UI framework for menus, HUD, panels, dialogs, and overlays.
- **State management**: UI reads from the simulation domain. User actions that affect game state are routed through the simulation domain.
- **Accessibility**: The UI domain is responsible for keyboard navigation, semantic HTML, ARIA, screen reader support, focus management, and color contrast (see the Accessibility Agent in `AI Development Workflow.md`).

## Documentation Domain

The documentation domain is the project's source of truth. It is not software — it is the specification that software implements.

- **Repository**: `docs/` directory with numbered sections (00–11).
- **Format**: Markdown with YAML front matter.
- **Authority**: Documentation overrides implementation. If they conflict, implementation is incorrect unless documentation is intentionally updated.

---

# Architectural Constraints

The following constraints are binding on all implementation. They are derived from approved design decisions and ADRs.

1. **Single-player only**. There is no server, no multiplayer, and no network synchronization.
2. **Browser-only**. The game runs in a web browser as a pure web application, for now. No native build or Electron wrapper is currently planned (see `00-foundation/Why.md`, Open Questions).
3. **No offline progress**. The simulation clock stops when the game is closed. Time does not advance in the background.
4. **No monetization**. The game contains no premium currency, battle passes, energy systems, daily rewards, or FOMO mechanics.
5. **LocalStorage persistence**. All save data is stored locally in the browser. No server-side storage.
6. **Documentation precedes implementation**. No feature is implemented before it is specified.
7. **AI collaborators have specialized roles**. No single AI is responsible for the entire development process. Responsibilities are intentionally separated (see `AI Development Workflow.md`).

---

# Dependency Direction

Dependencies flow in one direction: simulation → rendering, simulation → UI, simulation → persistence. The simulation domain depends on nothing in the rendering or UI domains. The UI and rendering domains read simulation state; they do not modify it.

```text
Documentation (specification)
       │
       ▼
Simulation (owns state)
       │
       ├──► Rendering (reads state, draws)
       ├──► UI (reads state, displays)
       └──► Persistence (reads/writes state)
```

---

# Design Goals

- **Separation of concerns**: Rendering, simulation, UI, and persistence are distinct domains with clear interfaces.
- **Testability**: The simulation domain must be testable without a rendering context.
- **Performance**: The rendering domain must maintain acceptable frame rates with hundreds of on-screen entities (exact targets: see `Performance.md`).
- **Persistence reliability**: Save data must survive browser close, crash, and LocalStorage eviction to the extent browser APIs allow.
- **Documentation alignment**: The architecture must be describable in terms of the documentation — every system in the codebase maps to a specification document.

---

# Non-Goals

- Server-side simulation or validation
- Real-time multiplayer synchronization
- Native mobile builds (browser on mobile is acceptable but not a primary target)
- Offline-first with service workers (beyond what LocalStorage provides)

---

# Open Questions

- TODO: Whether Electron or similar wrapper is desired for a desktop-like experience
  **Resolved**: Pure web for now — no Electron wrapper is currently planned (`00-foundation/Why.md`, Open Questions: "Target platform specifics beyond 'browser-based'... Answer: pure web for now"). May be revisited in the future.
- TODO: Specific module bundler, build tool, and dev server choices (Vite, Webpack, etc.)
- TODO: Entity-Component-System (ECS) architecture vs. object-oriented simulation — source material does not specify
- TODO: Whether the simulation tick rate is fixed, variable, or configurable
- TODO: Maximum world size and entity counts — needed for performance budgeting

---

# Related Documents

- `00-foundation/principles` (`Principles.md`) — the design pillars that constrain architecture
- `00-foundation/project-structure` (`Project Structure.md`) — repository layout
- `AI Development Workflow.md` — how AI collaborators participate in implementation
- `Technology Stack.md` — specific technology choices
- `Save System.md` — persistence specification
- `Performance.md` — performance targets and constraints
- `Data Models.md` — entity and data model specifications