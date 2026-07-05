---
title: "World Overview"
id: 05-world/world-overview
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - docs/01-vision/Vision Statement.md
  - docs/01-vision/Design Pillars.md
  - docs/02-gameplay/Exploration.md
used_by:
  - docs/05-world/Regions.md
  - docs/05-world/Capital.md
  - docs/05-world/Colonies.md
  - docs/05-world/Points of Interest.md
  - docs/05-world/World Generation.md
tags:
  - world
  - overview
  - design
---

# Purpose

Define the high-level design of The Long Reign's game world. This document establishes the architectural principles and constraints that govern the world: its structure, scale, and relationship to the player's kingdom. All other documents in `05-world/` derive from this specification.

---

# Overview

The world of The Long Reign is a large, handcrafted environment designed to support settlement growth. The player begins with a handful of settlers on an untouched frontier and, over many hours, expands their kingdom into the surrounding regions.

The world is structured as a world map with unlockable regions. Players cannot access all areas immediately — progression through the world is gated by exploration, resource expenditure, or other unlock mechanics. The world includes islands, implying maritime travel and coastal regions.

The world exists to serve the settlement. Exploration is not an independent gameplay pillar — it is the first step in the core loop: **Explore → Gather Resources → Return Home → Expand Settlement → Unlock New Opportunities → Repeat**.

---

# Design Goals

1. **Settlement-Focused.** Every region, point of interest, and geographic feature must ultimately feed back into the player's settlement growth.
2. **Handcrafted, Not Generated.** The world is designed, not procedurally generated. This supports meaningful content placement, curated discovery, and intentional pacing.
3. **Discovery-Driven.** Unlocking a new region should feel rewarding — each region offers something the player could not access before (unique resources, heroes, buildings, or opportunities).
4. **Cozy Complexity.** The world should feel expansive and adventurous, not stressful or dangerous. Dangers exist but serve to create memorable stories rather than to punish.
5. **Aligned with the North Star.** Every world design decision should make the kingdom feel more alive.

---

# Non-Goals

- The world is not procedurally generated. (See `World Generation.md` for the handcrafted world authoring approach.)
- The world is not a combat-focused sandbox. Combat exists to support settlement progression, not as the primary world interaction.
- The world does not scale to the player's level. Content is placed intentionally — the player grows into it.
- This document does not define specific region layouts, resource placements, or encounter tables.

---

# World Structure

## World Map

The game features a world map — the primary interface through which the player interacts with the world beyond their settlements. The map shows:

- The player's capital and colonies
- Discovered regions (and fog-of-war for undiscovered areas)
- Points of interest
- Roads and trade routes
- Active expeditions

> **TODO:** Define the world map UI — is it a separate screen, an overlay, or a minimap? What level of detail is shown?

## Regions

The world is divided into regions. Regions are unlockable — the player cannot access all areas immediately. Regions contain:

| Content Type | Description |
|---|---|
| **Unique Resources** | Resources not available in the starting area or other regions. |
| **Recruitable Heroes** | Named heroes that can be recruited to join the kingdom. |
| **New Buildings** | Building types or upgrades unlocked by discovering specific locations. |
| **Opportunities** | Events, quests, or interactions that provide unique benefits. |
| **Dangers** | Combat encounters, environmental hazards, or other threats. |

See `Regions.md` for detailed region specification.

## Islands

The world includes islands — maritime regions accessible through some unlock mechanic distinct from land-based region unlocking. The source material does not specify how islands are reached.

> **TODO:** Define island mechanics — how are islands reached (boats, bridges, teleportation)? Are islands treated as regions, separate maps, or something else?

---

# The Player's Kingdom

The player's kingdom is anchored to the world through:

- **One permanent capital.** The starting location and primary settlement. Grows from a camp into a thriving kingdom. See `Capital.md`.
- **Multiple colonies.** Secondary settlements founded in discovered regions. Each develops its own identity. See `Colonies.md`.
- **Roads.** Physical connections between settlements and resource nodes. See `docs/03-simulation/Roads and Logistics.md`.
- **Points of Interest.** Discoverable locations within regions that provide resources, heroes, events, or other content. See `Points of Interest.md`.

---

# World and the Core Loop

The world is the stage for the first three stages of the core gameplay loop:

1. **Explore.** The player sends expeditions into the world to discover regions and points of interest.
2. **Gather Resources.** Resources are harvested from the world and transported back to the settlement.
3. **Return Home.** Expeditions return, bringing resources, discoveries, and stories back to the kingdom.

The world then supports the later stages:
4. **Expand Settlement.** New resources from the world enable building and upgrading.
5. **Unlock New Opportunities.** Discoveries unlock new regions, heroes, buildings, and research.

---

# Seasonal Effects on the World

Seasons affect the world. The source material identifies three categories of seasonal effects:

- **Harvests** (positive) — agricultural yields vary by season.
- **Winter hardships** (negative) — winter imposes challenges.
- **Exploration opportunities** (contextual) — certain seasons open or close exploration possibilities.

> **TODO:** Define how seasons affect world map regions — are some regions only accessible in certain seasons? Do seasons change resource availability or danger levels? Are there seasonal visual changes?

See `docs/03-simulation/Seasons.md` for the full seasonal specification.

---

# Acceptance Criteria

- [ ] A world map exists with multiple unlockable regions.
- [ ] The world is handcrafted, not procedurally generated.
- [ ] Regions contain at least: unique resources, recruitable heroes, and dangers.
- [ ] Islands exist and are reachable through defined mechanics.
- [ ] The player's capital is placed in a starting region with initial resources.
- [ ] Colonies can be founded in discovered regions.
- [ ] Season changes affect the world in some way.

---

# Open Questions

1. How many regions are planned for the initial release?
2. What is the world map scale — how large is the traversable area in real terms?
3. How are regions unlocked — resource expenditure, hero actions, story progression, or exploration milestones?
4. How do islands work — are they regions, separate maps, or something else?
5. What is the fog-of-war mechanic? Does the player see the full region border but not its contents, or is the entire map hidden until discovered?
6. Is there a world border? What lies beyond the playable area?
7. How does the world map relate to the settlement view? Are they separate screens, or is the world map a zoomed-out version of the same view?
8. Are there biomes or climate zones that affect gameplay beyond seasons?

---

# Related Documents

- `docs/01-vision/Vision Statement.md` — The emotional goal of building a kingdom
- `docs/01-vision/Design Pillars.md` — Living Simulation, Meaningful Growth, Player Expression, Cozy Complexity
- `docs/01-vision/Core Gameplay Loop.md` — Explore → Gather → Return → Expand → Unlock
- `docs/02-gameplay/Exploration.md` — Exploration mechanics and region contents
- `docs/02-gameplay/Combat.md` — Combat during world exploration
- `docs/03-simulation/Seasons.md` — Seasonal effects on the world
- `docs/03-simulation/Roads and Logistics.md` — Roads connecting settlements across the world
- `docs/03-simulation/Settlement Growth.md` — Capital and colony growth
- `docs/04-economy/Economy Overview.md` — Resource flow through the world
- `docs/05-world/Regions.md` — Region definitions
- `docs/05-world/Capital.md` — Capital specification
- `docs/05-world/Colonies.md` — Colony specification
- `docs/05-world/Points of Interest.md` — Points of interest within regions
- `docs/05-world/World Generation.md` — World authoring and design process
- Source: *The Long Reign — Project Handoff* § Exploration, § Settlement, § Colonies, § Seasons
- Source: *Project Genesis — Brainstorming History* § The Settlement Becomes the Main Character