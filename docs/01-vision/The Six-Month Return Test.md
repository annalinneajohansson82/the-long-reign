---
title: The Six-Month Return Test
id: vision/the-six-month-return-test

version: 0.1.0
status: Draft
author:

last_updated: 2026-07-05

depends_on: [Design Pillars, Vision Statement]

used_by: []

tags: [design, heuristic, meta-principle]
---

# Purpose

Define the Six-Month Return Test—a design heuristic used to evaluate every feature in The Long Reign. This is not a pillar but a meta-principle that sits above the pillars and guides their interpretation.

---

# Overview

Every feature proposed for The Long Reign must answer one question:

> **Will this make the player smile when returning after six months?**

If the answer is no, the feature should be reconsidered.

The test is intentionally simple. It is a lens, not a checklist. It forces designers to think about the long-term emotional experience of the player rather than short-term engagement metrics.

---

# Origin

The test emerged from the project's emotional goal: a player returning after months away, loading their save, looking over their kingdom, and thinking "Wow… I built all this."

If a feature does not contribute to that moment—or worse, detracts from it—it has no place in the game.

---

# Application

## When to Apply

- During feature ideation (before an RFC is written).
- During RFC review.
- During playtesting: "Did this feature make you smile when you returned?"
- When evaluating scope creep.

## Examples

| Feature Idea | Passes the Test? | Reasoning |
|---|---|---|
| The Chronicle (recorded history) | Yes | Reading your kingdom's history after months away reinforces the "Wow, I built this" moment. |
| Daily login rewards | No | Encourages short-term compulsion; creates guilt for absence. |
| Visible logistics (carts, roads) | Yes | Seeing your infrastructure still functioning after months away is satisfying. |
| Building decay over time | No | Returning to a deteriorated kingdom creates stress, not pride. |
| Living Memories (hero biographies) | Yes | Re-reading a hero's story after months away deepens attachment. |
| Seasonal events (missable) | No | Missing an event creates FOMO and a sense of incompleteness. |

---

# Design Goals

- The test should be applied to every feature, not just major systems.
- The test is not a veto for hard features. It is a prompt: "How can we make this feature contribute to the long-term return experience?"
- The test should be easy to remember and apply without ceremony.

---

# Non-Goals

- The test is not a replacement for playtesting.
- The test is not a quality metric for implementation—only for design intent.

---

# Player Experience

A player who returns after six months should not feel:

- Lost (where was I? what was I doing?)
- Pressured (what did I miss?)
- Regretful (I should have played more)

They should feel:

- Pride (I built this)
- Curiosity (what's happening now?)
- Nostalgia (I remember when this village was just a camp)
- Anticipation (what should I build next?)

---

# Acceptance Criteria

- Every RFC must include a "Six-Month Return Test" section.
- A feature that fails the test requires explicit justification in an ADR to proceed.
- Playtest protocols must include a "return after absence" session.

---

# Open Questions

- TODO: Should the test have a formalized scoring rubric (e.g., 1–5 scale) or remain a qualitative judgment?
- TODO: What is the process when a feature partially passes (e.g., neutral—doesn't hurt but doesn't help)? Is neutrality acceptable?
- TODO: Should the test period be adjustable per feature (e.g., 1 month for minor features, 6 months for major ones) or is 6 months universal?

---

# Related Documents

- [Vision Statement](./Vision%20Statement.md)
- [Design Pillars](./Design%20Pillars.md)
- [Respect the Player's Time](./Respect%20the%20Player's%20Time.md)
- [Decisions / ADRs](../../docs/10-decisions/) — TODO: link specific ADR when written
- [RFC Process](../../docs/00-foundation/RFC%20Process.md) — TODO: link when populated