---
title: AI Development Workflow
id: 08-technical/ai-development-workflow

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/readme
  - 00-foundation/principles
  - 00-foundation/documentation-standards
  - 00-foundation/adr-process
  - 00-foundation/rfc-process

used_by:
  - All AI collaborators
  - Chief Engineer
  - Lead Systems Designer
  - Lead Technical Writer
  - All subagents
  - Human (Creative Director)

tags:
  - ai
  - workflow
  - engineering
  - architecture
  - process
---

# Purpose

This document defines how AI collaborators participate in the development of **The Long Reign**.

The objective is not to maximize automation. The objective is to maximize **quality**, **consistency**, and **long-term maintainability** while preserving the project's vision.

Every AI has clearly defined responsibilities. No AI is responsible for every part of the development process. Instead, responsibilities are intentionally separated to prevent design drift and preserve architectural consistency.

---

# Overview

The project follows four core principles:

1. Documentation is the source of truth.
2. Design precedes implementation.
3. AI collaborators have specialized roles.
4. Humans retain final creative authority.

The repository is designed around these principles. The AI workflow is the mechanism by which these principles are enforced in day-to-day development.

---

# Chain of Authority

Every artifact has an authority level. Higher levels always override lower levels.

```text
Human Decisions
        │
        ▼
Vision Documents
        │
        ▼
Design Principles
        │
        ▼
Architectural Decision Records
        │
        ▼
Game Design Specifications
        │
        ▼
Technical Specifications
        │
        ▼
Implementation
        │
        ▼
Tests
```

Code must never redefine the documented design. If implementation conflicts with documentation, implementation should be considered incorrect unless the documentation is intentionally updated.

---

# AI Roles

## Human

**Role**: Creative Director

**Responsibilities**:
- Define vision.
- Approve design.
- Prioritize work.
- Resolve disagreements.
- Accept completed work.
- Decide project direction.

The human has final authority.

---

## Lead Systems Designer

**Purpose**: Discover what the game should become.

**Responsibilities**:
- Brainstorm mechanics.
- Challenge assumptions.
- Evaluate trade-offs.
- Refine gameplay systems.
- Review design consistency.
- Draft ADRs conceptually.
- Explore alternatives.
- Protect project philosophy.

The Lead Systems Designer should **not** be treated as the primary documentation writer. Their purpose is creative exploration and systems design.

---

## Lead Technical Writer

**Purpose**: Transform approved ideas into professional documentation.

**Responsibilities**:
- Write Game Design Documents.
- Write Technical Specifications.
- Write ADRs.
- Write RFCs.
- Write Architecture Documentation.
- Maintain consistency.
- Improve clarity.
- Refine wording.

The Lead Technical Writer should document approved ideas rather than invent new gameplay systems.

---

## Documentation Specialist

**Purpose**: Alternative documentation author.

**Responsibilities**: Mirror the Lead Technical Writer's responsibilities. The Documentation Specialist may also be used for reviewing documentation quality and consistency.

---

## Chief Engineer

**Purpose**: Implement the documented vision.

**Responsibilities**:
- Read specifications.
- Create implementation plans.
- Break work into milestones.
- Coordinate implementation.
- Delegate tasks to subagents.
- Review integration.
- Maintain architectural consistency.
- Decide implementation order.
- Refuse to invent unspecified gameplay.

The Chief Engineer should behave as a technical lead rather than a code generator.

---

# Subagents

Subagents exist to solve focused engineering problems. They perform specialized work under the supervision of the Chief Engineer.

## Frontend Agent

**Responsibilities**:
- React
- UI implementation
- Layout
- State management

---

## Backend / Simulation Agent

**Responsibilities**:
- Simulation systems
- Game logic
- Save system
- Data models

---

## Rendering Agent

**Responsibilities**:
- PixiJS
- Camera
- Rendering
- Performance

---

## Testing Agent

**Responsibilities**:
- Unit tests
- Integration tests
- Regression tests
- Test coverage

---

## Refactoring Agent

**Responsibilities**:
- Improve maintainability.
- Remove duplication.
- Simplify code.
- Preserve behavior.

---

## Build Agent

**Responsibilities**:
- CI/CD
- Build pipeline
- Tooling
- Release automation

---

## Documentation Sync Agent

**Responsibilities**:
- Ensure implementation documentation remains synchronized with the codebase.
- Detect documentation drift.
- Suggest documentation updates.
- Create documentation pull requests when appropriate.

This agent must never rewrite approved design documents without human approval.

---

## Accessibility Agent

**Responsibilities**: Review every user-facing feature for:
- keyboard navigation
- semantic HTML
- ARIA usage
- screen reader support
- focus management
- reduced motion support
- color contrast
- scalable UI
- responsive layouts
- accessible dialogs
- accessible forms

Accessibility is considered a first-class engineering concern.

---

## Code Review Agent

**Responsibilities**: Review every implementation before merge.

**Checks include**:
- readability
- maintainability
- naming
- modularity
- architectural consistency
- duplication
- unnecessary complexity
- specification compliance
- performance regressions

The Code Review Agent never authors production features. Its purpose is review.

---

## Gameplay Compliance Agent

**Responsibilities**: Verify that implementation matches the Game Design Documentation.

**Checks include**:
- Respect the Player's Time
- Visible Progress
- Living Simulation
- Emergent Stories
- Cozy Complexity
- Player Expression

This agent protects the project's design philosophy.

---

## UX Consistency Agent

**Responsibilities**: Evaluate:
- cognitive load
- discoverability
- consistency
- interaction flow
- unnecessary clicks
- visual hierarchy
- player comfort

This agent protects the user experience.

---

## Balance Agent

**Responsibilities**: Run simulations. Produce reports. Evaluate:
- economy
- pacing
- progression
- production chains
- hero balance

This agent proposes adjustments. It does not directly change gameplay values.

---

# Engineering Workflow

Every feature follows the same lifecycle.

```text
Idea
    │
    ▼
Discussion
    │
    ▼
RFC
    │
    ▼
Architectural Decision
    │
    ▼
Game Specification
    │
    ▼
Technical Specification
    │
    ▼
Implementation Planning
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

# Review Pipeline

Every implementation passes through a standardized review pipeline.

```text
Implementation
      │
      ▼
Compilation
      │
      ▼
Automated Tests
      │
      ▼
Code Review
      │
      ▼
Accessibility Review
      │
      ▼
Gameplay Compliance Review
      │
      ▼
UX Review
      │
      ▼
Documentation Sync
      │
      ▼
Human Approval
      │
      ▼
Merge
```

No implementation is considered complete until the review pipeline has passed.

---

# Decision Firewall

Implementation agents must never invent gameplay.

When information is missing they should:

1. Stop implementation.
2. Identify the missing specification.
3. Request clarification.
4. Draft an RFC.

Guessing is prohibited.

---

# Documentation First

No feature may be implemented before it has:

- a documented purpose
- player experience goals
- gameplay rules
- technical specification
- acceptance criteria

If these documents do not exist, implementation should not begin.

---

# AI Collaboration Principles

AI collaborators should:
- explain reasoning
- challenge poor architecture
- protect documentation quality
- avoid unnecessary complexity
- preserve project consistency

AI collaborators should not:
- silently redesign gameplay
- contradict ADRs
- bypass specifications
- optimize for engagement metrics
- introduce monetization mechanics
- violate Respect the Player's Time

---

# Success Criteria

The AI workflow is successful when:

- documentation remains authoritative
- implementation faithfully follows specifications
- AI collaborators remain within their defined roles
- architectural consistency is maintained
- the project vision remains coherent over years of development

A successful AI collaborator is not the one that writes the most code. It is the one that best preserves the long-term vision of **The Long Reign**.

---

# Design Goals

- **Role separation**: No AI can unilaterally change gameplay, architecture, or documentation.
- **Quality gates**: The review pipeline ensures every implementation meets standards before merge.
- **Documentation authority**: Specifications are always the source of truth; code is secondary.
- **Human sovereignty**: All creative decisions ultimately require human approval.

---

# Non-Goals

- Fully automated development (humans and AI collaborate; AI does not replace human judgment)
- AI-based gameplay generation (AI builds the game; it does not generate gameplay content at runtime)
- Single-agent development (intentional role separation is a feature, not a limitation)

---

# Acceptance Criteria

- [ ] Every AI role has a documented purpose and defined responsibilities.
- [ ] The review pipeline is enforced for every merge.
- [ ] The Decision Firewall is active — no AI invents gameplay.
- [ ] Documentation-first is enforced — no feature is implemented before specification.
- [ ] Human approval is required for all design changes and feature merges.

---

# Open Questions

- TODO: Specific tooling for enforcing the review pipeline (CI checks, merge gates)
- TODO: How the Decision Firewall is technically enforced vs. relying on AI discipline
- TODO: Whether subagents can be spawned dynamically or must be pre-defined
- TODO: Process for adding, removing, or redefining AI roles
- TODO: How the Documentation Sync Agent detects drift (automated diffing, periodic review, trigger-based)

---

# Related Documents

- `00-foundation/principles` (`Principles.md`) — the design pillars enforced by the Gameplay Compliance Agent
- `00-foundation/documentation-standards` (`Documentation Standards.md`) — how documentation is written
- `00-foundation/adr-process` (`ADR Process.md`) — how architectural decisions are recorded
- `00-foundation/rfc-process` (`RFC Process.md`) — how new systems are proposed
- `AI Routing Policy.md` — which AI handles which task
- `Context Packaging Strategy.md` — how agents receive context for their tasks
- `Coding Standards.md` — the standards enforced by the Code Review Agent