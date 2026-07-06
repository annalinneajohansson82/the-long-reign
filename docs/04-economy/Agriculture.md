---
title: Agriculture
id: 04-economy/agriculture

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-06

depends_on:
  - docs/04-economy/Economy Overview.md
  - docs/03-simulation/Seasons.md
  - docs/02-gameplay/Resources.md

used_by:
  - docs/04-economy/Resource Flow.md

tags:
  - economy
  - agriculture
  - food
  - seasons
---

# Purpose

This document defines the agriculture system — food production, farming, livestock, and the seasonal rhythms that govern harvest cycles and food security.

---

# Overview

Agriculture is the foundation of the kingdom's survival. A kingdom without food cannot grow. Agriculture feeds villagers, supports population growth, and produces raw materials (textiles, animal products) that feed into other production chains.

Seasons directly affect agriculture. Harvests yield bountifully in favorable seasons and barely sustain during winter hardships. The player builds infrastructure — farms, granaries, mills — to smooth seasonal variability and ensure the kingdom never starves.

> **TODO:** Not confirmed by 00-foundation/01-vision — requires Creative Director confirmation.

The source material lists "agriculture" as both an economic category and a research specialization path. A colony with fertile land, farms, and mills naturally becomes an agricultural center.

---

# Design Goals

1. **Seasonal Rhythm.** Agriculture follows seasonal cycles. Planting, growing, and harvesting are tied to the seasonal calendar.

2. **Food Security as Infrastructure Challenge.** Starvation is a failure state, but the solution is infrastructure (granaries, mills, roads) not micromanagement of individual fields.

3. **Colony Specialization.** Colonies with fertile geography naturally become agricultural exporters. This feeds into the trade and colony identity systems.

4. **Visible Harvests.** Fields should visibly change with the seasons — seedlings in spring, full crops in summer, harvested stubble in autumn, snow-covered in winter.

---

# Non-Goals

- **No individual field micromanagement.** The player does not manage crop rotation, soil quality, or pest control per field.
- **No starvation as punishment for absence.** Time stops when the game is closed. The player does not return to a dead kingdom.
- **No nutritional complexity.** Food is abstracted to a resource pool, not a nutritional simulator with vitamins and food groups.

---

# Mechanics

## Crop Types

TODO: Specific crop types are not listed in the source material. The design implies agricultural diversity (grain, vegetables, textile crops), but no enumeration exists.

## Seasonal Effects

Seasons directly affect agriculture:

| Season | Effect |
|--------|--------|
| Spring | Planting season. Fields become active. |
| Summer | Growth season. Crops mature. Possible droughts? |
| Autumn | Harvest season. Maximum yield. |
| Winter | Hardship. No new harvests. Relies on stored food. |

TODO: Specific seasonal modifiers (yield multipliers, growth duration, winter consumption rates) are not defined.

The source material states:
> "Seasons affect gameplay. Both positive and negative. Examples include: harvests, winter hardships, exploration opportunities."

## Food Storage

Granaries and warehouses store food surpluses from harvest seasons to cover winter deficits. Insufficient storage during a bountiful autumn wastes potential. Insufficient food during a harsh winter causes consequences — the source material mentions "decline" and "abandonment" as failure states arising from poor management.

## Livestock

TODO: The source material lists "leather" and "cloth" as resource categories, implying animal husbandry and possibly textile crops (flax, cotton, wool). However, no explicit livestock mechanic is described.

## Processing Chain

Agricultural products feed into processing:

```
Farm / Pasture
  → Harvest (seasonal)
    → Granary (storage)
      → Mill (processing: grain → flour)
        → Bakery / Kitchen (food)
          → Market (consumption)

Farm / Pasture
  → Animal products (wool, hides)
    → Tannery (leather)
    → Textile Workshop (cloth)
```

---

## Research

"Agriculture" is listed as a research specialization path. Research presumably unlocks:
- New crop types
- Improved yields
- Advanced processing buildings (water mills, bakeries)
- Food preservation techniques for winter

See `docs/02-gameplay/Research.md`.

---

# Failure States

Poor agricultural management has consequences. The source material identifies failure modes:

- **Decline:** Gradual population loss from food shortages
- **Abandonment:** Villagers leave if conditions are unsustainable
- **Revolt:** Possible if shortages persist and morale collapses

These should emerge naturally rather than through arbitrary game-over screens.

---

# Acceptance Criteria

- [ ] Food is tracked as a resource pool consumed by villagers over time.
- [ ] Harvest yields vary by season with defined multipliers.
- [ ] Food storage capacity (granaries) is a buildable, upgradable infrastructure.
- [ ] Food deficits produce visible, escalating consequences.
- [ ] Colonies can specialize as agricultural exporters.

---

# Open Questions

- What are the specific crop types?
- What is the villager food consumption rate per unit of game time?
- How is livestock modeled? (Static herd size, breeding, slaughter mechanics?)
- Do crop diseases, pests, or weather events (droughts, floods) exist as random events?
- Is food variety relevant (happiness bonus for diverse diet) or purely a calorie abstraction?
- Are there fishing or hunting mechanics as food sources?

---

# Related Documents

- `docs/04-economy/Economy Overview.md` — High-level economic design
- `docs/04-economy/Trade.md` — Agricultural surplus and trade
- `docs/04-economy/Resource Flow.md` — Physical movement of food
- `docs/03-simulation/Seasons.md` — Seasonal mechanics
- `docs/03-simulation/Villagers.md` — Villager needs and consumption
- `docs/02-gameplay/Research.md` — Agricultural research unlocks
