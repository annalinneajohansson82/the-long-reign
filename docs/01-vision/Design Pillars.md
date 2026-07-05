---
title: Design Pillars
id: vision/design-pillars

version: 0.1.0
status: Draft
author:

last_updated: 2026-07-05

depends_on: [Vision Statement]

used_by: []

tags: [design, pillars, vision]
---

# Purpose

Enumerate and define the six design pillars of The Long Reign. Every system, feature, and mechanic must align with these pillars. When a feature conflicts with a pillar, the pillar wins.

These pillars form the project's "constitution." All later gameplay systems should be evaluated against them.

---

# Overview

The Long Reign is built on six design pillars. They are not ranked—each is equally important. Together they define what the game is and, equally importantly, what it is not.

Two additional meta-principles—[The North Star](../Vision%20Statement.md#the-north-star) and [The Six-Month Return Test](./The%20Six-Month%20Return%20Test.md)—sit above the pillars and guide their interpretation.

---

# The Six Pillars

## 1. Living Simulation

The world exists independently of the player.

- Villagers have lives: they form households, marry, have children, attend school, learn professions, work, retire, and die.
- Heroes become legends within the kingdom's history.
- Settlements develop identities over time.
- History emerges naturally from simulation, not from scripted events.

A player who does nothing should still see their kingdom breathe.

## 2. Meaningful Growth

Progress should always be visible.

- Research changes architecture.
- Roads improve logistics.
- Villages become cities.
- Children become adults.
- The kingdom physically evolves.

The player should never ask "what did that upgrade actually do?" Every investment produces a tangible change.

## 3. Player Expression

Players have extensive freedom to shape their kingdom.

- Grid-based construction.
- Road placement (including paving of desire paths).
- District planning.
- Decorating (decorations are meaningful, influencing happiness, prestige, and settlement quality).
- Colonies that develop distinct identities.

No two kingdoms should look alike.

## 4. Cozy Complexity

Rich systems paired with low stress.

- Depth arises from system interaction, not from punishment.
- No unnecessary micromanagement.
- The game should feel expansive without feeling overwhelming.

Complexity is a tool, not a goal. The player should be able to engage with systems at their own pace.

## 5. Emergent Stories

The best stories come from simulation, not from scripted events.

- The Chronicle records births, marriages, deaths, colony foundings, disasters, hero achievements, discoveries, completed wonders, wars, and technological advances.
- Heroes and important villagers develop biographies (Living Memories): birthplace, family, profession, achievements, expeditions, legacy.
- Each save gradually becomes a unique historical document.

Scripted narrative is secondary to what the simulation produces.

## 6. Respect the Player's Time

Dedicated document: [Respect the Player's Time](./Respect%20the%20Player's%20Time.md).

The game will never include:

- daily rewards
- battle passes
- energy systems
- premium currency
- daily quests
- FOMO mechanics
- login streaks
- mechanics that punish taking breaks

The kingdom patiently waits. The player returns because they want to.

---

# Meta-Principles

These principles sit above the six pillars and guide their interpretation.

## The North Star

> Make the kingdom feel more alive.

Not more complicated. Not more difficult. More alive. See [Vision Statement](./Vision%20Statement.md#the-north-star).

## The Six-Month Return Test

> Will this make the player smile when returning after six months?

If the answer is no, reconsider the feature. See [The Six-Month Return Test](./The%20Six-Month%20Return%20Test.md).

---

# Acceptance Criteria

- Every proposed feature must be traceable to at least one pillar.
- A feature that conflicts with any pillar should be redesigned or rejected.
- The six pillars should not change without a formal Architectural Decision Record.

---

# Open Questions

- TODO: Should the pillars be ranked or are they truly equal? If one pillar must yield to another in a conflict, which takes precedence?
- TODO: Is there a seventh pillar implicit in the source material that should be extracted (e.g., "Documentation-First Development")?

---

# Related Documents

- [Vision Statement](./Vision%20Statement.md)
- [Respect the Player's Time](./Respect%20the%20Player's%20Time.md)
- [The Six-Month Return Test](./The%20Six-Month%20Return%20Test.md)
- [Core Gameplay Loop](./Core%20Gameplay%20Loop.md)
- [Principles](../../docs/00-foundation/Principles.md) — TODO: populate
- [Project Genesis — Brainstorming History](../../docs/10-decisions/Project%20Genesis%20-%20Brainstorming%20History.md)