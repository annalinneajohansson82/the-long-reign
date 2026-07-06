---
title: "Living Memories"
id: 03-simulation/living-memories
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-06
depends_on:
  - "Heroes.md"
  - "Chronicle.md"
used_by: []
tags:
  - simulation
  - memories
  - biographies
  - heroes
  - villagers
---

# Purpose

Defines the Living Memories system — a natural extension of the Chronicle that transforms important people into remembered individuals with rich biographies. Living Memories exists to create emotional attachment rather than simply tracking statistics.

---

# Overview

While the Chronicle records events, Living Memories records people. Important villagers and heroes develop biographies that grow over time, capturing their birthplace, family, profession, achievements, expeditions, and legacy.

The goal is emotional attachment: making the player care about the people in their kingdom as individuals with history, rather than as interchangeable population units.

The source material describes Living Memories as applying to "heroes and important villagers" — the definition of "important" is not yet specified.

---

# Design Goals

1. **Emotional attachment over statistics.** Biographies should tell a story, not list numbers.
2. **Automatic population.** Biographies grow from Chronicle events and simulation data without manual player input.
3. **Longitudinal depth.** A biography that spans a character's entire lifetime should feel meaningful.
4. **Legacy preservation.** When a hero or important villager dies, their memory persists.
5. **Six-Month Return Test.** Reading old biographies should evoke nostalgia and attachment.

---

# Non-Goals

- Living Memories is not a player-authored journal or notes system.
- Not every villager gets a full biography — only "important" individuals.
- Living Memories is not a mechanical buff or stat system.

---

# Biography Fields

The source material specifies the following fields for a Living Memory:

| Field | Description |
|-------|-------------|
| Birthplace | Where the character was born. |
| Profession | The character's profession(s). |
| Achievements | Notable accomplishments (from Chronicle hero achievement events). |
| Family | Family connections (spouse, children, lineage). |
| Expeditions | Exploration or military expeditions the character participated in. |
| Legacy | Posthumous impact and remembrance. |

---

# Subjects

### Heroes

Heroes are the primary subjects of Living Memories. Every hero should develop a full biography. See `Heroes.md`.

### Important Villagers

Some villagers may qualify for biographies. The source material does not define what makes a villager "important." Candidates might include:

- Founders of colonies
- First practitioners of a profession
- Survivors of disasters
- Exceptionally long-lived villagers
- TODO: Complete criteria to be defined in future design work.

---

# Biography Progression

Biographies grow over time as new events occur:

1. **Birth/Recruitment** — Biography created with birthplace.
2. **Profession** — Profession added when acquired.
3. **Achievements** — Chronicle-tagged hero achievements appended.
4. **Family** — Marriage and children added from Chronicle events.
5. **Expeditions** — Exploration events added.
6. **Death** — Biography finalized; legacy section populated.

---

# Relationship to Chronicle

Living Memories is fed by the Chronicle. While the Chronicle records *what happened*, Living Memories organizes those events *around individuals*.

| Chronicle Role | Living Memories Role |
|----------------|---------------------|
| Records births as events | Lists birthplace in biography |
| Records marriages | Lists family connections |
| Records hero achievements | Lists achievements in biography |
| Records deaths | Finalizes biography, creates legacy |

See `Chronicle.md` for the event recording system.

---

# Integration Points

- **Heroes:** Primary subjects of Living Memories. See `Heroes.md`.
- **Villagers:** Important villagers may qualify. See `Villagers.md`.
- **Chronicle:** Event data source for biographies. See `Chronicle.md`.
- **Families:** Family connections appear in biographies. See `Families.md`.

---

# Open Questions

- [ ] What qualifies a villager as "important" enough for a biography?
- [ ] What is the minimum threshold for recording an achievement?
- [ ] How is the legacy section generated? (Automated summary? Template?)
- [ ] Can the player view biographies of deceased characters?
- [ ] How are biographies presented in the UI? (Panel? Dedicated screen?)
- [ ] Is there a limit to how many biographies exist at once?
- [ ] Are biographies included in save exports?
- [ ] Do biographies include visual portraits or icons?

---

# Related Documents

- `Heroes.md` — Hero specification and attributes
- `Villagers.md` — Villager lifecycle
- `Chronicle.md` — Event recording system
- `Families.md` — Family connections
- `docs/01-vision/Design Pillars.md` — Emergent Stories, Living Simulation
- Source: *The Long Reign — Project Handoff* § Living Memories
- Source: *Project Genesis — Brainstorming History* § Living Memories
