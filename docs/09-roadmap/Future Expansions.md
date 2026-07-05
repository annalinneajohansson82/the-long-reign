---
title: Future Expansions — Post-Release Roadmap
id: 09-roadmap/future-expansions

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 09-roadmap/mvp
  - 09-roadmap/vertical-slice
  - 09-roadmap/alpha
  - 09-roadmap/beta
  - 09-roadmap/release
  - 00-foundation/readme
  - 00-foundation/why
  - 00-foundation/principles

used_by:
  - Post-release planning
  - All future RFCs

tags:
  - roadmap
  - future-expansions
  - milestone
  - parking-lot
---

# Purpose

Define the Future Expansions framework for The Long Reign. Unlike the preceding milestones, this document does not define a specific deliverable. It establishes the process and categories through which post-release ideas are evaluated, prioritized, and promoted from the parking lot into active development.

The project's specification-first methodology continues after release. Future expansions follow the same workflow: Idea → Discussion → RFC → ADR → Game Spec → Tech Spec → Implementation.

---

# Overview

After Release, the game continues to evolve. Players may request features. The team may identify systems that could be deepened. Ideas that were deferred during initial development may be reconsidered.

This milestone document is a living framework. It defines:
- How expansion ideas are captured and tracked
- How they are evaluated against the project's design principles
- What categories of expansions exist
- What work is currently parked for consideration

---

# Expansions Process

## Idea Capture

All expansion ideas are recorded in `docs/parking-lot/`:
- `Future Mechanics.md` — New or expanded gameplay systems
- `Interesting Ideas.md` — Ideas not yet evaluated for feasibility or fit

These documents are the canonical source for expansion candidates.

## Evaluation Criteria

Every expansion proposal is evaluated against:

1. **The North Star:** Does this make the kingdom feel more alive?
2. **The Six-Month Return Test:** Will this make a returning player smile?
3. **Design Pillars:** Does it conflict with any of the six pillars?
4. **Respect the Player's Time:** Does it introduce any forbidden mechanic?
5. **Scope:** Can it be implemented without destabilizing existing systems?
6. **Demand:** Is there player or team demand for this expansion?

Ideas that pass evaluation graduate to the RFC process (`docs/11-rfc/`), then follow the standard engineering workflow.

## Categories

Expansions may fall into one of several categories:

- **Deepening:** Adding depth to existing systems (e.g., richer villager personalities, additional Chronicle event types)
- **Broadening:** Adding new systems or mechanics (e.g., a new resource category, a new hero type)
- **Content:** Adding more of what already exists (e.g., new regions, new buildings, new heroes)
- **Quality:** Polish, accessibility improvements, performance, or UI refinements beyond what shipped
- **Platform:** Porting to new platforms (desktop wrappers, mobile)
- **Community:** Features supporting player community (if appropriate for single-player game)

---

# Current Parking Lot

This section is intentionally a stub. As ideas are captured in `docs/parking-lot/`, this document should be updated with a high-level summary of what is under consideration.

## Candidate Expansions

- TODO: Populate from `docs/parking-lot/Future Mechanics.md` and `docs/parking-lot/Interesting Ideas.md` as those documents are filled

## Deferred from Initial Development

Systems mentioned in source material that were deferred beyond the initial release scope:

- TODO: Identify any systems from the Handoff document that were intentionally scoped out of 09-roadmap/mvp through 09-roadmap/release and may return here

---

# Documentation Prerequisites for Expansions

Before any expansion enters implementation:

- The expansion must have an accepted RFC in `docs/11-rfc/`
- The expansion must have an ADR in `docs/10-decisions/`
- A Game Design Specification must exist (either a new document or an update to an existing one)
- A Technical Specification must exist
- All affected existing documentation must be updated to reflect the expansion
- The expansion must pass the evaluation criteria (North Star, Six-Month Return Test, Design Pillars, Respect the Player's Time)

---

# Design Goals

- Expansions should deepen the kingdom's sense of life, not add complexity for its own sake
- Expansions should never violate Respect the Player's Time
- Expansions should never introduce monetization mechanics that conflict with the project's principles
- Expansions should preserve save compatibility whenever possible
- Expansions should not undermine the emotional goal: the kingdom should remain a place the player genuinely wants to return to

---

# Non-Goals

- This document does not commit to any specific expansion
- This document does not establish a release cadence for expansions
- This document does not define a monetization model for expansions (if any)
- This document does not establish a live service model

---

# Open Questions

- TODO: Post-release support model (free updates, paid expansions, donation-supported, other)
- TODO: Expansion cadence (regular schedule or ad-hoc based on completed work)
- TODO: Whether expansions should be versioned separately from the base game
- TODO: How player feedback should be incorporated into expansion planning
- TODO: Whether the base game should include infrastructure for expansions (modular architecture, content packs, etc.)
- TODO: Save migration policy for expansions that change save format
- TODO: Whether expansions introduce any new platforms or deployment targets
- TODO: Community involvement model (suggestion channels, voting, beta testing for expansions)

---

# Related Documents

- `09-roadmap/mvp` through `09-roadmap/release` — Predecessor milestones
- `docs/parking-lot/Future Mechanics.md` — Expansion candidates
- `docs/parking-lot/Interesting Ideas.md` — Unevaluated ideas
- `docs/11-rfc/` — RFC process and archive
- `docs/10-decisions/` — ADRs for accepted expansions
- `00-foundation/Principles.md` — Design principles all expansions must respect
- `01-vision/Design Pillars.md` — Pillars all expansions must uphold
- `01-vision/The Six-Month Return Test.md` — Test all expansions must pass
- `01-vision/Respect the Player's Time.md` — Principle no expansion may violate
- `08-technical/AI Development Workflow.md` — Engineering workflow for expansions
