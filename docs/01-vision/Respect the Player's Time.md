---
title: Respect the Player's Time
id: vision/respect-the-players-time
version: 0.2.0
status: Reviewed

reviewed_by: human

author: Lead Technical Writer

last_updated: 2026-07-05

depends_on: [Design Pillars, Vision Statement]

used_by: []

tags: [design, pillars, ethics, anti-fomo]
---

# Purpose

Define one of the six design pillars in detail: Respect the Player's Time. This document serves as a reference for what the game will never include, and why.

---

# Overview

The Long Reign intentionally rejects modern engagement mechanics designed to compel daily play through psychological pressure. The game's position is that a player should return because they miss their kingdom—not because the game punishes absence.

This is a non-negotiable pillar. No system, feature, or monetization strategy may violate it.

---

# Prohibited Mechanics

The game will never include:

- **Daily rewards** — No reward for logging in on a particular day.
- **Login streaks** — No streaks, no streak bonuses, no streak resets.
- **Battle passes** — No seasonal or tiered reward tracks tied to play frequency.
- **Premium currency** — No soft or hard premium currency of any kind.
- **Energy systems** — No stamina, energy bars, or time-gated action limits.
- **Daily quests** — No quests that refresh on a daily timer.
- **FOMO mechanics** — No limited-time offers, event-exclusive items that never return, or countdown timers.
- **Mechanics that punish taking breaks** — No decay, no atrophy, no degradation of the kingdom while the player is away.

---

# Design Goals

- The kingdom should feel *patient*. It waits for the player, unchanged, until they return.
- The player's absence should never create a disadvantage. No catch-up mechanics are needed because there is nothing to catch up to.
- Return should feel like coming home, not like checking on a neglected responsibility.

---

# Player Experience

A player who closes the browser for six months and opens it again should find their kingdom exactly as they left it. No notifications about missed events. No sense of having lost progress. Just their kingdom, waiting.

The player returns because they want to. Not because they have to.

---

# Implementation Implications

- Time stops while the game is closed. Offline progress is intentionally **not** simulated.
- Closing the browser should preserve progress (autosave on close or equivalent).
- The save system must support long gaps between sessions without corruption or version migration failures.

---

# Acceptance Criteria

- No system in the game may include a timer that persists across sessions.
- No reward may be conditional on when the player last played.
- A playtest where a tester opens a six-month-old save must produce no pressure cues (notifications, popups, "welcome back" rewards, etc.).

---

# Resolved Questions

- **Q1:** Welcome back messages / "here's what happened" summaries are acceptable. Must be opt-out via settings. No rewards attached.

- **Q2:** Major version migrations require user notification and approval. Minor updates can be applied silently.

# Open Questions

- None.

---

# Related Documents

- [Design Pillars](./Design%20Pillars.md) — pillar #6
- [The Six-Month Return Test](./The%20Six-Month%20Return%20Test.md)
- [Vision Statement](./Vision%20Statement.md)
- [Save System](../../docs/08-technical/Save%20System.md) — TODO: link when populated