---
title: "Seasons"
id: 03-simulation/seasons
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-06
depends_on:
  - "Settlement Growth.md"
used_by:
  - "Weather.md"
tags:
  - simulation
  - seasons
  - time
  - environment
---

# Purpose

Defines the seasonal cycle and its gameplay effects. Seasons are a simulation layer that modulates the game world, affecting both positive and negative aspects of kingdom management.

---

# Overview

Seasons affect gameplay, with both positive and negative effects. The source material provides three examples of seasonal effects: harvests (positive), winter hardships (negative), and exploration opportunities (contextual).

> **TODO:** Not confirmed by 00-foundation/01-vision — requires Creative Director confirmation. Neither the existence of a seasons system nor these specific effects are described in `00-foundation/` or `01-vision/`.

Seasons contribute to the feeling of a living world that changes over time, supporting the game's simulation-first philosophy.

---

# Design Goals

1. **Meaningful gameplay modulation.** Seasons should change what the player considers and prioritizes.
2. **Visual and atmospheric variation.** Seasonal changes should be visible in the world (though specific visual targets are not specified).
3. **Both opportunity and challenge.** Each season should bring benefits as well as constraints.
4. **Cozy complexity.** Seasonal effects should add depth without stress or punishment.

---

# Non-Goals

- Seasons are not a survival mechanic — the game is not a survival sim.
- Seasonal effects should not punish players for taking breaks.

---

# Seasonal Effects

### Known Effects (from source material)

| Effect | Type | Description |
|--------|------|-------------|
| Harvests | Positive | Agricultural yield increases during harvest season. |
| Winter hardships | Negative | Winter brings challenges that affect the settlement. |
| Exploration opportunities | Contextual | Certain seasons open or close exploration possibilities. |

### Implied Effects (inferred from known mechanics)

The source material implies, but does not specify, the following seasonal interactions:

- Agricultural production chains (see `docs/04-economy/`) are likely affected by seasons.
- Road and logistics efficiency may vary by season (winter impacts movement).
- TODO: Complete list of seasonal effects requires design specification.

---

# Season Cycle

The source material does not specify:

- How many seasons exist (traditional four? Custom cycle?)
- The duration of each season in real-time or game-time
- Whether the seasonal cycle is fixed or variable
- Whether there are special or rare seasonal events

---

# Seasonal Visuals

The source material does not specify visual targets for seasons. The game's art style is described as "cozy fantasy" and "frontier colony" — seasonal visuals should align with this aesthetic.

---

# Integration Points

- **Weather:** Seasons likely modulate weather patterns. See `Weather.md`.
- **Settlement Growth:** Seasonal effects may impact growth rate. See `Settlement Growth.md`.
- **Economy:** Agriculture and resource production are affected by seasons. See `docs/04-economy/`.
- **Exploration:** Seasonal opportunities for exploration. See `docs/02-gameplay/Exploration.md`.

---

# Open Questions

- [ ] How many seasons are there? What are they called?
- [ ] What is the duration of each season (in game-time and real-time)?
- [ ] What are the full gameplay effects of each season?
- [ ] How do seasons interact with each production chain?
- [ ] Are there seasonal visual changes (snow, autumn leaves, blooming)?
- [ ] Do different regions or colonies experience different seasons?
- [ ] Are there seasonal events or festivals?
- [x] How do seasons interact with the "time stops when closed" save model? — **Resolved:** Per `01-vision/Respect the Player's Time.md`, "time stops while the game is closed" and offline progress is intentionally not simulated. The seasonal cycle therefore does not advance while the game is closed; it resumes exactly where it left off when the player returns.
- [ ] Does game speed affect seasonal duration?

---

# Related Documents

- `Weather.md` — Weather patterns
- `Settlement Growth.md` — Settlement development
- `docs/02-gameplay/Exploration.md` — Seasonal exploration opportunities
- `docs/04-economy/` — Season-sensitive production chains
- `docs/01-vision/Design Pillars.md` — Living Simulation
- Source: *The Long Reign — Project Handoff* § Seasons
