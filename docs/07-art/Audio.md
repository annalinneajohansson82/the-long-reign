---
title: Audio
id: art/audio

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - art/art-direction
  - foundation/principles

used_by:
  - Audio implementation
  - All systems with audio feedback

tags:
  - art
  - audio
  - music
  - sound-effects
  - atmosphere
---

# Purpose

Define the audio direction for The Long Reign — music, sound effects, ambient sound, and how audio serves the design pillars. Audio in The Long Reign should reinforce the cozy fantasy atmosphere, support the living simulation, and reward long-term attachment without creating urgency or stress.

---

# Overview

The source material contains **no direct specification of audio** — no mention of music style, sound effects, voice acting, or audio implementation. All audio direction in this document is derived from the project's atmosphere, design pillars, and gameplay systems.

Audio in The Long Reign should feel like the sound of a world worth returning to. It should be warm, inviting, and alive. The audio should never create stress, urgency, or FOMO — consistent with the Respect the Player's Time pillar.

---

# Design Goals

- **Cozy Fantasy Atmosphere.** Audio should feel warm, acoustic, and organic. The sound of a fireplace, the rustle of leaves, the distant hammer of a blacksmith. Not epic orchestral bombast. Not dark ambient dread.
- **Living Simulation.** The kingdom should *sound* alive. Ambient audio should reflect villager activity, industry, nature, and seasons. Silence should feel like absence, not a neutral state.
- **Meaningful Growth.** As the kingdom grows, the soundscape should densify — more activity sounds, more complex layers. An early-game camp sounds different from a late-game city.
- **Player Feedback.** Audio should provide clear, satisfying feedback for player actions: placing buildings, paving roads, upgrading, discovering, recording Chronicle entries.
- **The Six-Month Return Test.** The audio a returning player hears should feel like coming home. The music should evoke warmth and familiarity, not "you've been gone, here's what you missed."
- **Respect the Player's Time.** Audio must never include: countdown ticks, urgency stingers, "daily reward" jingles, login fanfares, or any sound that creates pressure to keep playing.

---

# Non-Goals

- The game does not include voice acting. (No source material supports it; the cozy pixel art aesthetic does not demand it.)
- The game does not include real-time audio synchronization for multiplayer — the game is single-player.
- Audio is not a primary gameplay mechanic. It supports atmosphere and feedback; it is not required for gameplay comprehension.
- This document does not specify audio engine, file formats, bitrates, or technical implementation. Those belong in a technical audio specification.

---

# Music

> **TODO:** The source material provides no music direction. The following is derived from atmosphere and pillars.

### Style

- **Genre:** Cozy fantasy / acoustic ambient. Warm, melodic, unhurried.
- **Instrumentation:** Acoustic instruments preferred — strings, woodwinds, piano, gentle percussion. Avoid synthetic, aggressive, or overly dramatic orchestration.
- **Tempo:** Slow to moderate. Nothing that suggests urgency or action.
- **Dynamics:** Soft to moderate. The music should support the kingdom, not dominate it.

### Contexts

| Context | Musical Approach |
|---------|-----------------|
| Main Theme | Warm, memorable melody — the "coming home" theme. Should evoke the Six-Month Return Test emotional response. |
| Settlement (early) | Sparse, gentle — a few instruments. Frontier feeling. |
| Settlement (mid) | Richer texture — more instruments, more complexity. Growing kingdom. |
| Settlement (late) | Full, warm arrangement — thriving kingdom. Satisfying but not bombastic. |
| Exploration / World Map | Adventurous but not tense. Curiosity and discovery. |
| Seasons | Seasonal variations — brighter in spring, warmer in autumn, quieter in winter. |
| Colonies | Variation on settlement theme — reflects colony specialization (e.g., industrial colony: more percussive; trade colony: more melodic). |
| Chronicle View | Reflective, nostalgic — looking back at history. |
| Menus / Title Screen | Inviting, calm — sets the tone before the player enters the kingdom. |

### Implementation

> **Open Question:** Should music be a continuous loop, contextual (triggered by events), or a mix? Should it crossfade between contexts?

---

# Sound Effects

> **TODO:** The source material provides no sound effect direction. The following is derived from gameplay systems.

### Categories

| Category | Examples | Design Notes |
|----------|----------|--------------|
| Building | Construction hammering, upgrade completion chime, building activation sounds | Should feel satisfying — the player is building something. No harsh industrial sounds. |
| Roads | Footsteps on dirt vs. cobblestone, cart wheels on roads | Audio differentiation between road tiers |
| Villagers | Footsteps, ambient chatter, work sounds (farming, mining, smithing), children playing | Should create a sense of life and community |
| Resources | Mining pickaxe, cart rolling, resource delivery thump, market bustle | Supports visible logistics — sound traces the supply chain |
| UI | Button clicks, panel open/close, notification chimes, Chronicle entry sound | Subtle, warm, never jarring |
| Seasons | Rain, wind, snow crunch, birdsong (spring), crickets (summer), leaves rustling (autumn) | Seasonal identity through sound |
| Decorations | Fountain trickle, statue reveal, garden sounds | Rewards decorating — makes decorations feel tangible |
| Heroes | Unique sound per hero ability, hero arrival fanfare (subtle) | Hero identity through sound |
| Failure | Fire crackling, structural collapse, alarm bell (subtle) | Consequences should be felt but not panic-inducing |
| Milestones | Colony founding, wonder completion, population thresholds, first paved road | Celebration sounds — warm, not overwhelming |

### Style Principles

- Sounds should feel **organic and acoustic**, not synthetic or harsh.
- UI sounds should be **subtle and satisfying** — click feedback that feels pleasant, not intrusive.
- Failure sounds should communicate consequence without inducing panic. A fire sounds like a fire, but the game should not scream at the player.
- No "negative" sounds for taking breaks, missing days, or being inactive.

---

# Ambient Sound

The ambient soundscape is the primary vehicle for the Living Simulation pillar in audio.

### Layers

| Layer | Description |
|-------|-------------|
| Nature | Wind through trees, water (rivers/lakes/ocean), birdsong, insects, weather |
| Settlement | Distant work sounds, cart wheels, market bustle, children, animals |
| Industry | Mining echoes, smithing hammer, mill wheel, sawmill (scales with industry level) |
| Season | Seasonal ambient shifts — spring birds, summer insects, autumn wind, winter quiet |
| Time of Day | If day/night cycle exists: morning birds, midday bustle, evening crickets, night quiet |

### Dynamic Density

The ambient soundscape should scale with kingdom development:

- **Early game (camp):** Mostly nature sounds — wind, birds, water. Occasional campfire crackle, single hammer.
- **Mid game (village/town):** Nature recedes, settlement sounds increase — multiple work sounds, cart traffic, market chatter.
- **Late game (city):** Dense urban soundscape — constant low-level industry, bustling market, distant bells. Nature sounds are background.

This audio progression directly supports the Meaningful Growth and Living Simulation pillars.

---

# Audio and the Design Pillars

| Pillar | Audio Expression |
|--------|-----------------|
| Living Simulation | Ambient density scales with population; villager work sounds; seasonal audio shifts |
| Meaningful Growth | Audio complexity increases with kingdom development; building upgrades have satisfying sounds |
| Player Expression | Decoration audio rewards; varied building sounds; colony sound identity |
| Cozy Complexity | Rich audio without overwhelm; layers that blend rather than compete |
| Emergent Stories | Chronicle entry audio; milestone celebration sounds; Living Memory audio tokens |
| Respect the Player's Time | No urgency sounds; no login fanfares; no FOMO audio cues; kingdom sounds peaceful when idle |

---

# Acceptance Criteria

- [ ] The game has background music that supports the cozy fantasy atmosphere
- [ ] Building placement and upgrade actions produce satisfying audio feedback
- [ ] Villager activity produces ambient sound scaled to population
- [ ] Seasonal changes are reflected in ambient audio
- [ ] Road surfaces have distinct footstep/cart audio (dirt vs. paved)
- [ ] Chronicle entries have a distinct audio cue
- [ ] UI sounds are subtle and never jarring
- [ ] No audio cue creates urgency or FOMO pressure
- [ ] The kingdom sounds alive even when the player is idle
- [ ] Returning to the game after a long absence feels welcoming through audio

---

# Open Questions

1. What is the music implementation approach? (Continuous loop? Contextual? Dynamic layering? Crossfade?)
2. Is there a dedicated composer, or will music be sourced from libraries?
3. What audio engine or API will be used in the browser? (Web Audio API? Howler.js? PixiJS audio plugin?)
4. What is the target audio file format and quality? (MP3? OGG? WAV?)
5. Will there be a day/night cycle, and if so, should audio reflect it?
6. Should music vary by colony specialization, or is music settlement-wide?
7. Is there a volume mixer for music/SFX/ambient independent control?
8. Should there be an "audio off" mode that still communicates critical gameplay events visually?
9. How are hero-specific sounds authored — unique sounds per hero, or ability-based sounds shared across heroes?
10. Are Chronicle entries purely visual, or should they have accompanying audio (page turn, quill scratch)?

---

# Related Documents

- `Art Direction.md` — overall visual and atmospheric philosophy (art/art-direction)
- `Animation.md` — animation direction (audio-visual synchronization) (art/animation)
- `Visual Identity.md` — UI audio alignment (art/visual-identity)
- `docs/01-vision/Design Pillars.md` — the six design pillars (VIS-002)
- `docs/01-vision/Vision Statement.md` — emotional goal (VIS-001)
- `docs/00-foundation/Principles.md` — design principles (foundation/principles)
- `docs/02-gameplay/Buildings.md` — building actions (gameplay/buildings)
- `docs/03-simulation/Villagers.md` — villager activity
- `docs/03-simulation/Settlement Growth.md` — settlement audio density progression
- `docs/03-simulation/Seasons.md` — seasonal audio changes
- `docs/03-simulation/Roads and Logistics.md` — road surface audio
- `docs/03-simulation/Chronicle.md` — Chronicle entry audio
- Source: *The Long Reign — Project Handoff* (atmosphere, design pillars, settlement growth, seasons)
- Source: *Project Genesis — Brainstorming History* (emotional foundation, design philosophy)
