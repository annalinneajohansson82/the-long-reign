---
title: Animation
id: 07-art/animation

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 07-art/art-direction
  - 07-art/pixel-art-style
  - 00-foundation/principles

used_by:
  - All animation implementation
  - Rendering Agent (PixiJS)
  - UI implementation

tags:
  - art
  - animation
  - pixel-art
  - sprite-animation
---

# Purpose

Define the animation direction for The Long Reign — what animates, the style of animation, and how animation serves the design pillars. This document covers character animation, building animation, environmental animation, resource movement animation, and UI animation.

---

# Overview

Animation in The Long Reign serves the North Star: **make the kingdom feel more alive**. Animation is not decorative — it communicates game state, reinforces the living simulation, and rewards player attention.

All animation is pixel art animation. The source material provides no technical animation parameters (frame rates, frame counts, tools). This document derives animation requirements from the design philosophy and marks gaps as open questions.

---

# Design Goals

- **Living Simulation.** Animation should make the world feel inhabited. Villagers should move with purpose, resources should flow, seasons should transition. A player who does nothing should still see their kingdom breathe.
- **Meaningful Growth.** Building upgrades should have satisfying visual transitions. Roads should visually improve. The kingdom's animation density should increase as it grows (more villagers, more carts, more activity).
- **Cozy Complexity.** Animation should be smooth, relaxed, and never frantic. High activity should feel like a bustling village, not a stressful rush. The player should feel calm watching their kingdom operate.
- **Visible Logistics.** Resource movement must be animated. Carts travel along roads. Resources visibly transfer between buildings. Nothing teleports — every transfer has a visual journey.
- **Player Feedback.** Player actions (placing buildings, paving roads, upgrading, decorating) should have clear, satisfying animation feedback.
- **The Six-Month Return Test.** A returning player watching their kingdom should feel warmth and satisfaction from the animation — not chaos or visual noise.

---

# Non-Goals

- Animation is not cinematic. The goal is gameplay communication, not cutscene quality.
- Animation should not create urgency or stress — no fast-flashing effects, no aggressive countdown animations, no FOMO-driven visual pulses.
- The game does not require 3D animation, skeletal animation, or physics-based animation.
- This document does not specify frame counts, sprite sheet layouts, or tool pipelines. Those belong in an animation production specification.

---

# Animation Categories

### 1. Villager Animation

Villager animation is the primary vehicle for the Living Simulation pillar.

Required animations (derived from villager lifecycle and behavior):

| Animation | Purpose |
|-----------|---------|
| Idle | Standing, breathing, ambient motion — shows the villager is alive even when stationary |
| Walk | Movement between locations. Walking creates desire paths over time. |
| Work | Profession-specific animations (farming, mining, smithing, teaching, trading) |
| Carry | Villagers carrying resources (visible logistics) |
| Interact | Entering buildings, talking to other villagers, using objects |
| Age states | Villagers age — visual representation of child → adult → elder |

> **Open Question:** Are age states represented by distinct sprites with their own animations, or by palette/size modifiers applied to a base sprite?

### 2. Hero Animation

Heroes are a small cast (10–20 named individuals). They warrant more bespoke animation than generic villagers.

Required animations:

| Animation | Purpose |
|-----------|---------|
| Idle | Distinct per hero — reflects personality |
| Walk | Movement on map and in settlements |
| Combat | Turn-based combat animations (combat is mostly automatic with occasional player abilities) |
| Ability | Unique animations for hero-specific abilities |
| Interact | Interactions with villagers, buildings, or world objects |

> **Open Question:** Do heroes have portrait art for the Chronicle and Living Memories, or are they represented entirely by their pixel art sprites?

### 3. Building Animation

Buildings are not static. They should communicate activity.

Required animations:

| Animation | Purpose |
|-----------|---------|
| Construction | Building placement and construction completion |
| Upgrade | Transition between upgrade tiers (visual evolution) |
| Active | Working state — smoke from chimneys, waterwheel turning, market bustle |
| Idle | Inactive state — building exists but is not producing |
| Damage/Fire | Fire disaster animations (failure state) |

> **Open Question:** Are building upgrade animations instant, time-lapse, or player-triggered?

### 4. Road Animation

Roads are a core mechanic with visual progression.

Required animations:

| Animation | Purpose |
|-----------|---------|
| Dirt path formation | Gradual appearance of desire paths as villagers walk routes |
| Paving | Transition from desire path to paved road |
| Traffic | Carts, villagers, and heroes moving along roads |
| Seasonal overlay | Snow on roads in winter, fallen leaves in autumn |

### 5. Resource Movement (Visible Logistics)

Nothing teleports. Every resource transfer must be visually represented.

Required animations:

| Animation | Purpose |
|-----------|---------|
| Cart movement | Carts traveling between mine → warehouse → blacksmith → market |
| Loading/Unloading | Resources being loaded onto carts or into buildings |
| Stockpile growth | Warehouses visually filling as resources accumulate |
| Production output | Finished goods emerging from production buildings |

### 6. Environmental Animation

The world should feel alive beyond the settlement.

Required animations:

| Animation | Purpose |
|-----------|---------|
| Water | Rivers, lakes, ocean (waves, flow) |
| Trees/Foliage | Wind animation, seasonal leaf changes |
| Weather | Rain, snow, fog (if weather system exists — see `docs/03-simulation/Weather.md`) |
| Seasonal transitions | Smooth or discrete palette and foliage changes between seasons |
| Day/Night | If implemented — lighting changes, window lights turning on |

> **Open Question:** Does the game have a day/night cycle? The source material mentions seasons but is silent on time-of-day.

### 7. UI Animation

UI animation should be subtle and supportive, not distracting.

Required animations:

| Animation | Purpose |
|-----------|---------|
| Panel open/close | Smooth transitions for menus, Chronicle, building details |
| Notification | Subtle alerts for significant events (births, colony foundings, hero achievements) — never urgent or FOMO-driven |
| Chronicle entry | Visual flourish when a new Chronicle entry is recorded |
| Button/tooltip | Subtle hover and click feedback |
| Resource gain/loss | Subtle counters or indicators — non-stressful |

---

# Animation Style Principles

- **Smooth but not frantic.** Frame timing should feel deliberate, not rushed. The player is building a kingdom, not fighting an action game.
- **Readable at scale.** Animations must communicate clearly at the target viewport size. A villager carrying a resource should be recognizable, not a blur of pixels.
- **Coherent across systems.** Building, villager, and environmental animations should feel like they belong in the same world. Timing, palette, and style must be consistent.
- **Non-intrusive.** UI animations must never compete with the game world for attention. The kingdom is the visual focus.

---

# Acceptance Criteria

- [ ] Villagers have idle, walk, work, and carry animations
- [ ] Resource carts visibly travel between buildings along roads
- [ ] Building upgrades produce a visible animation transition
- [ ] Desire paths gradually form based on villager foot traffic
- [ ] Seasonal transitions are visually animated or smoothly applied
- [ ] UI animations do not create urgency or visual stress
- [ ] Animation framerate is consistent and performant with expected on-screen entity counts
- [ ] Hero animations are distinct enough to recognize individual heroes

---

# Open Questions

1. What is the target animation frame rate? (12 fps? 24 fps? Variable?)
2. What is the frame count per animation type? (e.g., 4-frame walk cycle? 8-frame?)
3. How are age states animated — distinct sprites or modifiers?
4. Do heroes have portrait art beyond pixel art sprites?
5. Are building upgrade animations instant, time-lapse, or player-triggered?
6. Does the game have a day/night cycle requiring lighting animations?
7. What is the animation tool pipeline? (Aseprite? Custom tools? Sprite sheet generation?)
8. How are resource stockpile levels visually animated (warehouse fill states)?
9. What is the animation approach for combat? (Turn-based — is there a combat screen transition, or in-world combat?)
10. How are failure state animations handled? (Fire spreading, buildings deteriorating, villagers leaving?)

---

# Related Documents

- `Art Direction.md` — overall visual philosophy (07-art/art-direction)
- `Pixel Art Style.md` — pixel art technical constraints (07-art/pixel-art-style)
- `Visual Identity.md` — UI animation specifics (07-art/visual-identity)
- `Audio.md` — audio collaboration with animation (07-art/audio)
- `docs/02-gameplay/Buildings.md` — building upgrade tiers (02-gameplay/buildings)
- `docs/02-gameplay/Combat.md` — combat system (informs combat animation)
- `docs/03-simulation/Villagers.md` — villager behavior states
- `docs/03-simulation/Roads and Logistics.md` — road visual states and logistics
- `docs/03-simulation/Seasons.md` — seasonal effects
- `docs/03-simulation/Weather.md` — weather system (if specified)
- `docs/03-simulation/Settlement Growth.md` — settlement visual evolution
- Source: *The Long Reign — Project Handoff* § Villagers, § Buildings, § Roads, § Visible Logistics, § Combat, § Seasons
- Source: *Project Genesis — Brainstorming History* § Living Simulation, § Visible Logistics, § Roads and Desire Paths
- Source: *Workflow v2* § Rendering Agent (PixiJS)
