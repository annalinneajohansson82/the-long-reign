---
title: Architectural Decision Records Process
id: 00-foundation/adr-process

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/readme
  - 00-foundation/principles
  - 00-foundation/documentation-standards

used_by:
  - All design decisions
  - All contributors
  - Lead Systems Designer
  - Lead Technical Writer

tags:
  - foundation
  - adr
  - process
  - decisions
---

# Purpose

This document defines how Architectural Decision Records (ADRs) are created, maintained, and used in The Long Reign. ADRs record significant decisions that affect the project's architecture, design, or philosophy.

---

# Overview

An ADR is a record of a decision that was made. It captures the context, the options considered, the decision itself, and the consequences.

ADRs are immutable once accepted. They document what was decided and why — not what might be decided in the future.

---

# When to Write an ADR

An ADR should be written when a decision:

- Affects the project's architecture or design philosophy
- Involves a trade-off between competing values
- Has long-term implications
- Would be difficult to reverse
- Establishes a constraint that all future work must respect

An RFC is **required** before an ADR can be created — the RFC explores the options, the ADR records the decision. The only exceptions are the 9 foundation ADRs (ADR-2026-001 through ADR-2026-009) which were created directly from brainstorming sessions and are retroactively exempt.

Examples from the project's source material:

| ADR Topic | Decision |
|-----------|----------|
| Single-player | The game will be single-player forever |
| No monetization | No premium currency, battle passes, energy systems |
| No offline progress | Time stops while the game is closed |
| Respect the Player's Time | The game will never include FOMO mechanics |
| Settlement-first | The settlement is the main character, not heroes |
| Documentation-first | Documentation precedes implementation |

---

# ADR Lifecycle

1. **Proposed**: An ADR is drafted when a significant decision point is identified
2. **Discussion**: The ADR is reviewed by relevant stakeholders (human and AI)
3. **Accepted**: The ADR is approved and becomes authoritative
4. **Deprecated** (rare): An ADR may be superseded by a later ADR that explicitly replaces it

ADRs are never deleted. Even deprecated ADRs remain as historical records.

---

# Approval Tiers

Different decisions require different levels of approval. ADRs are classified into three tiers:

| Tier | Category | Approval Required | Examples |
|------|----------|-------------------|----------|
| **Constitutional** | Monetization, design pillars, platform direction, scope | Human only | Adding multiplayer, changing the monetization model, altering design pillars |
| **Design** | New gameplay systems, pillar conflicts, scope changes | Human only | Introducing a new system not in the source material, changing design constraints |
| **Technical** | Tech stack, implementation patterns, tooling | Agent proposes, human veto (7-day review window) | Choosing a rendering library, save format, testing framework |

**Constitutional** and **Design** ADRs require explicit human sign-off before they transition from Proposed to Accepted. The human may request revisions or reject the ADR outright.

**Technical** ADRs are logged when drafted. They become accepted after 7 days unless the human vetoes them. If the human is actively reviewing and hasn't decided within 7 days, the ADR remains in Discussion until they respond.

A Technical ADR that affects design philosophy must be escalated to Design tier.

---

# ADR Format

Every ADR must include:

- **Title**: A short, descriptive name
- **Status**: Proposed, Accepted, or Deprecated
- **Context**: What problem or situation led to this decision
- **Decision**: What was decided
- **Consequences**: What becomes easier, harder, or constrained as a result
- **Alternatives Considered**: What other options were evaluated and why they were rejected

ADRs are stored in `docs/10-decisions/` using the ADR template (`docs/templates/ADR Template.md`).

---

# The Decision Log

All ADRs are indexed in `docs/10-decisions/Decision Log.md`. When a new ADR is created:

1. Write the ADR file in `docs/10-decisions/`
2. Add an entry to the Decision Log with title, status, date, and a one-line summary
3. Update `depends_on` and `used_by` in affected documents

---

# Chain of Authority

ADRs sit in the project's chain of authority:

```
Human Decisions
       │
       ▼
Vision Documents
       │
       ▼
Design Principles
       │
       ▼
ADRs                         ← ADRs live here
       │
       ▼
Game Design Specifications
       │
       ▼
Technical Specifications
       │
       ▼
Implementation
```

Code must never contradict an ADR. If an ADR is wrong, it must be explicitly deprecated and replaced — not silently overridden.

---

# AI Collaboration

- The Lead Systems Designer may draft ADRs conceptually
- The Lead Technical Writer writes ADRs in their final form
- Implementation agents must refuse to violate accepted ADRs

---

# Resolved Questions

- **ADR numbering scheme:** Use `ADR-YYYY-XXX` format (e.g., `ADR-2026-001`, `ADR-2026-002`). Year prefix prevents collisions across long development cycles and makes chronological ordering implicit.

- **Approval process:** Three-tier system — Constitutional and Design ADRs require human sign-off; Technical ADRs use agent-propose / human-veto with a 7-day review window. See Approval Tiers section above.

- **RFC prerequisite:** An RFC is required before an ADR can be created in all cases. The RFC explores the options; the ADR records the decision. See RFC Process.md for details. The only exception is the initial 9 foundation ADRs (ADR-2026-001 through ADR-2026-009) which were created directly from brainstorming sessions — these are exempt retroactively.

# Open Questions

- None.

---

# Related Documents

- `RFC Process.md` — how new systems are proposed before becoming ADRs
- `Principles.md` — the design pillars that ADRs must respect
- `Documentation Standards.md` — document formatting standards
- `10-decisions/Decision Log.md` — the master index of all ADRs
- `templates/ADR Template.md` — the template for writing ADRs