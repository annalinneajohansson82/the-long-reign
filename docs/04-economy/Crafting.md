---
title: Crafting
id: 04-economy/crafting

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
  - crafting
  - production
---

# Purpose

This document defines the crafting system — the transformation of raw and processed resources into usable goods, equipment, and items that support exploration, combat, and settlement growth.

---

# Overview

Crafting sits at the intersection of the economy and gameplay systems. Raw materials extracted through industries and agriculture are processed into components. Those components are combined into finished goods — weapons, tools, equipment, decorations, and construction materials.

The source material identifies "crafting ingredients" as an explicit resource category and "weapon research" as an economic output. The crafting system bridges resource extraction and gameplay utility.

---

# Design Goals

1. **Production Chain Terminal.** Crafting is the final stage of production chains — where raw materials become items the player and heroes use.

2. **Visible Transformation.** Buildings visually evolve through upgrades. A workshop should look different when upgraded to produce higher-tier goods.

3. **Research-Gated.** Weapon research (listed as an economy example) suggests crafting tiers are unlocked through the research system, not available from the start.

---

# Non-Goals

- **No crafting-as-busywork.** The source material explicitly rejects stressful optimization and unnecessary micromanagement. Crafting should not require frequent player intervention for routine production.
- **No crafting minigame.** No timing puzzles, quality sliders, or slot-machine mechanics.

---

# Mechanics

## Crafting Ingredients

The source material lists "crafting ingredients" as a distinct resource category. These are presumably intermediate components produced from raw resources and consumed by crafting recipes.

TODO: Inventory of crafting ingredients is not yet defined. No recipes specified.

## Weapon Research

"Weapon research" is listed as an economic activity. This suggests that crafting military equipment is gated behind the research tree. When the player researches a new weapon type (or upgrade tier), workshops gain the ability to produce it.

See `docs/02-gameplay/Research.md` for the technology tree.

## Production Flow

The general flow follows the Visible Logistics pattern:

```
Raw Resource (mine, farm, forest)
  → Transport (cart)
    → Processing (smelter, mill, tannery)
      → Transport (cart)
        → Crafting Workshop (blacksmith, armorer, tailor)
          → Transport (cart)
            → Storage (armory, warehouse) or Equip (hero, unit)
```

---

# Equipment Categories

Based on resource examples in the source material, potential equipment categories include:

- **Metal Goods:** Tools, weapons, armor (from steel, iron)
- **Leather Goods:** Armor, bags, saddles (from leather)
- **Cloth Goods:** Clothing, sails, bandages (from cloth)
- **Glass Goods:** Alchemical equipment, decorative items (from glass)

TODO: These categories are inferred from resource names only. No specific item list exists in the source material.

---

# Building Dependency

Crafting requires specific buildings:

- A **Blacksmith** consumes metal ingots to produce weapons and tools
- A **Workshop** of appropriate tier to produce the targeted item category
- Buildings visually upgrade to reflect expanded capabilities

TODO: Full building list, tiers, and what each produces is not yet specified.

---

# Acceptance Criteria

- [ ] Crafting recipes consume defined ingredients and produce defined outputs.
- [ ] Crafting buildings are placeable and visually upgradeable.
- [ ] Weapon crafting is gated by research progress.
- [ ] Crafted items have measurable gameplay effects.

---

# Open Questions

- What are the specific crafting professions? (Blacksmith, armorer, tailor, alchemist, etc.)
- Is crafting purely production-queue-based (assign job, wait) or is there an active component?
- Can heroes craft, or is crafting exclusively a villager profession?
- Are crafted items unique (named weapons) or generic (steel sword x5)?
- Does crafting quality vary by villager skill?

---

# Related Documents

- `docs/04-economy/Economy Overview.md` — High-level economic design
- `docs/04-economy/Industries.md` — Raw material production
- `docs/04-economy/Resource Flow.md` — Physical resource movement
- `docs/02-gameplay/Resources.md` — Resource type definitions
- `docs/02-gameplay/Production Chains.md` — Production chain specifications
- `docs/02-gameplay/Research.md` — Technology tree and unlocks
- `docs/02-gameplay/Buildings.md` — Building placement and upgrades
