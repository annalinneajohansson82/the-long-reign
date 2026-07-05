---
title: Menus
id: ui/menus

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - ui/ux-principles
  - ui/hud

used_by:
  - Frontend Agent
  - UX Consistency Agent

tags:
  - ui
  - menus
  - interface
  - navigation
---

# Purpose

Define the menu system — all non-HUD, full-screen or overlay interfaces that provide access to deeper game systems, settings, and management screens. Menus are where the player goes intentionally, not where information is pushed to them.

---

# Overview

Menus in The Long Reign serve as the "office" of kingdom management. While the main view shows the living kingdom, menus provide the structured interfaces for the Chronicle, research, hero management, colony overview, save/load, and settings.

All menus must follow the UX principles:
- No FOMO or pressure (no urgent call-to-action in menus).
- Accessible by default (keyboard navigation, screen readers).
- Consistent interaction patterns (same dismissal behavior, same navigation conventions).
- Return-friendly (menu state is part of session persistence — open menus are restored on load).

---

# Design Goals

- **Purpose-driven.** Each menu exists for a specific game system. No catch-all or junk-drawer menus.
- **Navigable.** Clear hierarchy, predictable back/forward behavior, consistent breadcrumbing.
- **Non-blocking.** Menus should not prevent the player from seeing their kingdom unless the menu is intentionally full-screen.
- **Persistent.** Open menu state is part of session persistence. The player returns to what they had open.
- **Accessible.** All menus must be keyboard-navigable and screen-reader compatible.

---

# Non-Goals

- Menus are not the primary interface to the kingdom — that's the HUD + world view.
- Menus should not contain FOMO elements, "new!" badges, or countdown timers.
- Menus should not duplicate information available in the HUD or in-world.

---

# Menu Inventory

> **Note:** The source material does not enumerate specific menus. The following list is derived from gameplay systems described in the Handoff and design documents. All entries are provisional.

## 1. Pause Menu / Game Menu

**Derived from:** General game UX, Save System (Handoff)

Accessible via Escape or a dedicated button. Contains:
- Resume
- Save Game
- Load Game
- Settings
- Return to Title / Quit

> **TODO:** Define exact entries. Does the game have a "Return to Title" or does it just close?

---

## 2. Save / Load Interface

**Derived from:** Save System (Handoff — autosave, manual save, manual load, multiple save slots, JSON export/import)

Interface for managing save slots. Must display:
- Save slot names
- Timestamps
- Kingdom preview (thumbnail or key stats)
- Save version

> **TODO:** Define the exact save slot UI — how many slots, how they are presented, what metadata is shown.
>
> **TODO:** Define the JSON export/import flow — drag-and-drop, file picker, copy-paste?
>
> **TODO:** Define the autosave indicator — where does the player see when the last autosave occurred?

---

## 3. Chronicle

**Derived from:** Chronicle (Handoff — flagship system), Emergent Stories (design pillar)

One of the most important menus in the game. Displays the kingdom's recorded history. Expected features:
- Chronological event log
- Filtering by event type (births, marriages, deaths, colony foundings, discoveries, disasters, hero achievements, completed wonders, wars, technological advances)
- Search
- Per-hero / per-villager filtered views

> **TODO:** Define the Chronicle UI layout — timeline, list, journal-style?
>
> **TODO:** Define how Living Memories (hero/villager biographies) relate to the Chronicle — same interface or separate?
>
> **TODO:** Define whether Chronicle entries are illustrated or text-only.
>
> **TODO:** Define pagination/infinite scroll behavior for long histories.

---

## 4. Research Tree

**Derived from:** Research (Handoff — "Medium-sized technology tree")

Displays available and completed research. Expected features:
- Tree/graph visualization
- Current research progress
- Completed research with visible architectural effects
- Unlock previews

> **TODO:** Define the research tree UI — horizontal tree, vertical tree, node graph?
>
> **TODO:** Define how "visible changes" (per design pillars) are communicated in the UI — before/after previews?

---

## 5. Hero Management

**Derived from:** Heroes (Handoff — "Small cast of named heroes. Approximately 10–20.")

Interface for viewing and managing heroes. Expected features:
- Hero roster
- Individual hero sheets (personality, backstory, abilities, level, profession, Living Memory / biography, current assignment/location)
- Equipment/inventory (if applicable)

> **TODO:** Define the full hero sheet layout.
>
> **TODO:** Define whether equipment/inventory exists as a system. The source material does not mention hero equipment.

---

## 6. Colony / Capital Overview

**Derived from:** Colonies (Handoff), Settlement (Handoff — "Highest priority system")

High-level management view for the capital and colonies. Expected features:
- Settlements list (capital + colonies)
- Per-settlement stats (population, happiness, prestige, production, specialization)
- Building inventory
- Resource flow visualization

> **TODO:** Define the colony overview layout — is this a single scrollable view, tabbed, or separate screens per settlement?
>
> **TODO:** Define whether the colony overview includes a logistics/flow visualization.

---

## 7. Settings

**Derived from:** General game requirements, Accessibility (Workflow v2)

Standard settings screen. Expected sections:
- **Gameplay:** Difficulty (Easy/Medium/Hard — affects hero mortality), game speed defaults
- **Audio:** Master volume, music, SFX, ambience
- **Video/Display:** Resolution, fullscreen, quality settings
- **Accessibility:** Font scaling, color blind modes, reduced motion toggle, screen reader support toggle, subtitle/closed captioning options
- **Controls:** Key rebinding, mouse sensitivity, touch settings
- **Save Data:** Import/export, delete save, save management

> **TODO:** Define exact settings categories and options.
>
> **TODO:** Define key rebinding system — which actions are rebindable? How are conflicts handled?

---

## 8. Help / Reference

**Derived from:** Return-Friendly Design (UX principle #5)

Optional reference menu for players returning after a long absence or new players seeking information. Must not feel like a forced tutorial.

> **TODO:** Define whether this menu exists and what it contains — glossary of mechanics, building reference, control reference?
>
> **TODO:** Define how this differs from (or integrates with) onboarding/tutorial.

---

# Menu Behavior

## Navigation

- All menus must support keyboard navigation (Tab, arrow keys, Enter, Escape).
- Escape consistently closes the current menu or returns to the parent menu. Escape from the top-level menu returns to the game.
- Breadcrumbs or a back button must be present in nested menu screens.

## State Persistence

Per Full Session Persistence (Handoff), open menu/panel state must be restored on load. Implementation implications:
- Which menus were open at save time must be recorded.
- Scroll position within menus should be preserved where practical.
- The Chronicle should restore to the last-viewed entry or filter state.

> **TODO:** Define the complete list of menu state properties to persist.

## Transitions

Menu open/close transitions should be fast and non-distracting. No elaborate animations that delay interaction.

> **TODO:** Define animation parameters — max duration, easing, whether animations respect `prefers-reduced-motion`.

---

# Acceptance Criteria

- [ ] All menus are reachable via the HUD toolbar and/or keyboard shortcuts.
- [ ] Escape consistently navigates back / closes menus.
- [ ] Open menu state is persisted across save/load.
- [ ] All menus are keyboard-navigable and screen-reader compatible.
- [ ] No menu contains FOMO-inducing UI elements.
- [ ] The Chronicle displays all event types listed in the source material.
- [ ] The Save/Load interface supports all features listed in the Handoff (multiple slots, JSON export/import, versioning).

---

# Open Questions

- TODO: Complete menu inventory — are there additional menus not listed here (e.g., Trade, Diplomacy, Statistics)?
- TODO: Menu layout conventions — sidebar, full-screen overlay, floating window?
- TODO: Theme/styling — should menus match the cozy fantasy aesthetic or be clean/functional?
- TODO: Mobile responsiveness — how do menus adapt to smaller screens or touch input?
- TODO: Does the game pause when menus are open, or does the simulation continue? (Per the Handoff, time stops when the game is closed — but what about when menus are open?)

---

# Related Documents

- `UX Principles.md` — governing UX principles
- `HUD.md` — HUD specification (toolbar that accesses menus)
- `Notifications.md` — notification system
- `Accessibility.md` — accessibility requirements
- `02-gameplay/Research.md` — research system
- `01-vision/Design Pillars.md` — design pillars
- `08-technical/Save System.md` — TODO: link when populated
- `03-simulation/Heroes.md` — TODO: link when populated
- `03-simulation/Chronicle.md` — TODO: link when populated
