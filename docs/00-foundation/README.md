---
title: Foundation — README
id: foundation/readme

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on: []

used_by:
  - All documents in the project

tags:
  - foundation
  - meta
  - documentation
---

# Purpose

The `00-foundation/` directory contains the project's constitution — the documents that define *how* the project is built, *why* it exists, and *what rules* govern all other documentation and implementation.

This directory must be read before any other documentation in the repository.

---

# Overview

This directory contains eight documents:

| File | Purpose |
|------|---------|
| `README.md` | This index — explains what the foundation is and how to use it |
| `Why.md` | Why the project exists — the emotional goal and project identity |
| `Principles.md` | The six design pillars and guiding heuristics |
| `Documentation Standards.md` | How documents are structured, formatted, and maintained |
| `Project Structure.md` | The repository layout and documentation hierarchy |
| `ADR Process.md` | How Architectural Decision Records are created and maintained |
| `RFC Process.md` | How new systems are proposed through Request for Comments |
| `Glossary.md` | Shared vocabulary — definitions exist in exactly one place |

All other documentation in the project derives its authority from these foundation documents.

---

# Reading Order

New contributors should read in this order:

1. `Why.md` — understand the project's emotional core
2. `Principles.md` — learn the design rules
3. `Project Structure.md` — learn where things live
4. `Documentation Standards.md` — learn how to write documents
5. `ADR Process.md` — learn how decisions are recorded
6. `RFC Process.md` — learn how to propose new systems
7. `Glossary.md` — learn the shared vocabulary

---

# Relationship to Other Directories

`00-foundation/` is the root of the documentation hierarchy. It is referenced by but does not reference other directories. All other documentation directories (`01-vision/`, `02-gameplay/`, etc.) are downstream of the foundation.

---

# Notes

- This directory is the first to be populated for the project
- Foundation documents are intentionally concise — they are the constitution, not the implementation
- Foundation documents should change rarely and only with careful consideration
- All later gameplay systems should be evaluated against these foundational documents