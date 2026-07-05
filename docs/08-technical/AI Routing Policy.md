---
title: AI Routing Policy
id: technical/ai-routing-policy

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - technical/ai-development-workflow
  - foundation/principles
  - foundation/adr-process

used_by:
  - Human (Creative Director)
  - Chief Engineer
  - All AI collaborators

tags:
  - ai
  - routing
  - delegation
  - process
  - engineering
---

# Purpose

This document defines which AI collaborator handles which task. The AI Development Workflow defines the roles; this document defines the routing — when a task arises, which AI is assigned to it.

The goal is to prevent design drift, maintain architectural consistency, and ensure that creative decisions are made by the right party.

---

# Overview

Every task in the project has a designated owner. Tasks are routed based on the type of work, not the availability of a particular AI. The routing policy is designed to enforce the Chain of Authority (see `AI Development Workflow.md`) and the Decision Firewall.

The routing policy is binding. If a task is routed to an AI, no other AI should perform that task unless explicitly delegated.

---

# Routing Table

| Task Type | Primary | Secondary / Fallback | Human Required? |
|-----------|---------|---------------------|-----------------|
| Brainstorming new mechanics | Lead Systems Designer | — | No (exploration only) |
| Challenging design assumptions | Lead Systems Designer | — | No |
| Evaluating gameplay trade-offs | Lead Systems Designer | — | No |
| Drafting ADRs conceptually | Lead Systems Designer | Lead Technical Writer | No (draft only) |
| Writing Game Design Documents | Lead Technical Writer | Documentation Specialist | No (draft only) |
| Writing Technical Specifications | Lead Technical Writer | Documentation Specialist | No (draft only) |
| Writing ADRs (final form) | Lead Technical Writer | Documentation Specialist | Yes (approval) |
| Writing RFCs | Lead Technical Writer | Documentation Specialist | No (draft only) |
| Writing Architecture Documentation | Lead Technical Writer | Documentation Specialist | No (draft only) |
| Reviewing documentation quality | Documentation Specialist | Lead Technical Writer | No |
| Reviewing documentation consistency | Documentation Specialist | Lead Technical Writer | No |
| Reading specifications | Chief Engineer | — | No |
| Creating implementation plans | Chief Engineer | — | No (review only) |
| Breaking work into milestones | Chief Engineer | — | No (review only) |
| Coordinating implementation | Chief Engineer | — | No |
| Delegating tasks to subagents | Chief Engineer | — | No |
| Reviewing integration | Chief Engineer | — | No |
| React / UI implementation | Frontend Agent | — | No |
| Layout / State management | Frontend Agent | — | No |
| Simulation systems | Backend / Simulation Agent | — | No |
| Game logic | Backend / Simulation Agent | — | No |
| Save system | Backend / Simulation Agent | — | No |
| Data models | Backend / Simulation Agent | — | No |
| PixiJS / Rendering | Rendering Agent | — | No |
| Camera / Performance | Rendering Agent | — | No |
| Unit tests | Testing Agent | — | No |
| Integration tests | Testing Agent | — | No |
| Regression tests | Testing Agent | — | No |
| Refactoring | Refactoring Agent | — | No |
| CI/CD / Build pipeline | Build Agent | — | No |
| Tooling / Release automation | Build Agent | — | No |
| Documentation sync | Documentation Sync Agent | — | No |
| Accessibility review | Accessibility Agent | — | No |
| Code review | Code Review Agent | — | No |
| Gameplay compliance review | Gameplay Compliance Agent | — | No |
| UX review | UX Consistency Agent | — | No |
| Balance simulation / reports | Balance Agent | — | No |
| Defining vision | Creative Director | — | N/A (human-only) |
| Approving design | Creative Director | — | N/A (human-only) |
| Prioritizing work | Creative Director | — | N/A (human-only) |
| Resolving disagreements | Creative Director | — | N/A (human-only) |
| Accepting completed work | Creative Director | — | N/A (human-only) |
| Deciding project direction | Creative Director | — | N/A (human-only) |

---

# Routing Rules

## Rule 1: Creative tasks go to the Lead Systems Designer

Any task that involves **inventing**, **brainstorming**, **challenging**, or **exploring** gameplay mechanics is routed to the Lead Systems Designer. This includes:

- Proposing new mechanics
- Identifying design problems
- Suggesting alternatives
- Evaluating trade-offs between design options

The Lead Systems Designer explores. The Lead Technical Writer documents. The Chief Engineer implements. This separation is intentional.

## Rule 2: Documentation tasks go to the Lead Technical Writer or Documentation Specialist

Any task that involves **writing**, **maintaining**, or **reviewing** project documentation is routed to the Lead Technical Writer or Documentation Specialist. This includes:

- Game Design Documents
- Technical Specifications
- ADRs, RFCs, and Architecture Documentation
- Glossary entries
- Documentation quality and consistency reviews

Neither the Lead Systems Designer nor the Chief Engineer should write finalized documentation without review by the documentation team.

## Rule 3: Implementation tasks go to the Chief Engineer (and subagents)

Any task that involves writing, modifying, or reviewing code is routed to the Chief Engineer or their subagents. This includes:

- All source code
- All tests
- Build and CI/CD configuration
- Refactoring

The Chief Engineer may delegate to subagents and is responsible for architectural consistency across all subagent output.

## Rule 4: Review tasks go to specialized agents

Implementation review is not performed by the implementing agent. Review is routed to specialized agents:

- **Code Review Agent** — readability, maintainability, naming, modularity, specification compliance
- **Accessibility Agent** — keyboard nav, semantic HTML, ARIA, screen reader, focus, contrast
- **Gameplay Compliance Agent** — design pillar adherence
- **UX Consistency Agent** — cognitive load, discoverability, interaction flow

These agents review; they do not author. This separation prevents self-review bias.

## Rule 5: Human approval is required for creative and architectural decisions

No AI may unilaterally:

- Change the project vision
- Modify design principles
- Accept ADRs or RFCs
- Approve merges
- Redefine AI roles
- Override the routing policy

These are human decisions. AI collaborators may propose, but only the human approves.

---

# Decision Firewall Enforcement

The routing policy is one mechanism for enforcing the Decision Firewall (see `AI Development Workflow.md`). When an implementation agent encounters missing information:

1. The agent **stops** — it does not guess.
2. The agent identifies the **missing specification**.
3. The agent **routes the question** to the appropriate party:
   - Missing gameplay design → Lead Systems Designer
   - Missing documentation → Lead Technical Writer or Documentation Specialist
   - Missing architectural decision → Creative Director (via ADR process)
4. The agent **waits** for the specification before resuming.

---

# Design Goals

- **No ambiguity**: Every task type has a clear owner.
- **No self-review**: Implementation and review are always performed by different agents.
- **No creative drift**: Creative tasks are routed to the designated creative agent.
- **Human sovereignty**: Human approval is always required for significant decisions.

---

# Non-Goals

- Optimizing for speed (correctness and consistency take priority over speed)
- Fully automated routing (the human may override any routing decision)
- Dynamic agent spawning (the set of AI roles is defined in `AI Development Workflow.md`)

---

# Open Questions

- TODO: Specific mechanism for routing tasks (e.g., tagging in issue tracker, explicit delegation in PR descriptions, a routing script)
- TODO: How the routing policy is enforced when an AI is asked to perform a task outside its role (does the AI refuse, or does the human need to redirect?)
- TODO: Process for the human to override routing (e.g., when Claude is unavailable, can DeepSeek write a GDD without human re-approval?)
- TODO: Whether the routing table should be extended to include specific subagent task types (e.g., which subagent handles asset loading, ECS systems, pathfinding)
- TODO: Escalation path when a routing conflict arises (e.g., two agents disagree on who owns a task)

---

# Related Documents

- `AI Development Workflow.md` — the AI roles and responsibilities that this policy routes between
- `foundation/adr-process` (`ADR Process.md`) — the process for architectural decisions
- `foundation/rfc-process` (`RFC Process.md`) — the process for proposing new systems
- `Context Packaging Strategy.md` — how agents receive the context they need for their routed tasks