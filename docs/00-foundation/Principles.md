---
title: Design Principles
id: 00-foundation/principles
version: 0.2.0
status: Reviewed

reviewed_by: human

author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/why

used_by:
  - All design documents
  - All implementation
  - All code review
  - Gameplay Compliance Agent

tags:
  - foundation
  - design-pillars
  - principles
---

# Purpose

This document defines the six design pillars of The Long Reign, plus the two guiding heuristics (the Six-Month Return Test and the North Star). Every design decision, feature proposal, and implementation must be consistent with these principles.

If a design conflicts with a principle, either the design is wrong or the principle must be intentionally updated through an ADR. Principles should not be overridden casually.

---

# Overview

The project is built on six design pillars, ordered by priority:

1. **Living Simulation** — the world exists independently of the player
2. **Meaningful Growth** — progress should always be visible
3. **Player Expression** — no two kingdoms should look alike
4. **Cozy Complexity** — rich systems, low stress
5. **Emergent Stories** — simulation over scripted events
6. **Respect the Player's Time** — the kingdom patiently waits

The first three (Living Simulation, Meaningful Growth, Player Expression) are the **fundamentals**. When a lower-ranked pillar conflicts with a higher-ranked one, the higher-ranked pillar prevails.

Two additional heuristics guide all design decisions:

- **The Six-Month Return Test**: Will this make the player smile when returning after six months?
- **The North Star**: Make the kingdom feel more alive.

---

# 1. Living Simulation

The world exists independently of the player.

Villagers have lives. Heroes become legends. Settlements develop identities. History emerges naturally.

Villagers are simulated individuals who move into the kingdom, form households, marry, have children, age, attend school, learn professions, work, retire, and die.

Heroes are long-lived members of society, not disposable units.

The kingdom should feel inhabited, not merely managed.

---

# 2. Meaningful Growth

Progress should always be visible.

Research changes architecture. Roads improve logistics. Villages become cities. Children become adults. The kingdom physically evolves.

Nothing teleports. Resources physically move through the kingdom. Improving logistics should produce visible changes that the player can literally watch.

---

# 3. Player Expression

Players should have extensive freedom.

Grid-based construction. Road placement. District planning. Decorating. Colonies.

No two kingdoms should look alike.

Decorations are meaningful — they influence happiness, prestige, and settlement quality. They are not purely cosmetic.

---

# 4. Cozy Complexity

Rich systems. Low stress. No unnecessary micromanagement.

Depth through interaction rather than punishment.

The game should be deep but not punishing. Complex but not overwhelming. The player should feel in control, not anxious.

---

# 5. Emergent Stories

The best stories should come from simulation rather than scripted events.

The Chronicle system records births, marriages, deaths, disasters, colony foundings, hero achievements, completed wonders, discoveries, wars, and technological advances. Each save gradually becomes a unique historical document.

Heroes and important villagers develop biographies (Living Memories) — birthplace, family, profession, achievements, expeditions, legacy. The goal is emotional attachment, not statistics.

---

# 6. Respect the Player's Time

One of the project's defining principles.

The game will never include:

- Daily rewards
- Battle passes
- Energy systems
- Premium currency
- Daily quests
- FOMO mechanics
- Login streaks
- Mechanics that punish taking breaks

The kingdom patiently waits. The player returns because they want to.

---

# The Six-Month Return Test

Every feature should answer one question:

> Will this make the player smile when returning after six months?

If not, reconsider the feature.

This heuristic is derived from the emotional goal and applies to all design decisions.

---

# The North Star

Every design decision should make the kingdom feel more alive.

Not more complicated. Not more difficult. More alive.

Whenever uncertainty exists, this principle should outweigh individual mechanics.

---

# Acceptance Criteria

A feature is consistent with the design principles when:

- It does not violate any of the six pillars
- It passes the Six-Month Return Test
- It moves the kingdom closer to the North Star
- It does not introduce any forbidden mechanic (Respect the Player's Time)

---

# Resolved Questions

- **Q1: Prioritization of principles when they conflict.** The six pillars are ordered by priority (see Overview above). Fundamentals (1–3) always take precedence over derived pillars (4–6). When Cozy Complexity conflicts with Player Expression, Player Expression wins. When Respect the Player's Time conflicts with Emergent Stories, Respect the Player's Time wins.

- **Q2: Are the pillars equally weighted?** No. Living Simulation, Meaningful Growth, and Player Expression are the fundamentals. The remaining three (Cozy Complexity, Emergent Stories, Respect the Player's Time) are equally weighted among themselves but secondary to the fundamentals.

# Open Questions

- None.

---

# Related Documents

- `Why.md` — the emotional foundation that produced these principles
- `01-vision/` — detailed vision documents
- `10-decisions/` — ADRs that record decisions impacting these principles
- `08-technical/AI Development Workflow.md` — the Gameplay Compliance Agent that enforces these principles