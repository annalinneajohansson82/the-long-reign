---
title: Vertical Slice — Thin Slice Through All Systems
id: roadmap/vertical-slice

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - roadmap/mvp
  - foundation/readme
  - foundation/why
  - foundation/principles

used_by:
  - roadmap/alpha
  - All implementation planning

tags:
  - roadmap
  - vertical-slice
  - milestone
---

# Purpose

Define the Vertical Slice milestone for The Long Reign. The Vertical Slice extends the MVP by implementing a thin path through every major system in the project. It is NOT feature-complete — each system exists only to the depth required to demonstrate integration with other systems.

A vertical slice proves that all major systems can coexist and interact before the team commits to full implementation of any single system.

---

# Overview

The Vertical Slice delivers a playable experience where every major system category — simulation, economy, world, UI, art — contributes to the player's experience, even if each system is shallow. For example: combat exists but has only one enemy type; colonies exist but only one colony can be founded; research exists but has only a small number of nodes.

This milestone answers: "Do all these systems work together, or are there fundamental incompatibilities?"

---

# Documentation Prerequisites

In addition to all MVP documentation prerequisites, the following must be complete:

- `docs/02-gameplay/` — All gameplay documents populated to Vertical Slice depth (Buildings, Resources, Exploration, Combat, Research, Progression, Production Chains, Events)
- `docs/03-simulation/` — All simulation documents populated to Vertical Slice depth (Villagers, Heroes, Roads and Logistics, Families, Professions, Settlement Growth, Chronicle, Living Memories, Seasons, Weather)
- `docs/04-economy/` — All economy documents populated to Vertical Slice depth (Economy Overview, Resource Flow, Agriculture, Industries, Trade, Luxury Goods, Crafting)
- `docs/05-world/` — All world documents populated to Vertical Slice depth (World Overview, Regions, Capital, Colonies, Points of Interest, World Generation)
- `docs/06-ui/` — All UI documents populated to Vertical Slice depth (HUD, Menus, Input, Notifications, UX Principles, Accessibility — initial standards)
- `docs/07-art/` — All art documents populated to Vertical Slice depth (Art Direction, Pixel Art Style, Animation, Audio, Visual Identity)
- `docs/08-technical/` — All technical documents populated to Vertical Slice depth (Architecture, Data Models, Save System, Performance, Coding Standards, AI Development Workflow, AI Routing Policy, Context Packaging Strategy)
- `docs/10-decisions/Decision Log.md` — All ADRs required for Vertical Slice scope recorded
- All MVP documentation updated to reflect lessons learned from implementation

---

# Vertical Slice Scope

## In Scope

- **Settlement (capital):** Basic building set extended; buildings show visual upgrade states
- **Basic colony:** One colony can be founded and developed with distinct identity emerging
- **Roads and desire paths:** Villagers create dirt paths; player can pave them; paved roads improve logistics
- **Villagers (shallow):** Villagers move in, work, and form households. No aging/death cycle in Vertical Slice
- **Heroes (shallow):** 2–3 named heroes implemented with basic abilities; they coexist with villagers
- **Exploration (shallow):** One unlockable region with unique resources; one recruitable hero
- **Combat (shallow):** Mostly automatic turn-based combat against one enemy type; occasional player ability
- **Research (shallow):** A small technology tree (approximately 5–10 nodes) demonstrating visible research effects
- **Economy (shallow):** One short production chain (e.g., Mine → Smelter → Blacksmith); basic agriculture
- **Resources (shallow):** Subset of core resources representing each major category
- **Seasons (shallow):** Visual season changes; one gameplay effect per season
- **Chronicle (shallow):** Records 3–5 event types (building completion, colony founding, discovery, hero level-up)
- **Decorations (shallow):** 2–3 decoration types that influence happiness
- **UI:** HUD, build menu, research panel, hero panel, chronicle panel, colony overview, map
- **Save/Load:** Autosave, manual save, manual load, multiple save slots
- **Camera:** Pan, zoom, camera position restored on load
- **Art:** Pixel art style applied to all assets; placeholder audio
- **Accessibility:** Initial keyboard navigation and semantic markup; color contrast baseline

## Out of Scope for Vertical Slice

- Full simulation depth (aging, death, retirement, generational changes) — roadmap/alpha
- Full hero roster (10–20 heroes) — roadmap/alpha
- Complete technology tree — roadmap/alpha
- Full production chains and luxury goods — roadmap/alpha
- Trade networks between settlements — roadmap/alpha
- Full world map with all regions and islands — roadmap/alpha
- All colony identities and specialization — roadmap/alpha
- Complete decoration catalog — roadmap/alpha
- Full Chronicle event catalog — roadmap/alpha
- Living Memories biographies — roadmap/alpha
- Disasters and failure states (revolt, abandonment, fires) — roadmap/alpha
- JSON export/import — roadmap/beta
- Full session persistence — roadmap/alpha
- Balance tuning — roadmap/beta
- Performance optimization — roadmap/beta
- Accessibility compliance audit — roadmap/beta
- Full audio — roadmap/beta

---

# Design Goals

- Prove all major system categories can coexist without architectural conflicts
- Validate the simulation-first philosophy: do player actions produce emergent behaviors?
- Establish the integration patterns between systems (e.g., how combat results feed the economy, how exploration feeds settlement growth)
- Confirm that the visibility requirements (visible logistics, building evolution, desire paths) are technically feasible
- Identify any systems that require fundamental redesign before full implementation

---

# Non-Goals

- The Vertical Slice is not feature-complete — every system is shallow
- The Vertical Slice is not balanced — systems exist to demonstrate integration, not optimal play
- The Vertical Slice is not polished — art and audio are functional, not final
- The Vertical Slice is not publicly playable — it is an internal milestone

---

# Entry Criteria

- MVP exit criteria are met
- All Documentation Prerequisites for the Vertical Slice are complete and reviewed
- Lessons learned from MVP implementation have been incorporated into updated documentation

---

# Exit Criteria

- All Vertical Slice In Scope systems are implemented and playable
- Every major system category (gameplay, simulation, economy, world, UI, art, technical) has at least one functional representative feature
- Systems interact without critical bugs (e.g., combat affects resources, research affects building appearance, seasons affect gameplay)
- Desire paths appear and can be paved
- The Chronicle records events
- Save/Load preserves state across all implemented systems
- Human approval has been given for all Vertical Slice features
- All review pipeline steps have passed
- Documentation has been updated to reflect any implementation discoveries

---

# Open Questions

- TODO: Which 2–3 heroes should be included in the Vertical Slice?
- TODO: Which specific colony identity should emerge for the single Vertical Slice colony?
- TODO: Exact scope of the Vertical Slice technology tree (which nodes?)
- TODO: Which 3–5 Chronicle event types should be implemented first?
- TODO: Should the Vertical Slice include any failure conditions, or is that purely Alpha territory?
- TODO: Which season-specific gameplay effects should be included?
- TODO: Target for Vertical Slice map size and number of regions
- TODO: Whether weather should be visual-only or include gameplay effects in Vertical Slice

---

# Related Documents

- `roadmap/mvp` — MVP (predecessor milestone)
- `roadmap/alpha` — Alpha (successor milestone)
- `02-gameplay/` — All gameplay specification documents
- `03-simulation/` — All simulation specification documents
- `04-economy/` — All economy specification documents
- `05-world/` — All world specification documents
- `06-ui/` — All UI specification documents
- `07-art/` — All art specification documents
- `08-technical/` — All technical specification documents
- `01-vision/Design Pillars.md` — Design pillars the slice must respect
- `01-vision/Core Gameplay Loop.md` — The loop the slice validates
