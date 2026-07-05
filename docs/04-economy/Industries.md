---
title: Industries
id: 04-economy/industries

version: 0.1.0
status: Draft
author:

last_updated: 2026-07-05

depends_on:
  - docs/04-economy/Economy Overview.md
  - docs/02-gameplay/Resources.md
  - docs/02-gameplay/Buildings.md

used_by:
  - docs/04-economy/Crafting.md
  - docs/04-economy/Resource Flow.md

tags:
  - economy
  - industry
  - production
  - resources
---

# Purpose

This document defines the industrial production layer — the extraction and processing of raw materials into intermediate goods that fuel crafting, construction, and trade.

---

# Overview

Industry covers the resource extraction and primary processing backbone of the economy. Mines yield ore and coal. Smelters convert ore into metals. Forests provide timber. Quarries produce stone. Tanners convert hides into leather. These industries transform the natural environment into civilization's building blocks.

"Industries" is listed as one of the things the player builds over time in the project vision: "roads, industries, trade networks, communities, history." Industry is also a research specialization path alongside agriculture, trade, and religion.

The source material lists these industrial resource categories: coal, steel, glass, leather, cloth.

---

# Design Goals

1. **Visible Extraction.** Mines, quarries, and lumber camps are visible on the map. Resources physically emerge from them and are transported by carts.

2. **Geographical Dependence.** Industry is tied to geography. Iron mines require iron deposits. Quarries require stone outcroppings. The world map determines industrial potential.

3. **Processing Chain Depth.** Raw extraction (mine) feeds primary processing (smelter) feeds secondary processing (blacksmith). The chain deepens as the kingdom advances.

4. **Colony Specialization.** A colony near rich ore veins naturally becomes an industrial center. Its buildings, professions, and trade reflect this.

---

# Non-Goals

- **No infinite resource nodes.** (TODO: This is a design decision not yet confirmed in source material. If nodes are infinite, the non-goal shifts.)
- **No industrial pollution or environmental degradation.** The source material does not mention environmental consequences of industry.
- **No idle clicker mechanics.** Production runs automatically once set up.

---

# Mechanics

## Resource Categories

From the source material, identified industrial resources:

| Category | Raw Resource | Processed Output | Source |
|----------|-------------|-----------------|--------|
| Mining | Coal | (fuel) | Mine |
| Mining | Iron Ore | Steel | Mine → Smelter |
| Mining/Quarrying | Sand | Glass | Quarry → Glassworks |
| Forestry | Timber | (construction, fuel) | Lumber Camp |
| Animal Processing | Hides | Leather | Pasture → Tannery |
| Textiles | (raw fiber) | Cloth | Farm → Textile Workshop |

TODO: This table is reconstructed from resource names in the source material. The full resource tree, including intermediate steps and building requirements, is not defined.

## Extraction Buildings

Industrial production begins with extraction buildings placed near resource nodes on the world map:

- **Mine:** Extracts coal, iron ore, and potentially other minerals
- **Quarry:** Extracts stone, sand, clay
- **Lumber Camp:** Produces timber from forests

These buildings employ villagers with relevant professions (miner, forester, quarryman).

## Processing Buildings

Raw resources flow into processing buildings:

- **Smelter:** Ore → Metal ingots (iron → steel)
- **Glassworks:** Sand → Glass
- **Tannery:** Hides → Leather
- **Textile Workshop:** Raw fiber → Cloth

TODO: Complete building list, upgrade tiers, and input-output ratios are not yet specified.

## Building Upgrades

The source material emphasizes that buildings visually evolve through upgrades. A mine starts as a simple pit and becomes a deep shaft with support structures. A smelter starts as a clay furnace and becomes a stone-and-iron foundry. These visual changes support the **Meaningful Growth** design pillar.

---

## Research

"Industry" is listed as a research specialization path. Research presumably unlocks:
- New resource extraction methods (deep mining, quarry expansion)
- Advanced processing (steel production, fine glasswork)
- Efficiency improvements (faster extraction, higher yields)

See `docs/02-gameplay/Research.md`.

---

# Resource Depletion

TODO: The source material does not specify whether resource nodes are finite or infinite. If finite:
- Mines deplete over time
- Forests can be overharvested (or regrow if managed)
- Quarries are effectively infinite (stone is abundant)

This is a critical design decision that affects colony longevity and the trade system.

---

# Acceptance Criteria

- [ ] All industrial resource types are defined with extraction and processing requirements.
- [ ] Extraction buildings are placeable near appropriate resource nodes on the world map.
- [ ] Processing buildings consume raw resources and produce intermediate goods.
- [ ] Production rates are defined and affected by villager professions and infrastructure.
- [ ] Building upgrades produce visible architectural changes.

---

# Open Questions

- Are resource nodes finite or infinite?
- What are the complete input-output ratios for each processing chain?
- How many building tiers exist per industry type?
- What professions correspond to each industrial building? (Miner, smelter, glassblower, tanner, weaver?)
- Do industries have negative externalities? (Pollution, noise reducing nearby happiness?)
- How does "fuel" (coal) work? Is it consumed in smelting, or abstracted out?

---

# Related Documents

- `docs/04-economy/Economy Overview.md` — High-level economic design
- `docs/04-economy/Crafting.md` — Consumer of industrial outputs
- `docs/04-economy/Resource Flow.md` — Physical resource movement
- `docs/04-economy/Agriculture.md` — Parallel raw material system
- `docs/02-gameplay/Resources.md` — Resource type definitions
- `docs/02-gameplay/Production Chains.md` — Production chain specifications
- `docs/02-gameplay/Buildings.md` — Building placement and upgrades
- `docs/02-gameplay/Research.md` — Industrial research unlocks
