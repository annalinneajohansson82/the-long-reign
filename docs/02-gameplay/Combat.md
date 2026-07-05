---
title: Combat
id: gameplay/combat
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on: []
used_by:
  - 02-gameplay/Exploration.md
  - 03-simulation/Heroes.md
tags:
  - gameplay
  - combat
  - heroes
---

# Purpose

Define the combat system — how combat works, its role in the game, and how it relates to heroes, exploration, and settlement progression.

---

# Overview

Combat in The Long Reign is a supporting system, not the primary focus. The settlement — not combat — is the heart of the game. Combat exists to support settlement progression by providing access to resources, unlocking regions, and creating memorable stories for heroes and the Chronicle.

Combat is mostly automatic and turn-based, with occasional player abilities. It is designed to be engaging without dominating the gameplay experience.

---

# Design Goals

- **Support Role.** Combat supports settlement progression rather than replacing it.
- **Low-Friction.** Mostly automatic resolution with occasional player input keeps combat from becoming a barrier to the core kingdom-building loop.
- **Hero Focus.** Combat involves the small cast of named heroes, creating personal stakes rather than disposable-unit mechanics.
- **Emergent Stories.** Combat should generate memorable events for the Chronicle and hero biographies.

---

# Non-Goals

- Combat is not the primary gameplay loop.
- Combat is not a real-time or action-oriented system.
- The game does not feature large-scale army management or mass unit combat (based on current source material).
- This document does not define specific combat stats, damage formulas, or ability lists.

---

# Combat Model

- **Turn-Based.** Combat proceeds in turns.
- **Mostly Automatic.** The system resolves most actions without player input.
- **Occasional Player Abilities.** The player can intervene with specific abilities at key moments.

> **TODO:** Define the turn structure, action economy, and what "mostly automatic" means in practice. Does the player choose targets? Position units? Use abilities on cooldowns?

---

# Heroes in Combat

Heroes are the primary combatants. The game features a small cast of approximately 10–20 named heroes. Each hero has:
- Personality
- Backstory
- Unique abilities

Heroes coexist with ordinary villagers. They are not disposable units.

---

# Difficulty and Hero Mortality

Combat difficulty affects hero mortality:

| Difficulty | Hero Mortality |
|------------|---------------|
| Easy       | Heroes never die. |
| Medium     | Heroes become injured and return to the capital. |
| Hard       | Permanent death is possible. |

These settings affect how the player experiences risk during exploration and combat encounters.

---

# Combat and Exploration

Combat is most likely encountered during exploration. The world contains dangers, and regions may require combat to unlock or traverse.

See `02-gameplay/Exploration.md` for exploration mechanics.

> **TODO:** Define how combat is initiated during exploration — random encounters, visible enemies on the world map, scripted events, or a combination.

---

# Combat Rewards

Combat should support settlement progression. Implied rewards from the source material:
- Access to new regions and resources
- Chronicle entries (hero achievements, wars)

> **TODO:** Define specific combat rewards — resources, experience, hero progression, unlock conditions.

---

# Acceptance Criteria

- [ ] Combat is turn-based and primarily automatic.
- [ ] The player can use occasional abilities during combat.
- [ ] Hero mortality respects the selected difficulty setting.
- [ ] Combat encounters can occur during exploration.
- [ ] Combat outcomes are recorded in the Chronicle where appropriate.

---

# Open Questions

1. What does "mostly automatic" mean in practice? What player inputs are available?
2. How many heroes participate in combat at once? Is there a party system?
3. What are the combat encounter types (random, visible, scripted)?
4. What are the specific combat rewards?
5. How does hero injury work on Medium difficulty (duration, penalties)?
6. Are there enemy types, and if so, how are they defined?

---

# Related Documents

- `02-gameplay/Exploration.md` — Where combat encounters occur
- `03-simulation/Heroes.md` — Hero definitions, abilities, and progression
- `03-simulation/Chronicle.md` — Chronicle combat event recording
- `03-simulation/Living Memories.md` — Hero biographies and combat history
