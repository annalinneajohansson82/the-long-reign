---
title: Glossary Index
id: glossary/readme

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/glossary (Glossary)

used_by:
  - All contributors
  - All AI collaborators

tags:
  - glossary
  - index
  - reference
---

# Purpose

This document is the index for the `docs/glossary/` directory. It explains how this directory relates to the main Glossary, how to add entries, and what the current state of the glossary is.

---

# Relationship to the Main Glossary

The **main Glossary** lives at `docs/00-foundation/Glossary.md` (document ID: `foundation/glossary`). It is the **authoritative, canonical source** for all project terminology. Every term used anywhere in the project must be defined there first.

This directory (`docs/glossary/`) exists to hold **expanded glossary entries** — one file per term — when a term needs more detail than the main Glossary provides. The main Glossary remains the canonical index; any term not listed there does not yet have an approved project definition.

**Rule**: Definitions exist in exactly one place. The main Glossary provides the concise, canonical definition. Expanded entries here provide additional context, examples, design rationale, and cross-references — but they must never contradict the main Glossary.

---

# Current State

As of 2026-07-05:

- The main Glossary (`foundation/glossary`) is the **primary and only reference** for project terminology. It defines 17 core terms covering all major systems.
- **No expanded entries exist yet** in this directory. All definitions currently live in the main Glossary.
- The template for expanded entries is ready at `docs/templates/Glossary Entry Template.md`.

When the project grows and individual terms accumulate substantial additional detail (e.g., mechanical specifications, edge cases, design history), contributors should create expanded files here and link them from the main Glossary.

---

# How to Add an Expanded Glossary Entry

1. **Confirm the term is defined** in the main Glossary at `docs/00-foundation/Glossary.md`. If it isn't, add it there first.
2. **Copy the template** from `docs/templates/Glossary Entry Template.md` into this directory, naming the file after the term (e.g., `Chronicle.md`, `Desire Path.md`).
3. **Fill in the front matter** — assign an ID, set the version, and list dependencies (at minimum `foundation/glossary`).
4. **Write the expanded content** — additional detail, examples, design rationale, edge cases, and cross-references to related design documents. Never contradict the main Glossary definition.
5. **Link back** from the main Glossary to the new expanded entry.

---

# Directory Convention

- One file per term.
- Filename matches the term exactly (e.g., `Chronicle.md`, not `chronicle-expanded.md`).
- All files use the standard project YAML front matter (see `docs/00-foundation/Documentation Standards.md`).

---

# Related Documents

- `docs/00-foundation/Glossary.md` — the authoritative canonical glossary (foundation/glossary)
- `docs/00-foundation/Documentation Standards.md` — front matter and document conventions
- `docs/templates/Glossary Entry Template.md` — template for new expanded entries
- `docs/00-foundation/Why.md` — the vision behind these concepts
- `docs/00-foundation/Principles.md` — the design pillars referenced throughout
