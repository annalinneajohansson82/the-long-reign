---
title: "Settlement Growth"
id: 03-simulation/settlement-growth
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-06
depends_on:
  - "Villagers.md"
  - "Families.md"
  - "Roads and Logistics.md"
used_by:
  - "Chronicle.md"
tags:
  - simulation
  - settlements
  - colonies
  - growth
  - construction
---

# Purpose

Defines how settlements grow, evolve, and develop identity over time. The settlement is the highest-priority system in the game — it is the heart of the experience. This document specifies growth mechanics, colony development, and the factors that shape settlement identity.

---

# Overview

The player starts with a handful of settlers and an untouched frontier. Over many hours they build a capital, colonies, roads, industries, trade networks, communities, and history. The primary emotional goal is that a player returns after months away and thinks: "Wow... I built all this."

The settlement — not combat — is the heart of the game.

---

# Design Goals

1. **Visible growth.** Progress should always be visible. Research changes architecture. Roads improve logistics. Villages become cities. Children become adults. The kingdom physically evolves.
2. **Player expression.** Grid-based construction, road placement, district planning, decorating, and colonies should ensure no two kingdoms look alike.
3. **Cozy complexity.** Rich systems with low stress. Depth through interaction rather than punishment.
4. **Emergent identity.** Settlement and colony identity emerges from buildings, geography, production, and history — not from explicit specialization menus.
5. **The Six-Month Return Test.** Settlement growth should make the player smile when returning after a long absence.

---

# Non-Goals

- Growth is not purely numerical — it must be visually and mechanically visible.
- Settlement identity is not chosen from a menu.
- The game is not a competitive or efficiency-maximizing city builder.

---

# The Capital

The player has one permanent capital. It grows from a camp into a thriving kingdom over the course of the game.

### Construction

Players can freely build:

| Element | Description |
|---------|-------------|
| Roads | Paved from desire paths or placed directly. See `Roads and Logistics.md`. |
| Districts | Zoned or planned areas of the settlement. |
| Decorations | Meaningful objects that influence happiness, prestige, and settlement quality. |
| Buildings | Functional structures that evolve visually through upgrades. |

### Visual Evolution

Buildings visually evolve through upgrades. The capital's appearance should transform as the player progresses, reflecting research advancement, economic development, and population growth.

---

# Colonies

In addition to the permanent capital, the player can establish multiple colonies.

### Colony Identity

Each colony develops its own specialization and identity. There is no explicit specialization menu — identity emerges naturally from:

| Factor | Description |
|--------|-------------|
| Buildings | What structures exist in the colony. |
| Geography | The colony's location and natural surroundings. |
| Production | What the colony produces (driven by local resources and buildings). |
| History | Events that occurred at the colony, recorded in the Chronicle. |

### Capital ↔ Colony Relationship

Colonies are connected to the capital via roads. The source material does not specify detailed colony founding mechanics, resource requirements, or population dynamics.

---

# Decoration System

Decorations are meaningful, not purely cosmetic.

| Effect | Description |
|--------|-------------|
| Happiness | Decorations improve villager happiness. |
| Prestige | Decorations increase settlement prestige. |
| Settlement quality | Decorations contribute to overall settlement quality. |

---

# Growth Factors

The following factors contribute to settlement growth, derived from the source material:

- Population (villager immigration and births)
- Building construction and upgrades
- Road network expansion
- Research unlocks
- Economic development (production chains, trade)
- Decoration quality

---

# Failure States

Poor management has consequences that emerge naturally rather than through arbitrary game-over screens:

| Failure | Description |
|---------|-------------|
| Revolt | Unhappy population may rebel. |
| Abandonment | Villagers may leave if conditions deteriorate. |
| Fires | Disasters that damage or destroy buildings. |
| Decline | General settlement deterioration from neglect. |

> **TODO:** Not confirmed by 00-foundation/01-vision — requires Creative Director confirmation. These specific failure states are not named in `00-foundation/` or `01-vision/`. Note that `01-vision/Respect the Player's Time.md` explicitly prohibits "decay, atrophy, or degradation of the kingdom while the player is away" — any implementation of Abandonment or Decline must be confined to consequences of active in-game management and must not trigger from the passage of real-world time while the game is closed.

---

# Integration Points

- **Villagers:** Population drives settlement growth. See `Villagers.md`.
- **Families:** Births contribute to population growth. See `Families.md`.
- **Roads and Logistics:** Roads are constructed within and between settlements. See `Roads and Logistics.md`.
- **Chronicle:** Colony founding and settlement milestones are recorded. See `Chronicle.md`.
- **Buildings:** Building construction and upgrades are the primary growth mechanic. See `docs/02-gameplay/Buildings.md`.
- **Research:** Technology unlocks new buildings and visual evolution. See `docs/02-gameplay/Research.md`.
- **Economy:** Production chains drive economic growth. See `docs/04-economy/`.

---

# Open Questions

- [ ] How does a colony get founded? (Send settlers? Build a colony center? Reach a population threshold?)
- [ ] What is the maximum number of colonies?
- [ ] How does population distribute between capital and colonies?
- [ ] What are the specific visual evolution stages for buildings?
- [ ] How does district planning work? (Zoning tools? Organic growth?)
- [ ] What is the grid-based construction system? (Tile size? Free placement? Snap-to-grid?)
- [ ] How do decorations quantitatively affect happiness, prestige, and settlement quality?
- [ ] What triggers fires, revolts, abandonment, and decline?
- [x] Are there settlement-level milestones (e.g., "village" → "town" → "city")? — **Partially resolved:** Per `00-foundation/Glossary.md` (Capital entry), the capital "grows from a camp into a thriving kingdom over the course of the game," confirming that growth stages exist conceptually. Specific milestone names/tiers between "camp" and "thriving kingdom" are not specified.
- [ ] How does research visually change architecture?

---

# Related Documents

- `Villagers.md` — Population and villager lifecycle
- `Families.md` — Population growth through births
- `Roads and Logistics.md` — Road construction and logistics
- `Chronicle.md` — Historical recording of settlement events
- `docs/02-gameplay/Buildings.md` — Building specification
- `docs/02-gameplay/Research.md` — Technology and visual evolution
- `docs/02-gameplay/Exploration.md` — World map and colony locations
- `docs/04-economy/` — Production chains
- `docs/01-vision/Vision Statement.md` — Emotional goal of settlement growth
- `docs/01-vision/Design Pillars.md` — Living Simulation, Meaningful Growth, Player Expression
- Source: *The Long Reign — Project Handoff* § Settlement, § Colonies, § Failure, § Decorations
- Source: *Project Genesis — Brainstorming History* § The Settlement Becomes the Main Character, § Colonies
