---
title: "World Generation"
id: 05-world/world-generation
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on:
  - docs/05-world/World Overview.md
  - docs/05-world/Regions.md
used_by:
  - docs/05-world/Points of Interest.md
  - docs/02-gameplay/Exploration.md
tags:
  - world
  - generation
  - authoring
  - tools
  - design
---

# Purpose

Define the world authoring and design process for The Long Reign. Despite the document title, the world is handcrafted — not procedurally generated. This document specifies how the world is designed, authored, versioned, and iterated upon by the development team.

---

# Overview

The world of The Long Reign is **handcrafted, not procedurally generated**. This is an explicit design decision documented in the source material:

> "Large handcrafted world." (Handoff, § Exploration)
> "The world is designed, not generated, supporting meaningful placement of content." (Exploration.md)

This means every region, point of interest, resource node, and encounter is intentionally placed by a designer. The term "World Generation" in this document's title refers to the **authoring pipeline** — the tools, processes, and standards used to create the handcrafted world — and the **design-time generation** of supporting data (e.g., terrain blending, road pathfinding validation, resource distribution analysis).

---

# Design Goals

1. **Designer-Driven.** World content is authored by human designers, not algorithms. Every placement is intentional.
2. **Iterable.** The world authoring pipeline must support rapid iteration — designers should be able to modify regions, test them, and iterate without full rebuilds.
3. **Version-Controlled.** World data must be stored in a format that plays well with version control (YAML, JSON, or similar text-based formats).
4. **Validatable.** The pipeline should include validation passes to ensure regions contain required content (e.g., at least one unique resource) and obey structural rules.
5. **Documentation-Aligned.** The authored world must conform to the specifications in `World Overview.md`, `Regions.md`, and `Points of Interest.md`.

---

# Non-Goals

- The world is not procedurally generated at runtime. Save files do not generate new regions.
- The world is not randomized per playthrough. Every player experiences the same handcrafted world.
- This document does not define the specific authoring tool (Tiled, custom editor, in-game editor). That is a technical decision for `docs/08-technical/`.
- This document does not define the specific data format for world files.

---

# Authoring Philosophy

The world is a designed artifact, equivalent in importance to the game's code. World design follows the same specification-first methodology as the rest of the project:

```
World Specification (this directory)
        ↓
Region Design Documents (per region)
        ↓
Authoring in World Editor
        ↓
Validation Against Specs
        ↓
Playtesting
        ↓
Iteration
```

World content should be treated with the same rigor as code: version-controlled, reviewed, and tested.

---

# World Data Structure

> **TODO:** Define the world data format. The following is a placeholder structure derived from the specification. Actual format is a technical design decision.

The world is expected to be stored as one or more data files defining:

| Data Layer | Description |
|---|---|
| **Region Definitions** | Region boundaries, names, unlock conditions, climate/biome. |
| **Terrain** | Tile-level terrain data (grass, forest, mountain, water, etc.). |
| **Points of Interest** | Placement of resource nodes, hero locations, building unlocks, opportunities, and dangers. |
| **Road Network** | Initial roads (if any) and valid road-placement terrain. |
| **Colony Sites** | Valid locations where colonies can be founded. |
| **Spawn Point** | The player's starting location and initial capital placement zone. |

> **TODO:** Determine whether the world is tile-based (grid) or coordinate-based (free placement). Determine whether terrain is a separate layer from POIs or a unified map format.

---

# World Authoring Workflow

### 1. Region Specification

Before authoring begins, each region is documented in a design brief covering:
- Region name and theme
- Unlock condition
- Geography and biome
- List of contents (resources, heroes, buildings, opportunities, dangers)
- Colony viability

### 2. Terrain Authoring

The region's terrain is authored in the world editor. Terrain must support:
- Road placement along valid paths
- Building placement in colony-suitable areas
- Visual consistency with the region's described biome
- Maritime terrain for island regions (coastlines, water tiles)

### 3. POI Placement

Points of interest are placed on the terrain. Each POI type has placement rules:

| POI Type | Placement Rules (TBD) |
|---|---|
| Resource Nodes | Must be placed in terrain-appropriate locations (mines on mountains, farms on grasslands). |
| Hero Locations | Must be placed in narratively appropriate locations. |
| Building Unlocks | Must be placed in discoverable but not trivial locations. |
| Opportunities | Must be placed where the player can reasonably encounter them. |
| Dangers | Must be placed with consideration for progression — not blocking early-game content. |

### 4. Connectivity Validation

The authored world should be validated for:
- The starting region must have a viable capital placement zone.
- All regions must be reachable (no isolated areas).
- Colony-viable locations must have terrain suitable for a settlement layout.
- Island regions must have valid maritime access routes.

> **TODO:** Define the specific validation rules for world connectivity and content requirements.

### 5. Playtesting and Iteration

Authored regions are playtested. Designers iterate on terrain, POI placement, and unlock conditions based on playtest feedback. Changes are version-controlled.

---

# Tooling

The source material does not specify the world authoring tool. Options include:

- **Tiled** — open-source tile map editor, well-suited for grid-based worlds.
- **Custom in-game editor** — built as part of the game, allowing WYSIWYG editing.
- **Script-based authoring** — world data authored as structured text files (YAML/JSON) with coordinate placement.

> **TODO:** Select the world authoring tool. Document the decision in an ADR (`docs/10-decisions/`). Tool selection should consider: grid support, POI placement, version-control friendliness, and iteration speed.

---

# Validation Rules

The world pipeline should validate authored content against the specifications in this directory:

| Rule | Source |
|---|---|
| Every region must contain at least one unique element (resource, hero, or building type). | `Regions.md` |
| The starting region must contain sufficient early-game resources. | `Capital.md`, `Regions.md` |
| All regions must be connected — no isolated, unreachable areas. | Derived from road/logistics design |
| Island regions must have defined maritime access. | `Regions.md`, `World Overview.md` |
| Colony-viable locations must exist in regions supporting colonization. | `Colonies.md` |
| POI types must be appropriate for their terrain (no underwater mines, no forest quarries). | Derived from resource logic |

> **TODO:** Formalize the complete set of validation rules as they emerge from the specifications.

---

# World Versioning

World data is a project artifact, equivalent to source code. It should be:

- Stored in the project repository
- Version-controlled alongside code
- Reviewed when changed (world changes may have gameplay implications)
- Documented — significant world changes should be recorded

---

# Acceptance Criteria

- [ ] The world is authored as handcrafted content, not procedurally generated.
- [ ] World data is stored in a version-control-friendly format.
- [ ] A world authoring tool is selected and documented.
- [ ] The authoring pipeline supports region design → terrain authoring → POI placement → validation → playtesting → iteration.
- [ ] Validation rules exist to ensure authored content conforms to specifications.
- [ ] The starting region is fully authored with: capital placement zone, initial resources, and at least one discoverable POI.

---

# Open Questions

1. What is the world authoring tool? (Tiled, custom editor, script-based?)
2. What is the world data file format? (YAML, JSON, binary?)
3. Is the world tile-based (grid) or coordinate-based (free placement)?
4. What are the specific validation rules for world content?
5. How are world changes reviewed — code review process for world data?
6. What is the tile size / world unit for the grid?
7. How large is the world map in tiles/units?
8. How is terrain authored for island regions — separate maps or contiguous with water tiles?
9. Are there any design-time generation tools (e.g., terrain blending, tree placement) that assist the handcrafting process?
10. How are region borders defined — hard boundaries, transition zones, or purely logical?

---

# Related Documents

- `docs/05-world/World Overview.md` — World structure and design philosophy
- `docs/05-world/Regions.md` — Region definitions and content rules
- `docs/05-world/Capital.md` — Starting region and capital placement requirements
- `docs/05-world/Colonies.md` — Colony-viable location requirements
- `docs/05-world/Points of Interest.md` — POI placement rules
- `docs/02-gameplay/Exploration.md` — How the authored world is experienced through exploration
- `docs/08-technical/` — Technical implementation of the world editor and data format (TODO: create)
- `docs/10-decisions/` — ADR for world authoring tool selection (TODO: create)
- Source: *The Long Reign — Project Handoff* § Exploration ("Large handcrafted world")
- Source: *Project Genesis — Brainstorming History* — (no specific world generation discussion; handcrafted nature is implicit in the documentation-first, specification-first philosophy)