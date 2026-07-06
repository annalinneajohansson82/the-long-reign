---
title: "Capital"
id: 05-world/capital
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-05
depends_on:
  - docs/05-world/World Overview.md
  - docs/03-simulation/Settlement Growth.md
  - docs/02-gameplay/Buildings.md
used_by:
  - docs/05-world/Colonies.md
  - docs/03-simulation/Roads and Logistics.md
tags:
  - world
  - capital
  - settlement
  - design
---

# Purpose

Define the capital — the player's primary and permanent settlement. This document specifies the capital's role in the world, its relationship to colonies, its growth trajectory, and the constraints that govern its design. The capital is the heart of the kingdom.

---

# Overview

The player has exactly one permanent capital. It begins as a camp with a handful of settlers on an untouched frontier and grows over many hours into a thriving kingdom. The capital is the anchor of the player's experience — the place they return to, the place they build, and the place that carries the emotional weight of the game.

The capital cannot be moved or replaced. It is the persistent center of the player's kingdom. All colonies are connected to the capital. All roads ultimately lead back to it.

The capital is the settlement that the player should look at after months away and think: "Wow... I built all this."

---

# Design Goals

1. **Permanent Anchor.** The capital is the one constant in the player's kingdom. It should feel like home.
2. **Visible Growth.** The capital must physically evolve — from a camp to a village to a town to a thriving city. Buildings visually change through upgrades.
3. **Player Expression.** The capital's layout is player-defined. No two capitals should look alike.
4. **Emotional Weight.** The capital is where the player's Chronicle lives, where heroes return, where the kingdom's story is centered.
5. **System Hub.** The capital is where the player manages their kingdom — it is the primary interface for construction, research, trade, and governance.

---

# Non-Goals

- The capital is not one of many equal settlements. It is unique and permanent.
- The capital is not themed or specialized by an explicit menu. Its identity emerges from the player's choices.
- The capital is not a "level" with a completion state. It continually evolves.
- This document does not define specific building lists, upgrade trees, or construction costs.

---

# Capital Growth

The capital grows from a camp into a thriving kingdom. The source material implies a progression of settlement scale:

```
Camp → Village → Town → City → Thriving Kingdom
```

> **TODO:** Define the specific settlement tiers and their thresholds. What triggers "Camp" → "Village"? Population? Building count? Research milestones? Chronicle events?

The capital grows through:

| Growth Driver | Description |
|---|---|
| **Construction** | Building and upgrading structures on a grid. |
| **Population** | Villagers moving in, forming households, and having children. |
| **Roads** | Paving desire paths and connecting districts. |
| **Research** | Unlocking new building types, visual upgrades, and capabilities. |
| **Decorations** | Placing meaningful objects that improve happiness, prestige, and quality. |
| **Economy** | Production chains and trade that drive prosperity. |

See `docs/03-simulation/Settlement Growth.md` for the full settlement growth specification.

---

# Capital Placement

The capital is placed at the start of the game in the starting region. The source material describes the starting context as "a handful of settlers and an untouched frontier."

> **TODO:** Define the starting region. What is it called? What is its geography? What initial resources are available? Is the starting location fixed or chosen by the player?

---

# Capital Construction

The player freely builds within the capital on a grid. Construction elements include:

| Element | Description |
|---|---|
| **Roads** | Paved from desire paths or placed directly. Improve movement, logistics, trade, and efficiency. |
| **Districts** | Planned areas within the capital. The mechanic for defining districts is not yet specified. |
| **Decorations** | Meaningful objects that influence happiness, prestige, and settlement quality. |
| **Buildings** | Functional structures that evolve visually through upgrades. |

See `docs/02-gameplay/Buildings.md` for the building system specification.

---

# Capital Visual Evolution

Buildings visually evolve through upgrades. The capital's appearance transforms as the player progresses. The source material describes the desired style as:

- Cozy fantasy
- Frontier colony (initially)
- Inspired by the atmosphere of Heroes of Might and Magic II–IV while remaining visually original

> **TODO:** Define the specific visual evolution stages for the capital. What changes at each tier? How does architecture style progress? What are the visual cues that distinguish a "camp" from a "village" from a "city"?

---

# Capital and the Chronicle

The capital is the primary subject of the Chronicle. Events that occur in or affect the capital are recorded as history:

- Colony foundings (expeditions launched from the capital)
- Hero achievements (heroes based in or returning to the capital)
- Technological advances (research conducted at the capital)
- Disasters (fires, revolts, decline)

See `docs/03-simulation/Chronicle.md` for the Chronicle specification.

---

# Capital ↔ Colony Relationship

The capital is connected to all colonies via roads. Resources flow between the capital and colonies. The capital is the default destination for returning expeditions.

> **TODO:** Define the mechanics of capital-colony interaction:
> - Do resources transfer automatically between capital and colonies?
> - Are there dedicated trade routes, or is it a shared pool?
> - Can the player manage colonies from the capital UI?
> - What happens if a road connection to a colony is severed?

---

# Failure States

The capital is subject to the same failure states as all settlements. The source material specifies:

| Failure | Description |
|---|---|
| **Revolt** | Unhappy population may rebel against the capital's leadership. |
| **Abandonment** | Villagers may leave if conditions deteriorate. |
| **Fires** | Disasters that damage or destroy capital buildings. |
| **Decline** | General deterioration from neglect. |

Failure should emerge naturally rather than through arbitrary game-over screens.

> **TODO:** Define what happens when the capital enters a failure state. Is there a game-over condition, or does the capital persist in a diminished state? Can the capital be fully abandoned?

---

# Acceptance Criteria

- [ ] The player has exactly one permanent capital.
- [ ] The capital can be placed in the starting region at game start.
- [ ] The capital grows from a camp through visible settlement tiers.
- [ ] The player can freely build roads, districts, decorations, and buildings on a grid within the capital.
- [ ] Buildings visually evolve through upgrades.
- [ ] The capital is connected to all colonies via roads.
- [ ] Capital events are recorded in the Chronicle.
- [ ] Failure states (revolt, abandonment, fires, decline) are possible but emerge naturally.

---

# Open Questions

1. What are the specific settlement tiers and their thresholds?
2. What is the starting region and its geography?
3. Is the capital placement fixed or chosen by the player?
4. How are districts defined — explicit zones, adjacency detection, or emergent?
5. What are the visual evolution stages for the capital's architecture?
6. How do resources transfer between capital and colonies?
7. What is the game-over condition for the capital, if any?
8. Can the capital be renamed?
9. Does the capital have a name that appears in the Chronicle and UI?

---

# Related Documents

- `docs/05-world/World Overview.md` — World structure and the capital's place within it
- `docs/05-world/Colonies.md` — Colony specification and capital-colony relationship
- `docs/05-world/Regions.md` — Starting region definition
- `docs/03-simulation/Settlement Growth.md` — Settlement growth mechanics
- `docs/03-simulation/Roads and Logistics.md` — Roads connecting the capital
- `docs/03-simulation/Chronicle.md` — Capital events recorded in history
- `docs/03-simulation/Villagers.md` — Villagers who live in the capital
- `docs/03-simulation/Heroes.md` — Heroes who return to the capital
- `docs/02-gameplay/Buildings.md` — Building system
- `docs/02-gameplay/Research.md` — Research that changes the capital's architecture
- `docs/01-vision/Vision Statement.md` — Emotional goal of the capital
- `docs/01-vision/Design Pillars.md` — Living Simulation, Meaningful Growth, Player Expression
- Source: *The Long Reign — Project Handoff* § Settlement, § Capital, § Colonies, § Roads, § Failure
- Source: *Project Genesis — Brainstorming History* § The Settlement Becomes the Main Character, § Building the Core Fantasy