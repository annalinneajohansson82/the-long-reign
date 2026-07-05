---
title: Project Genesis — Brainstorming History
id: 10-decisions/project-genesis-brainstorming-history

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/readme
  - 00-foundation/why

used_by:
  - All contributors
  - Lead Systems Designer
  - Lead Technical Writer

tags:
  - genesis
  - history
  - brainstorming
  - evolution
---

# Purpose

This document records how The Long Reign evolved from its initial idea into its current vision. It is intentionally historical: it explains **why** important decisions were made, what alternatives were considered, and how the project's philosophy emerged.

Unlike the Game Design Document, this file should never be treated as a specification. It serves as institutional memory for future contributors. Understanding _why_ decisions were made is often more valuable than understanding _what_ was decided.

---

# The Initial Idea

The project began with a simple question:

> "I like the gameplay mechanics of TopHeroes on iOS, but I wish I could play something like it in my web browser."

The original intention was to create a browser-based game inspired by the enjoyable gameplay loop — not to copy an existing commercial game. Very quickly it became clear that recreating another game was neither necessary nor desirable. Discussion shifted toward identifying _what was actually enjoyable_ about the experience.

---

# Discovering the Real Goal

Through discussion, it became obvious that the enjoyable part was not the combat. Instead, it was:

- Watching something grow
- Gradually unlocking more content
- Returning with resources
- Steadily improving a persistent world

The project shifted away from being "an idle hero RPG" and toward becoming a **kingdom-building simulation**. This was the first major turning point.

---

# The Settlement Becomes the Main Character

Originally, heroes were assumed to be the focus. After discussing priorities, it became clear that the settlement — not the heroes — was the true protagonist.

Heroes exist to support the kingdom. The kingdom does not exist to support the heroes. This inversion became one of the defining ideas of the project (see [ADR-007: Settlement as Protagonist](./Decision%20Log.md#adr-007-settlement-as-protagonist)).

---

# Building the Core Fantasy

Several possible fantasies were discussed:

- Collecting heroes
- Defeating bosses
- Maximizing efficiency
- Decorating

The emotional goal eventually crystallized. The player should return after months away, open an old save, and quietly think:

> "Wow... I built all this."

This sentence became the emotional foundation of the project (see [Why.md](../00-foundation/Why.md)).

---

# Living Simulation

Discussion gradually shifted away from traditional city-building mechanics and toward simulation. Instead of buildings merely producing resources, the kingdom should feel _inhabited_.

Villagers became simulated individuals. They form families, have children, attend school, learn professions, work, retire, and die. Heroes became long-lived members of society rather than disposable units.

This transformed the project from a management game into a **living world simulation** — the first of the six design pillars.

---

# Roads and Desire Paths

One of the earliest original mechanics emerged during discussion of road placement. Rather than expecting players to guess where roads should go, villagers naturally create dirt paths by repeatedly walking between important locations. These **desire paths** become visible over time, and the player can pave them into roads.

Roads improve movement, logistics, trade, and efficiency. This mechanic illustrates a central philosophy: **the simulation teaches the player; the player improves the simulation**.

---

# Colonies

Rather than allowing unlimited identical settlements, the design evolved toward one permanent capital with multiple colonies. Each colony develops its identity naturally from geography, production, architecture, and history. Specialization is not chosen from a menu — it develops organically.

---

# Visible Logistics

Another key realization was that logistics should always be visible. Nothing teleports. Resources physically move through the kingdom: Mine → Cart → Warehouse → Blacksmith → Market. Improving infrastructure should be something the player can literally watch.

---

# The Chronicle

One of the defining systems of the project: rather than merely tracking objectives, the game records history. Births, marriages, deaths, disasters, colony foundings, hero achievements, completed wonders, discoveries — each save gradually becomes a unique historical document.

---

# Living Memories

A natural extension of the Chronicle. Heroes and important villagers develop biographies — birthplace, family, profession, achievements, expeditions, legacy. The goal is emotional attachment rather than purely statistical tracking.

---

# Respect the Player's Time

Perhaps the most important philosophical breakthrough occurred during discussion of stress. The project intentionally rejects modern engagement mechanics. The game will never include daily rewards, login streaks, battle passes, premium currencies, energy systems, or FOMO.

Instead, the player returns because they miss their kingdom (see [ADR-004: Respect the Player's Time as a Design Pillar](./Decision%20Log.md#adr-004-respect-the-players-time-as-a-design-pillar)).

---

# The Six-Month Return Test

Another major idea followed naturally. Every feature should answer one question:

> "Will this make the player smile when returning after six months?"

If the answer is no, the feature should be reconsidered. This became a guiding design heuristic throughout the project (see [The Six-Month Return Test](../01-vision/The%20Six-Month%20Return%20Test.md)).

---

# The North Star

Eventually, nearly every discussion returned to the same principle:

> **Make the kingdom feel more alive.**

Not more complicated. Not more difficult. More alive. This became the project's North Star. Whenever uncertainty exists, this principle should outweigh individual mechanics.

---

# Documentation Philosophy

An unexpected topic emerged: rather than treating documentation as something produced after development, the documentation itself **became** the project. The game is considered an implementation of the documentation. This led to a **specification-first development methodology** (see [ADR-005: Specification-First Development](./Decision%20Log.md#adr-005-specification-first-development) and [ADR-008: Documentation as Source of Truth](./Decision%20Log.md#adr-008-documentation-as-source-of-truth)).

---

# Software Engineering Influence

The project's documentation structure intentionally borrows practices from software engineering:

- Modular documentation
- Markdown
- Obsidian knowledge management
- YAML front matter
- Architectural Decision Records (ADRs)
- Request for Comments (RFCs)
- Glossary
- Specification-first development

This approach was chosen because it scales well and allows both humans and AI coding agents to collaborate effectively.

---

# Repository Philosophy

The documentation repository became the project's primary artifact. The codebase exists to implement these documents. The proposed structure includes Foundation, Vision, Gameplay, Simulation, Economy, World, UI, Art, Technical Design, Roadmap, Decisions, Glossary, and Parking Lot sections (see [Project Structure](../00-foundation/Project%20Structure.md)).

---

# Development Workflow

The agreed workflow became:

```
Idea → Discussion → RFC (if needed) → Architectural Decision
→ Game Design Specification → Technical Specification
→ Implementation → Playtesting → Revision
```

Coding is intentionally placed near the end of the process (see [AI Development Workflow](../08-technical/AI%20Development%20Workflow.md)).

---

# Important Realization

During brainstorming, it became apparent that this project was no longer inspired primarily by TopHeroes. Instead, it had become an original game centered on:

- Living settlements
- Visible logistics
- Emergent stories
- Kingdom history
- Long-term attachment
- Player creativity

The original inspiration served only as the starting point.

---

# The Project's Identity

The project eventually defined itself with a single sentence:

> The Long Reign is a game about creating a kingdom worth returning to — not because the game demands it, but because the player genuinely wants to see it again.

Everything in the Game Design Document should support that vision (see [Vision Statement](../01-vision/Vision%20Statement.md)).

---

# Closing Note

This document intentionally records the project's evolution rather than its final design. Future contributors are encouraged to read it before making significant design changes.

If, years from now, the project changes direction, this document should remain as a record of where it began.

---

# Open Questions

- None — this document is historical and complete as of 2026-07-05.

---

# Related Documents

- [Why.md](../00-foundation/Why.md) — the emotional foundation
- [Principles.md](../00-foundation/Principles.md) — the six design pillars derived from this evolution
- [Vision Statement](../01-vision/Vision%20Statement.md) — the project's high-level vision
- [Design Pillars](../01-vision/Design%20Pillars.md) — detailed pillar definitions
- [Decision Log](./Decision%20Log.md) — ADRs recording specific decisions made during this evolution
