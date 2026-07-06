---
title: Minimum Viable Product (MVP) Scope
id: 02-gameplay/mvp
version: 0.1.0
status: Draft
author: Lead Systems Designer
last_updated: 2026-07-06
depends_on:
  - 00-foundation/why
  - 00-foundation/principles
  - 01-vision/vision-statement
  - 01-vision/core-gameplay-loop
  - 02-gameplay/buildings
  - 02-gameplay/resources
used_by:
  - 08-technical/mvp-technical-specification
  - All implementation agents
tags:
  - gameplay
  - mvp
  - scope
  - core-loop
---

# Purpose

Define the scope boundary for the Minimum Viable Product (MVP) of The Long Reign. The MVP exists to validate the emotional hook — "I want to keep building" — through the minimum possible feature set.

Everything in this document is a hard scope boundary for the MVP. Features listed as post-MVP are explicitly deferred.

---

# Overview

The MVP is a single-screen settlement builder on a fixed grid. The player places a town hall, clears trees for wood, builds houses and a stockpile, and upgrades their town hall. The loop is simple: Gather wood → Build structures → Repeat — each cycle producing visible growth.

The MVP has no endpoint. The test is whether this loop feels satisfying to repeat for 20–30 minutes.

---

# MVP Core Loop

```
Clear Tree (click) → Villager Gathers → Wood Added to Stockpile
    ↓
Build/Upgrade (toolbar click → grid place)
    ↓
See Settlement Grow
    ↓
Repeat
```

- **Gather:** Player clicks a tree. Nearest idle villager walks to it, plays a gathering animation, and the wood is added to the stockpile. Villager does not walk back — they idle at the node.
- **Expand:** Player uses the bottom toolbar to select a building type, then clicks a valid grid tile to place it. Buildings that cost wood grey out when unaffordable.
- **Unlock:** Upgrading the town hall increases the house cap and makes higher tier buildings available.

The full game loop (Explore → Gather → Return → Expand → Unlock → Repeat) is truncated to **Gather → Expand** for the MVP. Exploration, heroes, combat, and world map are deferred.

---

# Scope Boundaries

## In Scope (MVP)

- Fixed 30×20 grid, one screen, no camera panning or zoom
- Click-to-place buildings on the grid (single tile, no drag)
- Gather nodes (trees) that are cleared when harvested, freeing tiles for construction
- A single resource: wood (3 wood per tree, no other resources)
- Stockpile with capacity (initial: 50 wood)
- Town hall: player-placed first action, 6 upgrade tiers, escalating costs
- Houses: 2 visual tiers, buildable up to a cap (increases with town hall tier)
- Forester's hut: auto-plants new trees passively (no villager assigned)
- Villagers: idle wander + walk-to-gather + gather animation. No lifecycle, professions, families, or visible needs.
- Bottom toolbar: building type selection, contextual upgrade prompt on town hall
- Wood counter (top bar, always visible)
- Gather node exhaustion: trees disappear when harvested, tile becomes buildable
- Save/load via LocalStorage

## Out of Scope (Post-MVP)

- Exploration, world map, regions, colonies
- Multiple resource types, production chains, trade
- Carts, visible logistics, physical resource movement
- Villager lifecycle (birth, marriage, death, education, retirement)
- Professions and job assignment
- Heroes, hero abilities, hero progression
- Combat of any kind
- Chronicle, Living Memories
- Districts, road paving, desire paths
- Decorations and their effects
- Research tree
- Seasons, weather, time systems
- Camera panning, zoom, scrolling
- Multiple save slots, save export/import
- Animations beyond walking, gathering, and idle

---

# Accepted Decisions

| Decision | Agreed |
|---|---|
| Emotional hook | "I want to keep building" |
| MVP loop | Gather → Expand |
| Gathering | Click tree → villager → gather → wood added |
| Villager return | Idle at node, no walk-back |
| Resource | Single: wood (3 per tree) |
| Grid | 30×20 fixed, no camera |
| Starting state | ~25 trees, 5 starting wood, no tree respawn |
| Buildings | Town hall, house (T1/T2), stockpile, forester's hut |
| Town hall | Free to place. 6 tiers. Caps houses. Escalating wood costs |
| House tiers | 2 tiers. T2 adds randomized visual extras from pool of 3 variants |
| Forester's hut | Costs 20 wood. Auto-plants trees nearby on timer. No upgrades |
| Stockpile | Costs 5 wood. Capacity: 50 wood. |
| House cap scaling | T1: 2, T2: 4, T3: 6, T4: 10, T5: 15, T6: 25 |
| UI | Wood counter (top), build toolbar (bottom), contextual upgrade |
| Villagers | Idle + walk-to-gather + gather anim only |
| Tech stack | PixiJS (canvas) + React (HUD) |
| Endpoint | None — sandbox |
| Validation | Loop feels satisfying after 20–30 minutes |

---

# Post-MVP Roadmap

These features are explicitly deferred from the MVP but scoped for future consideration:

1. **Production chains** — lumber yard producing planks from wood, plank costs for T2 houses
2. **Professions** — lumberjack assigned to forester's hut, other professions
3. **Multiple resources** — stone, food, planks, etc.
4. **Visible logistics** — carts, physical movement between buildings
5. **Exploration** — heroes sent to discover new regions and resources
6. **Villager lifecycle** — marriage, children, aging, death, education
7. **Colonies** — secondary settlements with emergent specialization

---

# Open Questions

- None at this scope boundary. All decisions resolved for the MVP.

---

# Related Documents

- `02-gameplay/buildings` — building types, costs, tiers, visual pool
- `02-gameplay/resources` — resource and gathering mechanics
- `08-technical/mvp-technical-specification` — implementation specification
- `08-technical/architecture` — overall technical architecture
- `08-technical/data-models` — entity data models
- `00-foundation/glossary` — shared vocabulary
- `00-foundation/principles` — design pillars
