---
title: Art Direction
id: art/art-direction

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/why
  - foundation/principles
  - VIS-001

used_by:
  - art/pixel-art-style
  - art/animation
  - art/audio
  - art/visual-identity
  - All art and rendering implementation

tags:
  - art
  - direction
  - visual-philosophy
  - pixel-art
---

# Purpose

Define the overall visual philosophy and artistic direction for The Long Reign. This document establishes the aesthetic goals, atmosphere, and guiding principles that all art assets must support. It is the parent document for the art discipline — all other art documents (`Pixel Art Style.md`, `Animation.md`, `Audio.md`, `Visual Identity.md`) derive their constraints from this direction.

---

# Overview

The Long Reign is a cozy fantasy kingdom-building simulation rendered in pixel art. The visual direction draws inspiration from the atmosphere of Heroes of Might and Magic II–IV — a warm, inviting fantasy aesthetic — while remaining an original visual identity, not a clone of any existing game.

The player begins with a handful of settlers on an untouched frontier. The art must make the player feel they are building something that progressively becomes beautiful, lived-in, and uniquely theirs. Every visual element should support the project's North Star: **make the kingdom feel more alive**.

The rendering target is the browser, using PixiJS as the rendering engine.

---

# Design Goals

- **Cozy Fantasy Atmosphere.** The art should feel warm, inviting, and nostalgic. It should evoke a world the player wants to spend time in — not a world that creates tension or urgency.
- **Frontier Colony Aesthetic.** The starting state should feel like an untouched wilderness. Growth should visually transform the frontier into a thriving settled kingdom.
- **Visible Growth (Meaningful Growth pillar).** Building upgrades must produce visible visual evolution. The capital must visibly transform from a camp into a thriving kingdom. Research must change architecture. Roads must improve visually when paved.
- **Living Simulation.** The world should look inhabited, not managed. Villager activity, resource movement, seasonal changes, and desire-path formation must all be visually apparent.
- **Player Expression.** No two kingdoms should look alike. Grid-based construction, decoration placement, road layout, and colony specialization must produce visually distinct outcomes.
- **The Six-Month Return Test.** A returning player should look at their kingdom and feel the emotional response "Wow… I built all this." The visual identity must support long-term attachment and recognition.
- **Cozy Complexity.** Visual richness without visual clutter. Information-dense without being overwhelming. The player should feel immersed, not stressed.

---

# Non-Goals

- The game is not a visual clone of Heroes of Might and Magic or any other title. The HOMM II–IV reference is about atmosphere and tone, not asset fidelity or direct aesthetic reproduction.
- The art does not pursue photorealism, 3D rendering, or high-fidelity realism.
- Visual complexity is not a goal in itself — cozy complexity means richness without overwhelm.
- The art direction does not specify individual asset lists, sprite dimensions, or color hex codes. Those belong in `Pixel Art Style.md` and implementation specifications.

---

# Atmosphere Reference

The source material describes the desired atmosphere as:

- **Cozy fantasy** — warm, inviting, comforting. Not dark fantasy. Not grim. The world has dangers but the visual tone is hopeful.
- **Frontier colony** — untamed nature meeting civilization. Forests, rivers, mountains, and the gradual encroachment of roads, buildings, and fields.
- **HOMM II–IV atmosphere** — this refers to the quality of the *feeling* those games evoked: a painterly fantasy world, detailed but not photorealistic, with a sense of history and place. The Long Reign does not copy HOMM assets, UI, or specific artistic choices.

---

# Visual Pillars Mapping

Every art decision must serve at least one design pillar. The following mapping shows how visual direction supports each pillar:

| Pillar | Visual Expression |
|--------|-------------------|
| Living Simulation | Villager animations, resource movement, seasonal changes, day/night or weather cycles |
| Meaningful Growth | Building upgrade visuals, road paving progression, settlement scale change |
| Player Expression | Distinct decoration visuals, varied building placement, colony visual identity |
| Cozy Complexity | Clean visual hierarchy, non-intrusive UI, readable pixel art |
| Emergent Stories | Chronicle visual presentation, Living Memory portrait art, milestone visual moments |
| Respect the Player's Time | No flashing urgency indicators, no countdown timers, no FOMO visual cues |

---

# Seasonal Visuals

The game includes seasons that affect gameplay (harvests, winter hardships, exploration opportunities). The art direction must therefore support:

- Seasonal palette shifts (greens of spring/summer → oranges of autumn → whites/blues of winter)
- Seasonal terrain changes (snow cover, autumn foliage, spring bloom)
- Seasonal building appearance changes where appropriate

---

# Building Visual Evolution

Buildings visually evolve through upgrades. This is a core visual requirement:

- Each building type must have distinct visual states per upgrade tier
- The capital must visibly transform from a camp (tents, campfires) into a thriving kingdom (stone buildings, paved streets, towers)
- Visual evolution should be noticeable at a glance — the player should never wonder "what did that upgrade do?"

---

# Visible Logistics

The principle that "nothing teleports" has direct visual implications:

- Resources must be visually represented moving through the kingdom (carts, carried goods, etc.)
- Supply chains must be traceable by eye: Mine → Cart → Warehouse → Blacksmith → Market
- Road upgrades must produce visible improvements in traffic flow and speed
- Desire paths must be visually distinct from paved roads

---

# Acceptance Criteria

- [ ] The visual style is recognizable as cozy fantasy pixel art, distinct from any existing commercial game
- [ ] Building upgrades produce visible visual changes at each tier
- [ ] Seasonal changes are visually apparent on the game map
- [ ] Resources are visually traceable moving through supply chains
- [ ] A returning player can recognize their kingdom from its unique visual layout after a long absence
- [ ] The UI does not create visual urgency or FOMO pressure
- [ ] The frontier-to-kingdom transformation is visually satisfying

---

# Open Questions

1. What is the target resolution / viewport size for the browser-based game? (Determines pixel density and sprite sizing)
2. What is the camera perspective? (Isometric, top-down, angled top-down?) HOMM uses an isometric-like perspective — is this the intended direction?
3. How many building upgrade tiers exist visually, and what are the named stages? (Camp → Village → Town → City?)
4. Will there be a day/night cycle in addition to seasons?
5. What is the visual approach to the world map vs. the settlement view? Are they separate screens or a seamless zoom?
6. How are colonies visually differentiated from the capital? Unique architecture sets? Palette variations?
7. What are the quantitative decoration effects on visual presentation? (e.g., does a high-prestige settlement look different from a low-prestige one?)

---

# Related Documents

- `Pixel Art Style.md` — pixel art technical specification (art/pixel-art-style)
- `Animation.md` — animation direction (art/animation)
- `Audio.md` — audio direction (art/audio)
- `Visual Identity.md` — broader visual identity, UI, and branding (art/visual-identity)
- `docs/01-vision/Vision Statement.md` — project vision and emotional goal (VIS-001)
- `docs/01-vision/Design Pillars.md` — the six design pillars (VIS-002)
- `docs/00-foundation/Principles.md` — design principles (foundation/principles)
- `docs/00-foundation/Why.md` — why the project exists (foundation/why)
- `docs/02-gameplay/Buildings.md` — building specification (gameplay/buildings)
- `docs/03-simulation/Settlement Growth.md` — settlement visual evolution
- `docs/03-simulation/Roads and Logistics.md` — visible logistics mechanics
- `docs/03-simulation/Seasons.md` — seasonal gameplay effects
- Source: *The Long Reign — Project Handoff* § Settlement (style: cozy fantasy, frontier colony, HOMM II-IV atmosphere), § Buildings (visual evolution), § Roads, § Visible Logistics, § Seasons
- Source: *Project Genesis — Brainstorming History* § Visible Logistics, § The Settlement Becomes the Main Character
- Source: *Workflow v2* § Rendering Agent (PixiJS)
