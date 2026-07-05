---
title: Request for Comments Process
id: foundation/rfc-process

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/readme
  - foundation/documentation-standards
  - foundation/adr-process

used_by:
  - All feature proposals
  - Lead Systems Designer
  - Lead Technical Writer
  - Chief Engineer

tags:
  - foundation
  - rfc
  - process
  - proposals
---

# Purpose

This document defines how new systems and major features are proposed through the Request for Comments (RFC) process in The Long Reign.

---

# Overview

New systems should begin life as RFCs before entering the Game Design Document. This prevents scope creep and preserves ideas without immediately committing to them.

An RFC is a proposal. It is not a specification. It is not a commitment. It is a structured way to explore an idea before deciding whether to pursue it.

---

# When to Write an RFC

An RFC should be written when:

- A new gameplay system is being proposed
- A major change to an existing system is being considered
- An idea is worth exploring but not yet ready for specification
- A non-trivial trade-off must be discussed before committing

An RFC is **not** needed for:

- Bug fixes
- Minor refinements to existing systems
- Documentation corrections
- Changes that are purely cosmetic

---

# RFC Lifecycle

1. **Draft**: The RFC is written as a proposal
2. **Discussion**: The RFC is reviewed by relevant stakeholders
3. **Accepted**: The RFC is approved and moves toward specification
4. **Rejected**: The RFC is declined — reasons are documented
5. **Deferred**: The RFC is parked for future consideration (moved to `parking-lot/` or kept in `11-rfc/`)

An accepted RFC does **not** mean implementation begins immediately. It means the idea is approved for further specification (Game Design Specification → Technical Specification → Implementation).

---

# RFC Format

Every RFC must include:

- **Summary**: A one-paragraph overview of the proposal
- **Motivation**: Why this system is worth adding
- **Design Principles Affected**: Which design pillars this proposal touches (see `Principles.md`)
- **Proposed Design**: How the system would work — mechanics, rules, interactions
- **Player Experience**: What the player sees and does
- **Alternatives Considered**: What other approaches were evaluated
- **Open Questions**: Unresolved issues
- **Risks**: Potential problems (scope creep, complexity, principle violations)

RFCs are stored in `docs/11-rfc/` using the RFC template (`docs/templates/RFC Template.md`).

---

# Relationship to ADRs

RFCs and ADRs serve different purposes, but they are linked: an RFC is **required** before an ADR can be created. The RFC explores and proposes; the ADR records and constrains.

| | RFC | ADR |
|---|---|---|
| Purpose | Propose and explore | Record and constrain |
| Timing | Before a decision | After a decision |
| Mutability | Can be revised during discussion | Immutable once accepted |
| Statuses | Draft, Accepted, Rejected, Deferred | Proposed, Accepted, Deprecated |
| Storage | `11-rfc/` | `10-decisions/` |

An accepted RFC leads to one or more ADRs that record the specific architectural decisions made as a result.

---

# Development Workflow Context

The RFC sits in the project's overall development workflow:

```
Idea
  │
  ▼
Discussion
  │
  ▼
RFC              ← RFC lives here
  │
  ▼
Architectural Decision
  │
  ▼
Game Design Specification
  │
  ▼
Technical Specification
  │
  ▼
Implementation
  │
  ▼
Review Pipeline
  │
  ▼
Human Approval
  │
  ▼
Merge
```

Coding should never begin before the relevant specifications exist.

---

# Design Goals

- Prevent scope creep by requiring explicit proposals
- Preserve ideas without immediately committing to them
- Create a clear on-ramp from idea → proposal → specification → implementation
- Ensure all significant additions are evaluated against design principles

---

# Open Questions

- TODO: RFC numbering scheme
- TODO: Who can accept or reject an RFC?
- TODO: Time limit on RFC discussion before a decision must be made?
- TODO: Process for reviving a Deferred RFC

---

# Related Documents

- `ADR Process.md` — how decisions are recorded after RFC acceptance
- `Principles.md` — design pillars that RFCs must respect
- `Documentation Standards.md` — document formatting standards
- `11-rfc/README.md` — index of existing RFCs
- `templates/RFC Template.md` — the template for writing RFCs
- `08-technical/AI Development Workflow.md` — how AI collaborators participate in the workflow