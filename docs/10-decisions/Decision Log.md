---
title: Decision Log
id: 10-decisions/decision-log

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-06

depends_on:
  - 00-foundation/readme
  - 00-foundation/adr-process

used_by:
  - All contributors
  - All AI collaborators
  - Chief Engineer

tags:
  - decisions
  - adr
  - architecture
  - index
---

# Purpose

This document is the master index and log of all Architectural Decision Records (ADRs) for The Long Reign. It records significant decisions that affect the project's architecture, design, or philosophy.

Each entry includes the full ADR content: context, decision, consequences, and alternatives considered. ADRs are immutable once accepted.

---

# ADR Index

| ID | Title | Status | Date |
|----|-------|--------|------|
| ADR-2026-001 | Single-Player Forever | Accepted | 2026-07-05 |
| ADR-2026-002 | No Monetization | Accepted | 2026-07-05 |
| ADR-2026-003 | No Offline Progress | Accepted | 2026-07-05 |
| ADR-2026-004 | Respect the Player's Time as a Design Pillar | Accepted | 2026-07-05 |
| ADR-2026-005 | Specification-First Development | Accepted | 2026-07-05 |
| ADR-2026-006 | Browser-Based Platform | Accepted | 2026-07-05 |
| ADR-2026-007 | Settlement as Protagonist | Accepted | 2026-07-05 |
| ADR-2026-008 | Documentation as Source of Truth | Accepted | 2026-07-05 |
| ADR-2026-009 | ADR/RFC Process Adoption | Accepted | 2026-07-05 |

> **Note:** IDs use the `ADR-YYYY-XXX` format defined in `00-foundation/ADR Process.md` (Resolved Questions). These 9 foundation ADRs were created directly from brainstorming sessions and are retroactively exempt from the RFC prerequisite (`ADR Process.md`, "When to Write an ADR").

---

# ADR-2026-001: Single-Player Forever

**Status:** Accepted
**Date:** 2026-07-05

## Context

The project originated from a single-player experience (TopHeroes on iOS) and early discussion focused on creating a personal, introspective game. Multiplayer introduces complexity in synchronization, moderation, competitive dynamics, and server infrastructure — all of which would compete with the core goal of building a living kingdom at the player's own pace.

## Decision

The Long Reign will be single-player forever. No multiplayer features — competitive, cooperative, or asynchronous — will be designed, implemented, or planned.

## Consequences

- **Easier**: No server infrastructure for multiplayer; no synchronization complexity; no moderation burden; no competitive balance concerns; no pressure to add social features; full design freedom for single-player pacing.
- **Harder**: No social virality from multiplayer features; no cooperative play appeal.
- **Constrained**: Any future feature proposal involving other players (leaderboards, trading, shared worlds) is architecturally prohibited.

## Alternatives Considered

- **Optional co-op**: Would require server infrastructure and introduce design tension between single-player and co-op balance. Rejected as scope creep that undermines the solitary, reflective experience.
- **Asynchronous social features (visiting friends' kingdoms)**: Considered but rejected; introduces complexity and shifts focus away from the player's personal kingdom.

---

# ADR-2026-002: No Monetization

**Status:** Accepted
**Date:** 2026-07-05

## Context

The project's philosophy centers on the player returning because they _want_ to, not because the game demands it. Monetization mechanics — premium currencies, battle passes, energy systems — are designed to create engagement pressure and spending incentives. These directly conflict with the project's emotional goal and the Respect the Player's Time pillar.

## Decision

The Long Reign will include no monetization mechanics of any kind. Specifically prohibited: premium currency, soft currency purchases, battle passes, energy systems, daily reward incentives, loot boxes, gacha mechanics, and any pay-to-accelerate or pay-to-cosmetics system.

Note: The business-model question (separate from this architectural decision, which constrains only in-game mechanics) is resolved in `00-foundation/Why.md` (Open Questions): the game itself will be 100% free and open source, with no monetization beyond a possible, entirely optional GitHub Sponsors or Ko-fi link.

## Consequences

- **Easier**: No economy-balancing around monetization; no psychological manipulation in design; full alignment with Respect the Player's Time; no need for payment infrastructure or storefront.
- **Harder**: No ongoing revenue stream from the game itself (unless a purchase-price or donation model is chosen separately).
- **Constrained**: Any progression system must be designed around intrinsic motivation only; no feature may gate content behind payment.

## Alternatives Considered

- **Cosmetic-only shop**: Rejected. While less intrusive than pay-to-win, any storefront introduces psychological pressure and contradicts the principle of returning without pressure.
- **Free-to-play with optional ads**: Rejected. Ads introduce engagement-pressure mechanics and degrade the player experience.

---

# ADR-2026-003: No Offline Progress

**Status:** Accepted
**Date:** 2026-07-05

## Context

Many simulation and idle games simulate progress while the player is away, creating a "welcome back" reward loop. However, this mechanic creates pressure to log in to collect accumulated resources and punishes players who take long breaks (by creating a sense of "wasted" offline time). This conflicts with both the Six-Month Return Test and Respect the Player's Time.

## Decision

Time stops while the game is closed. No progress — resource accumulation, villager aging, construction, exploration, or any other simulation state — advances during offline periods. Closing the browser preserves the current state exactly.

## Consequences

- **Easier**: No offline simulation engine needed; no catch-up mechanics; no save-corruption risk from long gaps; no "welcome back" resource dump to balance; aligns perfectly with the Six-Month Return Test.
- **Harder**: All progression must happen during active play, which may require careful pacing to avoid the game feeling slow.
- **Constrained**: No "idle" or "incremental" mechanics; the save system must support long gaps between sessions without corruption (see [Save System](../08-technical/Save%20System.md) — TODO: link when populated).

## Alternatives Considered

- **Optional offline progress (player toggle)**: Rejected. Introduces design complexity and still creates pressure for players who enable it.
- **Capped offline progress (e.g., max 8 hours)**: Rejected. Still creates FOMO — the player knows they "lost" progress after the cap.

---

# ADR-2026-004: Respect the Player's Time as a Design Pillar

**Status:** Accepted
**Date:** 2026-07-05

## Context

Early brainstorming identified a strong reaction against modern engagement mechanics — daily rewards, login streaks, energy systems, battle passes, FOMO. The project's emotional goal (returning after months and thinking "Wow, I built this") requires that the player never feels punished for absence. This principle needed to be formalized as a non-negotiable constraint on all future design.

## Decision

Respect the Player's Time is adopted as one of the six design pillars. The game will never include:

- Daily rewards
- Login streaks
- Battle passes
- Premium currency
- Energy systems (stamina, action limits)
- Daily quests
- FOMO mechanics (limited-time offers, missable events, countdown timers)
- Mechanics that punish taking breaks (decay, atrophy, degradation)

The kingdom patiently waits. The player returns because they want to.

## Consequences

- **Easier**: Clear, enforceable boundary for all feature proposals; strong alignment with the Six-Month Return Test; no engagement-metric-driven design.
- **Harder**: Must design long-term engagement without any of the standard compulsion loops; all progression incentive must be intrinsic.
- **Constrained**: All systems must be evaluated against the prohibited-mechanics list; the Gameplay Compliance Agent enforces this (see [AI Development Workflow](../08-technical/AI%20Development%20Workflow.md)).

## Alternatives Considered

- **Soft prohibition (guideline, not rule)**: Rejected. A guideline invites gradual erosion; this must be a hard constraint to protect the project's identity.
- **"Ethical" FOMO (e.g., seasonal events that repeat yearly)**: Considered but rejected. Even repeating events create pressure during their active window.

---

# ADR-2026-005: Specification-First Development

**Status:** Accepted
**Date:** 2026-07-05

## Context

During brainstorming, the project's documentation philosophy emerged: rather than treating documentation as something produced after development, the documentation itself is the project. For a project with AI collaborators across multiple roles (Lead Systems Designer, Lead Technical Writer, Chief Engineer, multiple subagents), a specification-first approach ensures consistency and prevents design drift.

## Decision

No feature may be implemented before it has:

- A documented purpose
- Player experience goals
- Gameplay rules
- A technical specification
- Acceptance criteria

Coding is intentionally placed near the end of the development workflow. The full workflow is: Idea → Discussion → RFC (if needed) → Architectural Decision → Game Design Specification → Technical Specification → Implementation → Playtesting → Revision.

## Consequences

- **Easier**: Clear gating between design and implementation; AI collaborators have unambiguous boundaries; features can be reviewed before code is written; reduces wasted implementation on poorly-specified ideas.
- **Harder**: More upfront investment before any code is written; may feel slow in early stages; requires discipline to maintain.
- **Constrained**: Implementation agents must refuse to build unspecified features (see Decision Firewall in [AI Development Workflow](../08-technical/AI%20Development%20Workflow.md)).

## Alternatives Considered

- **Iterative prototyping (build first, document later)**: Rejected. Risks design drift, especially with multiple AI collaborators working in parallel.
- **Hybrid (spec for major features, prototype for minor)**: Partially accepted — the RFC process provides a lightweight alternative for exploration. However, even minor features must have documented acceptance criteria.

---

# ADR-2026-006: Browser-Based Platform

**Status:** Accepted
**Date:** 2026-07-05

## Context

The original inspiration began with the question: "I wish I could play something like it in my web browser." Browser-based delivery provides instant accessibility (no install, no app store), cross-platform reach, and simplifies distribution. It also aligns with the project's scope — a kingdom-building simulation does not require native hardware access.

## Decision

The Long Reign will be a browser-based game. It will run in a web browser using web technologies (HTML, CSS, JavaScript/TypeScript, with rendering via PixiJS — per [Architecture](../08-technical/Architecture.md)).

## Consequences

- **Easier**: No platform-specific builds; no app store review process; instant updates; cross-platform by default; large pool of web developers and tools.
- **Harder**: Performance constraints vs. native (especially for simulation and rendering); limited access to hardware features; browser compatibility testing required; no offline-first capability without explicit design.
- **Constrained**: Technology stack is limited to web-compatible technologies; save system uses LocalStorage with JSON export/import.

## Alternatives Considered

- **Native desktop (Electron)**: Considered as a potential future wrapper but not as the primary platform. Browser-first keeps the barrier to entry minimal.
- **Mobile app**: Rejected as primary platform. The grid-based construction and settlement management experience is better suited to desktop screen sizes. Browser-based delivery still allows mobile access if the UI is responsive.
- **Console**: Out of scope.

## Open Questions

- TODO: Target browsers and minimum versions
- **Resolved:** Whether an Electron wrapper will be offered as a packaged distribution option. `00-foundation/Why.md` (Open Questions) confirms the target platform is pure web for now; no Electron wrapper is planned.

---

# ADR-2026-007: Settlement as Protagonist

**Status:** Accepted
**Date:** 2026-07-05

## Context

The project originally assumed heroes would be the focus — a hero-collection RPG with kingdom elements. Through discussion, the priority inverted: the settlement is the heart of the game, and heroes exist to support it. This is a defining architectural decision that shapes every gameplay system.

## Decision

The settlement — not heroes, not combat — is the protagonist of The Long Reign. The primary gameplay loop (Explore → Gather → Return → Expand → Unlock → Repeat) centers on the settlement at every stage. Heroes support the kingdom; the kingdom does not exist to support the heroes.

## Consequences

- **Easier**: Clear design hierarchy: settlement systems take priority; combat and exploration serve settlement growth; progression is measured by kingdom development, not hero power.
- **Harder**: Must resist the gravitational pull of hero-centric design (common in the genre); hero systems must be scoped carefully to avoid overshadowing the settlement.
- **Constrained**: Hero roster is limited (~10–20 named heroes); hero progression focuses on levels and professions, not gear treadmills; combat is mostly automatic and turn-based.

## Alternatives Considered

- **Equal emphasis (settlement and heroes as co-protagonists)**: Rejected. Creates design tension — when systems compete for priority, neither receives full attention. The settlement-first hierarchy resolves this.
- **Hero-first (kingdom as backdrop)**: Rejected. This was the initial assumption before the brainstorming evolution; it was explicitly abandoned in favor of the settlement-first vision.

---

# ADR-2026-008: Documentation as Source of Truth

**Status:** Accepted
**Date:** 2026-07-05

## Context

The project adopted a philosophy where the documentation is the project and the game implements the documentation. This was not an obvious choice — many game projects treat design documents as aspirational and prioritize what's actually in the code. However, with multiple AI collaborators and a specification-first workflow, a single source of truth is essential to prevent drift.

## Decision

Documentation is the source of truth for The Long Reign. If implementation conflicts with documentation, the implementation is considered incorrect unless the documentation is intentionally updated through the ADR or RFC process. Code must never silently redefine the documented design.

## Consequences

- **Easier**: Clear authority hierarchy; AI collaborators have unambiguous reference; design intent is preserved across implementation cycles; documentation drift is treated as a bug.
- **Harder**: Documentation must be maintained with the same rigor as code; requires a Documentation Sync Agent (see [AI Development Workflow](../08-technical/AI%20Development%20Workflow.md)) to detect drift; more ceremony around design changes.
- **Constrained**: No "the code is the documentation" shortcuts; every design change must flow through the documentation pipeline.

## Alternatives Considered

- **Code as source of truth (docs as supplementary)**: Rejected. With multiple AI collaborators, relying on code for design intent leads to fragmentation and lost rationale.
- **Living design doc (collaborative, no formal versioning)**: Rejected. Without versioned, structured documentation, there is no way to track when or why a design decision changed.

---

# ADR-2026-009: ADR/RFC Process Adoption

**Status:** Accepted
**Date:** 2026-07-05

## Context

The project draws on software engineering practices. To manage architectural decisions and feature proposals at scale — especially with AI collaborators — formal processes for proposing and recording decisions are necessary. The brainstorming history already surfaced several architectural decisions that needed to be captured.

## Decision

The project adopts Architectural Decision Records (ADRs) and Request for Comments (RFCs) as formal processes:

- **ADRs** record significant architectural and design decisions. They are immutable once accepted and live in `docs/10-decisions/`.
- **RFCs** are structured proposals for new systems or major changes. They live in `docs/11-rfc/` and may be accepted, rejected, or deferred.
- The workflow: Idea → Discussion → RFC → ADR → Game Design Specification → Technical Specification → Implementation.

## Consequences

- **Easier**: Clear pathway from idea to implementation; decisions are traceable; rationale is preserved; new contributors can understand _why_ things are the way they are.
- **Harder**: Process overhead; not every idea needs full RFC/ADR ceremony (see [RFC Process](../00-foundation/RFC%20Process.md) for scope guidelines).
- **Constrained**: Implementation agents must respect accepted ADRs; ADRs can only be overridden by newer ADRs that explicitly deprecate them.

## Alternatives Considered

- **Informal decision tracking (meeting notes only)**: Rejected. Does not scale across multiple AI collaborators or preserve rationale for future contributors.
- **Wiki-style living documents**: Rejected. ADRs provide immutability and clear lifecycle states that a wiki does not.

---

# Open Questions

- **Resolved:** ADR numbering scheme. `00-foundation/ADR Process.md` (Resolved Questions) specifies the `ADR-YYYY-XXX` format. IDs in this log have been updated to `ADR-2026-001` through `ADR-2026-009` accordingly.
- **Resolved:** Formal approval process. `00-foundation/ADR Process.md` (Approval Tiers) defines a three-tier system: Constitutional and Design ADRs require human sign-off; Technical ADRs use agent-propose / human-veto with a 7-day review window.
- **Resolved:** Whether ADRs require an RFC before being created. `00-foundation/ADR Process.md` (Resolved Questions, "RFC prerequisite") confirms an RFC is required before every ADR except the 9 foundation ADRs (ADR-2026-001–ADR-2026-009), which are retroactively exempt.
- TODO: Process for deprecating an ADR — what level of justification is required? `00-foundation/ADR Process.md` (ADR Lifecycle) states a Deprecated ADR must be superseded by a later ADR that explicitly replaces it, but does not define a required justification threshold.

---

# Related Documents

- [ADR Process](../00-foundation/ADR%20Process.md) — the process governing ADR creation and lifecycle
- [RFC Process](../00-foundation/RFC%20Process.md) — the process for proposing new systems
- [Principles](../00-foundation/Principles.md) — the design pillars that ADRs must respect
- [Project Genesis — Brainstorming History](./Project%20Genesis%20-%20Brainstorming%20History.md) — the evolution that produced these decisions
- [AI Development Workflow](../08-technical/AI%20Development%20Workflow.md) — how AI collaborators interact with ADRs
