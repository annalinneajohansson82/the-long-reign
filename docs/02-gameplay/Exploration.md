---
title: Exploration
id: gameplay/exploration
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on: []
used_by:
  - 02-gameplay/Resources.md
  - 02-gameplay/Combat.md
  - 02-gameplay/Progression.md
  - 05-world/World Overview.md
  - 05-world/Regions.md
tags:
  - gameplay
  - exploration
  - world
---

# Purpose

Define the exploration system — how the player discovers the world, what they find, and how exploration feeds into settlement growth.

---

# Overview

Exploration exists primarily to support settlement growth. The player ventures into a large handcrafted world, discovers regions, gathers resources, recruits heroes, and unlocks new opportunities for their kingdom. Exploration is the first step in the core gameplay loop: **Explore → Gather Resources → Return Home → Expand Settlement → Unlock New Opportunities → Repeat**.

The world is handcrafted, not procedurally generated. It features a world map with unlockable regions, including islands. Regions contain unique resources, recruitable heroes, new buildings, opportunities, and dangers.

---

# Design Goals

- **Settlement-Focused.** Exploration exists to support settlement growth, not as an independent gameplay pillar.
- **Discovery-Driven.** Unlocking new regions should feel rewarding — each region offers something the player could not access before.
- **Handcrafted World.** The world is designed, not generated, supporting meaningful placement of content.
- **Cozy Complexity.** Exploration should feel adventurous, not stressful.

---

# Non-Goals

- The world is not procedurally generated.
- Exploration is not a combat-focused loop.
- This document does not define specific region layouts, resource placements, or encounter tables.

---

# The World Map

- **Large handcrafted world.**
- **World map with unlockable regions.** Regions are gated — the player cannot access all areas immediately.
- **Includes islands.** The world features maritime regions accessible through some unlock mechanic.

> **TODO:** Define the world map UI, region unlocking mechanics (quests, resources, combat, exploration milestones?), and how islands are reached.

---

# Region Contents

Each region may contain:

| Content Type | Description |
|---|---|
| **Unique Resources** | Resources not available in the starting area or other regions. |
| **Recruitable Heroes** | Named heroes that can be recruited to join the kingdom. |
| **New Buildings** | Building types or upgrades unlocked by discovering specific locations. |
| **Opportunities** | Events, quests, or interactions that provide unique benefits. |
| **Dangers** | Combat encounters, environmental hazards, or other threats. |

> **TODO:** Define the specific contents of each region. Determine whether regions have fixed contents or if some elements are randomized within categories.

---

# Exploration and the Core Loop

Exploration feeds the core gameplay loop:

1. **Explore.** The player sends heroes (and possibly other units) into the world.
2. **Gather Resources.** Discovered resource nodes are harvested.
3. **Return Home.** The expedition returns to the capital or a colony.
4. **Expand Settlement.** Gathered resources enable building, upgrading, and crafting.
5. **Unlock New Opportunities.** Discoveries unlock new regions, buildings, research options, and more.
6. **Repeat.**

> **TODO:** Define expedition mechanics — how many heroes can go, how long expeditions last, whether there are party composition requirements, and what happens when an expedition returns.

---

# Season Effects on Exploration

Seasons affect exploration. The source material lists "exploration opportunities" as a seasonal effect.

> **TODO:** Define how seasons affect exploration — are some regions only accessible in certain seasons? Do seasons change resource availability or danger levels?

---

# Acceptance Criteria

- [ ] A world map exists with multiple unlockable regions.
- [ ] Regions contain at least: unique resources, recruitable heroes, and dangers.
- [ ] Exploration feeds resources into the settlement growth loop.
- [ ] Islands exist and are reachable through defined mechanics.
- [ ] Season changes affect exploration in some way.

---

# Open Questions

1. What is the world map UI — a separate screen, an overlay, a minimap?
2. How are regions unlocked — resource expenditure, hero actions, story progression, or exploration milestones?
3. What are the expedition mechanics (party size, duration, return conditions)?
4. How do islands work — are they regions, separate maps, or something else?
5. How many regions are planned?
6. Are there fog-of-war or line-of-sight mechanics?
7. Is exploration time-gated (in-game time passes during expeditions)?

---

# Related Documents

- `02-gameplay/Combat.md` — Combat during exploration
- `02-gameplay/Resources.md` — Resource gathering
- `02-gameplay/Progression.md` — How exploration unlocks progression
- `05-world/World Overview.md` — World design overview
- `05-world/Regions.md` — Region definitions
- `05-world/Points of Interest.md` — Points of interest within regions
- `03-simulation/Heroes.md` — Heroes who lead expeditions
- `03-simulation/Seasons.md` — Seasonal effects on exploration
