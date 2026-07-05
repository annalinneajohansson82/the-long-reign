---
title: Production Chains
id: 02-gameplay/production-chains
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - 02-gameplay/Resources.md
used_by:
  - 04-economy/Industries.md
  - 04-economy/Crafting.md
  - 04-economy/Agriculture.md
  - 04-economy/Luxury Goods.md
tags:
  - gameplay
  - production
  - economy
  - logistics
---

# Purpose

Define the production chain system — how raw resources are transformed into processed goods, the buildings involved, and the visible logistics that connect them.

---

# Overview

The Long Reign features deep production chains as part of its long-term progression. Raw resources gathered through exploration and settlement production flow through a series of transformations — coal becomes steel, raw materials become glass and leather and cloth — ultimately supporting trade, crafting, and kingdom growth.

Production chains are designed for depth without stressful optimization. The player should enjoy building their economy, not feel pressured to achieve perfect efficiency.

A defining feature is **visible logistics**: every step of a production chain is physically observable. Resources move from mine to cart to warehouse to production building to market. Nothing teleports.

---

# Design Goals

- **Visible Transformation.** The player can watch resources move through the chain and see infrastructure improvements in action.
- **Long-Term Depth.** Production chains provide many hours of incremental growth and discovery.
- **Cozy Complexity.** Rich systems without punishment or stressful min-maxing.
- **Emergent Specialization.** Colonies naturally develop economic identities based on which production chains they focus on.

---

# Non-Goals

- Production chains are not intended to be stressful optimization puzzles.
- The game does not require perfect ratios or efficiency.
- This document does not define specific recipes, production times, or numeric balance values.

---

# Example Production Chains

The source material provides the following examples. Specific inputs, outputs, buildings, and durations are not yet specified.

## Metals

- **Coal → Steel.** Coal (mined) is used in steel production. Iron is implied as a necessary input but not explicitly listed in the source material.

## Materials

- **Glass.** A processed material. Raw inputs and production buildings are not yet specified.
- **Leather.** A processed material. Raw inputs and production buildings are not yet specified.
- **Cloth.** A processed material. Raw inputs and production buildings are not yet specified.

## Agriculture

- Agricultural production chains exist (crops, foodstuffs).
- Specific chains are not yet specified.

> **TODO:** Define all production chains. Each chain needs: input resources, output resource, required building(s), transformation time, and any prerequisites.

---

# The Logistics Chain

Resources move through a fixed sequence of physical locations:

```
Mine / Farm / Gathering Point
           ↓
         Cart
           ↓
       Warehouse
           ↓
    Production Building
    (e.g., Blacksmith)
           ↓
         Market
```

This is the canonical logistics flow from the source material. It is likely extendable to other production types, but the source material only explicitly names this chain.

Key principles:
- Each step is **physically observable** — carts move, warehouses fill, production buildings activate.
- Improving infrastructure (roads, cart upgrades, building efficiency) produces **visible changes**.
- The simulation teaches the player where to build logistics infrastructure through desire paths and traffic patterns.

---

# Colony Specialization

Production chains are central to colony identity. Each colony develops its specialization naturally based on:
- Which buildings are constructed
- Local geography and available resources
- Production focus

There is no explicit specialization menu.

> **TODO:** Define how colony resource access works — do colonies have fixed resource nodes, or can any colony produce anything with the right buildings?

---

# Acceptance Criteria

- [ ] Raw resources can be transported from gathering points to warehouses.
- [ ] Warehouses can feed resources into production buildings.
- [ ] Production buildings transform inputs into outputs.
- [ ] Finished goods can be moved to markets.
- [ ] Every step of the logistics chain is visually observable.
- [ ] Infrastructure improvements visibly affect logistics speed or capacity.

---

# Open Questions

1. What is the complete list of production chains?
2. What are the specific inputs, outputs, and buildings for each chain?
3. How are production times balanced?
4. Do production chains have quality tiers or efficiency ratings?
5. Can production buildings be upgraded, and if so, how does that affect the chain?
6. How do colonies access resources — fixed nodes, trade, or universal availability?

---

# Related Documents

- `02-gameplay/Resources.md` — Resource types and gathering
- `02-gameplay/Buildings.md` — Building system
- `04-economy/Industries.md` — Industry-specific details
- `04-economy/Agriculture.md` — Agricultural production
- `04-economy/Crafting.md` — Crafting system
- `04-economy/Luxury Goods.md` — Luxury goods production
- `04-economy/Resource Flow.md` — Resource movement mechanics
- `03-simulation/Roads and Logistics.md` — Infrastructure impact on logistics
