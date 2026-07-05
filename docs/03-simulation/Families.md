---
title: "Families"
id: 03-simulation/families
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - "Villagers.md"
used_by:
  - "Chronicle.md"
  - "Living Memories.md"
  - "Settlement Growth.md"
tags:
  - simulation
  - families
  - households
  - population
---

# Purpose

Defines the family and household unit within the simulation. Families are the social structure through which villagers form relationships, produce children, and create generational continuity in the kingdom.

---

# Overview

Villagers form households and marry. Families produce children, who grow into adults and continue the cycle. The family is the primary mechanism for generational persistence — the kingdom endures across lifetimes because families endure.

The source material establishes that:

- Villagers form households
- Villagers marry
- Villagers have children
- Children age into adults

These lifecycle transitions are recorded in the Chronicle (births, marriages).

---

# Design Goals

1. **Generational continuity.** Families ensure the kingdom feels inhabited across long play sessions.
2. **Emergent social structure.** Family formation should arise from simulation behavior, not manual assignment.
3. **Chronicle integration.** Family events — marriages, births — are automatically recorded as historical entries.
4. **Emotional attachment.** Families contribute to the feeling that the kingdom is a living place, not a spreadsheet.

---

# Non-Goals

- Families are not player-managed dynasties.
- The player does not arrange marriages.
- Inheritance mechanics are not currently specified.

---

# Household Formation

Households are formed when villagers establish a shared residence. The source material states villagers "form households" and "marry." The exact relationship between these two concepts (whether marriage is a prerequisite for household formation, or whether households can form without marriage) is not specified.

---

# Children

Children are produced by families. They age and eventually attend school, learn professions, and become contributing adults.

| Stage | Description |
|-------|-------------|
| Birth | Recorded in the Chronicle. |
| Childhood | Pre-education phase. |
| Education | Villager attends school. |
| Adulthood | Villager can form a new household, learn a profession, and work. |

---

# Integration Points

- **Villagers:** Families are composed of villagers. See `Villagers.md`.
- **Chronicle:** Births and marriages are recorded events. See `Chronicle.md`.
- **Living Memories:** Family lineage may appear in hero and notable villager biographies. See `Living Memories.md`.
- **Settlement Growth:** Population growth through births drives settlement expansion. See `Settlement Growth.md`.

---

# Open Questions

- [ ] Is marriage a prerequisite for having children, or can single-parent households produce children?
- [ ] Can households form without marriage?
- [ ] What is the maximum number of children per family?
- [ ] How is the interval between births determined?
- [ ] Do adult children stay in the same household or form their own?
- [ ] What happens to children when both parents die?
- [ ] Is family lineage tracked across generations?
- [ ] Do family members share a residence visually on the map?

---

# Related Documents

- `Villagers.md` — Individual villager lifecycle
- `Chronicle.md` — Historical recording of births and marriages
- `Living Memories.md` — Biographical records including family
- `Settlement Growth.md` — Population-driven settlement development
- Source: *The Long Reign — Project Handoff* § Villagers
- Source: *Project Genesis — Brainstorming History* § Living Simulation
