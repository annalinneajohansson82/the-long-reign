---
title: Resources
id: 02-gameplay/resources
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on: []
used_by:
  - 02-gameplay/Production Chains.md
  - 02-gameplay/Buildings.md
  - 04-economy/Resource Flow.md
  - 04-economy/Economy Overview.md
tags:
  - gameplay
  - resources
  - economy
---

# Purpose

Define the resource system — what resources exist, how they are gathered, how they flow through the kingdom, and their role in the core gameplay loop.

---

# Overview

Resources are the connective tissue of the game's systems. The core gameplay loop revolves around exploring the world, gathering resources, returning to the settlement, and expanding. Resources are gathered primarily through exploration and settlement production. They flow through the kingdom via visible logistics — nothing teleports.

The resource system supports long-term progression without stressful optimization.

---

# Design Goals

- **Visible Logistics.** Resources physically move through the kingdom (mine → cart → warehouse → blacksmith → market). The player can literally watch infrastructure improvements.
- **Cozy Complexity.** Deep resource chains exist, but the game does not demand stressful optimization or perfect efficiency.
- **Emergent Specialization.** Colony identity emerges partly from what resources a colony produces and trades.
- **Long-Term Progression.** Resource chains support many hours of incremental growth.

---

# Non-Goals

- Resources do not teleport between buildings or settlements.
- The game does not include energy systems or premium currencies.
- This document does not define specific resource quantities, production rates, or balance values.

---

# Resource Types

The source material provides examples of resource categories. The complete taxonomy is not yet specified.

## Raw Resources

Materials gathered directly from the environment through exploration or extraction buildings.

Examples from source material:
- **Agriculture.** Crops and foodstuffs.
- **Coal.** Mined fuel resource.

> **TODO:** Define the complete set of raw resources. Each needs: source (mine, farm, gather), storage building, and transport method.

## Processed Resources

Materials created by transforming raw resources through production chains.

Examples from source material:
- **Steel.** Produced from coal and iron (iron implied but not explicitly listed).
- **Glass.**
- **Leather.**
- **Cloth.**

> **TODO:** Define the complete set of processed resources. Each needs: raw inputs, required building, production time, and outputs.

## Luxury Goods

High-tier processed items with special functions.

Examples from source material: luxury goods (no specific examples listed).

> **TODO:** Define luxury goods — what they are, how they differ from regular processed resources, and their gameplay role.

## Crafting Ingredients

Items used in specific crafting recipes.

Mentioned in source material; no examples listed.

> **TODO:** Define crafting ingredients and their relationship to the production chain system.

## Trade Goods

Resources intended for exchange between settlements or with external trade partners.

Mentioned in source material as part of trade networks and trade routes.

> **TODO:** Define trade goods and how they differ from internally-consumed resources.

---

# Resource Flow

See `04-economy/Resource Flow.md` for the full specification.

Key principles:
- Resources physically move from source to destination.
- The chain is: **Mine/Harvest → Cart → Warehouse → Production Building → Market**.
- Improving logistics produces visible changes (faster carts, better roads, more efficient movement).
- Resource flow is a core part of the visible logistics philosophy.

---

# Gathering

Resources are gathered through two primary methods:

1. **Exploration.** The player ventures into the world, discovers resource nodes, and returns with gathered materials. This is part of the core gameplay loop: Explore → Gather Resources → Return Home.
2. **Settlement Production.** Buildings within the settlement automatically produce resources based on assigned villagers, available inputs, and building upgrades.

> **TODO:** Define exploration gathering mechanics — is it automatic on discovery, manual player action, hero-led, or something else?

---

# Storage

The source material mentions **warehouses** as part of the logistics chain.

> **TODO:** Define storage mechanics — capacity, per-settlement vs. global, overflow behavior, and whether storage buildings have upgrade tiers.

---

# Acceptance Criteria

- [ ] Resources can be gathered through exploration and settlement production.
- [ ] Resources physically move between buildings — no teleportation.
- [ ] Different resource types (raw, processed, luxury, crafting, trade) are distinguishable in the UI and game systems.
- [ ] Resource flow is visually observable.

---

# Open Questions

1. What is the complete taxonomy of resources?
2. How does exploration gathering work mechanically (automatic, manual, hero-led)?
3. What are the storage rules (capacity, overflow, per-settlement vs. shared)?
4. How do resources transfer between the capital and colonies?
5. Are resources needed for building construction, villager consumption, or both?

---

# Related Documents

- `02-gameplay/Production Chains.md` — How resources transform
- `02-gameplay/Exploration.md` — Exploration gathering
- `04-economy/Resource Flow.md` — Resource movement mechanics
- `04-economy/Economy Overview.md` — Economy system overview
- `03-simulation/Roads and Logistics.md` — How infrastructure affects resource flow
