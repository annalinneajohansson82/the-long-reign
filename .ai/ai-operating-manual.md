---
title: AI Operating Manual
version: 0.1.0
status: Draft

last_updated: 2026-07-06

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
5. **Hand off** — copy `handoff-template.md` to `.ai/handoffs/YYYY-MM-DD.md`, fill it in, and commit. The next session reads it to resume.

---

# Starting a Session

The human triggers session start by saying `start session` (or a recognized equivalent
like `load context`, `begin`, `resume`). When the Hermes agent loads the project
workspace, it performs these checks proactively without waiting for a trigger:

1. Read `.ai/session-re-entry.md` for the current focus and open questions from the previous session.
2. Run `git log --oneline -5` and `git status --short` to reconstruct recent activity.
3. Source `.env` and run `gh api notifications --jq '.[] | "\(.subject.title) — \(.repository.full_name) — \(.reason)"'` to check for new GitHub notifications for the machine user. Report any unread notifications.
4. Check `.ai/handoffs/` for the most recent handoff document. If one exists, read it. If no handoff exists since the last commit on `main`, run `git log --since=<YYYY-MM-DD>` (ISO 8601 date of last handoff or last session) to reconstruct what changed.
5. Review the gathered context with the human — session-re-entry.md is a rough jot, not authoritative. Discuss and update it together.
6. Identify the task type and look up its owner in the Routing Table (`AI Routing Policy.md`).
7. Look up the current model for that role in `model-role-calibration.md`. Check the *Deadlines & Replacements* table — if a deadline has passed, use the fallback and update the calibration file.
8. Load the role's system prompt from `system-prompts/<role>-system-prompt.md`.
9. Assemble the context package for the role per `docs/08-technical/Context Packaging Strategy.md` and load it in the order given by `context-loading-strategy.md`.
10. State the task using the Context Packaging Format: task description, required documents, optional documents, constraints, acceptance criteria.

---

# During a Session

- **Stay in role.** If a task arises that belongs to another role (per the Routing Table), the session should flag it for routing, not absorb it.
- **Decision Firewall.** If a needed specification is missing, the AI stops, names the missing document, and routes the question (missing gameplay design → Lead Systems Designer; missing documentation → Lead Technical Writer / Documentation Specialist; missing architectural decision → Creative Director via ADR). It does not guess.
- **Chain of Authority.** Documentation overrides implementation; higher-level documents override lower-level ones. Human decisions override everything.
- **No self-review.** Work produced in a session is reviewed by a different role/agent, per the Review Pipeline.

---

# Ending a Session

The human triggers session end by saying `end session` (or a recognized equivalent like `wrap up`, `hand off`, `save and quit`). If the chat is closed without a signal (abrupt close), no handoff is written — the next session will reconstruct from `git log`.

1. Copy `handoff-template.md` to `.ai/handoffs/YYYY-MM-DD.md` (using today's date), fill in the copy, and commit. Do not overwrite the template.
2. Update `session-re-entry.md`'s **Current Focus** and **Open Questions** sections to reflect what was accomplished and what remains. This is a rough notebook jot, not a comprehensive report — enough to jog the human's memory next session.
3. Record open questions in the relevant document's *Open Questions* section (or the parking lot), not only in the handoff.
4. Commit any repository changes with clear messages.

---

# Maintaining This Setup

- When a provider, subscription, or model changes: update `model-role-calibration.md` first, then check whether the affected role's `system-prompts/<role>-system-prompt.md` Usage note still describes the current assignment. The prompt bodies are model-agnostic and should not need changes.
- When roles or responsibilities change: that is a change to `AI Development Workflow.md` / `AI Routing Policy.md` and requires human approval (Routing Rule 5). Files in `.ai/` only follow.

---

# Open Questions

- TODO: Whether session starts are logged anywhere (a session journal) for traceability

---

# Related Documents

- `model-role-calibration.md` — who is currently behind each role
- `context-loading-strategy.md` — what to load, in what order
- `handoff-template.md` — how to end a session (template in `.ai/`)
- `session-re-entry.md` — quick-reorientation for the human
- `handoffs/` — completed handoff documents by date
- `docs/08-technical/AI Development Workflow.md` — roles and responsibilities
- `docs/08-technical/AI Routing Policy.md` — task routing
- `docs/08-technical/Context Packaging Strategy.md` — context packages by role
