---
title: MVP — Minimum Viable Product
id: roadmap/mvp

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/readme
  - foundation/why
  - foundation/principles

used_by:
  - roadmap/vertical-slice
  - All implementation planning

tags:
  - roadmap
  - mvp
  - milestone
---

# Purpose

Define the Minimum Viable Product milestone for The Long Reign. The MVP is the smallest playable version of the game that validates the core gameplay loop. It is NOT a feature-complete build. It is a proof that the settlement-centric loop works in practice.

This document defines what documentation must be complete before MVP implementation begins, what systems the MVP covers, and what constitutes a successful MVP.

---

# Overview

The MVP delivers a single player interacting with a single settlement on a limited map section. The core loop — Explore → Gather Resources → Return Home → Expand Settlement → Unlock New Opportunities → Repeat — must be fully playable, even if the surrounding systems are minimal.

The MVP answers one question: "Is the settlement-centric loop fun?"

---

# Documentation Prerequisites

Per the specification-first methodology (see `08-technical/AI Development Workflow.md`), the following documentation must be complete before MVP implementation begins:

- `docs/00-foundation/` — All eight foundation documents populated and reviewed
- `docs/01-vision/` — All vision documents populated and reviewed
- `docs/02-gameplay/Buildings.md` — Core building types defined (minimum set for MVP)
- `docs/02-gameplay/Resources.md` — Core resource types defined (minimum set for MVP)
- `docs/02-gameplay/Exploration.md` — MVP exploration scope defined
- `docs/03-simulation/Villagers.md` — Basic villager simulation defined
- `docs/03-simulation/Settlement Growth.md` — Settlement progression defined for MVP scope
- `docs/04-economy/Economy Overview.md` — Minimal economy model defined
- `docs/05-world/World Overview.md` — MVP world scope defined
- `docs/05-world/Capital.md` — Capital settlement defined
- `docs/06-ui/HUD.md` — MVP HUD elements defined
- `docs/07-art/Art Direction.md` — Placeholder art standards defined
- `docs/08-technical/Technology Stack.md` — Technology choices finalized
- `docs/08-technical/Architecture.md` — High-level architecture defined
- `docs/08-technical/Data Models.md` — Core data models defined for MVP systems
- `docs/08-technical/Save System.md` — Save system specification defined
- `docs/10-decisions/Decision Log.md` — All ADRs required for MVP scope recorded

---

# MVP Scope

## In Scope

- **Single settlement (capital):** The player builds and upgrades a single settlement from a camp to a small town on a grid
- **Core gameplay loop:** Explore → Gather → Return → Expand → Unlock → Repeat, functional end-to-end
- **Basic villagers:** Villagers spawn, work, and move about the settlement. No families, aging, or death in MVP
- **Core buildings:** A minimal set of building types sufficient to demonstrate the loop
- **Core resources:** A minimal set of resource types (gathered and produced)
- **Basic exploration:** A limited world map section with resource nodes
- **Basic HUD:** Essential UI elements — resource display, build menu, map access
- **Save/Load:** Autosave and manual save to LocalStorage; manual load
- **Camera:** Pan and zoom over the settlement grid
- **Placeholder art:** All visual assets may be programmer art or placeholders

## Out of Scope for MVP

- Colonies (roadmap/vertical-slice)
- Roads and desire paths (roadmap/vertical-slice)
- Heroes (roadmap/vertical-slice)
- Research (roadmap/vertical-slice)
- Seasons and weather (roadmap/alpha)
- Combat (roadmap/vertical-slice)
- Chronicle and Living Memories (roadmap/alpha)
- Trade networks (roadmap/alpha)
- Production chains (beyond a single step) (roadmap/alpha)
- Decorations (roadmap/vertical-slice)
- Accessibility compliance (roadmap/beta)
- Performance optimization beyond functional (roadmap/beta)
- Multiple save slots (roadmap/alpha)
- JSON export/import (roadmap/alpha)
- Full session persistence (roadmap/alpha)
- Colonies (roadmap/vertical-slice)
- World map regions and unlockable areas (roadmap/alpha)

---

# Design Goals

- Prove the settlement-centric loop is engaging
- Validate that visible, tangible growth creates emotional satisfaction
- Establish the technical foundation (rendering, save, architecture) that all later phases build upon
- Confirm the technology stack is viable for the project's scope
- Identify the highest-risk unknowns early

---

# Non-Goals

- The MVP is not intended for public distribution
- The MVP is not a vertical slice — it omits many systems entirely rather than including thin versions of all systems
- The MVP is not balanced or tuned
- The MVP is not visually polished

---

# Entry Criteria

All Documentation Prerequisites listed above are complete and reviewed.

---

# Exit Criteria

- The core gameplay loop is playable end-to-end without critical bugs
- A player can: start a new game → build buildings → assign villagers → gather resources → expand the settlement → save and load
- The settlement visibly changes as a result of player actions
- The save system preserves and restores game state
- The game runs in a browser without crashes under normal play conditions
- Human approval has been given for all MVP features
- All review pipeline steps (per `08-technical/AI Development Workflow.md`) have passed

---

# Open Questions

- TODO: Exact number and identity of core building types for MVP
- TODO: Exact number and identity of core resource types for MVP
- TODO: MVP map size (grid dimensions)
- TODO: Target browser and version range
- TODO: Framework finalization (React confirmed in source material; but PixiJS, Phaser, or other renderer?)
- TODO: Minimum villager count for a satisfying MVP
- TODO: Whether the MVP should include a basic tutorial or tooltip system
- TODO: Hosting and deployment target for MVP testing

---

# Related Documents

- `00-foundation/README.md` — Documentation hierarchy
- `00-foundation/Why.md` — Emotional goal
- `00-foundation/Principles.md` — Design pillars
- `01-vision/Vision Statement.md` — Project identity
- `01-vision/Core Gameplay Loop.md` — The loop the MVP validates
- `08-technical/AI Development Workflow.md` — Engineering workflow
- `roadmap/vertical-slice` — Vertical Slice (next milestone)
