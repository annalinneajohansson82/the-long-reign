---
title: Documentation Standards
id: 00-foundation/documentation-standards

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/readme

used_by:
  - All documents in the project
  - Lead Technical Writer
  - Documentation Specialist
  - Documentation Sync Agent

tags:
  - foundation
  - standards
  - documentation
  - meta
---

# Purpose

This document defines the standards for all documentation in The Long Reign. Every document in the repository must conform to these standards. Consistency in documentation is as important as consistency in code — the documentation is the project's source of truth.

---

# Overview

The project follows a specification-first development methodology. The documentation is the project; the game implements the documentation. No feature is implemented before it is properly specified.

Documents are written in Markdown with YAML front matter. They are stored in the `docs/` directory of the repository.

---

# YAML Front Matter

Every document must include YAML front matter with the following fields:

| Field | Required | Description |
|-------|----------|-------------|
|| `title` | Yes | Human-readable title of the document |
|| `id` | Yes | Unique identifier. Format: `directory/slug` using the full directory name (e.g., `00-foundation/principles`, `01-vision/respect-the-players-time`, `02-gameplay/buildings`, `glossary/readme`, `templates/adr-template`). |
|| `version` | Yes | Semantic version of the document |
|| `status` | Yes | One of: `Draft`, `Review`, `Approved`, `Deprecated` |
|| `reviewed_by` | No | Who last reviewed: `human`, `agent`, or empty if unreviewed |
|| `author` | Yes | Person or role that authored the document |
|| `last_updated` | Yes | Date of last modification (ISO 8601) |
|| `depends_on` | Yes | List of document IDs this document depends on |
|| `used_by` | Yes | List of document IDs that depend on this document |
|| `tags` | Yes | List of relevant tags for categorization |

---

# Document Sections

Documents should answer the following questions where applicable:

- **Why?** — The purpose and motivation
- **Player Experience** — What the player sees, feels, and does
- **Design Goals** — What the system intends to achieve
- **Gameplay Rules** — Specific mechanics and constraints
- **Edge Cases** — Unusual or boundary conditions
- **Future Expansion** — Planned extensions beyond current scope
- **Open Questions** — Unresolved issues requiring decisions
- **Related Documents** — Cross-references to other documents

Not every section is required for every document. Include only what is relevant.

---

# Documentation Philosophy

The documentation is the project. The codebase exists to implement the documentation.

This means:

- Documentation precedes implementation
- Documentation is the source of truth
- If implementation conflicts with documentation, implementation is incorrect unless documentation is intentionally updated
- No feature is implemented before it has a documented purpose, player experience goals, gameplay rules, technical specification, and acceptance criteria

---

# Writing Standards

- Be concise. Avoid unnecessary prose.
- Be precise. Every statement should be something a software engineer could implement.
- Be consistent. Use the same terminology throughout (see `Glossary.md`).
- Be honest. If information is missing, leave a clearly marked TODO or Open Question. Do not guess.
- Preserve intent. Do not simplify ideas unless clarity improves.
- Avoid marketing language. This is technical documentation, not promotional material.
- Use role names, not model names. Refer to "Lead Technical Writer" or "Documentation Specialist" instead of "Claude" or "DeepSeek". Model-agnostic naming ensures the documentation survives provider changes and multi-platform collaboration.

---

# AI Collaboration

AI collaborators (Lead Technical Writer, Documentation Specialist, Documentation Sync Agent) follow these standards when writing documents:

- Document approved ideas rather than inventing new gameplay systems
- Maintain consistency across all documents
- Detect and flag documentation drift
- Never rewrite approved design documents without human approval

---

# Open Questions

- TODO: Document ID numbering scheme — source material mentions `00-foundation/readme`, `VIS-001`, `08-technical/architecture` but does not fully define the convention
- TODO: Process for updating document status from Draft to Review to Approved
- TODO: Version bumping policy (when does a minor edit become a version increment?)

---

# Related Documents

- `Project Structure.md` — where documents live
- `Glossary.md` — shared vocabulary
- `templates/` — document templates (ADR, RFC, Design Document, etc.)
- `08-technical/AI Development Workflow.md` — AI collaboration principles