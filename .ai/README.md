---
title: AI Configuration Directory
version: 0.1.0
status: Draft

last_updated: 2026-07-05

tags:
  - ops
  - ai
  - meta
---

# Purpose

This directory contains the **operational configuration** for AI collaboration on The Long Reign: system prompts, session procedures, and the model-to-role calibration.

The *policy* — who does what, and why — lives in the documentation and is authoritative:

- `docs/08-technical/AI Development Workflow.md` — roles, responsibilities, review pipeline, Decision Firewall
- `docs/08-technical/AI Routing Policy.md` — which role handles which task
- `docs/08-technical/Context Packaging Strategy.md` — what context each role receives

The files here are the *mechanism*: what you actually paste into a session to make a given model behave as its assigned role. If a file here ever conflicts with the documents above, the documents above win.

---

# Contents

| File | What it is |
| ---- | ---------- |
| `ai-operating-manual.md` | The runbook: how to start, run, and end an AI session |
| `model-role-calibration.md` | Current mapping of roles → models/providers, with subscription deadlines |
| `context-loading-strategy.md` | Practical loading order: what to load into a session, in what sequence |
| `handoff-template.md` | Template for ending a session so the next session (possibly a different model) can resume |
| `system-prompts/` | System prompts for all four roles (Lead Systems Designer, Lead Technical Writer, Chief Engineer, Documentation Specialist) |
| `session-re-entry.md` | Quick-reorientation for the human: current focus, what to tackle next |


---

# Conventions

- System prompts are **per role**, because roles are stable while models change as subscriptions lapse. Which model to run a role's prompt on is looked up in `model-role-calibration.md` — that file is the only place model names appear as assignments. Each prompt also tells the model to confirm the assignment against the calibration file at session start.
- Task prompts in `prompts/` are **per task**, and assume a system prompt has already established the role.
- Documentation uses role names, not model names (see `docs/00-foundation/Documentation Standards.md`). The same convention applies here: model names appear only in `model-role-calibration.md`, where the mapping is the point.

---

# Notes

- `model-role-calibration.md` is the most volatile file in the repository — update it whenever providers, subscriptions, or model availability change.
- The calibration file references a project skill (`project-the-long-reign`) that does not exist yet; see its Open Questions.
