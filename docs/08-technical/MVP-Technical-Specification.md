---
title: MVP Technical Specification
id: 08-technical/mvp-technical-specification
version: 0.1.0
status: Draft
author: Chief Engineer
last_updated: 2026-07-06
depends_on:
  - 08-technical/architecture
  - 08-technical/data-models
  - 02-gameplay/mvp
  - 02-gameplay/buildings
  - 02-gameplay/resources
used_by:
  - All implementation agents
  - Chief Engineer
tags:
  - technical
  - mvp
  - implementation
  - architecture
---

# Purpose

Define the technical architecture, data structures, and implementation plan for the Minimum Viable Product (MVP) of **The Long Reign**. This document translates the MVP game design specification into concrete engineering decisions.

---

# Overview

The MVP is a single-screen settlement builder. The player places a town hall, clears trees for wood, builds houses and structures, and upgrades their town hall. The entire experience fits in one browser window with no camera movement, one resource (wood), four building types, and simple villager AI (idle + walk-to-gather + gather animation).

---

# Tech Stack

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Language | TypeScript 5.x | Type safety for game state; matches existing Architecture.md expectation |
| Bundler | Vite 6.x | Fast dev server, HMR for React shell, simple TypeScript/PixiJS integration |
| Canvas | PixiJS 8.x | Per Architecture.md; lightweight 2D WebGL renderer |
| UI Shell | React 19.x | Per Architecture.md; toolbar, counter, upgrade prompt atop canvas |
| State Management | React context + useReducer | Simple enough for MVP; no Redux/Zustand overhead needed |
| Styling | CSS Modules | Scoped styles for toolbar/HUD; no framework dependency |
| Persistence | `localStorage` + JSON | Per Architecture.md; single save slot for MVP |
| Testing | Vitest + @pixi-essentials/testing | Unit tests for simulation logic; PixiJS rendering is minimally tested in MVP |
| Linting | ESLint + Prettier | Standard TypeScript tooling |

---

# Project Structure

```
the-long-reign/
├── docs/                          # (existing)
├── src/
│   ├── main.tsx                   # Entry point: mounts React + PixiJS
│   ├── game/
│   │   ├── Game.ts                # PixiJS Application wrapper, tick loop
│   │   ├── state/
│   │   │   ├── GameState.ts       # Central game state interface + reducer
│   │   │   ├── initialState.ts    # Seed data (grid, starting buildings, trees)
│   │   │   └── actions.ts         # State action types (GATHER, BUILD, UPGRADE, etc.)
│   │   ├── systems/
│   │   │   ├── gatherSystem.ts    # Tree click → villager assignment → wood
│   │   │   ├── buildSystem.ts     # Validate → deduct wood → place building
│   │   │   ├── upgradeSystem.ts   # Validate → deduct → increase tier
│   │   │   ├── foresterSystem.ts  # Timer → spawn tree on empty tile
│   │   │   └── villagerSystem.ts  # Idle wander, walk-to-target, state machine
│   │   ├── entities/
│   │   │   ├── grid.ts            # Grid/tile data types
│   │   │   ├── building.ts        # Building definitions, costs, tier data
│   │   │   ├── villager.ts        # Villager state, animation states
│   │   │   └── tree.ts            # Tree/gather node data
│   │   └── render/
│   │       ├── GridRenderer.ts    # Draw grid tiles
│   │       ├── BuildingRenderer.ts # Draw buildings at grid positions
│   │       ├── VillagerRenderer.ts # Draw + animate villagers
│   │       ├── TreeRenderer.ts    # Draw trees + saplings
│   │       └── StockpileRenderer.ts # Draw stockpile with fill level
│   ├── ui/
│   │   ├── App.tsx                # React root: HUD overlay on canvas container
│   │   ├── components/
│   │   │   ├── WoodCounter.tsx    # Top-bar wood display
│   │   │   ├── Toolbar.tsx        # Bottom bar: building type buttons
│   │   │   ├── UpgradePrompt.tsx  # Contextual upgrade button (town hall)
│   │   │   └── GridOverlay.tsx    # Visual grid placement preview
│   │   └── hooks/
│   │       └── useGameState.ts    # Bridge between PixiJS game state and React
│   ├── save/
│   │   └── saveManager.ts         # Load/save to localStorage
│   └── utils/
│       ├── pathfinding.ts         # Simple A* on 30×20 grid
│       └── random.ts              # Seeded random for visual pool selection
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

---

# Core Data Structures

## Grid

```typescript
type TileType = 'empty' | 'tree' | 'sapling' | 'building' | 'stockpile';

interface GridTile {
  x: number;          // 0–29
  y: number;          // 0–19
  type: TileType;
  occupiedBy: string | null;  // Entity ID if occupied
  walkable: boolean;          // false for buildings, true for empty/tree
}

type Grid = GridTile[][];  // 30 columns × 20 rows
```

## Buildings

```typescript
interface Building {
  id: string;
  type: 'townHall' | 'house' | 'stockpile' | 'forester';
  tier: number;              // 1–6 for townHall; 1–2 for house; 1 for others
  visualVariant: number;     // 0–2 (index into visual pool)
  x: number;
  y: number;
}

interface BuildingDefinition {
  type: Building['type'];
  label: string;
  tiers: number;                           // Max tier (1 = no upgrades)
  baseCost: number;                        // Wood cost to place (tier 1)
  upgradeCost: { [tier: number]: number }; // Cost to upgrade to next tier
  unlocksAtTownHallTier: number;           // Town hall tier required to build
}
```

## Villager

```typescript
interface Villager {
  id: string;
  x: number;           // Current grid pixel position (sub-tile)
  y: number;
  state: 'idle' | 'walking' | 'gathering';
  targetX: number;     // Grid position they're walking to (if walking)
  targetY: number;
  path: [number, number][];  // Remaining path nodes
  animationTimer: number;    // Remaining gather animation frames
}
```

## Game State

```typescript
interface GameState {
  grid: Grid;
  buildings: Building[];
  villagers: Villager[];
  wood: number;              // Current wood in stockpile
  stockpileCapacity: number; // Max wood (50)
  townHallTier: number;      // Current tier (1–6)
  houseCount: number;        // Current houses built
  houseCap: number;          // Max houses allowed at current tier
  foresterTimer: number;     // Countdown for next tree spawn
  isPlacing: boolean;        // Is player in build-placement mode?
  selectedBuildingType: Building['type'] | null;
  gameTime: number;          // Total ticks elapsed
}
```

---

# State Reducer

All game mutations flow through a single reducer (pure function). The PixiJS tick loop dispatches time-based actions (forester timer, villager movement). User interactions dispatch player actions.

## Actions

| Action | Trigger | Effect |
|--------|---------|--------|
| `INIT_GAME` | Page load / new game | Sets up starting grid, places initial villagers |
| `START_PLACING(type)` | Toolbar click | Enters placement mode with chosen building type |
| `PLACE_BUILDING(x, y)` | Grid click in placement mode | Validates tile, deducts wood, places building, exits placement mode |
| `UPGRADE_BUILDING(id)` | Upgrade button click | Validates tier+wood, deducts cost, increments tier, selects random visual variant |
| `GATHER(x, y)` | Tree click | Assigns nearest idle villager to walk to tree |
| `SELECT_BUILDING(id)` | Building click | Shows contextual action (upgrade if applicable) |
| `TICK` | Each simulation frame | Advances forester timer, moves walking villagers, completes gathering animations |
| `SAVE` | Auto every 30s / manual | Serializes state to localStorage |
| `LOAD` | Page load if save exists | Deserializes and restores state |

---

# Villager AI State Machine

```
                  ┌──────────────┐
    click tree    │              │  wander timer
   ┌─────────────►│   IDLE       │◄──────────────┐
   │              │              │               │
   │              └──────┬───────┘               │
   │                     │ assigned to gather    │
   │                     ▼                       │
   │              ┌──────────────┐               │
   │              │              │ path complete │
   │              │   WALKING    ├───────────────┘
   │              │              │
   │              └──────┬───────┘
   │                     │
   │                     ▼
   │              ┌──────────────┐
   │              │              │ anim complete →
   │              │  GATHERING   │ wood added, idle
   │              │              │ at current pos
   │              └──────────────┘
   │
   └── (no walk-back)
```

- **Idle:** Villager stands in place or plays a subtle idle animation (shifts weight, looks around).
- **Walking:** Follows A*-computed path on the grid, one tile per N ticks.
- **Gathering:** Plays gathering animation for a fixed duration (e.g., 60 ticks at 60fps = 1 second). On completion: wood += 3, tree removed from grid, villager returns to idle.
- **Pathfinding:** Grid-based A* with 4-directional movement. Buildings are non-walkable. Trees and empty tiles are walkable. Path recalculated if target becomes unreachable (edge case for MVP: log a warning, return villager to idle).

---

# Rendering Architecture

```
Page (index.html)
  │
  ├── <div id="game-container">      // PixiJS canvas fills this div
  │     └── PixiJS Application
  │           ├── GridRenderer        // Tiles, colors
  │           ├── TreeRenderer        // Trees, saplings, removal
  │           ├── BuildingRenderer    // Town hall, houses, stockpile, forester
  │           ├── VillagerRenderer    // Sprite per villager
  │           └── StockpileRenderer   // Fill level indicator
  │
  └── <div id="ui-overlay">          // Absolute positioned over canvas
        └── React App
              ├── WoodCounter         // Top bar
              ├── Toolbar             // Bottom bar
              └── UpgradePrompt       // Contextual, appears on building select
```

**Layering order (bottom to top):**
1. Grid tiles (ground)
2. Trees + saplings
3. Buildings
4. Villagers
5. Stockpile fill indicator (on top of stockpile building)
6. Grid placement preview overlay (React, not canvas)

**PixiJS render loop:** Reads from read-only snapshot of game state each frame. No PixiJS-side mutation — all state changes flow through the reducer.

---

# Save / Load

**Format:** JSON serialization of `GameState` interface.

**Trigger:**
- Auto-save every 30 seconds
- Manual save not exposed in MVP (auto-save is sufficient for single-slot)
- On `beforeunload` event

**On load:**
- Check `localStorage.getItem('tlr-save')`
- If exists: deserialize → validate version → restore state
- If absent or corrupt: start new game with `initialState`

**Versioning:**
- Save format carries `version: 1` in the serialized blob
- Future versions can migrate forward; MVP only knows version 1

---

# Implementation Order

This order minimises blocked dependencies — each milestone is testable independently.

| Milestone | What ships | Depends on |
|-----------|------------|------------|
| **M1: Scaffold** | Vite + TypeScript + PixiJS + React setup. Empty canvas with React shell overlay. | Nothing |
| **M2: Grid** | 30×20 grid rendered. Click a tile → React reads tile data. | M1 |
| **M3: Trees** | Trees placed on grid. Click a tree → tree selected event. | M2 |
| **M4: Villagers** | Villager sprites on grid. Idle animation. Basic A* pathfinding on walkable tiles. | M2 |
| **M5: Gathering** | Click tree → nearest villager walks → animation → wood +3 → tree removed. | M3, M4 |
| **M6: Building placement** | Toolbar → select building → click tile → validate → place. House cap enforcement. | M2, M5 |
| **M7: Town hall + upgrades** | Place town hall. Upgrade prompt. Tier progression. House cap scales with tier. Visual variant selection. | M6 |
| **M8: Stockpile** | Build stockpile. Wood counter capped at capacity. Visual fill level. | M6 |
| **M9: Forester's hut** | Build forester. Timer → sapling → tree. | M6, M3 |
| **M10: Save/load** | Auto-save every 30s. Load on page start. | M7 |
| **M11: Polish** | House T2 visual pool (3 variants). Stockpile visual fill. Build preview overlay. | M8, M7 |

---

# Performance Budget (MVP)

| Metric | Target |
|--------|--------|
| Frame rate | 60 fps on modern browsers |
| Max draw calls | < 100 (MVP has few entities) |
| Save size | < 50 KB serialized |
| Load time | < 2s on first load |
| Max villagers | 10 (fixed for MVP — enough to have gathering anims visible) |

---

# Edge Cases

| Case | Behaviour |
|------|-----------|
| All villagers already gathering | New gather click is ignored. Villager returns to idle first. |
| Stockpile full | Wood from gathering is silently discarded. No notification in MVP. |
| No valid path to tree | Villager remains idle. Gather action fails silently. |
| Forester hut: no empty tiles nearby | Timer continues; spawn is skipped if no valid empty tile in radius. |
| All trees cleared + no forester | Player can still build if they have wood. No softlock. |
| Browser close mid-animation | State saved every 30s. Interrupted gather is lost — tree and wood are unchanged. |
| Attempt to build while tree on tile | Invalid tile indicator (visual rejection). |
| Attempt to build beyond house cap | Building is greyed out in toolbar. |

---

# Open Questions

- None at the technical specification level for the MVP. All major decisions are resolved above.

---

# Related Documents

- `02-gameplay/MVP.md` — game design specification this implements
- `02-gameplay/Buildings.md` — building types, costs, tiers
- `02-gameplay/Resources.md` — gathering mechanics
- `08-technical/Architecture.md` — overall architecture this fits within
- `08-technical/Data Models.md` — full entity data model (this spec scopes down)
