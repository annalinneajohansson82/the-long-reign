---
title: Alpha — Feature-Complete Internal Build
id: roadmap/alpha

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - roadmap/mvp
  - roadmap/vertical-slice
  - foundation/readme
  - foundation/why
  - foundation/principles

used_by:
  - roadmap/beta
  - All implementation planning

tags:
  - roadmap
  - alpha
  - milestone
---

# Purpose

Define the Alpha milestone for The Long Reign. Alpha is the feature-complete internal build. Every planned system, mechanic, and content category is present and functional. Systems now have their intended depth rather than the shallow implementations of the Vertical Slice.

Alpha is NOT polished, balanced, or publicly ready. It exists so the team can experience the full scope of the game and identify what needs tuning, redesign, or removal before Beta.

---

# Overview

Alpha delivers the complete game as specified in the documentation. All buildings, all resources, all hero types, all production chains, all regions, all Chronicle event types — everything that the Game Design Documents describe. The game may be rough. It may have placeholder art. It may have balance issues. But nothing is missing.

This milestone answers: "Does the complete game as designed hold together? What doesn't work at full scope?"

---

# Documentation Prerequisites

All documentation in the repository must be complete before Alpha implementation begins. This includes:

- `docs/00-foundation/` — All eight documents finalized (no TODOs remaining except intentional Open Questions deferred to post-Alpha)
- `docs/01-vision/` — All vision documents finalized
- `docs/02-gameplay/` — All gameplay documents populated to full Alpha depth (Buildings, Resources, Exploration, Combat, Research, Progression, Production Chains, Events)
- `docs/03-simulation/` — All simulation documents populated to full Alpha depth (Villagers, Heroes, Roads and Logistics, Families, Professions, Settlement Growth, Chronicle, Living Memories, Seasons, Weather)
- `docs/04-economy/` — All economy documents populated to full Alpha depth (Economy Overview, Resource Flow, Agriculture, Industries, Trade, Luxury Goods, Crafting)
- `docs/05-world/` — All world documents populated to full Alpha depth (World Overview, Regions, Capital, Colonies, Points of Interest, World Generation)
- `docs/06-ui/` — All UI documents populated to full Alpha depth (HUD, Menus, Input, Notifications, UX Principles, Accessibility)
- `docs/07-art/` — All art documents populated to full Alpha depth (Art Direction, Pixel Art Style, Animation, Audio, Visual Identity)
- `docs/08-technical/` — All technical documents populated to full Alpha depth (Architecture, Data Models, Save System, Performance, Coding Standards, AI Development Workflow, AI Routing Policy, Context Packaging Strategy)
- `docs/10-decisions/Decision Log.md` — All ADRs for all implemented systems recorded
- `docs/glossary/` — Glossary populated with all terms
- `docs/parking-lot/` — All deferred ideas documented
- All MVP and Vertical Slice documentation updated to reflect lessons learned

---

# Alpha Scope

## In Scope

### Settlement and Construction
- Full building catalog (all types, all upgrade tiers, all visual evolution states)
- Grid-based construction with full freedom
- District planning supported
- Capital grows from camp to thriving kingdom
- All decoration types; decorations influence happiness, prestige, settlement quality

### Colonies
- Multiple colonies supported
- Each colony develops unique identity from buildings, geography, production, and history
- No explicit specialization menu — identity emerges naturally
- Colonies have distinct visual appearance and production focus

### Roads and Logistics
- Full desire path simulation: villagers create paths where they repeatedly travel
- Player can pave desire paths into permanent roads
- Roads improve movement, logistics, trade, and efficiency across all tiers
- Visible logistics: resources physically move via carts, wagons, and roads; nothing teleports

### Villagers
- Full villager life cycle: move in → form households → marry → have children → age → attend school → learn professions → work → retire → die
- Schools are meaningful buildings that affect villager progression
- Villager population grows and declines naturally based on settlement conditions

### Heroes
- Full hero roster (approximately 10–20 named heroes)
- Each hero has personality, backstory, and unique abilities
- Heroes coexist with ordinary villagers
- Hero progression: levels, professions
- Difficulty settings affect hero mortality (Easy: never die, Medium: injured and return, Hard: permanent death possible)

### Exploration
- Full handcrafted world map
- All regions implemented, including islands
- Unlockable regions with unique resources, recruitable heroes, new buildings, opportunities, and dangers
- Exploration supports settlement growth

### Economy
- Full production chains: coal, steel, glass, leather, cloth, agriculture, luxury goods, trade, crafting ingredients, weapon research
- Resource flow through the economy; visible cart and warehouse interactions
- Long-term economic progression without stressful optimization

### Research
- Full medium-sized technology tree
- Research branches: agriculture, trade, industry, religion
- Research produces visible architectural and mechanical changes
- Villages evolve into different economic identities based on research choices

### Seasons and Weather
- Full season cycle: harvests, winter hardships, exploration opportunities
- Both positive and negative seasonal effects
- Weather system (visual and gameplay effects)

### Combat
- Mostly automatic turn-based combat
- Occasional player abilities
- Combat supports settlement progression

### Chronicle and Living Memories
- Full Chronicle: birth, marriage, death, colony founding, discoveries, disasters, hero achievements, completed wonders, wars, technological advances
- Full Living Memories: biographies for heroes and important villagers — birthplace, family, profession, achievements, expeditions, legacy
- Each save is a unique historical document

### Failure States
- Natural consequences: revolt, abandonment, fires, decline
- No arbitrary game-over screens
- Failure emerges from simulation state

### Save System
- Autosave
- Manual save and manual load
- Multiple save slots
- LocalStorage persistence
- JSON export and import
- Save versioning
- Closing browser preserves progress

### Full Session Persistence
- On load, restore: camera position, zoom, selected building, open panels, expedition state, game speed, world state

### UI
- Full HUD with all panels
- Complete menu system
- Keyboard navigation and input mappings
- Notification system
- Accessibility: semantic HTML, ARIA, screen reader support, focus management, reduced motion, color contrast, scalable UI, accessible dialogs and forms, responsive layouts

### Art
- Full pixel art asset set in project style
- Animation for all animated entities
- Visual identity applied consistently
- Audio placeholder or initial implementation

---

## Out of Scope for Alpha

- Balance tuning (roadmap/beta)
- Performance optimization beyond functional thresholds (roadmap/beta)
- Accessibility compliance audit (roadmap/beta)
- Final audio (roadmap/beta)
- Tutorial/onboarding polish (roadmap/beta)
- Public distribution readiness (roadmap/beta)
- Localization (roadmap/release)
- Future expansions (roadmap/future-expansions)

---

# Design Goals

- Realize the complete game design as specified in documentation
- Achieve Living Simulation depth: villagers live full lives, settlements develop identities, history emerges naturally
- Ensure all six design pillars are demonstrably present in the build
- Pass the Six-Month Return Test: the build should produce the emotional response of "Wow... I built all this"
- Prove that the North Star (make the kingdom feel more alive) is achievable with the full scope of systems
- Identify any systems whose full implementation reveals fundamental design problems

---

# Non-Goals

- Alpha is not balanced — numbers are plausible but not tuned
- Alpha is not polished — rough edges are expected
- Alpha is not publicly playable — this is an internal milestone
- Alpha does not include final audio
- Alpha is not localized

---

# Entry Criteria

- Vertical Slice exit criteria are met
- All Documentation Prerequisites for Alpha are complete, reviewed, and finalized
- All TODOs in documentation resolved or explicitly deferred to post-Alpha as Open Questions
- Lessons learned from MVP and Vertical Slice implementation incorporated

---

# Exit Criteria

- All Alpha In Scope systems are implemented
- All buildings, resources, heroes, production chains, regions, and Chronicle event types exist as specified
- Villagers complete full life cycles
- Heroes demonstrate personality and unique abilities
- Colonies develop distinct emergent identities
- Desire paths and roads function as specified
- Visible logistics function: resources physically move, nothing teleports
- Chronicle records all specified event types
- Living Memories generate biographies
- Failure states emerge naturally from simulation
- Save/Load preserves full session state
- JSON export/import round-trips correctly
- All six design pillars are demonstrably present
- The build passes the Six-Month Return Test in internal playtesting
- Human approval has been given for all Alpha features
- All review pipeline steps have passed

---

# Open Questions

- TODO: Exact hero roster (names, backstories, abilities)
- TODO: Full building catalog (all types and tiers)
- TODO: Complete technology tree layout (all nodes and dependencies)
- TODO: Full production chain definitions (all recipes and dependencies)
- TODO: Complete Chronicle event type catalog
- TODO: All region definitions (names, resources, heroes, opportunities, dangers)
- TODO: Weather types and their exact gameplay effects
- TODO: Specific failure thresholds (what triggers revolt, abandonment, fires, decline)
- TODO: Difficulty setting specifics beyond hero mortality (does difficulty affect economy, combat, or other systems?)
- TODO: Full decoration catalog and their exact influence values
- TODO: Profession list and progression paths
- TODO: School mechanics (how education affects villager progression)
- TODO: Colony specialization emergence rules (what factors weight which identities)

---

# Related Documents

- `roadmap/mvp` — MVP (predecessor milestone)
- `roadmap/vertical-slice` — Vertical Slice (predecessor milestone)
- `roadmap/beta` — Beta (successor milestone)
- `01-vision/Design Pillars.md` — The six pillars Alpha must realize
- `01-vision/The Six-Month Return Test.md` — The test Alpha must pass
- `02-gameplay/` through `08-technical/` — All specification documents
- `parking-lot/` — Ideas deferred beyond Alpha
