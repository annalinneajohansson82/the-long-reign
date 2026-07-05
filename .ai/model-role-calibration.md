---
title: Model → Role Calibration
version: 0.1.0
status: Active

last_updated: 2026-07-05

tags:
  - ops
  - ai
  - routing
---

# Model → Role Calibration

Current assignments mapping project roles (defined in `08-technical/AI Development Workflow.md`) to actual models and providers. Update this file when providers change, subscriptions lapse, or new models become available.

---

## Role Assignments

| Role                       | Primary                         | Fallback                         | Notes                                                                                                       |
| -------------------------- | ------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Creative Director          | Human (Anna)                    | —                                | Final authority on all decisions                                                                            |
| Lead Systems Designer      | ChatGPT                         | —                                | Web UI; creative exploration, not documentation                                                             |
| Lead Technical Writer      | Claude Sonnet 5 | DeepSeek v4 Pro                  | Claude Pro subscription until Jul 17, 2026; switch to DeepSeek after                                               |
| Documentation Specialist   | DeepSeek v4 Pro      | DeepSeek v4 Flash                | Also handles consistency review                                                                             |
| Chief Engineer             | Claude Fable                    | Claude Opus 4.8, DeepSeek v4 Pro | Fable available until Jul 7, 2026; Opus after that until July 17 2026, switch to DeepSeek V4 Pro after that |
| Frontend Agent             | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Backend / Simulation Agent | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Rendering Agent            | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Testing Agent              | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Refactoring Agent          | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Build Agent                | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Documentation Sync Agent   | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Accessibility Agent        | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Code Review Agent          | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Gameplay Compliance Agent  | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| UX Consistency Agent       | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |
| Balance Agent              | Via Chief Engineer              | —                                | Delegated by Chief Engineer                                                                                 |

---

## Deadlines & Replacements

| Event             | Date       | Impact                                                                                                                    |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| Fable access ends | 2026-07-07 | Chief Engineer role switches to first fallback.                         |
| Claude Pro ends   | 2026-07-17 | Chief Engineer and Lead Technical Writer switches to DeepSeek v4 Pro as primary. |
| N/A (ongoing)     | —          | ChatGPT remains available via web UI. DeepSeek v4 Flash is available via free tier via OpenCode but unknown for how long, more reliable access via Nous Portal (not free but close to it).                                      |

---

## Loading This Into a Session

When starting a new session with an AI collaborator:

1. Load the project skill (`project-the-long-reign`)
2. Load this calibration file
3. Tell the AI: *"You are [Role]. Your responsibilities are defined in AI Development Workflow.md. Your routing is defined in AI Routing Policy.md. Your model assignment is documented here."*

This ensures every agent enters context knowing its role, its peers, and its constraints — regardless of which model is behind it.
