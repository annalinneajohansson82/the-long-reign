---
title: Performance
id: technical/performance

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/principles
  - technical/architecture

used_by:
  - Rendering Agent
  - Chief Engineer
  - Code Review Agent
  - Testing Agent

tags:
  - technical
  - performance
  - rendering
  - optimization
  - budget
---

# Purpose

This document defines the performance requirements, targets, and constraints for **The Long Reign**. Performance is a first-class concern — the game must run smoothly in a browser environment while simulating hundreds of entities and rendering settlements, roads, resources, and characters.

---

# Overview

The Long Reign is a browser-based game rendering with PixiJS. It must maintain acceptable performance on consumer hardware in a web browser. The performance targets cover frame rate, simulation tick rate, memory usage, and load/save times.

Performance is reviewed by the Code Review Agent as part of the review pipeline (see `AI Development Workflow.md`). Any implementation that introduces a performance regression must be flagged before merge.

---

# Performance Targets

## Frame Rate

| Target | Value | Condition |
|--------|-------|-----------|
| Target FPS | 60 FPS | On modern hardware (dedicated GPU, recent browser) |
| Minimum FPS | 30 FPS | On integrated graphics / older hardware |
| Frame time budget | ~16.6 ms | At 60 FPS target |

**Notes**:
- The exact target hardware profile is not specified in source material. See Open Questions.
- Frame rate should remain stable during normal gameplay. Minor dips during autosave or large world loads are acceptable.

---

## Simulation Tick Rate

| Target | Value | Condition |
|--------|-------|-----------|
| Tick rate | TBD | Source material does not specify |

**Notes**:
- The simulation is tick-based. The tick rate determines how often the world advances.
- Simulation ticks may run at a different rate than the render loop.
- Simulation must not block rendering (they should run on separate scheduling if possible).

---

## Memory

| Target | Value | Condition |
|--------|-------|-----------|
| Max memory | TBD | Source material does not specify |

**Notes**:
- Memory usage grows with world size (number of entities, buildings, villagers, etc.).
- Save data must fit within LocalStorage limits (typically 5–10 MB compressed).
- The game should not leak memory over long play sessions.

---

## Save and Load

| Target | Value | Condition |
|--------|-------|-----------|
| Save time | < 500 ms | Serialization and LocalStorage write |
| Load time | < 2 seconds | Deserialization and world initialization |
| Autosave impact | No visible frame drop | Must not interrupt gameplay |

---

## Rendering

| Target | Value | Condition |
|--------|-------|-----------|
| On-screen entities | 100+ without frame drops | Typical kingdom view with buildings, villagers, resources |
| Camera pan | Smooth | No stutter during camera movement |
| Zoom | Smooth | Continuous zoom, no pop-in |

---

# Performance Optimization Principles

The following principles guide performance work. They are derived from the project's design philosophy.

1. **Measure before optimizing**. No optimization without profiling data.
2. **Visible impact first**. Optimize what the player can see and feel — frame rate, input lag, load times — before optimizing internal systems.
3. **Simulation over rendering** (when forced to choose). If a trade-off exists between simulation depth and rendering performance, preserve simulation depth. The kingdom feeling alive (North Star) matters more than 60 FPS at all times.
4. **Respect the player's hardware**. The game should run on a range of hardware. Do not assume a high-end gaming PC.
5. **No premature optimization**. Build correct behavior first, then profile, then optimize.

---

# Performance Review Checklist

The Code Review Agent checks for the following when reviewing implementations:

- Frame rate drops (measured or estimated)
- Memory leaks (object retention, event listener accumulation)
- Unnecessary allocations per frame (garbage collection pressure)
- Draw call count (excessive PixiJS draw calls)
- Entity culling (rendering off-screen entities)
- Expensive operations in hot paths (simulation tick, render loop)
- Synchronous LocalStorage writes on the main thread
- Large JSON serialization blocking the event loop

---

# Design Goals

- **Smooth gameplay**: The game should feel responsive at all times.
- **Scalability**: Performance should degrade gracefully as the kingdom grows.
- **Measurability**: Performance targets are specific enough to be tested.
- **Browser-first**: Targets reflect browser constraints (JavaScript, single-threaded, garbage-collected).

---

# Non-Goals

- Native-level performance (browser JavaScript has inherent overhead)
- 120+ FPS support (beyond 60 FPS is unnecessary for a kingdom-building simulation)
- Server-side rendering or computation
- WebAssembly (not in source material; may be considered in the future)

---

# Open Questions

- TODO: Exact target hardware profile (minimum GPU, CPU, RAM, browser versions)
- TODO: Simulation tick rate (once per frame? fixed timestep independent of frame rate?)
- TODO: Memory budget (maximum MB for game state)
- TODO: Maximum world size (how many tiles, entities, buildings, villagers before performance degrades)
- TODO: Whether Web Workers are considered for offloading simulation or serialization
- TODO: PixiJS render mode (WebGL vs. Canvas2D fallback) and minimum WebGL version
- TODO: Target for mobile browsers (the game is browser-based but mobile is not a primary target per source material)
- TODO: Entity culling strategy (viewport-based? spatial hashing? quadtree?)

---

# Related Documents

- `Architecture.md` — system boundaries (rendering, simulation, persistence)
- `Technology Stack.md` — PixiJS version, build tooling
- `Save System.md` — save/load performance constraints
- `Data Models.md` — entity counts and relationships that affect memory and serialization
- `AI Development Workflow.md` — Code Review Agent performance checks