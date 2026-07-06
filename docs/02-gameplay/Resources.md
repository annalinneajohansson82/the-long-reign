---
title: Resources
id: 02-gameplay/resources
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-05
depends_on:
  - 00-foundation/glossary
  - 00-foundation/principles
used_by:
  - 02-gameplay/mvp
  - 02-gameplay/production-chains
  - 02-gameplay/buildings
  - 04-economy/resource-flow
  - 04-economy/economy-overview
tags:
  - gameplay
  - resources
  - economy
---

# Purpose

Define the resource system — what resources exist, how they are gathered, how they flow through the kingdom, and their role in the core gameplay loop.

---

# Overview

Resources are the connective tissue of the game's systems. The core gameplay loop revolves around exploring the world, gathering resources, returning to the settlement, and expanding. Resources are gathered primarily through exploration and settlement production. They flow through the kingdom via visible logistics — nothing teleports.

The resource system supports long-term progression without stressful optimization.

---

# Design Goals

- **Visible Logistics.** Resources physically move through the kingdom (mine → cart → warehouse → blacksmith → market). The player can literally watch infrastructure improvements.
- **Cozy Complexity.** Deep resource chains exist, but the game does not demand stressful optimization or perfect efficiency.
- **Emergent Specialization.** Colony identity emerges partly from what resources a colony produces and trades.
- **Long-Term Progression.** Resource chains support many hours of incremental growth.

---

# Non-Goals

- Resources do not teleport between buildings or settlements.
- The game does not include energy systems or premium currencies.
- This document does not define specific resource quantities, production rates, or balance values.

---

# Resource Types

## MVP Scope

The MVP uses a single resource: **wood**. All other resource categories (raw, processed, luxury, crafting, trade) are scoped for post-MVP.

- **Wood** is gathered from trees on the grid. Each tree yields 3 wood.
- Wood is the only currency for building construction and upgrades.
- Wood is stored in a stockpile (capacity: 50). Excess wood beyond capacity is lost.

## Post-MVP Resource Taxonomy (Conceptual)

The source material identifies the following resource categories for future expansion:

### Raw Resources

Materials gathered directly from the environment through exploration or extraction buildings.

Examples from source material:
- **Agriculture.** Crops and foodstuffs.
- **Coal.** Mined fuel resource.

### Processed Resources

Materials created by transforming raw resources through production chains.

Examples from source material:
- **Steel.** Produced from coal and iron (iron implied but not explicitly listed).
- **Glass.**
- **Leather.**
- **Cloth.**

### Luxury Goods

High-tier processed items with special functions. (Post-MVP.)

### Crafting Ingredients

Items used in specific crafting recipes. (Post-MVP.)

### Trade Goods

Resources intended for exchange between settlements. (Post-MVP.)

---

# Resource Flow

See `04-economy/resource-flow` for the full specification.

Key principles:
- Resources physically move from source to destination.
- The chain is: **Mine/Harvest → Cart → Warehouse → Production Building → Market**.
- Improving logistics produces visible changes (faster carts, better roads, more efficient movement).
- Resource flow is a core part of the visible logistics philosophy.

---

# Gathering

Resources are gathered through a single mechanic in the MVP:

**Click-to-harvest from grid nodes.**

- The grid starts with ~25 trees scattered across it.
- The player clicks a tree to initiate gathering.
- The nearest idle villager walks to the tree, plays a gathering animation, and 3 wood is added to the stockpile.
- The tree disappears from that tile, freeing it for construction.
- The villager idles at the node's location rather than walking back.
- Wood collection is immediate upon the animation completing — no per-unit travel time.

**Forester's Hut (renewable source):**
- Once built, the forester's hut periodically spawns a sapling on a random empty tile within a radius.
- After a ~30-second growth timer, the sapling becomes a mature, harvestable tree.
- Trees spawned by the forester's hut are visually distinct (younger appearance) but mechanically identical to starting trees.
- The forester works automatically — no villager assignment is needed in the MVP.

**Post-MVP:** Exploration gathering (hero-led expeditions) and settlement production (automated resource buildings).

---

# Storage

- The **stockpile** is the only storage structure in the MVP.
- **Capacity:** 50 wood.
- Wood collected beyond the stockpile's capacity is **lost** — there is no overflow.
- Only one stockpile may exist in the MVP. (Post-MVP: multiple storage buildings, upgradeable capacity.)
- The stockpile visually shows its fill level (empty → partially filled → full) to give the player immediate feedback.
- Wood is consumed directly from the stockpile when the player places a building or initiates an upgrade. No transfer mechanics exist in the MVP.

---

# Acceptance Criteria (MVP)

- [ ] Player can click a tree to initiate gathering. The nearest idle villager walks to it.
- [ ] Villager plays a gathering animation at the tree node.
- [ ] Wood (3 per tree) is added to the stockpile on gathering completion.
- [ ] The tree disappears, freeing the tile for construction.
- [ ] Gathering into a full stockpile (50 wood) silently discards excess wood.
- [ ] Forester's hut spawns new trees on empty tiles nearby on a timer (~30 seconds).
- [ ] Trees work identically whether placed by the initial seed or by the forester's hut.

# Open Questions (MVP-Resolved)

| # | Question | MVP Answer |
|---|----------|------------|
| 1 | Complete taxonomy of resources? | Single resource (wood) in MVP. Full taxonomy deferred to post-MVP. |
| 2 | How does exploration gathering work mechanically? | Deferred. MVP uses click-to-harvest from grid nodes only. |
| 3 | What are the storage rules (capacity, overflow, per-settlement vs. shared)? | Single stockpile, 50 wood capacity. Overflow is lost. One global stockpile per settlement. |
| 4 | How do resources transfer between capital and colonies? | Colonies are post-MVP. |
| 5 | Are resources needed for building construction, villager consumption, or both? | MVP: wood for building/upgrade costs only. Villager consumption deferred. |

# Open Questions (Post-MVP — Carried Forward)

1. Complete taxonomy of resources — what raw, processed, luxury, crafting, and trade goods exist?
2. How does exploration gathering work mechanically (automatic, manual, hero-led)?
3. What are the storage rules at scale — multiple stockpiles, capacity upgrades, per-settlement budgets?
4. How do resources transfer between settlements?
5. Are resources consumed by villagers (food) or only used for construction and production?
6. Resource flow mechanics (carts, roads, visible logistics) — how does physical movement work?

---

# Related Documents

- `02-gameplay/production-chains` — How resources transform
- `02-gameplay/exploration` — Exploration gathering
- `04-economy/resource-flow` — Resource movement mechanics
- `04-economy/economy-overview` — Economy system overview
- `03-simulation/roads-and-logistics` — How infrastructure affects resource flow
