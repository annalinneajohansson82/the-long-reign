---
title: Context Loading Strategy
version: 0.1.0
status: Draft

last_updated: 2026-07-05

tags:
  - ops
  - ai
  - context
---

# Purpose

The practical companion to `docs/08-technical/Context Packaging Strategy.md`. That document defines *what* context each role receives; this file defines the *loading order* and the per-role quick reference used when actually starting a session.

---

# Overview

Context is loaded in four layers, in this order:

```text
1. System prompt        (who you are)
2. Calibration          (who else exists, and what's behind them)
3. Role context package (what you need to know)
4. Task                 (what you're being asked to do)
```

Loading order matters: the role must be established before any project content is loaded, so the model interprets everything through its role. The task always comes last, after the context needed to understand it.

---

# Layer 1 — System Prompt

Load the role's system prompt from `.ai/system-prompts/<role>-system-prompt.md` (e.g. `chief-engineer-system-prompt.md`). Which model to run it on is looked up in `model-role-calibration.md`; the prompt instructs the model to confirm that assignment at session start.

# Layer 2 — Calibration

Load `.ai/model-role-calibration.md`. Then state explicitly:

> You are [Role]. Your responsibilities are defined in `AI Development Workflow.md`. Your routing is defined in `AI Routing Policy.md`. Your model assignment is documented in the calibration file.

# Layer 3 — Role Context Package

Load the documents listed for the role in `docs/08-technical/Context Packaging Strategy.md` (§ *Context Packages by Role*). Quick reference:

| Role | Always load | Never load |
| ---- | ----------- | ---------- |
| Lead Systems Designer | `01-vision/`, `00-foundation/Principles.md`, relevant GDDs (`02-`–`05-`), glossary | Technical specs, code, performance budgets |
| Lead Technical Writer / Documentation Specialist | Relevant design docs, `Principles.md`, `Documentation Standards.md`, glossary, related docs, approved RFCs/ADRs, templates | Code, CI config, raw brainstorming notes |
| Chief Engineer | Relevant technical specs, `Architecture.md`, `AI Development Workflow.md`, `Coding Standards.md`, relevant ADRs, `Data Models.md`, `Performance.md`, `Technology Stack.md` | Brainstorming notes, unaccepted RFCs, speculative/Draft design docs |
| Subagents | The one relevant technical spec, relevant architecture section, coding standards, code being modified | Everything else |
| Review agents | The implementation, its specification, role-specific standards (principles / accessibility / UX) | Implementer's rationale, other reviewers' feedback |

When a document in the package does not exist or is a stub, that is a **stop condition** (Core Principle 5 of the packaging strategy): the session should flag the missing specification rather than proceed.

# Layer 4 — Task

State the task in the Context Packaging Format:

1. Task description (one paragraph)
2. Required documents (IDs + versions)
3. Optional documents
4. Constraints
5. Acceptance criteria

---

# Practical Notes

- **Prefer document IDs over pasted content** where the tool can read the repository directly (e.g., a coding agent with filesystem access). Paste content only for web-UI sessions (ChatGPT, Claude web) that cannot read the repo.
- **Version awareness**: documents carry `version` and `status` front matter. If a loaded document is `Draft`, say so when loading it — the session should treat it as subject to change.
- **Keep Layer 3 minimal**. Loading more than the role's package invites role drift; the packaging strategy's exclusion lists are deliberate.

---

# Open Questions

- TODO: Delivery mechanics per provider (file upload vs. paste vs. repo access) — depends on which tools are in use at any given time
- TODO: Maximum context size and trimming rules (mirrors the open question in `Context Packaging Strategy.md`)

---

# Related Documents

- `docs/08-technical/Context Packaging Strategy.md` — the authoritative definition of context packages
- `ai-operating-manual.md` — the session lifecycle this loading order belongs to
- `model-role-calibration.md` — which model is behind the role being loaded
