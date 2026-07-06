---
title: Buildings
id: 02-gameplay/buildings
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-05
depends_on:
  - 00-foundation/glossary
  - 00-foundation/principles
used_by:
  - 02-gameplay/mvp
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

> **Note:** The MVP scopes this down to four building types. The conceptual categories below remain for post-MVP expansion.

- **Town Hall** — The anchor of the settlement. Player-placed first. Upgradable through 6 tiers. Upgrading increases the house cap and unlocks new building types.
- **House** — Dwellings for villagers. Two visual tiers. Cap is determined by town hall level.
- **Stockpile** — Where gathered wood is stored. Has a fixed capacity (50 wood in MVP).
- **Forester's Hut** — Auto-plants new trees nearby on a timer. No upgrade tiers in MVP.

Full building categories defined in the source material (functional buildings, infrastructure, civic buildings, decorations, housing) are scoped for post-MVP.

---

# Placement

- Construction is **grid-based**, single-tile placement.
- The player selects a building type from the toolbar, then clicks a valid empty tile to place it.
- Invalid tiles (occupied, out of bounds) show a visual rejection cue.
- Affordability check happens at toolbar level — unaffordable buildings are greyed out.
- **Demolition/relocation** is not available in the MVP. A placed building is permanent.

---

# Upgrades

- Upgrades are sequential: each tier must be purchased in order, starting from the current tier.
- The player selects the building (or, for the town hall, uses the contextual upgrade prompt) to see upgrade availability.
- Costs escalate per tier — each tier costs 3× the previous tier's wood cost.
- **Post-MVP:** Upgrade prerequisites (research, other buildings) and resource diversification.

## Upgrade Costs

| Building | Tier 1→2 | Tier 2→3 | Tier 3→4 | Tier 4→5 | Tier 5→6 |
|----------|----------|----------|----------|----------|----------|
| Town Hall | 50 | 150 | 450 | 1,350 | 4,050 |
| House | 30 | — | — | — | — |

- Town hall T1 is placed for free (no cost to construct).
- House T1 costs 10 wood to build (not an upgrade — initial construction).
- Stockpile costs 5 wood to build (single tier, no upgrade).
- Forester's Hut costs 20 wood to build (single tier, no upgrade in MVP).

## House Cap by Town Hall Tier

| Town Hall Tier | Max Houses |
|----------------|-----------|
| T1 | 2 |
| T2 | 4 |
| T3 | 6 |
| T4 | 10 |
| T5 | 15 |
| T6 | 25 |

---

# Visual Evolution

All buildings visually evolve through tiers. The guiding principle is **Meaningful Growth**: the visual change must be clearly noticeable and communicate what the upgrade added.

## Visual Pool (MVP)

Each building tier draws from a pool of 3 possible visual variants. Which variant appears is chosen randomly when the building is constructed or upgraded. This means two settlements with the same buildings at the same tier will look visually distinct.

## House T1→T2 Visual Examples (Pool of 3)

1. **Bench addition** — a small wooden bench appears outside the house; villagers using it = higher comfort
2. **Second story** — an upper floor is added to the house structure
3. **Fenced garden** — a small fenced garden with a bush or flower sprouts next to the house

## Town Hall Tiers (Conceptual Direction)

Each tier should feel like a clear step up:
- **T1:** Small tent or lean-to
- **T2:** Wooden hut with a signpost
- **T3:** Larger wooden structure with a peaked roof
- **T4:** Stone foundation, multi-room building
- **T5:** Two-story stone hall with decorative elements
- **T6:** Grand hall with tower banners and distinct silhouette

---

# Decorations

Decorations are scoped for post-MVP. The placeholder note from the source material remains: decorations should influence happiness, prestige, and settlement quality — but these stats are not populated in the MVP.

---

# Roads

Full road system (desire paths, paving, logistics benefits) is scoped for post-MVP.

---

# Colonies

Colonies are scoped for post-MVP.

---

# Acceptance Criteria (MVP)

- [ ] Player can select a building type from the toolbar and place it on a valid empty grid tile.
- [ ] Unaffordable buildings are greyed out in the toolbar.
- [ ] Town hall can be upgraded through 6 tiers, each costing progressively more wood.
- [ ] Town hall upgrade increases the house cap.
- [ ] Houses cap at the town hall's current tier limit; additional houses are blocked until the next upgrade.
- [ ] House upgrade to T2 adds a randomized visual variant (one of 3).
- [ ] Stockpile stores wood up to its capacity (50). Excess wood beyond capacity is lost.
- [ ] Forester's hut plants new trees on empty tiles nearby on a timer.
- [ ] Buildings cannot be demolished or relocated in the MVP.

# Open Questions (MVP-Resolved)

| # | Question | MVP Answer |
|---|----------|------------|
| 1 | How are districts defined? | Post-MVP. Not in scope. |
| 2 | What are the complete building categories and upgrade tiers? | MVP: 4 building types (town hall, house, stockpile, forester's hut). Tiers and costs defined in the Upgrades section above. Post-MVP: full category expansion. |
| 3 | What is the decoration effect system? | Post-MVP. Not in scope. |
| 4 | Are there building prerequisites (e.g., "requires a road connection")? | None in MVP. Town hall upgrade is the only gating mechanic. |
| 5 | Can buildings be demolished or relocated? | No in MVP. Post-MVP consideration. |
| 6 | Are there building capacity limits per settlement? | Yes — house cap by town hall tier. No global building count limit. |

# Open Questions (Post-MVP — Carried Forward)

These remain open for future scope expansion:

1. How are districts defined — explicit zones, adjacency detection, or something else?
2. What are the full building categories (functional, infrastructure, civic, decorations, housing) and their upgrade paths?
3. What is the decoration effect system — what stats, ranges, stacking/capping rules?
4. What building prerequisites exist (research, road connections, population thresholds)?
5. Can buildings be demolished or relocated, and at what cost?
6. Are there global building capacity limits?

---

# Related Documents

- `03-simulation/Roads and Logistics.md` — Road mechanics and logistics
- `03-simulation/Settlement Growth.md` — Settlement evolution
- `03-simulation/Villagers.md` — Villager lifecycle
- `05-world/Capital.md` — Capital-specific rules
- `05-world/Colonies.md` — Colony-specific rules
- `04-economy/` — Economy documents defining resource interactions with buildings
