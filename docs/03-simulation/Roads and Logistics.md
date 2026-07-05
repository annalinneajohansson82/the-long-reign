---
title: "Roads and Logistics"
id: simulation/roads-and-logistics
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - "Settlement Growth.md"
used_by:
  - "docs/02-gameplay/Buildings.md"
tags:
  - simulation
  - roads
  - logistics
  - infrastructure
  - trade
---

# Purpose

Defines the road and logistics system — one of the game's defining mechanics. Roads emerge from villager behavior and, once formalized, improve movement, logistics, trade, and efficiency across the kingdom.

---

# Overview

The road system is a core differentiator for The Long Reign. Rather than the player placing roads arbitrarily, the simulation teaches the player where roads should go through the "desire path" mechanic.

Desire paths are dirt trails created naturally by villagers repeatedly walking between important locations. These paths become visible over time. The player can then pave those desire paths into formal roads, which provide concrete benefits.

Once roads exist, logistics become visible: resources physically move through the kingdom along these routes. Nothing teleports.

The source material frames this as a design philosophy: "The simulation teaches the player. The player improves the simulation."

---

# Design Goals

1. **Emergent road placement.** Roads follow natural traffic patterns, not arbitrary player decisions.
2. **Visible logistics.** Resources physically move along roads. The player can watch supply chains operate.
3. **Meaningful infrastructure.** Roads are not decorative — they improve movement speed, logistics throughput, trade efficiency, and overall settlement efficiency.
4. **Intuitive discovery.** Players learn where to build roads by observing villager behavior.
5. **Scalable network.** Roads connect the capital to colonies, mines to warehouses, and warehouses to production buildings.

---

# Non-Goals

- Roads are not a purely decorative feature.
- Resources do not teleport — all logistics must be physically represented.
- The player is not expected to guess optimal road placement.

---

# Desire Paths

### Formation

Villagers create dirt paths by repeatedly walking between important locations. As more villagers travel the same route, the path becomes more visible to the player.

### Visibility Progression

| Stage | Description |
|-------|-------------|
| Faint trail | Light foot traffic. Barely visible. |
| Dirt path | Regular traffic. Clearly visible on the map. |
| Desire path | Heavy traffic. Prominent trail that signals "build a road here." |

### Key Locations That Generate Traffic

The source material implies the following attractors would generate desire paths:

- Residential areas → Workplaces
- Mines → Warehouses
- Warehouses → Production buildings (e.g., Blacksmith)
- Production buildings → Markets
- Capital ↔ Colonies

---

# Formal Roads

### Paving

The player can pave a desire path into a formal road. The exact resource cost and construction mechanic is not specified in the source material.

### Road Benefits

The source material states that roads improve:

| Benefit | Description |
|---------|-------------|
| Movement | Faster travel for villagers, heroes, and carts along paved roads. |
| Logistics | Higher throughput for resource transport. |
| Trade | Improved trade efficiency between settlements. |
| Efficiency | General settlement efficiency improvements. |

---

# Visible Logistics

### Principle

Nothing teleports. Resources physically move through the kingdom.

### Supply Chain Representation

The source material provides the following example chain:

```
Mine → Cart → Warehouse → Blacksmith → Market
```

Each step is a visible, physical transfer. Carts travel along roads. Improving roads improves the speed and throughput of this entire chain.

### Implications

- Supply chain bottlenecks are physically observable.
- Road upgrades produce visible improvements in resource flow.
- The player can trace any resource from its origin to its destination.

---

# Road Networks

### Capital ↔ Colony Connections

Colonies are connected to the capital via roads. The source material does not specify whether colonial roads form through the same desire-path mechanic or through direct player construction.

### Inter-Settlement Trade

Roads between settlements enable trade. Improved roads improve trade efficiency.

---

# Integration Points

- **Villagers:** Villager foot traffic generates desire paths. See `Villagers.md`.
- **Settlement Growth:** Roads are part of the player's construction toolkit. Roads connect settlements. See `Settlement Growth.md`.
- **Colonies:** Roads connect capital to colonies. See `Settlement Growth.md`.
- **Economy:** Supply chains are physically represented on roads. See `docs/04-economy/`.
- **Buildings:** Buildings are origin and destination points for logistics. See `docs/02-gameplay/Buildings.md`.

---

# Open Questions

- [ ] What is the exact mechanic for paving a desire path into a road? (Click? Drag? Resource cost?)
- [ ] Can the player build roads without a pre-existing desire path?
- [ ] How many road tiers exist? (Dirt → Paved → Cobblestone?)
- [ ] What are the quantitative differences between a desire path and a formal road?
- [ ] How are colonial roads created — do desire paths form between settlements?
- [ ] What happens to a road if traffic patterns change and the route is no longer used?
- [ ] Are there different road types (trade roads, residential paths, industrial routes)?
- [ ] Can roads be upgraded after paving?
- [ ] Do roads decay over time without maintenance?

---

# Related Documents

- `Settlement Growth.md` — Settlement and colony development
- `Villagers.md` — Villager behavior that generates traffic
- `docs/02-gameplay/Buildings.md` — Building placement and logistics endpoints
- `docs/04-economy/` — Production chains and trade
- `docs/01-vision/Design Pillars.md` — Living Simulation, Meaningful Growth
- Source: *The Long Reign — Project Handoff* § Roads, § Visible Logistics
- Source: *Project Genesis — Brainstorming History* § Roads and Desire Paths, § Visible Logistics
