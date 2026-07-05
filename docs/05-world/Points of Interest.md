---
title: "Points of Interest"
id: world/points-of-interest
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - docs/05-world/World Overview.md
  - docs/05-world/Regions.md
  - docs/02-gameplay/Exploration.md
used_by:
  - docs/02-gameplay/Resources.md
  - docs/03-simulation/Chronicle.md
tags:
  - world
  - points-of-interest
  - exploration
  - design
---

# Purpose

Define points of interest (POIs) — the discoverable locations within regions that provide resources, heroes, buildings, opportunities, or dangers. POIs are the granular content the player interacts with during exploration.

---

# Overview

Points of interest are specific, handcrafted locations within the world's regions. When the player explores a region, they discover POIs. Each POI provides one or more types of content: resources, recruitable heroes, new buildings, opportunities, or dangers.

POIs are the mechanism through which exploration feeds into the core gameplay loop. A mining node POI becomes a resource source. A hero's camp POI becomes a recruitment opportunity. A ruin POI might unlock a building type or trigger a Chronicle event.

The source material does not use the term "Points of Interest" explicitly but describes the contents of regions as: unique resources, recruitable heroes, new buildings, opportunities, and dangers. POIs are the physical locations where these contents are found.

---

# Design Goals

1. **Handcrafted Placement.** Every POI is intentionally placed by the world designer — not randomly scattered.
2. **Meaningful Discovery.** Finding a POI should provide the player with something they did not have before.
3. **Settlement Support.** POI content should ultimately feed back into the player's settlement growth.
4. **Varied Content.** POIs should encompass multiple content types (resources, heroes, buildings, opportunities, dangers) to keep exploration engaging.
5. **Emergent Stories.** POI discovery and interaction should generate Chronicle entries and contribute to the kingdom's history.

---

# Non-Goals

- POIs are not procedurally generated. They are handcrafted.
- POIs are not purely cosmetic — they must provide gameplay value.
- POIs are not infinitely repeatable — most POI content is finite (a resource node depletes, a hero is recruited once).
- This document does not define specific POI locations, names, or content.

---

# POI Categories

The source material identifies five categories of content that regions contain. POIs are classified by the primary content type they provide:

### Resource POIs

Locations where the player can gather resources. These are the primary targets of the "Gather Resources" stage of the core loop.

Examples implied by the source material:
- Mines (coal, iron ore, stone)
- Forests (timber)
- Quarries (stone, clay, sand)
- Fields (agricultural land)

> **TODO:** Define the complete set of resource POI types. Each needs: resource produced, depletion behavior (finite vs. renewable), and whether a colony can be built nearby to automate extraction.

### Hero POIs

Locations where recruitable heroes are found. The game features approximately 10–20 named heroes. Some are discovered as POIs in unlockable regions.

> **TODO:** Define hero POI types — camps, villages, prisons, wandering encounters? What is the recruitment mechanic?

### Building POIs

Locations that unlock new building types or upgrades. Discovering an ancient forge, a ruined library, or a sacred grove might unlock construction options.

> **TODO:** Define building POI types. What buildings are gated behind POI discovery vs. research?

### Opportunity POIs

Locations that provide events, quests, or interactions with unique benefits. These are the most narrative-driven POI type. Opportunities should support settlement growth in some way.

> **TODO:** Define opportunity POI types — are they one-time events, repeatable interactions, or persistent state changes? Examples?

### Danger POIs

Locations that contain combat encounters or environmental hazards. These serve as gates, risks, or content sources for the combat system.

> **TODO:** Define danger POI types — enemy camps, monster lairs, bandit hideouts, natural hazards? What are the rewards for clearing danger POIs?

---

# POI Discovery

The source material does not specify how POIs are discovered. Likely mechanics include:

- **Exploration.** The player sends expeditions into regions. POIs are revealed as the expedition explores.
- **Line of Sight.** POIs become visible when the player or their heroes are within range.
- **Rumors/Scouting.** The player receives hints about POI locations.
- **Region Unlock.** Some POIs may be visible immediately upon unlocking a region.

> **TODO:** Define the POI discovery mechanic. Is there fog-of-war? Do expeditions reveal POIs automatically? Can the player see POI types before reaching them?

---

# POI Persistence

POIs exist in a persistent world. The source material implies that resources are gathered and brought back to the settlement, but does not specify whether resource nodes are finite or renewable.

> **TODO:** Define POI persistence:
> - Do resource nodes deplete? If so, what happens to the POI — does it disappear, become a depleted ruin, or regenerate?
> - Do hero POIs remain after the hero is recruited?
> - Do danger POIs remain after being cleared?
> - Do opportunity POIs remain after being resolved?

---

# POI and the Chronicle

POI discovery and interaction should generate Chronicle entries. Examples:

- "Discovered the Iron Hills — a rich mining region."
- "Recruited Elena the Scout from the Wanderer's Camp."
- "Cleared the Bandit Stronghold — the trade route is now safe."
- "Uncovered the Ancient Library — new research options available."

See `docs/03-simulation/Chronicle.md` for the Chronicle specification.

---

# POI and Colonies

Some POIs may influence where the player chooses to found a colony. A colony founded near a cluster of resource POIs will naturally develop a resource-extraction identity. The source material describes colony identity emerging from geography — POIs are part of that geography.

> **TODO:** Define the relationship between POIs and colonies. Can a colony be founded on or adjacent to a POI? Does a colony automatically exploit nearby POIs?

---

# Acceptance Criteria

- [ ] Points of interest exist within regions as handcrafted, discoverable locations.
- [ ] POIs cover at least three of the five content categories: resources, heroes, buildings, opportunities, dangers.
- [ ] POI discovery is recorded in the Chronicle.
- [ ] POI content feeds into settlement growth (resources, heroes, buildings, or opportunities).
- [ ] POIs are persistent — their state is saved and restored.

---

# Open Questions

1. What is the full taxonomy of POI types?
2. How are POIs discovered — fog-of-war, expeditions, scouting?
3. What is the persistence model for each POI type? Which are finite, which are renewable?
4. What is the relationship between POIs and colony founding?
5. How many POIs per region is typical?
6. Are there POI tiers (early-game vs. late-game)?
7. Can POIs change state over time or through player action?
8. How are POIs visually represented on the world map?
9. Do POIs have names, or are they purely functional locations?

---

# Related Documents

- `docs/05-world/World Overview.md` — World structure and philosophy
- `docs/05-world/Regions.md` — Regions that contain POIs
- `docs/05-world/Capital.md` — Capital's relationship to discovered POIs
- `docs/05-world/Colonies.md` — Colony placement relative to POIs
- `docs/02-gameplay/Exploration.md` — Exploration mechanics and POI discovery
- `docs/02-gameplay/Resources.md` — Resource POI types
- `docs/02-gameplay/Combat.md` — Danger POI combat encounters
- `docs/03-simulation/Heroes.md` — Hero POI recruitment
- `docs/03-simulation/Chronicle.md` — POI events in the Chronicle
- `docs/01-vision/Design Pillars.md` — Meaningful Growth, Emergent Stories
- Source: *The Long Reign — Project Handoff* § Exploration (region contents)
- Source: *Project Genesis — Brainstorming History* § Discovering the Real Goal, § Building the Core Fantasy