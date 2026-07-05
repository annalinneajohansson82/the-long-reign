---
title: Context Packaging Strategy
id: technical/context-packaging-strategy

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - technical/ai-development-workflow
  - technical/ai-routing-policy
  - foundation/documentation-standards
  - foundation/project-structure

used_by:
  - Chief Engineer
  - All subagents
  - Lead Technical Writer
  - Documentation Specialist

tags:
  - ai
  - context
  - delegation
  - engineering
  - process
---

# Purpose

This document defines how AI collaborators receive context for their tasks. The AI Development Workflow defines roles and responsibilities; the AI Routing Policy defines which AI handles which task. This document defines **what information each AI needs** to perform its task effectively and how that information is packaged.

The goal is to ensure every AI has the right context — enough to do its job, not so much that it becomes overwhelmed or tempted to overstep its role.

---

# Overview

The project is documentation-driven. The documentation is the source of truth. Therefore, context for AI collaborators is primarily derived from the documentation itself.

Each AI role receives a tailored context package: the subset of documents and specifications relevant to its task. This prevents role confusion and enforces the Decision Firewall by ensuring that implementation agents never see speculative design documents, and design agents never see implementation details that might bias their thinking.

---

# Core Principles

1. **Context is derived from documentation**. AI collaborators receive context from the project's documentation, not from ad-hoc instructions.
2. **Context is role-specific**. Each AI role receives only the documents it needs. An implementation agent does not need to read brainstorming notes.
3. **Context enforces the Decision Firewall**. By controlling what documents an agent sees, the project prevents agents from acting on information outside their role.
4. **Context is versioned**. Documents carry version numbers and statuses. AI collaborators should be aware of which version of a document they are working from.
5. **Missing context is a stop condition**. If an agent needs a document that does not exist, that is a signal that the specification is incomplete — the agent stops and requests it.

---

# Context Packages by Role

## Human (Creative Director)

**Receives**: Everything. The human has access to all documents and all context.

**Typical context for a decision**:
- The relevant RFC or ADR draft
- The design principles document (`foundation/principles`)
- The vision document (`foundation/why`)
- Any conflicting specifications or trade-offs identified by AI collaborators

---

## Lead Systems Designer

**Receives**:
- Vision documents (`01-vision/`)
- Design principles (`foundation/principles`)
- Existing Game Design Documents (`02-gameplay/`, `03-simulation/`, `04-economy/`, `05-world/`)
- Glossary (`foundation/glossary`)
- The specific question or design challenge being explored

**Does NOT receive**:
- Technical specifications (`08-technical/`)
- Implementation code
- Build or CI/CD configuration
- Performance budgets

**Rationale**: The Lead Systems Designer's role is creative exploration. Technical constraints should not prematurely limit design thinking. If a design is technically infeasible, that will be discovered during specification — not during brainstorming.

---

## Lead Technical Writer / Documentation Specialist

**Receives**:
- All vision and design documents relevant to the document being written
- The design principles (`foundation/principles`)
- Documentation standards (`foundation/documentation-standards`)
- The glossary (`foundation/glossary`)
- Existing related documents (for cross-referencing)
- Any approved RFCs or ADRs that the document must conform to
- Templates (ADR, RFC, Design Document)

**Does NOT receive**:
- Implementation code (unless writing a Technical Specification that references existing code)
- Build or CI/CD configuration
- Raw brainstorming notes (unless converting them to formal documentation)

**Rationale**: The documentation team transforms approved ideas into specifications. They should see the design input and the standards, but not implementation details that could bias the specification toward a particular implementation.

---

## Chief Engineer

**Receives**:
- All technical specifications relevant to the feature being implemented
- Architecture documentation (`technical/architecture`)
- AI Development Workflow (`technical/ai-development-workflow`)
- Coding Standards (`technical/coding-standards`)
- Relevant ADRs
- The Data Models document (`technical/data-models`)
- Performance targets (`technical/performance`)
- Technology Stack (`technical/technology-stack`)

**Does NOT receive**:
- Raw brainstorming notes
- Draft RFCs that have not been accepted
- Speculative design documents
- Documents with status `Draft` that are not yet ready for implementation

**Rationale**: The Chief Engineer implements specifications. They should not see design ideas that are not yet approved, as this could lead to premature implementation or design drift.

---

## Subagents (Frontend, Backend, Rendering, Testing, etc.)

**Receives**:
- The specific technical specification for their task
- The relevant section of the architecture document
- Coding standards
- Any existing code they are modifying or extending
- Test specifications (for Testing Agent)

**Does NOT receive**:
- Specifications for unrelated systems
- Design documents
- ADRs and RFCs (unless directly relevant to the task)
- Documents from other subagents' domains

**Rationale**: Subagents are focused specialists. They should receive exactly the context needed for their task — no more, no less. This prevents scope creep and keeps subagents within their defined boundaries.

---

## Review Agents (Code Review, Accessibility, Gameplay Compliance, UX, Balance)

**Receives**:
- The implementation being reviewed
- The specification the implementation should conform to
- The design principles (`foundation/principles`, for Gameplay Compliance Agent)
- Accessibility standards (for Accessibility Agent)
- UX heuristics (for UX Consistency Agent)

**Does NOT receive**:
- The implementation's internal design rationale (to prevent bias)
- Other review agents' feedback (to ensure independent review)

**Rationale**: Review agents must be independent. They judge the implementation against the specification, not against the implementer's intent.

---

# Context Packaging Format

Context should be packaged as:

1. **A task description**: What the agent is being asked to do, in one paragraph.
2. **Required documents**: A list of document IDs (with version numbers) that the agent must read.
3. **Optional documents**: A list of document IDs that may be helpful but are not required.
4. **Constraints**: Any explicit constraints the agent must respect (e.g., "do not modify the save format", "must pass the Six-Month Return Test").
5. **Acceptance criteria**: What success looks like for this task.

This format ensures consistency across all task delegations.

---

# Design Goals

- **Role enforcement**: Context packages prevent agents from accessing information outside their role.
- **Clarity**: Every agent knows exactly what documents to read and what constraints to respect.
- **Decision Firewall**: By controlling context, the project prevents implementation agents from inventing gameplay.
- **Traceability**: Every task references specific document versions, making it possible to trace which specification was implemented.

---

# Non-Goals

- Automated context generation (context packages are currently assembled manually)
- Context deduplication (if two agents need the same document, both receive it)
- Context version locking (agents receive the current version; if a document is updated mid-task, the agent must be notified)

---

# Open Questions

- TODO: Tooling for automated context packaging (e.g., a script that assembles a context package from a task description)
- TODO: How context packages are delivered to AI collaborators (embedded in prompts, attached as files, referenced by document ID)
- TODO: Whether context packages should include a "do not read" list to explicitly exclude certain documents
- TODO: What happens when a document an agent needs is in `Draft` status — does the agent wait, or proceed with the understanding that it may change?
- TODO: Process for updating an agent's context mid-task (e.g., if a specification is updated while implementation is in progress)
- TODO: Maximum context size — when a task requires too many documents, how is the context package trimmed?

---

# Related Documents

- `AI Development Workflow.md` — the AI roles and responsibilities that define context needs
- `AI Routing Policy.md` — which AI handles which task
- `foundation/documentation-standards` (`Documentation Standards.md`) — how documents are written and versioned
- `foundation/project-structure` (`Project Structure.md`) — where documents live
- `Architecture.md` — the technical architecture that constrains implementation