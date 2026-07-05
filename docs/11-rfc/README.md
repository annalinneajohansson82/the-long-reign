---
title: RFC Directory
id: 11-rfc/readme

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/rfc-process

used_by:
  - Lead Systems Designer
  - Lead Technical Writer
  - Chief Engineer

tags:
  - rfc
  - index
  - proposals
---

# Purpose

This directory holds all Requests for Comments (RFCs) for The Long Reign. It serves as the structured entry point for proposing new systems and major feature changes before they enter the Game Design Document.

---

# What RFCs Are

An RFC is a **proposal** — not a specification and not a commitment. It is a structured way to explore an idea and evaluate its trade-offs before deciding whether to pursue it.

An accepted RFC does **not** mean implementation begins immediately. It means the idea is approved for further specification:

```
RFC → Architectural Decision → Game Design Specification → Technical Specification → Implementation
```

---

# When to Write an RFC

Write an RFC when:

- A new gameplay system is being proposed
- A major change to an existing system is being considered
- An idea is worth exploring but not yet ready for specification
- A non-trivial trade-off must be discussed before committing

Do **not** write an RFC for:

- Bug fixes
- Minor refinements to existing systems
- Documentation corrections
- Changes that are purely cosmetic

---

# RFC Lifecycle

Every RFC moves through a defined lifecycle:

| Status     | Meaning                                                       |
|------------|---------------------------------------------------------------|
| Draft      | The RFC is being written as a proposal                        |
| Discussion | The RFC is under review by relevant stakeholders              |
| Accepted   | The RFC is approved and moves toward specification            |
| Rejected   | The RFC is declined — reasons are documented                  |
| Deferred   | The RFC is parked for future consideration                    |

---

# How to Use This Directory

## Naming Convention

TODO: An RFC numbering scheme has not yet been established (see open questions in the [RFC Process](../00-foundation/RFC%20Process.md)).

For now, new RFCs should use a descriptive slug as the filename:

```
docs/11-rfc/<system-name>.md
```

Example: `docs/11-rfc/building-customization.md`

## Creating a New RFC

1. Copy the RFC template: `docs/templates/RFC Template.md`
2. Place the copy in this directory (`docs/11-rfc/`)
3. Fill in all required sections: Summary, Motivation, Design Principles Affected, Proposed Design, Player Experience, Alternatives Considered, Open Questions, Risks
4. Set status to `Draft` and begin discussion

## Template

- **[RFC Template](../templates/RFC%20Template.md)** — use this to create new RFCs

> **Note:** The RFC template is currently a stub and needs to be populated with the required sections defined in the [RFC Process](../00-foundation/RFC%20Process.md).

## Reference

- **[RFC Process](../00-foundation/RFC%20Process.md)** (00-foundation/rfc-process) — the authoritative process document for writing, reviewing, and deciding on RFCs

---

# Relationship to ADRs

RFCs and Architecture Decision Records (ADRs) serve different purposes:

|                 | RFC                           | ADR                                      |
|-----------------|-------------------------------|------------------------------------------|
| Purpose         | Propose and explore           | Record and constrain                     |
| Timing          | Before a decision             | After a decision                         |
| Mutability      | Can be revised during discussion | Immutable once accepted               |
| Storage         | `docs/11-rfc/`                | `docs/10-decisions/`                     |

An accepted RFC may lead to one or more ADRs that record the specific architectural decisions made as a result.

---

# Current RFC Inventory

No RFCs have been submitted yet. This inventory will be populated as proposals are created.

| ID  | Title | Status | Last Updated |
|-----|-------|--------|--------------|
| —   | —     | —      | —            |

---

# Related Documents

- [RFC Process](../00-foundation/RFC%20Process.md) — how to propose and evaluate new systems
- [ADR Process](../00-foundation/ADR%20Process.md) — how decisions are recorded after RFC acceptance
- [RFC Template](../templates/RFC%20Template.md) — the template for writing RFCs
- [AI Development Workflow](../08-technical/AI%20Development%20Workflow.md) — where RFCs fit in the overall engineering workflow
