---
title: Trade
id: economy/trade

version: 0.1.0
status: Draft
author:

last_updated: 2026-07-05

depends_on:
  - docs/04-economy/Economy Overview.md
  - docs/03-simulation/Roads and Logistics.md

used_by:
  - docs/04-economy/Resource Flow.md

tags:
  - economy
  - trade
  - colonies
---

# Purpose

This document defines the trade system — the mechanics by which resources move between colonies, between the kingdom and external entities, and how trade networks contribute to emergent colony identities.

---

# Overview

Trade is an organic consequence of colony specialization. When one colony produces surplus iron and another produces surplus grain, trade should emerge naturally. Trade networks grow as roads improve and colonies develop distinct economic identities.

Trade is not a menu-driven minigame. It is a simulation layer that rewards infrastructure investment and geographical awareness.

---

# Design Goals

1. **Emergent Trade Routes.** Trade routes form when colonies have complementary resource surpluses and deficits, not because the player assigns them from a UI.

2. **Infrastructure-Dependent.** Trade throughput scales with road quality. Paved roads between colonies increase trade volume. Desire paths that remain unpaved limit it.

3. **Visible Caravans.** Trade should be observable — carts traveling between colonies, goods loading and unloading at market squares.

4. **Colony Identity.** A colony known as a "trading hub" should earn that reputation because it genuinely sits at the intersection of multiple trade routes, not because the player selected a "market town" designation.

---

# Non-Goals

- **No external market simulation.** The source material does not describe global markets with fluctuating prices, competing AI kingdoms, or external economic forces. Trade is internal to the kingdom until specified otherwise.
- **No trade UI micromanagement.** The player does not manually set prices, negotiate treaties, or manage trade fleets. (TODO: if diplomacy or external trade with other factions is added, this non-goal may need revision.)
- **No trade-as-currency.** Trade is resource-for-resource or resource-for-need; the source material does not specify an abstract currency system.

---

# Mechanics

## Trade Route Formation

Trade routes form between colonies (and between colonies and the capital) when:

- One settlement has a resource surplus
- Another settlement has a deficit of that resource
- A road (or sea route) connects them

TODO: Exact threshold for "surplus" and "deficit" — is it a ratio of production to consumption, an inventory cap, or a priority system?

## Road Quality Impact

Road quality directly affects trade throughput:

- **Desire Path (unpaved):** Minimal trade. Villagers create these paths naturally by walking.
- **Paved Road:** Full trade throughput. Player must actively upgrade.

See `docs/03-simulation/Roads and Logistics.md` for the desire-path paving mechanic.

## Caravan Visibility

Trade caravans are visible entities that travel between settlements. They carry physical cargo from source warehouses to destination markets or warehouses.

This supports the **Visible Logistics** principle: nothing teleports.

---

# Colony Specialization Through Trade

Colonies develop trade identities over time based on:

| Factor | Example Outcome |
|--------|----------------|
| Geography (coastal) | Port town, maritime trade |
| Geography (crossroads) | Trading hub, caravan stop |
| Production surplus | Exporter of steel, grain, cloth |
| Production deficit | Importer, dependent colony |
| Built infrastructure | Markets, warehouses, docks attract trade |

No menu-based designation. Reputation emerges from simulation data.

---

# Trade Networks

The capital is the central hub of the kingdom's trade network. Colonies trade with the capital and, where roads connect them, with each other.

Island colonies presumably use sea routes, but the source material does not specify naval logistics.

TODO: Define sea trade mechanics — ships, docks, naval routes, vulnerability to storms or blockades.

---

# Acceptance Criteria

- [ ] Trade routes form automatically based on supply/demand differentials between connected settlements.
- [ ] Trade caravans are visible entities moving along roads.
- [ ] Road upgrades increase trade throughput measurably.
- [ ] Colony "trade hub" identity can be inferred from simulation data.
- [ ] No manual trade route configuration required.

---

# Open Questions

- Are there external trade partners (other kingdoms, independent cities, merchant guilds) or is all trade internal?
- Is there a currency? If so, how is value determined?
- How are sea trade routes implemented?
- Can trade be disrupted? (Bandits, weather, war — the source material mentions dangers on the world map but does not specify if these interact with trade.)
- What happens when a trade route's source colony is abandoned or destroyed?

---

# Related Documents

- `docs/04-economy/Economy Overview.md` — High-level economic design
- `docs/04-economy/Resource Flow.md` — Physical resource movement
- `docs/03-simulation/Roads and Logistics.md` — Infrastructure and movement
- `docs/05-world/Colonies.md` — Colony mechanics and identity
