---
title: Economy Overview
id: economy/economy-overview

version: 0.1.0
status: Draft
author:

last_updated: 2026-07-05

depends_on:
  - docs/01-vision/Design Pillars.md
  - docs/01-vision/Core Gameplay Loop.md
  - docs/03-simulation/Roads and Logistics.md

used_by:
  - docs/04-economy/Trade.md
  - docs/04-economy/Crafting.md
  - docs/04-economy/Agriculture.md
  - docs/04-economy/Industries.md
  - docs/04-economy/Luxury Goods.md
  - docs/04-economy/Resource Flow.md

tags:
  - economy
  - overview
  - design
---

# Purpose

This document defines the high-level design of The Long Reign's economy. It establishes the architectural principles that govern all economic subsystems: production chains, trade, crafting, agriculture, industries, luxury goods, and resource flow.

---

# Overview

The economy is built around deep production chains that unfold over the long term. Resources flow from raw extraction through intermediate processing to finished goods. Nothing teleports — logistics are visible and improvable. Colonies naturally develop economic identities based on geography, buildings, and history. The player refines infrastructure over generations rather than being pressured to optimize immediately.

The economy exists to support the settlement, not to demand constant micromanagement. Depth emerges from interconnected systems rather than punitive mechanics.

---

# Design Goals

1. **Visible Causality.** The player should see why their economy works — carts moving ore to smelters, harvests filling granaries, trade caravans arriving from allied colonies.

2. **Long-Term Progression.** Deep production chains that unfold over many hours. Early-game mills and late-game luxury workshops should feel equally earned.

3. **Emergent Specialization.** Colonies develop distinct economic identities without the player choosing from a menu. A colony near ore deposits naturally becomes a mining town. A coastal colony with fertile land becomes an agricultural exporter.

4. **Cozy Complexity.** Rich systems with low stress. The economy rewards planning and infrastructure investment but never punishes absence. The kingdom patiently waits.

5. **Aligned with the North Star.** Every economic mechanic should make the kingdom feel more alive — not more complicated, not more difficult. More alive.

---

# Non-Goals

- **No stressful optimization.** The economy does not demand perfect ratios, min-max layouts, or punishment for inefficiency.
- **No teleporting resources.** Resources physically traverse roads and sea routes.
- **No monetized economy.** No premium currency, no pay-to-skip production timers, no resource purchases with real money.
- **No offline economic simulation.** Time stops when the game is closed. The economy does not run calculations while the player is away.

---

# Production Chains

The economy is structured around multi-step production chains. Raw resources are extracted, transported, processed, and sometimes combined into higher-tier goods.

Examples of resource categories identified in design discussions:

- **Raw Materials:** coal, iron ore, stone, timber, clay, sand
- **Processed Goods:** steel, glass, leather, cloth, bricks
- **Agricultural Products:** grain, vegetables, livestock, textiles
- **Luxury Goods:** items requiring rare ingredients or advanced processing
- **Crafting Ingredients:** components used in equipment and weapon production
- **Weapon Research Materials:** inputs into the combat technology tree

TODO: Full production chain diagrams need to be designed. The source material lists resource names but does not specify input-output relationships.

---

# Logistics

All economic activity depends on logistics — the physical movement of resources through the kingdom.

Key principle from the design vision: **Nothing teleports.**

Resources move along roads (and presumably sea routes, for islands). Carts carry raw materials from mines to warehouses. Warehouses supply workshops. Workshops supply markets.

Roads improve logistics efficiency: movement speed, trade throughput, and resource availability all benefit from a well-maintained road network.

See: `docs/03-simulation/Roads and Logistics.md` for the desire-path and paving mechanic.
See: `docs/04-economy/Resource Flow.md` for detailed resource movement.

---

# Colony Specialization

Each colony develops its own economic identity organically, shaped by:

- Its geographic location and nearby resources
- The buildings the player constructs
- Its production history
- Its role in the kingdom's trade network

There is no explicit specialization menu. Identity emerges from simulation.

---

# Seasons

Seasons affect the economy. Harvest yields vary by season. Winter imposes hardships that the player can prepare for through infrastructure and stockpiling. Exploration opportunities shift with the seasons.

TODO: Specific seasonal modifiers (yield multipliers, consumption rates, travel penalties) are not yet defined in the source material.

---

# Alignment with Design Pillars

| Pillar | How Economy Supports It |
|--------|------------------------|
| Living Simulation | Resources physically move; villagers work visible jobs; production chains create observable cause and effect. |
| Meaningful Growth | Production chains deepen; infrastructure visibly upgrades; colonies evolve from camps to industrial towns. |
| Player Expression | Colony specialization emerges from player's building choices and infrastructure investments. |
| Cozy Complexity | Rich interconnections without punishment for suboptimal play. |
| Emergent Stories | A colony becoming famous for its smiths, or a winter famine that reshapes trade policy — stories emerge from economic simulation. |
| Respect the Player's Time | No daily login rewards, energy systems, or FOMO mechanics. The economy waits. |

---

# The Six-Month Return Test

After six months away, a returning player should:

- See their roads still running, caravans still moving
- Recognize the identity of each colony from its economic infrastructure
- Feel the weight of their investments — the glassworks they built, the trade routes they established
- Think: "Wow... I built all this."

An economy that requires constant attention fails this test. An economy that rewards long-term planning passes it.

---

# Acceptance Criteria

- [ ] Production chains are specifiable as input-output graphs with clear resource types.
- [ ] Logistics system moves resources visibly between nodes (mine → warehouse → workshop → market).
- [ ] Colony specialization emerges from simulation state without explicit menu choice.
- [ ] Economic shutdown on game close is immediate and clean — no deferred calculations on reload.
- [ ] All resource types are defined in a central resources database (see `docs/02-gameplay/Resources.md`).

---

# Open Questions

- What is the exact scope of the production chain tree? How many tiers deep?
- Are there infinite resources or are nodes exhaustible (mines deplete, forests regrow)?
- How are sea routes implemented for island colonies?
- What is the currency model? (Unit-based barter vs. abstract currency vs. mixed?)
- How are prices determined in trade?
- Do seasons impose demand-side changes (e.g., winter fuel consumption) in addition to supply-side (harvest yields)?

---

# Related Documents

- `docs/01-vision/Design Pillars.md` — Design philosophy governing all systems
- `docs/01-vision/Core Gameplay Loop.md` — Explore → Gather → Return → Expand → Unlock
- `docs/02-gameplay/Resources.md` — Central resource type definitions
- `docs/02-gameplay/Production Chains.md` — Detailed production chain specifications
- `docs/03-simulation/Roads and Logistics.md` — Physical resource movement and infrastructure
- `docs/03-simulation/Seasons.md` — Seasonal effects on the economy
- `docs/00-foundation/Principles.md` — Foundational design principles
- All documents in `docs/04-economy/` — Subsystem details
