---
title: HUD
id: ui/hud

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - ui/ux-principles
  - VIS-001

used_by:
  - Frontend Agent
  - Rendering Agent
  - UX Consistency Agent

tags:
  - ui
  - hud
  - heads-up-display
  - interface
---

# Purpose

Define the Heads-Up Display (HUD) — the set of UI elements that are always or contextually visible during gameplay. The HUD provides essential information and controls without obscuring the kingdom.

---

# Overview

The HUD in The Long Reign is intentionally minimal. The kingdom is the primary interface. The HUD exists to provide at-a-glance awareness of critical game state and access to deeper interfaces (menus, the Chronicle, colony management).

The HUD state must be fully persisted across save/load sessions — see `UX Principles.md` principle #5 (Return-Friendly Design) and the Handoff's Full Session Persistence section.

---

# Design Goals

- **Minimal footprint.** The HUD should occupy as little screen space as possible. Target: no more than 10–15% of the viewport.
- **Contextual.** Show information relevant to what the player is looking at or interacting with.
- **Non-intrusive.** HUD elements should never distract from the kingdom. Animations should be gentle.
- **Persistent.** HUD visibility preferences and layout state must survive save/load.
- **Accessible.** All HUD elements must be keyboard-navigable and screen-reader-compatible.

---

# Non-Goals

- The HUD is not a replacement for in-world visual feedback. The kingdom should communicate state visually wherever possible.
- The HUD should not contain FOMO-inducing elements (no countdowns, no streaks, no "daily" indicators).
- The HUD is not a tutorial overlay. Onboarding is a separate concern.

---

# HUD Elements

> **Note:** The source material does not specify exact HUD elements. The following list is derived from gameplay systems described in the Handoff and design documents. All entries are provisional and require formal specification.

## 1. Resource Bar

**Derived from:** Economy (Handoff), Core Gameplay Loop (`01-vision/`), Visible Logistics

Displays critical kingdom-wide resources at a glance. Exact resources TBD.

> **TODO:** Define which resources appear in the HUD resource bar vs. which are accessible only via menus. Likely candidates: population count, food, gold, a primary construction material.
>
> **TODO:** Define whether the resource bar is always visible, collapsible, or auto-hides.
>
> **TODO:** Define the visual format — icons only, icons + numbers, bars?

---

## 2. Game Speed Control

**Derived from:** Full Session Persistence (Handoff — game speed is persisted)

Controls the simulation speed. Expected states: Pause, 1x, 2x, possibly higher.

> **TODO:** Define available speed multipliers.
>
> **TODO:** Define keyboard shortcuts for speed control.

---

## 3. Minimap / Region Overview

**Derived from:** Exploration (Handoff — "Large handcrafted world. World map with unlockable regions."), Settlement (grid-based construction)

A small overview showing the player's current viewport position within the larger world or settlement.

> **TODO:** Define the minimap scope — does it show the current settlement only, the region, or the entire world? Multiple zoom levels?
>
> **TODO:** Define what information appears on the minimap (buildings, resource nodes, hero positions, desire paths, colonies).

---

## 4. Selection Info Panel

**Derived from:** Buildings (`02-gameplay/Buildings.md`), Heroes (Handoff), Villagers (Handoff)

Contextual panel that appears when the player selects an entity (building, hero, villager, resource node). Shows relevant details and available actions.

> **TODO:** Define exactly what information appears for each selectable entity type.
>
> **TODO:** Define whether this panel is a floating overlay, a sidebar, or a bottom panel.
>
> **TODO:** Define behavior when nothing is selected — panel hidden, or shows settlement overview?

---

## 5. Notification Area

**Derived from:** Chronicle (Handoff — flagship system), Emergent Stories (design pillar)

A designated area for Chronicle entries and event notifications. Must follow the no-FOMO principle — notifications are informational, never urgent.

See `Notifications.md` for full specification.

---

## 6. Menu Access / Toolbar

**Derived from:** Gameplay systems requiring menus (Save/Load, Chronicle, Research, Hero management, Settings)

Access points for deeper interfaces. Expected entries: Chronicle, Research, Heroes, Colonies/Capital overview, Settings, Save/Load.

> **TODO:** Define the toolbar layout — icon row, hamburger menu, hotbar?
>
> **TODO:** Define whether the toolbar is always visible or requires a key/click to reveal.

---

## 7. Mode Indicator (Build/Inspect/Default)

**Derived from:** Buildings (grid-based construction), Player Expression (design pillar)

Indicates the player's current interaction mode — are they placing a building, inspecting an entity, paving a road, or in default (pan/select) mode?

> **TODO:** Define all interaction modes and their visual indicators.
>
> **TODO:** Define how mode transitions work — click to enter, Escape to exit, or automatic?

---

# HUD Layout

> **TODO:** The source material does not specify HUD layout. The following are provisional positions based on genre conventions. All require formal specification:
>
> - **Top bar:** Resource display + game speed + menu access (traditional strategy game pattern).
> - **Bottom bar:** Mode indicator + selected entity actions (traditional city-builder pattern).
> - **Minimap:** Bottom-right corner (conventional).
> - **Notification area:** Top-right or center-top, non-blocking.
> - **Selection info:** Side panel or floating overlay near the selected entity.
>
> **Open Question:** Should the HUD layout be customizable by the player? (Reordering, hiding elements, position presets?)

---

# HUD State Persistence

Per the Handoff's Full Session Persistence section, the following HUD state must be saved and restored on load:

- Camera position
- Zoom level
- Selected building/entity
- Open panels
- Game speed
- HUD visibility preferences (if collapsible)

> **TODO:** Define the complete list of persisted HUD state properties. Coordinate with the Save System specification (`08-technical/`).

---

# Acceptance Criteria

- [ ] HUD elements do not obscure more than 15% of the viewport.
- [ ] All HUD elements are keyboard-navigable.
- [ ] HUD state is fully persisted across save/load.
- [ ] No HUD element introduces FOMO, urgency, or pressure.
- [ ] HUD elements respond correctly to game state changes (resource updates, selection changes, mode changes).

---

# Open Questions

- TODO: Exact list of HUD elements — which are always visible vs. contextual?
- TODO: HUD layout and whether it is customizable.
- TODO: Visual design of each element (colors, icons, typography) — coordinate with art direction.
- TODO: How does the HUD behave during combat? Does it change or stay the same?
- TODO: Mobile/tablet considerations — does the HUD adapt for touch?
- TODO: Should there be a "screenshot mode" that hides all HUD elements?

---

# Related Documents

- `UX Principles.md` — governing UX principles
- `Menus.md` — menu system (what the toolbar accesses)
- `Notifications.md` — notification area specification
- `Input.md` — input system (how the player interacts with HUD elements)
- `Accessibility.md` — accessibility requirements for HUD elements
- `01-vision/Design Pillars.md` — design pillars
- `02-gameplay/Buildings.md` — building selection and interaction
- `08-technical/Save System.md` — TODO: link when populated
