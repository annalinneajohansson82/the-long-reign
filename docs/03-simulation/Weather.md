---
title: "Weather"
id: 03-simulation/weather
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-06
depends_on:
  - "Seasons.md"
used_by: []
tags:
  - simulation
  - weather
  - environment
  - atmosphere
---

# Purpose

Defines the weather system and its gameplay effects. Weather contributes to the atmosphere of a living world and may affect gameplay systems.

---

# Overview

The source material does not explicitly detail a weather system. Weather is mentioned only implicitly through the seasons system (which references "winter hardships"). Weather is expected to interact with seasons and contribute to the game's atmosphere and simulation depth.

This document serves as a placeholder. Specific weather mechanics must be developed through the RFC process before being added to the Game Design Specification.

---

# Design Goals

The following goals are inferred from the project's broader design principles:

1. **Atmosphere over complexity.** Weather should enhance the mood of the kingdom without adding stressful micromanagement.
2. **Visible effects.** Weather should be visually observable in the world.
3. **Seasonal coherence.** Weather patterns should align with and be modulated by the seasonal cycle.
4. **Cozy complexity.** Depth through interaction, not punishment.

---

# Non-Goals

- Weather is not a survival mechanic.
- Weather should not punish players for taking breaks (consistent with "Respect the Player's Time").
- Weather is not expected to be a highly detailed meteorological simulation.

---

# Potential Weather Effects

The following are potential areas where weather could interact with existing systems. These are NOT confirmed design decisions — they are identified as areas for future RFC exploration.

| System | Potential Interaction |
|--------|----------------------|
| Agriculture | Rain improves crop yield; drought reduces it. |
| Roads and Logistics | Snow or storms slow movement and logistics throughput. |
| Villagers | Weather affects villager behavior (staying indoors during storms). |
| Settlements | Visual weather adds atmosphere and sense of a living world. |
| Exploration | Storms or fog may limit exploration range or visibility. |

---

# Weather Types

Not yet specified. Candidates for future design consideration:

- Clear
- Rain
- Snow
- Storm
- Fog
- Drought (as a seasonal/weather condition)

---

# Integration Points

- **Seasons:** Weather is modulated by the seasonal cycle. See `Seasons.md`.
- **Roads and Logistics:** Weather may affect movement and logistics efficiency. See `Roads and Logistics.md`.
- **Settlement Growth:** Weather may affect growth rate. See `Settlement Growth.md`.
- **Economy:** Agriculture and outdoor production may be weather-dependent. See `docs/04-economy/`.
- **Exploration:** Weather may limit or enable exploration. See `docs/02-gameplay/Exploration.md`.

---

# Open Questions

- [ ] What weather types exist in the game?
- [ ] How is weather determined? (Random? Seasonal? Regional?)
- [ ] What are the quantitative gameplay effects of each weather type?
- [ ] How is weather visually represented? (Particles? Screen effects? Lighting changes?)
- [ ] Does weather vary by region or biome?
- [ ] Is there a weather forecast or prediction system?
- [x] How does weather interact with the "time stops when closed" save model? — **Resolved:** Per `01-vision/Respect the Player's Time.md`, "time stops while the game is closed" and offline progress is intentionally not simulated. Weather therefore does not advance while the game is closed.
- [ ] Are there extreme weather events (storms, blizzards) that trigger Chronicle entries?
- [ ] Does weather affect hero expeditions?

---

# Related Documents

- `Seasons.md` — Seasonal cycle
- `Roads and Logistics.md` — Weather impact on logistics
- `Settlement Growth.md` — Weather impact on growth
- `docs/02-gameplay/Exploration.md` — Weather impact on exploration
- `docs/04-economy/` — Weather impact on production
- `docs/01-vision/Design Pillars.md` — Living Simulation
- Source: *The Long Reign — Project Handoff* § Seasons (implicit reference to winter)
