---
title: "Villagers"
id: 03-simulation/villagers
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-06
depends_on:
  - "docs/00-foundation/Glossary.md"
used_by:
  - "Families.md"
  - "Professions.md"
  - "Chronicle.md"
tags:
  - simulation
  - villagers
  - population
---

# Purpose

Defines the Villager entity: the simulated individual that populates the kingdom. Villagers are the fundamental unit of the living simulation. This document specifies their lifecycle, behaviors, and relationship to other systems.

---

# Overview

Villagers are simulated individuals with full lifecycles. They are not abstract resource counters — each villager exists as a distinct entity that moves through the world, forms relationships, and leaves a mark on the kingdom's history.

The source material defines the following lifecycle for villagers:

- Move into the kingdom
- Form households
- Marry
- Have children
- Age
- Attend school
- Learn professions
- Work
- Retire
- Die

Schools are meaningful buildings because they are required for villagers to learn professions.

---

# Design Goals

1. **Simulated individuals, not statistics.** Each villager should be distinguishable and traceable.
2. **Visible lifecycle progression.** Children become adults. Adults become elders. The player should observe generational turnover.
3. **Simulation-first behavior.** Villagers act according to their needs and roles, not scripted sequences.
4. **Integration with the Chronicle.** Significant lifecycle events (birth, marriage, death) are recorded as historical entries.
5. **Cozy complexity.** Rich simulation without micromanagement — the player does not manually assign every villager to a task.

---

# Non-Goals

- Villagers are not individually controllable units.
- Villagers are not combat participants (that role belongs to Heroes).
- Villagers are not abstract population counters; each is a discrete entity.

---

# Lifecycle States

The following states are derived from the source material. Each is a distinct phase in a villager's existence.

| State | Description |
|-------|-------------|
| Arrival | Villager moves into the kingdom. |
| Household Formation | Villager establishes a household (may involve marriage). |
| Education | Villager attends school. Required prerequisite for learning a profession. |
| Profession | Villager learns and practices a profession. Contributes labor to the economy. |
| Family | Villager may marry and have children. |
| Aging | Villager progresses through age stages. |
| Retirement | Villager ceases active labor. |
| Death | Villager dies. Recorded in the Chronicle. |

---

# Integration Points

- **Families:** Villagers form households, marry, and have children. See `Families.md`.
- **Professions:** Villagers learn professions after attending school. See `Professions.md`.
- **Chronicle:** Births, marriages, and deaths are automatically recorded. See `Chronicle.md`.
- **Living Memories:** Notable villagers may develop biographies. See `Living Memories.md`.
- **Settlement Growth:** Villager population drives settlement growth. See `Settlement Growth.md`.

---

# Open Questions

- [ ] What triggers a villager to move into the kingdom? (Population capacity? Housing availability? Prosperity?)
- [ ] What are the specific age thresholds for each lifecycle stage?
- [ ] How long does education take?
- [ ] Can villagers have multiple professions over a lifetime?
- [ ] What happens to a villager's dependents (children) if they die prematurely?
- [ ] Is there a maximum lifespan?
- [ ] How are villagers named? (Procedural generation? Name pools?)
- [ ] What visual representation do villagers have on the map?

---

# Related Documents

- `Families.md` — Household and family unit specification
- `Professions.md` — Profession system specification
- `Chronicle.md` — Historical event recording
- `Living Memories.md` — Notable villager biographies
- `Settlement Growth.md` — How population drives settlement development
- `docs/01-vision/Design Pillars.md` — Living Simulation pillar
- Source: *The Long Reign — Project Handoff* § Villagers
- Source: *Project Genesis — Brainstorming History* § Living Simulation
