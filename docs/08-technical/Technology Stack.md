---
title: Technology Stack
id: technical/technology-stack

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/why
  - technical/architecture

used_by:
  - Chief Engineer
  - Build Agent
  - Frontend Agent
  - Rendering Agent
  - All subagents

tags:
  - technical
  - stack
  - tools
  - frameworks
  - dependencies
---

# Purpose

This document defines the technology stack for **The Long Reign** — the languages, frameworks, libraries, and tools used to build the game.

Every technology choice is documented here. When multiple options exist, the rationale for the chosen technology is included. This document is the single source of truth for what the project uses.

---

# Overview

The Long Reign is a browser-based game. The technology stack is web-native: JavaScript/TypeScript for game logic, PixiJS for rendering, React for UI, and browser LocalStorage for persistence. The project is specification-first, using Markdown and YAML for documentation, managed through Obsidian and a git repository.

---

# Core Technologies

## Language

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| Primary language | JavaScript or TypeScript | **TODO** | Source material does not specify. TypeScript is strongly recommended for a project of this complexity, but the decision is not yet documented. |
| HTML/CSS | Required for UI layer | Confirmed | Browser-based game requires HTML/CSS. |

**Rationale**: The game runs in a browser. JavaScript/TypeScript is the only practical choice for browser-based game logic. The choice between JavaScript and TypeScript is an open question.

---

## Rendering

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| Rendering engine | PixiJS | **Confirmed** | Specified in Handoff document. Version not specified. |
| Render mode | WebGL (primary) | **Implied** | PixiJS defaults to WebGL with Canvas2D fallback. The source material does not specify whether Canvas2D must be supported. |

**Rationale**: PixiJS is a well-established 2D rendering library for browser games. It provides WebGL rendering with Canvas2D fallback, a scene graph, sprite management, and camera utilities. It is well-suited to a grid-based kingdom-building simulation.

---

## UI Framework

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| UI framework | React | **Confirmed** | Specified in Workflow v2 (Frontend Agent responsibilities include React). Version not specified. |

**Rationale**: React is specified in the AI workflow as the responsibility of the Frontend Agent. It provides a component-based architecture for menus, HUD, panels, and overlays.

---

## State Management

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| State management | TBD | **TODO** | Source material does not specify. Options include React Context, Redux, Zustand, Jotai, or a custom event-driven system. |

---

## Persistence

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| Storage | `window.localStorage` | **Confirmed** | Specified in Handoff document. |
| Serialization format | JSON | **Confirmed** | Specified in Handoff document. |

---

## Build and Development Tools

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| Module bundler | TBD | **TODO** | Source material does not specify. Options: Vite, Webpack, Parcel, esbuild. |
| Package manager | TBD | **TODO** | Source material does not specify. Options: npm, yarn, pnpm. |
| Dev server | TBD | **TODO** | Usually comes with the bundler. |
| Linter | TBD | **TODO** | Source material does not specify. |
| Formatter | TBD | **TODO** | Source material does not specify. |
| Type checker | TypeScript compiler (if using TS) | **Conditional** | Depends on TypeScript decision. |

---

## Testing

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| Test framework | TBD | **TODO** | Source material does not specify. |
| Test runner | TBD | **TODO** | Source material does not specify. |
| Assertion library | TBD | **TODO** | Source material does not specify. |

---

## CI/CD

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| CI/CD platform | TBD | **TODO** | Source material does not specify. |
| Build automation | TBD | **TODO** | Source material does not specify. |

---

## Documentation

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| Format | Markdown | **Confirmed** | Specified in Project Genesis and Handoff. |
| Metadata | YAML front matter | **Confirmed** | Specified in Handoff. |
| Knowledge management | Obsidian | **Confirmed** | Specified in Project Genesis. |
| Version control | git | **Implied** | Repository structure implies git. |

---

## Project Management

| Technology | Choice | Status | Notes |
|------------|--------|--------|-------|
| Repository host | TBD | **TODO** | Source material does not specify (GitHub, GitLab, etc.). |
| Issue tracker | TBD | **TODO** | Source material does not specify. |
| Project board | TBD | **TODO** | Source material does not specify. |

---

# Technology Stack Diagram

```text
┌───────────────────────────────────────────────┐
│                  Browser                       │
│                                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐ │
│  │  PixiJS  │  │  React   │  │  LocalStorage │ │
│  │ (WebGL)  │  │  (UI)    │  │  (Persistence)│ │
│  └──────────┘  └──────────┘  └──────────────┘ │
│       │              │              │          │
│  ┌────┴──────────────┴──────────────┴───────┐  │
│  │        JavaScript / TypeScript           │  │
│  │        (Game Logic, Simulation)          │  │
│  └──────────────────────────────────────────┘  │
│                                                │
└────────────────────────────────────────────────┘
         │
         ▼
┌───────────────────────────────────────────────┐
│               Development Tools                │
│                                                │
│  Bundler  │  Linter  │  Formatter  │  Tests   │
│  (TBD)    │  (TBD)   │  (TBD)      │  (TBD)   │
│                                                │
└────────────────────────────────────────────────┘
         │
         ▼
┌───────────────────────────────────────────────┐
│               Documentation                    │
│                                                │
│  Markdown  │  YAML  │  Obsidian  │  git       │
│                                                │
└────────────────────────────────────────────────┘
```

---

# Design Goals

- **Browser-native**: Every technology choice runs in a standard web browser without plugins or extensions.
- **Simplicity**: Prefer well-established, widely-used libraries over niche or experimental ones.
- **Documentation alignment**: The technology stack supports the documentation-first workflow (Markdown, YAML, Obsidian, git).
- **Performance**: PixiJS WebGL rendering meets the performance targets (see `Performance.md`).

---

# Non-Goals

- Native mobile apps (React Native, etc.)
- Desktop builds (Electron, etc. — not ruled out, but not a current goal)
- Server-side rendering or computation
- WebAssembly (not in source material; may be considered for performance-critical simulation code)
- Third-party game engines (Unity, Godot, etc. — the project is intentionally browser-native)

---

# Technology Constraints

The following constraints are binding on technology choices:

1. **Single-player only**: No server required. No multiplayer networking libraries.
2. **No backend**: All logic runs in the browser. No Node.js server, no database, no API.
3. **LocalStorage only**: No IndexedDB, no WebSQL, no server-side storage (unless LocalStorage proves insufficient; see Open Questions).
4. **No monetization SDKs**: No ads, no analytics, no payment processing.
5. **Open web standards**: No proprietary browser plugins or extensions.

---

# Open Questions

- TODO: JavaScript vs. TypeScript — the single most impactful technology decision. TypeScript is recommended for type safety, refactoring support, and AI collaboration, but the decision needs human approval.
- TODO: PixiJS version (v7, v8, etc.)
- TODO: React version (18, 19, etc.)
- TODO: Module bundler (Vite is recommended for its speed and simplicity, but needs confirmation)
- TODO: State management approach for React
- TODO: Testing framework (Jest, Vitest, Playwright for E2E, etc.)
- TODO: CI/CD platform (GitHub Actions, GitLab CI, etc.)
- TODO: Repository host (GitHub, GitLab, etc.)
- TODO: Package manager (npm, yarn, pnpm)
- TODO: Whether IndexedDB should be considered as a fallback or alternative to LocalStorage for larger saves
- TODO: Target browser versions (Chrome, Firefox, Safari, Edge — minimum versions)
- TODO: Whether to use a game-specific ECS library or build ECS from scratch (if ECS architecture is chosen)

---

# Related Documents

- `Architecture.md` — how these technologies are organized into domains
- `Performance.md` — performance targets that constrain technology choices
- `Save System.md` — LocalStorage and JSON serialization requirements
- `Coding Standards.md` — coding conventions for the chosen technologies
- `AI Development Workflow.md` — AI roles that interact with each technology
- `foundation/why` (`Why.md`) — the project's identity as a browser-based game