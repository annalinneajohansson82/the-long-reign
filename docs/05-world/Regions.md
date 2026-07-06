---
title: "Regions"
id: 05-world/regions
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-05
depends_on:
  - docs/05-world/World Overview.md
  - docs/02-gameplay/Exploration.md
used_by:
  - docs/05-world/Points of Interest.md
  - docs/05-world/Colonies.md
tags:
  - world
  - regions
  - exploration
  - design
---

# Purpose

Define the region system — how the world is divided into regions, what regions contain, how they are unlocked, and the constraints that govern region design. Regions are the primary unit of world progression.

---

# Overview

The world of The Long Reign is divided into unlockable regions on a world map. The player begins in a single starting region (containing the capital's initial location) and progressively unlocks additional regions through gameplay. Each region is a handcrafted area with intentionally placed content.

Regions are the vehicle for discovery. Unlocking a region should feel rewarding — the player should always gain access to something they could not access before.

The source material does not specify the number of regions, their names, or their specific contents. This document defines the structural rules for regions and leaves content-specific decisions as TODOs.

---

# Design Goals

1. **Meaningful Unlocks.** Each region must contain at least one unique element — a resource, hero, building, or opportunity not available elsewhere.
2. **Handcrafted Content.** Regions are designed, not generated. Content placement is intentional and curated.
3. **Progressive Discovery.** Region unlocking provides a sense of expanding frontiers. The world should feel larger as the player progresses.
4. **Settlement Support.** Region content ultimately feeds back into the player's kingdom — through resources, heroes, buildings, or trade opportunities.
5. **Cozy Exploration.** Regions should feel adventurous, not punishing. Dangers exist but are proportional to the region's role in progression.

---

# Non-Goals

- Regions are not procedurally generated.
- Regions are not combat arenas — combat supports exploration, not the other way around.
- Region unlocking is not purely linear — the player should have some choice in which regions to pursue.
- This document does not define specific region names, layouts, or exact content — only the structural rules.

---

# Region Definition

Each region is defined by:

| Attribute | Description |
|---|---|
| **Name** | Human-readable name for the region. |
| **Unlock Condition** | What the player must do to access this region. |
| **Geography** | Terrain type, biome, climate, and visual character. |
| **Resources** | Unique or rare resources found in this region. |
| **Heroes** | Recruitable heroes located in this region. |
| **Buildings** | Building types or upgrades unlocked by discovering the region or its contents. |
| **Opportunities** | Events, quests, or interactions specific to this region. |
| **Dangers** | Combat encounters, environmental hazards, or other threats. |
| **Colony Viability** | Whether a colony can be founded here, and what identity it might develop. |

---

# Region Contents

The source material specifies that each region may contain:

### Unique Resources

Resources not available in the starting area or other regions. These drive exploration — the player must expand to access new materials for advanced production chains.

> **TODO:** Define which resources are region-exclusive and which are available in multiple regions. Map resource distribution across planned regions.

### Recruitable Heroes

A small cast of approximately 10–20 named heroes exists in the game. Some (or all) are discovered in unlockable regions and recruited to join the kingdom.

> **TODO:** Determine which heroes are found in which regions. Are all heroes discovered through exploration, or are some present in the starting area?

### New Buildings

Building types or upgrades unlocked by discovering specific locations. For example, discovering an ancient forge might unlock a unique smithy upgrade.

> **TODO:** Define region-discovered buildings. What buildings are gated behind region discovery vs. research?

### Opportunities

Events, quests, or interactions that provide unique benefits. These are not purely narrative — they should affect settlement gameplay.

> **TODO:** Define opportunity types. Are opportunities one-time events, repeatable, or persistent state changes?

### Dangers

Combat encounters, environmental hazards, or other threats. These serve as gates or risk elements within regions.

> **TODO:** Define danger types. What kinds of enemies, hazards, or environmental challenges exist? How do they scale relative to player progression?

---

# Region Unlocking

The source material states that regions are unlockable but does not specify the unlock mechanics. Possible approaches include:

- **Resource expenditure.** Spend resources to clear a path, build a bridge, or fund an expedition.
- **Hero actions.** Send a hero to scout, negotiate, or clear the way.
- **Exploration milestones.** Discover a certain number of points of interest or complete objectives in currently accessible regions.
- **Story progression.** Unlock through Chronicle events or kingdom milestones.

> **TODO:** Define the region unlock mechanic(s). Is there one universal mechanic or different mechanics for different region types?

---

# Island Regions

The world includes islands. Islands are distinct from land-based regions in that they require some form of maritime access. The source material does not specify how islands work.

> **TODO:** Define island mechanics:
> - How are islands discovered — visible from the coast, revealed through exploration, or discovered via map/rumor?
> - How are islands reached — boats, bridges, or some other mechanic?
> - Are there sea routes and naval logistics between islands and the mainland?
> - Are islands treated as standard regions once reached, or do they have special rules?

---

# Region Design Constraints

Derived from the project's design pillars:

| Pillar | Region Design Implication |
|---|---|
| **Living Simulation** | Regions should feel like real places, not game levels. Consider what lives there, what grows there, what history it has. |
| **Meaningful Growth** | Every region should contain something that changes the kingdom — a resource, hero, building, or opportunity. |
| **Player Expression** | Different region unlock orders should produce different kingdom identities. No single optimal path. |
| **Cozy Complexity** | Regions should be deep without being stressful. The player should want to explore, not feel compelled to clear everything. |
| **Emergent Stories** | Region discoveries should generate Chronicle entries. Hero recruitment in a region is a story, not just a mechanic. |
| **Respect the Player's Time** | Region unlocking should never involve timers, energy gates, or FOMO. The player unlocks regions at their own pace. |

---

# Acceptance Criteria

- [ ] The world is divided into named, handcrafted regions.
- [ ] Each region has a defined unlock condition.
- [ ] Each region contains at least one unique resource, hero, or building type.
- [ ] Island regions exist and have defined maritime access mechanics.
- [ ] Region discovery is recorded in the Chronicle.
- [ ] The starting region supports the initial capital placement and early-game resource needs.

---

# Open Questions

1. How many regions are planned? What are their names?
2. What is the specific unlock mechanic for regions?
3. How are island regions distinguished from land regions mechanically?
4. Are there region tiers or difficulty levels? Does the world have a natural progression path?
5. Can a region be "completed" — all resources gathered, all heroes recruited — or are regions persistent?
6. Are colonies restricted to certain regions, or can a colony be founded in any region?
7. Do regions have borders, or do they blend into adjacent regions?
8. How does fog-of-war work at the region level — do players see region outlines before unlocking, or is the map fully hidden?
9. Are there biomes or climate zones that differentiate regions visually and mechanically?
10. What is the relationship between regions and seasons — do all regions experience the same season simultaneously?

---

# Related Documents

- `docs/05-world/World Overview.md` — World structure and design philosophy
- `docs/05-world/Points of Interest.md` — Points of interest within regions
- `docs/05-world/Capital.md` — The capital's relationship to its starting region
- `docs/05-world/Colonies.md` — Colony founding in discovered regions
- `docs/05-world/World Generation.md` — Handcrafted world authoring process
- `docs/02-gameplay/Exploration.md` — Exploration mechanics and region discovery
- `docs/02-gameplay/Resources.md` — Resource types and distribution
- `docs/03-simulation/Heroes.md` — Hero recruitment and placement
- `docs/03-simulation/Seasons.md` — Seasonal effects on regions
- `docs/04-economy/Economy Overview.md` — Resource flow and colony specialization driven by region geography
- Source: *The Long Reign — Project Handoff* § Exploration
- Source: *Project Genesis — Brainstorming History* § Discovering the Real Goal, § Colonies