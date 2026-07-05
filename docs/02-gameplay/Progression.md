---
title: Progression
id: 02-gameplay/progression
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - 02-gameplay/Buildings.md
  - 02-gameplay/Research.md
  - 02-gameplay/Exploration.md
used_by:
  - 03-simulation/Settlement Growth.md
  - 03-simulation/Heroes.md
tags:
  - gameplay
  - progression
  - core-loop
---

# Purpose

Define the progression system — how the player advances through the game, what forms progression takes, and how different systems interconnect to create a sense of growth over time.

---

# Overview

Progression in The Long Reign is multi-faceted. The player advances not through a single XP bar or level system but through the cumulative growth of their kingdom. Progress should always be visible: buildings evolve, roads improve, villages become cities, children become adults. The kingdom physically evolves.

Progression is driven by the core gameplay loop: Explore → Gather Resources → Return Home → Expand Settlement → Unlock New Opportunities → Repeat. Each cycle moves the kingdom forward.

---

# Design Goals

- **Meaningful Growth.** Progress should always be visible to the player.
- **Multi-Faceted.** Progression spans buildings, research, heroes, colonies, and the Chronicle — no single metric defines advancement.
- **Self-Paced.** No FOMO mechanics, no daily rewards, no login streaks. The player progresses at their own pace.
- **The Six-Month Return Test.** After months away, the player should load their save and think "Wow... I built all this."

---

# Non-Goals

- Progression is not gated behind daily or time-limited content.
- There is no overarching "player level" or account progression.
- This document does not define specific numeric progression curves or balance values.

---

# Forms of Progression

## Settlement Growth

The capital grows from a camp into a thriving kingdom. Buildings visually evolve through upgrades. Districts form. The settlement physically changes.

See `03-simulation/Settlement Growth.md` for the full specification.

## Colony Development

Colonies develop their own specialization and identity over time. Identity emerges naturally from buildings, geography, production, and history.

See `05-world/Colonies.md` for the full specification.

## Research

A medium-sized technology tree that allows villages to evolve into different economic identities. Research produces visible changes whenever possible.

See `02-gameplay/Research.md` for the full specification.

## Hero Progression

Heroes progress primarily through:
- **Levels.** Gaining experience and growing in power.
- **Professions.** Learning and advancing in professions.

The source material does not specify level caps, experience sources, or profession mechanics.

See `03-simulation/Heroes.md` for the full specification.

## Chronicle & History

The Chronicle records the kingdom's history — births, marriages, deaths, colony foundings, discoveries, disasters, hero achievements, completed wonders, wars, and technological advances. Each save becomes a unique historical document.

See `03-simulation/Chronicle.md` for the full specification.

## Infrastructure

Roads, logistics networks, and trade routes improve over time. These improvements produce visible changes in efficiency and settlement appearance.

See `03-simulation/Roads and Logistics.md` for the full specification.

---

# The Core Loop as Progression Driver

```
Explore
    ↓
Gather Resources
    ↓
Return Home
    ↓
Expand Settlement
    ↓
Unlock New Opportunities
    ↓
Repeat
```

Each cycle provides the resources and unlocks needed for the next cycle. Progression is the accumulation of these cycles over many hours of play.

---

# Failure as Progression

Poor management has consequences that arise naturally:
- Revolt
- Abandonment
- Fires
- Decline

These are not arbitrary game-over screens. Failure emerges from the simulation. Recovery from setbacks is itself a form of progression — the kingdom rebuilds, adapts, and continues.

---

# Acceptance Criteria

- [ ] The core gameplay loop (Explore → Gather → Return → Expand → Unlock → Repeat) is functional and drives observable progression.
- [ ] Building upgrades produce visible visual changes.
- [ ] Research unlocks produce visible changes in the settlement.
- [ ] Hero levels and professions are trackable and affect hero capabilities.
- [ ] The Chronicle records progression milestones automatically.
- [ ] The kingdom's state after hours of play is visibly different from the starting state.

---

# Open Questions

1. What are the specific hero progression mechanics (XP sources, level caps, profession trees)?
2. What are the settlement growth stages (camp → village → town → city → ?) and their unlock criteria?
3. Is there any form of narrative or story progression beyond emergent events?
4. Are there "wonders" or megaprojects that serve as long-term progression goals?
5. How does the game communicate progression to the player (notifications, UI elements, Chronicle entries)?

---

# Related Documents

- `02-gameplay/Buildings.md` — Building upgrades and visual evolution
- `02-gameplay/Research.md` — Technology tree
- `02-gameplay/Exploration.md` — Exploration unlocks
- `03-simulation/Settlement Growth.md` — Settlement evolution
- `03-simulation/Heroes.md` — Hero progression
- `03-simulation/Chronicle.md` — Historical recording
- `03-simulation/Living Memories.md` — Hero and villager biographies
- `03-simulation/Roads and Logistics.md` — Infrastructure progression
- `05-world/Colonies.md` — Colony development
