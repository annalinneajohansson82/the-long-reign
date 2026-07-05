---
title: "Colonies"
id: 05-world/colonies
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - docs/05-world/World Overview.md
  - docs/05-world/Capital.md
  - docs/05-world/Regions.md
  - docs/03-simulation/Settlement Growth.md
used_by:
  - docs/03-simulation/Roads and Logistics.md
  - docs/04-economy/Trade.md
tags:
  - world
  - colonies
  - settlement
  - design
---

# Purpose

Define the colony system — how colonies are founded, how they develop identity, how they relate to the capital, and the constraints that govern colony design. Colonies are the player's means of expanding their kingdom beyond the capital.

---

# Overview

The player has one permanent capital and may establish multiple colonies in discovered regions. Each colony develops its own specialization and identity over time. There is no explicit specialization menu — identity emerges naturally from the colony's buildings, geography, production, and history.

Colonies use the same building system as the capital. They are connected to the capital via roads. They participate in the kingdom's economy, trade, and logistics network.

Colonies are a vehicle for player expression and emergent storytelling. Two players who found colonies in the same region may end up with entirely different settlements based on their building choices, road networks, and economic priorities.

---

# Design Goals

1. **Emergent Identity.** Colony specialization develops naturally from simulation state — not from a menu selection. A colony near ore deposits becomes a mining town because the player builds mines there, not because they selected "Mining Colony."
2. **Meaningful Expansion.** Founding a colony should feel like a significant milestone. Each colony expands the kingdom's reach and capabilities.
3. **Player Expression.** Which regions the player colonizes, what they build there, and how they connect colonies to the capital creates unique kingdoms.
4. **Visible Growth.** Colonies grow from small outposts into specialized settlements. Their visual evolution should reflect their identity.
5. **Cozy Complexity.** Managing multiple colonies should add depth without stress. The player should enjoy seeing their colonies develop, not feel burdened by micromanagement.

---

# Non-Goals

- Colonies are not identical to the capital. They are secondary settlements.
- Colonies do not have explicit specialization menus. Identity is emergent.
- Colonies are not infinitely expandable. There is a practical limit (though the source material does not specify the maximum).
- This document does not define specific colony founding mechanics, resource costs, or population dynamics.

---

# Colony Founding

The source material does not specify how colonies are founded. The following are open questions:

> **TODO:** Define colony founding mechanics:
> - How does the player initiate colony founding? (Send settlers? Build a colony center? Reach a population threshold?)
> - What are the resource costs for founding a colony?
> - Are there prerequisites? (Road connection to capital? Certain population? Hero-led expedition?)
> - Can colonies be founded in any discovered region, or only in specific locations within regions?
> - Is there a maximum number of colonies?

---

# Colony Identity

Colony identity emerges from four factors. No explicit specialization menu exists.

### Buildings

What the player constructs determines what the colony does. A colony with mines, smelters, and forges becomes an industrial center. A colony with farms, granaries, and mills becomes an agricultural hub.

### Geography

The colony's location shapes its identity. Proximity to resources, coastlines, mountains, or forests influences what is practical to build and what the colony naturally produces.

### Production

What the colony actually produces — driven by local resources, available buildings, and assigned villagers — is the most visible expression of its identity.

### History

Events that occur at the colony are recorded in the Chronicle. A colony that survived a fire, produced a legendary hero, or was the site of a major discovery carries that history forward.

---

# Colony Specialization (Emergent)

The source material describes colonies developing different economic identities. Examples implied by the resource and economy systems:

| Identity | Driving Factors |
|---|---|
| **Mining Colony** | Located near ore deposits. Player builds mines, smelters, and forges. |
| **Agricultural Colony** | Located on fertile land. Player builds farms, granaries, and mills. |
| **Trading Hub** | Located at a crossroads or coastal area. Player builds markets, warehouses, and docks. |
| **Industrial Colony** | Processes raw materials from other colonies. Player builds workshops, factories, and refineries. |
| **Religious/Cultural Center** | Player builds temples, monuments, and cultural buildings. Implied by the research tree including "religion." |

> **TODO:** Formalize the colony identity categories. Determine whether identities are purely descriptive or whether they have mechanical implications (e.g., bonuses, trade advantages, unique Chronicle entries).

---

# Capital ↔ Colony Connection

Colonies are connected to the capital via roads. Resources physically move between the capital and colonies — nothing teleports.

The source material does not specify:

- Whether road connections between capital and colonies are automatic or player-built
- Whether desire paths can form between settlements
- How resource transfer works between capital and colonies (shared pool, trade routes, manual transfers)
- What happens if a road connection is severed

> **TODO:** Define capital-colony logistics. See `docs/03-simulation/Roads and Logistics.md` and `docs/04-economy/Resource Flow.md`.

---

# Colony Growth

Colonies grow through the same mechanics as the capital:

- Building construction and upgrades
- Population growth (villager immigration and births)
- Road network expansion
- Economic development

However, colonies are distinct from the capital in that they have a specialization focus. The capital is the diverse hub; colonies are specialized outposts.

> **TODO:** Define whether colonies have the same settlement tiers as the capital (Camp → Village → Town → City) or a different progression track.

---

# Colony and the Chronicle

Colony founding is a major Chronicle event. Other colony events recorded may include:

- Significant growth milestones
- Disasters (fires, revolts, abandonment)
- Trade route establishment
- Hero association (a hero settling in or leading a colony)

See `docs/03-simulation/Chronicle.md` for the Chronicle specification.

---

# Colony Failure States

Colonies are subject to the same failure states as the capital:

| Failure | Description |
|---|---|
| **Revolt** | Unhappy colony population may rebel. |
| **Abandonment** | Colonists may leave if conditions deteriorate. |
| **Fires** | Disasters that damage or destroy colony buildings. |
| **Decline** | General deterioration from neglect. |

> **TODO:** Define what happens when a colony is abandoned. Does it become a ruin? Can it be recolonized? Does it remain on the map as a point of interest?

---

# Acceptance Criteria

- [ ] The player can found multiple colonies in discovered regions.
- [ ] Each colony develops a distinct identity based on its buildings, geography, production, and history.
- [ ] There is no explicit specialization menu — identity is emergent.
- [ ] Colonies are connected to the capital via roads.
- [ ] Colony founding is recorded in the Chronicle.
- [ ] Colonies use the same building system as the capital.
- [ ] Colonies are subject to the same failure states as the capital.

---

# Open Questions

1. How does the player found a colony? (Send settlers? Build a colony center? Population threshold?)
2. What are the resource costs for founding a colony?
3. What is the maximum number of colonies?
4. How does population distribute between capital and colonies?
5. Are there specific locations within regions where colonies can be founded, or can the player choose any tile?
6. How are roads between capital and colonies created? Do desire paths form between settlements?
7. How do resources transfer between capital and colonies? Shared pool? Trade routes? Manual?
8. What happens to an abandoned colony? Can it be recolonized?
9. Do colonies have the same settlement tier progression as the capital?
10. Can colonies be renamed?
11. Can the player decommission or relocate a colony?

---

# Related Documents

- `docs/05-world/World Overview.md` — World structure
- `docs/05-world/Capital.md` — Capital specification and capital-colony relationship
- `docs/05-world/Regions.md` — Regions where colonies are founded
- `docs/05-world/Points of Interest.md` — Points of interest near colonies
- `docs/03-simulation/Settlement Growth.md` — Settlement growth mechanics
- `docs/03-simulation/Roads and Logistics.md` — Roads connecting colonies to the capital
- `docs/03-simulation/Chronicle.md` — Colony events recorded in history
- `docs/03-simulation/Villagers.md` — Colonists and population
- `docs/02-gameplay/Buildings.md` — Building system used by colonies
- `docs/04-economy/Economy Overview.md` — Colony specialization and economic identity
- `docs/04-economy/Trade.md` — Trade between colonies and the capital
- `docs/01-vision/Design Pillars.md` — Player Expression, Emergent Stories, Cozy Complexity
- Source: *The Long Reign — Project Handoff* § Colonies, § Settlement, § Roads, § Failure
- Source: *Project Genesis — Brainstorming History* § Colonies, § The Settlement Becomes the Main Character, § Visible Logistics