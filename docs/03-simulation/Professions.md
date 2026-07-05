---
title: "Professions"
id: 03-simulation/professions
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - "Villagers.md"
used_by:
  - "Heroes.md"
  - "Settlement Growth.md"
tags:
  - simulation
  - professions
  - economy
  - villagers
---

# Purpose

Defines the profession system: how villagers and heroes acquire, practice, and progress through professions. Professions connect the simulation layer to the economy layer by determining what labor and services are available to the kingdom.

---

# Overview

Villagers learn professions after attending school. Heroes also have professions as part of their progression. The source material establishes professions as a core lifecycle step for villagers and a progression axis for heroes.

The source material describes the following economic activities, which imply corresponding professions:

- Coal production
- Steel production
- Glass production
- Leatherworking
- Cloth production
- Agriculture
- Luxury goods
- Trade
- Crafting ingredients
- Weapon research

The technology tree includes branches for agriculture, trade, industry, and religion — each of which implies profession specializations.

---

# Design Goals

1. **Education-gated.** Villagers must attend school before learning a profession. Schools are meaningful buildings.
2. **Visible contribution.** Each profession should produce visible outputs in the world (goods moving, buildings operating).
3. **Emergent identity.** Settlement and colony identity emerges partially from the professions practiced there.
4. **Progression depth.** Heroes progress through professions as a primary advancement axis alongside levels.

---

# Non-Goals

- The player does not manually assign every villager to a profession (specific automation/assignment mechanics TBD).
- Professions are not combat classes — combat is primarily automatic and hero-focused.

---

# Profession Categories

The following categories are inferred from the source material's economic examples and research branches. Individual professions within each category are not yet specified.

| Category | Source Reference | Example Professions (TODO) |
|----------|-----------------|----------------------------|
| Agriculture | "agriculture" in economy and research | Farmer, Herder |
| Mining / Extraction | "coal" | Miner |
| Metallurgy | "steel" | Blacksmith, Steelworker |
| Glassmaking | "glass" | Glassblower |
| Leatherworking | "leather" | Tanner, Leatherworker |
| Textiles | "cloth" | Weaver, Tailor |
| Trade | "trade" in economy and research | Merchant, Trader |
| Luxury Goods | "luxury goods" | Jeweler, Artisan |
| Crafting | "crafting ingredients" | Alchemist, Craftsperson |
| Weapon Research | "weapon research" | Weaponsmith, Researcher |
| Religion | "religion" in research tree | TODO |

---

# Profession Acquisition

1. Villager attends school (education required).
2. Villager learns a profession.
3. Villager practices the profession and contributes labor.

Heroes acquire professions as part of their progression system (see `Heroes.md`).

---

# Integration Points

- **Villagers:** Professions are a lifecycle step. See `Villagers.md`.
- **Heroes:** Heroes have professions alongside levels. See `Heroes.md`.
- **Settlement Growth:** Profession distribution contributes to settlement identity. See `Settlement Growth.md`.
- **Economy:** Professions drive production chains. See `docs/04-economy/`.
- **Research:** Technology tree unlocks new professions or profession upgrades. See `docs/02-gameplay/Research.md`.

---

# Open Questions

- [ ] What is the complete list of professions?
- [ ] Can a villager change professions during their lifetime?
- [ ] How does profession selection work? (Assigned by player? Automatic based on demand?)
- [ ] What are the progression tiers within a profession? (Apprentice → Master?)
- [ ] How does profession affect a villager's daily schedule and visible behavior?
- [ ] Are professions limited by building availability? (e.g., no blacksmith without a forge)
- [ ] How does profession relate to colony specialization?

---

# Related Documents

- `Villagers.md` — Villager lifecycle
- `Heroes.md` — Hero professions and progression
- `Settlement Growth.md` — How professions shape settlement identity
- `docs/02-gameplay/Research.md` — Technology tree
- `docs/04-economy/` — Production chains and economy
- Source: *The Long Reign — Project Handoff* § Villagers, § Economy, § Research, § Heroes
- Source: *Project Genesis — Brainstorming History* § Living Simulation
