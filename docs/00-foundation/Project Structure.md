---
title: Project Structure
id: 00-foundation/project-structure

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/readme

used_by:
  - All contributors
  - All AI collaborators
  - Onboarding

tags:
  - foundation
  - repository
  - structure
  - meta
---

# Purpose

This document defines the repository structure of The Long Reign. It explains where every type of document and code lives, how directories are organized, and how to navigate the project.

---

# Overview

The project is documentation-driven. The `docs/` directory is the primary artifact. The codebase exists to implement the documentation.

The repository follows a numbered directory convention for documentation, with a top-level `docs/` directory containing numbered sections that enforce a reading order and dependency hierarchy.

---

# Repository Layout

```
the-long-reign/
├── docs/                          # Primary project artifact — documentation
│   ├── 00-foundation/             # Project constitution
│   │   ├── README.md
│   │   ├── Why.md
│   │   ├── Principles.md
│   │   ├── Documentation Standards.md
│   │   ├── Project Structure.md
│   │   ├── ADR Process.md
│   │   ├── RFC Process.md
│   │   └── Glossary.md
│   ├── 01-vision/                 # Vision and high-level design
│   ├── 02-gameplay/               # Gameplay systems and mechanics
│   ├── 03-simulation/             # Simulation systems (villagers, heroes, etc.)
│   ├── 04-economy/                # Economy, production chains, trade
│   ├── 05-world/                  # World, regions, colonies, capital
│   ├── 06-ui/                     # User interface, HUD, menus, accessibility
│   ├── 07-art/                    # Art direction, pixel art, animation, audio
│   ├── 08-technical/              # Technical design, architecture, stack
│   ├── 09-roadmap/                # Roadmap, milestones, releases
│   ├── 10-decisions/              # Architectural Decision Records
│   ├── 11-rfc/                    # Request for Comments
│   ├── glossary/                  # Expanded glossary entries
│   ├── parking-lot/               # Future ideas, deferred mechanics
│   └── templates/                 # Document templates
├── src/                           # Source code (TODO: structure TBD)
├── tests/                         # Test suite (TODO: structure TBD)
└── README.md                      # Project-level README
```

---

# Directory Purposes

| Directory        | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| `00-foundation/` | Project constitution — must be read first              |
| `01-vision/`     | High-level vision and creative direction               |
| `02-gameplay/`   | Detailed gameplay systems and mechanics                |
| `03-simulation/` | Simulation design — villagers, heroes, time            |
| `04-economy/`    | Economy, production chains, resources, trade           |
| `05-world/`      | World map, regions, capital, colonies                  |
| `06-ui/`         | User interface design, HUD, menus, accessibility       |
| `07-art/`        | Art direction, pixel art style, animation, audio       |
| `08-technical/`  | Architecture, technology stack, coding standards       |
| `09-roadmap/`    | Milestones, releases, future expansions                |
| `10-decisions/`  | Architectural Decision Records (ADRs)                  |
| `11-rfc/`        | Request for Comments — proposed new systems            |
| `glossary/`      | Expanded glossary — one file per term                  |
| `parking-lot/`   | Future mechanics and interesting ideas — not committed |
| `templates/`     | Reusable document templates                            |

---

# Dependency Hierarchy

Documents depend on other documents in lower-numbered directories. This enforces a logical reading and design order:

```
00-foundation/    (no dependencies — root)
       │
       ▼
01-vision/        (depends on foundation)
       │
       ▼
02-gameplay/      (depends on foundation, vision)
03-simulation/    (depends on foundation, vision, gameplay)
04-economy/       (depends on foundation, vision, gameplay)
05-world/         (depends on foundation, vision, gameplay)
06-ui/            (depends on foundation, vision, gameplay)
07-art/           (depends on foundation, vision)
08-technical/     (depends on foundation, vision, gameplay, simulation)
       │
       ▼
09-roadmap/       (depends on all above)
10-decisions/     (ADRs — can reference any document)
11-rfc/           (RFCs — can reference any document)
```

A document must not depend on a document in a higher-numbered directory.

---

# Design Goals

- **Navigability**: A new contributor should be able to find any document by knowing its topic
- **Single source of truth**: Each concept is documented in exactly one place
- **Versioned**: Every document carries a version number
- **Discoverable**: The numbered directory structure enforces a reading order
- **AI-friendly**: Structured Markdown with YAML front matter allows both humans and AI agents to parse and use the documentation

---

# Notes

- The `docs/` directory is the project's primary artifact — it exists before the codebase
- Numbered directories (00–11) enforce dependency order
- The `parking-lot/` directory is intentionally excluded from the numbering — it is not part of the specification
- Code lives in `src/` and `tests/`, but their structure is not yet defined

---

# Open Questions

- TODO: Source code directory structure (`src/`) — not yet specified
- TODO: Test directory structure (`tests/`) — not yet specified
- TODO: Whether `README.md` at the project root should duplicate or reference `docs/00-foundation/README.md`
  **Answer:** No, root README will be a general introduction/presentation and only refer to `docs/` for technical information.
- TODO: Tooling for enforcing dependency rules (e.g., CI check that a doc in `02-gameplay/` doesn't list a dependency on `04-economy/`)

---

# Related Documents

- `README.md` — this directory's index
- `Documentation Standards.md` — how documents are written
- `templates/` — document templates