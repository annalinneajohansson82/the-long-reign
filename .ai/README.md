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
| `chatgpt-system-prompt.md` | System prompt for ChatGPT — Lead Systems Designer |
| `claude-system-prompt.md` | System prompt for Claude (Sonnet/Opus) — Lead Technical Writer, Chief Engineer fallback |
| `fable-system-prompt.md` | System prompt for Claude Fable — Chief Engineer |
| `deepseek-system-prompt.md` | System prompt for DeepSeek — Documentation Specialist, long-term fallback for other roles |
| `prompts/` | Task-specific prompts (e.g., `documentation-writer.md`) layered on top of a system prompt |

---

# Conventions

- System prompts are **per model**, because each model may hold different roles as subscriptions change. Each prompt tells the model to confirm its current role against `model-role-calibration.md` at session start.
- Task prompts in `prompts/` are **per task**, and assume a system prompt has already established the role.
- Documentation uses role names, not model names (see `docs/00-foundation/Documentation Standards.md`). Model names appear only here in `.ai/`, where the mapping is the point.

---

# Notes

- `model-role-calibration.md` is the most volatile file in the repository — update it whenever providers, subscriptions, or model availability change.
- The calibration file references a project skill (`project-the-long-reign`) that does not exist yet; see its Open Questions.
