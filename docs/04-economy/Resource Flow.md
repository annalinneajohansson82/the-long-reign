---
title: Resource Flow
id: economy/resource-flow

version: 0.1.0
status: Draft
author:

last_updated: 2026-07-05

depends_on:
  - docs/04-economy/Economy Overview.md
  - docs/03-simulation/Roads and Logistics.md
  - docs/04-economy/Trade.md

used_by: []

tags:
  - economy
  - logistics
  - resources
  - simulation
---

# Purpose

This document defines how resources physically move through the kingdom — from extraction points to processing buildings, to storage, to consumption. It is the implementation of the **Visible Logistics** principle.

---

# Overview

The defining rule is simple: **Nothing teleports.**

Every resource has a physical location. When a miner extracts iron ore, the ore exists at the mine. When a smelter needs ore, a cart must bring ore from the mine (or a warehouse) to the smelter. When a blacksmith needs steel ingots, a cart must bring them from the smelter (or a warehouse) to the blacksmith.

The player can see these flows. Carts travel along roads. Goods stack at warehouses. Improving infrastructure — paving desire paths into roads, building additional warehouses, expanding cart capacity — produces visible improvements in logistics throughput.

This mechanic was identified early in the design process as one of the project's defining ideas: "The simulation teaches the player. The player improves the simulation."

---

# Design Goals

1. **Visible Causality.** The player sees that the blacksmith has no steel because the cart from the smelter is stuck on an unpaved path. The problem and solution are visually apparent.

2. **Infrastructure as Investment.** Roads, warehouses, and carts are long-term investments that compound over the kingdom's lifetime.

3. **Emergent Bottlenecks.** Traffic jams, understocked warehouses, and idle workshops emerge naturally from the physical simulation rather than through scripted events.

4. **Support the North Star.** Watching resources move through a well-designed kingdom makes the kingdom feel alive.

---

# Non-Goals

- **No teleportation for convenience.** Resources never skip the transport step, even if it would be "more convenient" for the player.
- **No abstract logistics.** There is no hidden "logistics score" that gates production. Logistics are spatial and visible.
- **No Traffic Manager-style micromanagement.** The player places roads and buildings; cart routing is automatic.

---

# Mechanics

## The Resource Flow Chain

The canonical flow from the source material:

```
Mine
  ↓
Cart
  ↓
Warehouse
  ↓
Blacksmith (or Smelter → Blacksmith)
  ↓
Market
```

Generalized:

```
Extraction Node (mine, farm, lumber camp, quarry, pasture)
  ↓
Transport (cart, ship for islands)
  ↓
Storage (warehouse, granary)
  ↓
Processing Building (smelter, mill, tannery, textile workshop, glassworks)
  ↓
Transport (cart, ship)
  ↓
Storage (warehouse)
  ↓
Crafting Building (blacksmith, armorer, tailor, workshop)
  ↓
Transport (cart)
  ↓
Consumer (market, hero equipment, construction site, trade caravan)
```

## Transport Units

**Carts** are the primary land transport unit. They travel along roads (improved throughput on paved roads, minimal on desire paths).

TODO: Cart capacity, speed, and quantity are not defined. Do carts belong to specific buildings or are they a shared pool? Are there cart upgrades?

**Ships** are implied by the existence of island regions but not specified in the source material.

TODO: Define sea transport mechanics — ship types, dock buildings, naval routes.

## Storage

**Warehouses** are intermediate storage nodes. They buffer resources between production stages, absorb seasonal surpluses (especially for agriculture), and serve as distribution points.

TODO: Warehouse capacity, placement limits, and upgrade tiers are not defined.

**Granaries** are a specific storage type for agricultural products (food).

TODO: Are granaries distinct from warehouses, or are they a thematic variant with the same mechanics?

## Road Quality and Throughput

Road quality directly affects cart speed and throughput:

| Road Type | Effect |
|-----------|--------|
| Desire Path (natural) | Slow. Created automatically by villager foot traffic. |
| Paved Road (player-built) | Fast. Player must actively upgrade. |

Roads are built by paving existing desire paths. The simulation tells the player where roads should go by showing where villagers walk.

See `docs/03-simulation/Roads and Logistics.md`.

---

## Resource Location Model

Every resource unit in the game has a current location. Resources are not pooled into a global inventory. They exist at a specific building or are in transit on a cart/ship:

- **At rest:** In a mine's output buffer, a warehouse's inventory, a workshop's input buffer
- **In transit:** On a cart traveling between two nodes

This model enables the visible logistics principle at the data level.

---

## Cargo Visibility

Carts and ships are visible game entities. Their cargo should be at least partially readable — a cart carrying iron ore looks different from a cart carrying grain, or at minimum the player can inspect it to see its contents.

TODO: Visual fidelity of cargo representation is an art direction decision (see `docs/07-art/`).

---

# Acceptance Criteria

- [ ] Every resource unit has a current location (building or in-transit).
- [ ] Resources cannot teleport between locations — transport is required.
- [ ] Carts are visible entities traveling along roads.
- [ ] Road quality measurably affects transport speed and throughput.
- [ ] Warehouses have defined capacity and can be placed by the player.
- [ ] Logistics bottlenecks are observable through the simulation rather than through UI alerts.

---

# Open Questions

- What is the unit of measurement for a "resource unit"? (Tons, abstract stacks, item counts?)
- How does cart routing work? (Nearest available resource? Priority queues? Player-set priorities?)
- Can resource flow be paused or redirected by the player?
- How are sea routes implemented for island colonies?
- What happens when a cart's destination is destroyed or its path is blocked?
- Is there a limit on cart count, or can the player build unlimited carts?
- Do carts require maintenance (upkeep cost, replacement over time)?
- Can resource flow be disrupted by events (bandits on roads, storms at sea)?

---

# Related Documents

- `docs/04-economy/Economy Overview.md` — High-level economic design
- `docs/04-economy/Trade.md` — Trade caravans as a specific transport type
- `docs/04-economy/Industries.md` — Source nodes (mines, quarries, etc.)
- `docs/04-economy/Agriculture.md` — Source nodes (farms, pastures)
- `docs/03-simulation/Roads and Logistics.md` — Infrastructure and movement
- `docs/02-gameplay/Resources.md` — Resource type definitions
- `docs/02-gameplay/Buildings.md` — Storage buildings
