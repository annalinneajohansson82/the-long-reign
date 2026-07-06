---
title: Luxury Goods
id: 04-economy/luxury-goods

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-06

depends_on:
  - docs/04-economy/Economy Overview.md
  - docs/02-gameplay/Resources.md

used_by: []

tags:
  - economy
  - luxury
  - prestige
---

# Purpose

This document defines luxury goods — high-tier products that serve primarily to increase settlement prestige, happiness, and quality rather than fulfilling basic survival or military needs.

---

# Overview

Luxury goods represent the economic ceiling of The Long Reign. They are expensive to produce, require rare ingredients or advanced processing chains, and confer status rather than raw throughput. A kingdom that produces luxury goods demonstrates mastery of its economy — long supply chains, skilled professions, and surplus wealth.

The source material lists "luxury goods" as an explicit economic category. Decorations influence happiness, prestige, and settlement quality. Luxury goods presumably serve a similar role as tradeable or usable items that elevate settlement status.

---

# Design Goals

1. **Long-Term Aspiration.** Luxury goods are not accessible early. They require deep production chains, advanced research, and sometimes rare exploration finds.

2. **Prestige and Happiness.** Luxury goods improve settlement metrics — happiness, prestige, quality — rather than survival metrics (food security, defense).

3. **Emergent Demand.** As settlements grow and prosper, demand for luxury goods should naturally increase. A thriving capital of 500 villagers wants more than a frontier camp of 20.

---

# Non-Goals

- **No mandatory luxury goods.** A kingdom should be sustainable without luxury goods. They enhance, not enable.
- **No combat utility.** Luxury goods do not improve combat stats directly; they affect the simulation layer (happiness → productivity, prestige → immigration).

---

# Mechanics

## Relationship to Decorations

Decorations are a related but distinct system. The source material states:

> "Decorations are meaningful. They influence happiness, prestige, settlement quality. Not purely cosmetic."

Luxury goods may function as:
- Craftable decorations (statues, fountains, monuments)
- Consumable items that provide temporary happiness buffs
- Trade goods that generate prestige when exported

TODO: The exact relationship between luxury goods and decorations is not defined in source material.

## Production Requirements

Luxury goods likely require:
- Rare ingredients obtained through exploration (unlockable regions contain unique resources)
- Advanced processing buildings (high-tier workshops)
- Skilled professions (master crafters)

TODO: Specific luxury goods, their ingredient chains, and their effects are not specified.

## Settlement Effects

The source material identifies three metrics that decorations influence:
- **Happiness** — affects villager behavior and possibly productivity
- **Prestige** — attracts new villagers, heroes, or special events
- **Settlement Quality** — possible composite metric or tier threshold

TODO: Exact numerical model for happiness/prestige/quality is not defined.

---

# Acceptance Criteria

- [ ] Luxury goods are defined as a distinct resource category with unique production requirements.
- [ ] Luxury goods measurably affect settlement happiness and/or prestige.
- [ ] Luxury goods production requires mid-to-late game infrastructure.

---

# Open Questions

- What specific luxury goods exist? (Jewelry, fine wine, silk, art, monuments?)
- What distinguishes a luxury good from a regular crafted good? Rarity, production chain depth, resource exclusivity?
- Do luxury goods have any gameplay function beyond prestige/happiness?
- Are luxury goods tradeable? Do they provide trade advantages?
- Do heroes or special characters desire specific luxury goods (gift mechanics)?

---

# Related Documents

- `docs/04-economy/Economy Overview.md` — High-level economic design
- `docs/04-economy/Crafting.md` — Crafting system (luxury goods are likely a crafting output)
- `docs/02-gameplay/Resources.md` — Resource type definitions
- `docs/02-gameplay/Decorations.md` — Related system: decorations influence happiness/prestige
