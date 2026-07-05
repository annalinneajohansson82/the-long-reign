---
title: Buildings
id: gameplay/buildings
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on: []
used_by:
  - 02-gameplay/Resources.md
  - 02-gameplay/Production Chains.md
  - 03-simulation/Settlement Growth.md
tags:
  - gameplay
  - buildings
  - settlement
---

# Purpose

Define the building system — what buildings exist, how they are placed, how they evolve, and how they contribute to settlement identity and gameplay.

---

# Overview

Buildings are the primary means by which the player shapes their capital and colonies. The player places buildings on a grid, freely arranging roads, districts, decorations, and functional structures. Buildings visually evolve through upgrades, transforming the capital from a camp into a thriving kingdom over many hours of play.

Buildings are not purely functional output-generators. They contribute to the visual identity of the settlement, the happiness and prestige of villagers, and the emergent specialization of colonies.

---

# Design Goals

- **Visible Growth.** Buildings must visually evolve through upgrades so progress is always apparent.
- **Player Expression.** Grid-based construction, road placement, district planning, and decorating must allow no two kingdoms to look alike.
- **Cozy Complexity.** Rich building systems without stressful optimization or punishment.
- **Emergent Identity.** Colony specialization emerges from which buildings are constructed — not from an explicit specialization menu.

---

# Non-Goals

- The game does not include pre-designed settlement templates that the player fills in.
- Buildings should not be purely cosmetic — decorations serve gameplay functions.
- This document does not define specific building stats, costs, or upgrade trees. Those belong in the relevant economy (`04-economy/`) and simulation (`03-simulation/`) documents.

---

# Building Categories

> **TODO:** The source material does not enumerate building categories. The following types are implied by context but require formal specification:

- **Functional Buildings.** Structures that produce, store, transform, or distribute resources (e.g., mine, warehouse, blacksmith, market).
- **Infrastructure.** Roads, bridges, and logistics structures that improve movement, trade, and efficiency.
- **Civic Buildings.** Buildings that serve the population (e.g., schools — villagers attend school).
- **Decorations.** Aesthetic structures that influence happiness, prestige, and settlement quality. Not purely cosmetic.
- **Housing.** Dwellings for villagers forming households. Implied by the villager lifecycle (move in, form households, marry, have children, age, die).

> **TODO:** Confirm and formalize the complete list of building categories. Each category needs: purpose, placement rules, upgrade path, resource interactions.

---

# Placement

- Construction is **grid-based**.
- Roads are placed by the player; they can pave desire paths (dirt paths naturally created by villager foot traffic) into formal roads.
- Districts are player-defined — the source material does not specify whether districts are explicitly drawn, auto-detected from building clusters, or some other mechanic.
- The player defines the layout of their settlement.

> **Open Question:** How are districts defined? Are they explicitly drawn zones or emergent from building adjacency?

---

# Upgrades

- Buildings visually evolve through upgrades.
- The source material implies upgrades are progressive (camp → village → town → city).
- Specific upgrade tiers, costs, prerequisites, and visual states are not yet specified.

> **TODO:** Define the building upgrade system. Each building type needs: upgrade tiers, visual changes per tier, resource costs, and prerequisites.

---

# Decorations

- Decorations are **meaningful, not purely cosmetic**.
- They influence: **happiness**, **prestige**, and **settlement quality**.
- The source material does not specify numeric values or ranges for these effects.

> **TODO:** Define the decoration effect system — what stats decorations modify, by how much, and how effects stack or cap.

---

# Roads

Roads are one of the defining mechanics of the game. See `03-simulation/Roads and Logistics.md` for full specification. Key points relevant to buildings:

- Villagers naturally create dirt paths ("desire paths") where they repeatedly travel.
- The player can pave those paths into roads.
- Roads improve movement, logistics, trade, and efficiency.
- The simulation teaches the player where roads should go.

---

# Colonies

- One permanent capital. Multiple colonies.
- Each colony develops its own specialization and identity.
- Identity emerges naturally from buildings, geography, production, and history — **no explicit specialization menu**.
- Colonies use the same building system as the capital.

See `05-world/Colonies.md` for colony-specific rules.

---

# Acceptance Criteria

- [ ] Player can place buildings on a grid within a settlement area.
- [ ] Buildings can be upgraded, producing visible visual changes.
- [ ] Decorations affect at least one gameplay stat (happiness, prestige, or settlement quality).
- [ ] Villager desire paths form based on travel patterns and are visible.
- [ ] Player can pave a desire path into a road.
- [ ] A colony's building composition influences its emergent identity.

---

# Open Questions

1. How are districts defined — explicit zones, adjacency detection, or something else?
2. What are the complete building categories and their upgrade tiers?
3. What is the decoration effect system (stats, ranges, stacking/capping rules)?
4. Are there building prerequisites (e.g., "requires a road connection to the capital")?
5. Can buildings be demolished or relocated?
6. Are there building capacity limits per settlement?

---

# Related Documents

- `03-simulation/Roads and Logistics.md` — Road mechanics and logistics
- `03-simulation/Settlement Growth.md` — Settlement evolution
- `03-simulation/Villagers.md` — Villager lifecycle
- `05-world/Capital.md` — Capital-specific rules
- `05-world/Colonies.md` — Colony-specific rules
- `04-economy/` — Economy documents defining resource interactions with buildings
