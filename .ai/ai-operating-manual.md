---
title: AI Operating Manual
version: 0.1.0
status: Draft

last_updated: 2026-07-05

tags:
  - ops
  - ai
  - process
---

# Purpose

The practical runbook for working with AI collaborators on The Long Reign. This manual describes how to start a session, keep it inside its role, and end it cleanly — regardless of which model is behind the role.

Policy is defined in `docs/08-technical/AI Development Workflow.md` and `docs/08-technical/AI Routing Policy.md`. This manual only operationalizes it.

---

# Overview

Every AI session follows the same lifecycle:

```text
Pick the role  →  Pick the model  →  Load the session  →  Work  →  Hand off
```

1. **Pick the role** from the task type, using the Routing Table in `AI Routing Policy.md`. The task determines the role — never the other way around.
2. **Pick the model** currently assigned to that role in `model-role-calibration.md`.
3. **Load the session** following `context-loading-strategy.md` (system prompt, calibration, role context package, task).
4. **Work**, keeping the session within its role (see below).
5. **Hand off** using `handoff-template.md` so the next session can resume — especially important since models change as subscriptions lapse.

---

# Starting a Session

1. Identify the task type and look up its owner in the Routing Table (`AI Routing Policy.md`).
2. Look up the current model for that role in `model-role-calibration.md`. Check the *Deadlines & Replacements* table — if a deadline has passed, use the fallback and update the calibration file.
3. Load the role's system prompt from this directory (`<role>-system-prompt.md`).
4. Assemble the context package for the role per `docs/08-technical/Context Packaging Strategy.md` and load it in the order given by `context-loading-strategy.md`.
5. State the task using the Context Packaging Format: task description, required documents, optional documents, constraints, acceptance criteria.

---

# During a Session

- **Stay in role.** If a task arises that belongs to another role (per the Routing Table), the session should flag it for routing, not absorb it.
- **Decision Firewall.** If a needed specification is missing, the AI stops, names the missing document, and routes the question (missing gameplay design → Lead Systems Designer; missing documentation → Lead Technical Writer / Documentation Specialist; missing architectural decision → Creative Director via ADR). It does not guess.
- **Chain of Authority.** Documentation overrides implementation; higher-level documents override lower-level ones. Human decisions override everything.
- **No self-review.** Work produced in a session is reviewed by a different role/agent, per the Review Pipeline.

---

# Ending a Session

1. Fill in `handoff-template.md` with the session's state: what was completed, what is in progress, what is blocked, and what decisions were made or deferred.
2. Commit any repository changes with clear messages.
3. Record open questions in the relevant document's *Open Questions* section (or the parking lot), not only in the handoff.

---

# Maintaining This Setup

- When a provider, subscription, or model changes: update `model-role-calibration.md` first, then check whether the affected role's `<role>-system-prompt.md` Usage note still describes the current assignment. The prompt bodies are model-agnostic and should not need changes.
- When roles or responsibilities change: that is a change to `AI Development Workflow.md` / `AI Routing Policy.md` and requires human approval (Routing Rule 5). Files in `.ai/` only follow.

---

# Open Questions

- TODO: Where handoff documents are stored (in-repo directory, Obsidian vault, or session-only)
- TODO: Whether session starts are logged anywhere (a session journal) for traceability

---

# Related Documents

- `model-role-calibration.md` — who is currently behind each role
- `context-loading-strategy.md` — what to load, in what order
- `handoff-template.md` — how to end a session
- `docs/08-technical/AI Development Workflow.md` — roles and responsibilities
- `docs/08-technical/AI Routing Policy.md` — task routing
- `docs/08-technical/Context Packaging Strategy.md` — context packages by role
