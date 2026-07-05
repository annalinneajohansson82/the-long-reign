---
title: "Heroes"
id: simulation/heroes
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - "Villagers.md"
  - "Professions.md"
used_by:
  - "Chronicle.md"
  - "Living Memories.md"
tags:
  - simulation
  - heroes
  - characters
  - combat
---

# Purpose

Defines the Hero entity: named, persistent characters who coexist with ordinary villagers. Heroes are long-lived members of society with distinct personalities, backstories, and abilities. They exist to support the kingdom, not the other way around.

---

# Overview

Heroes are a small cast of approximately 10–20 named characters. Each hero has a personality, a backstory, and unique abilities. They coexist with the general villager population but are distinct entities with deeper progression, unique capabilities, and greater narrative weight.

The settlement is the true protagonist of the game. Heroes exist to support the kingdom. The kingdom does not exist to support the heroes.

---

# Design Goals

1. **Small cast, deep characters.** 10–20 heroes rather than a large roster of interchangeable units.
2. **Kingdom-first relationship.** Heroes serve the settlement, not vice versa.
3. **Long-lived presence.** Heroes are persistent members of the kingdom across long play sessions.
4. **Progression depth.** Levels and professions are the primary advancement axes.
5. **Emergent legends.** Hero achievements should create stories through the Chronicle rather than scripted events.
6. **Emotional attachment.** Living Memories should make heroes feel like people with history, not stat blocks.

---

# Non-Goals

- Heroes are not the primary focus of the game.
- Heroes are not a collectible roster (the goal is not to collect all heroes).
- Heroes are not disposable combat units (difficulty-dependent mortality aside).

---

# Hero Attributes

Each hero has the following attributes, derived from the source material:

| Attribute | Description |
|-----------|-------------|
| Name | Unique name for the hero. |
| Personality | Distinct behavioral and narrative identity. |
| Backstory | Pre-game history that informs the hero's character. |
| Unique Abilities | Hero-specific capabilities that differentiate them from other heroes and from villagers. |
| Level | Primary progression metric. |
| Profession | Secondary progression axis. Heroes have professions alongside ordinary villagers. |

---

# Hero Mortality

The source material defines three difficulty-dependent mortality rules:

| Difficulty | Rule |
|------------|------|
| Easy | Heroes never die. |
| Medium | Heroes become injured and return to the capital to recover. |
| Hard | Permanent hero death is possible. |

---

# Hero Progression

Hero progression focuses primarily on:

1. **Levels** — numerical advancement, increasing capabilities.
2. **Professions** — role-based advancement, parallel to the villager profession system (see `Professions.md`).

---

# Hero Biographies

Heroes are the primary subjects of the Living Memories system. Their biographies include:

- Birthplace
- Profession
- Achievements
- Family
- Expeditions
- Legacy

See `Living Memories.md` for full specification.

---

# Integration Points

- **Villagers:** Heroes coexist with ordinary villagers as distinct entities. See `Villagers.md`.
- **Professions:** Heroes have professions. See `Professions.md`.
- **Chronicle:** Hero achievements are automatically recorded as historical events. See `Chronicle.md`.
- **Living Memories:** Heroes are the primary subjects of the biography system. See `Living Memories.md`.
- **Exploration:** Some heroes are discovered as recruitable characters in unlockable regions. See `docs/02-gameplay/Exploration.md`.
- **Combat:** Heroes participate in mostly-automatic, turn-based combat with occasional player abilities. See `docs/02-gameplay/Combat.md`.

---

# Open Questions

- [ ] What is the complete cast of heroes? (Names, personalities, backstories)
- [ ] What are the unique abilities for each hero?
- [ ] How do heroes level up? (Experience from combat? From kingdom milestones?)
- [ ] How does hero recruitment work? (Story-driven? Discovery-based?)
- [ ] Can heroes form families with villagers or other heroes?
- [ ] What happens to a hero's unique abilities and equipment on death (Hard difficulty)?
- [ ] Do heroes age? What is their lifespan relative to villagers?
- [ ] Can heroes be assigned to lead colonies or expeditions?
- [ ] How are heroes visually distinguished from villagers?

---

# Related Documents

- `Villagers.md` — Ordinary villager specification
- `Professions.md` — Profession system
- `Chronicle.md` — Historical event recording
- `Living Memories.md` — Hero biography system
- `docs/02-gameplay/Combat.md` — Combat system
- `docs/02-gameplay/Exploration.md` — Hero recruitment through exploration
- `docs/01-vision/Design Pillars.md` — Living Simulation, Emergent Stories
- Source: *The Long Reign — Project Handoff* § Heroes, § Exploration
- Source: *Project Genesis — Brainstorming History* § The Settlement Becomes the Main Character, § Living Simulation
