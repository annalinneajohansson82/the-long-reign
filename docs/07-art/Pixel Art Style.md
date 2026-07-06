---
title: Pixel Art Style
id: 07-art/pixel-art-style

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-06

depends_on:
  - 07-art/art-direction
  - 00-foundation/principles

used_by:
  - All sprite and tile asset creation
  - Rendering implementation (PixiJS)
  - Art pipeline

tags:
  - art
  - pixel-art
  - sprites
  - tiles
  - technical
---

# Purpose

Define the pixel art technical approach for The Long Reign — resolution, tile sizes, sprite conventions, color palette strategy, and pipeline expectations. This document provides the constraints within which all visual assets must be created.

---

# Overview

The Long Reign uses pixel art as its visual medium. This choice aligns with the cozy fantasy atmosphere, the grid-based construction system, and the browser-based rendering target (PixiJS). Pixel art provides a warm, nostalgic aesthetic that supports the long-term attachment goal — a kingdom that looks handcrafted, not procedurally generic.

> **TODO:** Not confirmed by 00-foundation/01-vision — requires Creative Director confirmation.

The source material does not specify technical pixel art parameters (tile size, resolution, color depth). This document derives what it can from the design philosophy and marks the rest as open questions requiring formal decisions.

---

# Design Goals

- **Readability.** The pixel art must be legible at the target viewport size. Players must be able to distinguish building types, villager professions, resource types, and road states at a glance.
- **Grid Alignment.** The pixel art must align cleanly with the grid-based construction system. Every tile, building, and decoration must snap to the grid naturally.
- **Visual Evolution Support.** The art pipeline must support multiple visual states per building (upgrade tiers), per road (desire path → paved), and per season (spring/summer/autumn/winter variations).
- **Atmosphere Consistency.** All assets must feel like they belong in the same cozy fantasy world. Palette coherence across buildings, terrain, characters, and UI is essential.
- **Performance.** As a browser-based game rendered with PixiJS, pixel art must be performant at scale — potentially hundreds of on-screen sprites for villagers, resources, buildings, decorations, and terrain.
- **Player Expression.** Art assets must support varied placement and decoration such that no two kingdoms look alike. This implies variety within asset categories (e.g., multiple roof colors, wall textures, decoration types).

---

# Non-Goals

- The pixel art does not attempt to replicate the specific art style of HOMM II–IV or any other game. The HOMM reference is atmospheric, not stylistic.
- This document does not enumerate individual asset lists — that belongs in an asset specification or production plan.
- This document does not define UI pixel art conventions (covered in `Visual Identity.md`).

---

# Tile and Sprite Conventions

> **TODO:** The source material does not specify tile size, sprite dimensions, or pixel resolution. The following are placeholder constraints derived from the grid-based construction requirement. All values require formal decisions.

### Tile Size

- The game uses a grid-based construction system. Tile size must accommodate buildings, roads, decorations, and villager sprites.
- **Open Question:** What is the base tile size in pixels? Common pixel art game standards: 16×16, 24×24, 32×32, 48×48. The choice depends on target viewport resolution and desired visual fidelity.

### Building Sprites

- Buildings may occupy multiple tiles (e.g., 2×2, 3×3, or larger for significant structures).
- Each building type must have sprite variants for each upgrade tier.
- Building sprites should clearly communicate function (e.g., a blacksmith has an anvil visible, a market has stalls).

### Villager and Hero Sprites

- Villagers are smaller than buildings — likely single-tile or fractional-tile sprites.
- Villager sprites must be distinguishable enough that the player can read activity (walking, working, carrying resources).
- Hero sprites should be distinct from villager sprites (larger, more detailed, or with unique silhouette/color).

### Resource and Cart Sprites

- Resources must be visually represented in transit (carts, carried bundles, etc.).
- Cart sprites travel along roads and must be visually distinct from villagers.

### Road Sprites

- Roads have multiple visual states: faint trail → dirt path → desire path → paved road.
- Road tiles must tile seamlessly and connect at intersections.

---

# Color Palette Strategy

> **TODO:** The source material does not specify a color palette. The following is derived from the cozy fantasy frontier atmosphere.

- **Base Palette:** Warm earth tones (browns, greens, muted golds) for the frontier/nature aesthetic.
- **Seasonal Palettes:** Four seasonal palette variants that shift terrain, foliage, and ambient colors.
  - Spring: fresh greens, blossoms, soft light
  - Summer: rich greens, golden light, vibrant colors
  - Autumn: orange, red, brown, harvest golds
  - Winter: muted whites, blues, grays, bare trees
- **Building Palettes:** Distinct but harmonious palette per building type. Upgrade tiers may introduce richer materials (wood → stone → refined stone/marble).
- **UI Palette:** Warm, non-intrusive — must not compete with the game world. See `Visual Identity.md`.

### Palette Constraints

- Limited palettes per sprite (pixel art tradition) — exact color count per sprite is not specified.
- Palette sharing across related sprites for visual coherence.
- **Open Question:** Should the game use a global master palette, per-tileset palettes, or free-form palettes?

---

# Terrain and Environment

The world includes diverse terrain types implied by the source material:

- Forests (cut down for building materials, explored by heroes)
- Mountains (mines)
- Rivers and water features
- Islands (explorable regions)
- Farmland (agriculture)
- Frontier wilderness (starting state)

Each terrain type requires pixel art tiles that support the grid system and seasonal variations.

---

# Visual Evolution Examples

Derived from source material, the following visual progressions are required:

| Element | Visual Progression |
|---------|-------------------|
| Capital | Camp (tents, campfires) → Village (wood structures) → Town (stone buildings) → City (towers, paved streets) |
| Roads | Faint trail → Dirt path → Desire path → Paved road → (potentially upgraded road tiers) |
| Buildings | Visual upgrade per tier (material improvement, size increase, detail enrichment) |
| Colonies | Frontier outpost → specialized settlement (visual identity reflects specialization) |
| Terrain | Seasonal palette shifts affecting all outdoor tiles |

> **Open Question:** How many upgrade tiers exist per element? The source material implies "camp → village → town → city" for the capital but does not specify tier count or names.

---

# Acceptable References

The source material references the *atmosphere* of Heroes of Might and Magic II–IV. This is an acceptable tonal reference, not a visual target. Assets should not be directly modeled on HOMM sprites.

Acceptable reference sources for inspiration (not copying):
- HOMM II–IV atmosphere (warm fantasy, detailed environments)
- Cozy pixel art games (general genre reference for tone)
- Frontier/settlement pixel art (for buildings evolving from crude to refined)

---

# Acceptance Criteria

- [ ] All pixel art assets align to the grid system without visual artifacts
- [ ] Building sprites have distinct visual states per upgrade tier
- [ ] Road sprites have distinct visual states from faint trail through paved road
- [ ] Seasonal palette variants exist for terrain tiles
- [ ] Villager, resource cart, and hero sprites are visually distinguishable at game scale
- [ ] Asset palettes are coherent across the entire game
- [ ] Pixel art performs at target framerate with expected on-screen sprite counts

---

# Open Questions

1. What is the base tile size in pixels? (16, 24, 32, 48, or other?)
2. What is the camera perspective? (Top-down orthographic? Isometric? 2.5D?) This determines sprite projection.
3. What is the target viewport resolution? This determines how many tiles are visible and thus the required sprite detail level.
4. How many building upgrade tiers exist, and what are they named?
5. What is the color palette strategy? Global master palette, per-tileset, or free-form?
6. What is the maximum color count per sprite?
7. What is the sprite sheet organization? Per-entity? Per-tileset? Atlas-based?
8. How large are building sprites in tiles? (e.g., houses: 1×1? 2×2? Blacksmith: 2×2? Market: 3×3?)
9. How are villager sprites differentiated by profession? (Color-coded clothing? Tool props? Size?)
10. What is the animation frame rate and frame count per action for pixel art animations?

---

# Related Documents

- `Art Direction.md` — overall visual philosophy (07-art/art-direction)
- `Animation.md` — animation approach (07-art/animation)
- `Visual Identity.md` — UI and branding (07-art/visual-identity)
- `docs/02-gameplay/Buildings.md` — building categories and upgrade system (02-gameplay/buildings)
- `docs/03-simulation/Settlement Growth.md` — settlement evolution stages
- `docs/03-simulation/Roads and Logistics.md` — road visual states
- `docs/03-simulation/Seasons.md` — seasonal effects
- Source: *The Long Reign — Project Handoff* § Settlement style, § Buildings, § Roads, § Seasons
- Source: *Project Genesis — Brainstorming History* § Visible Logistics
- Source: *Workflow v2* § Rendering Agent (PixiJS)
