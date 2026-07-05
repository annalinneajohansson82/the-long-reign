---
title: Input
id: 06-ui/input

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 06-ui/ux-principles
  - 06-ui/hud

used_by:
  - Frontend Agent
  - Rendering Agent
  - UX Consistency Agent

tags:
  - ui
  - input
  - controls
  - keyboard
  - mouse
---

# Purpose

Define the input system — how the player interacts with the game through mouse, keyboard, and potentially touch. This document specifies the canonical control scheme, input priorities, and the relationship between UI input and world (canvas) input.

---

# Overview

The Long Reign is a browser-based game. Primary input devices are mouse and keyboard. Touch input is a secondary consideration (browser game can be played on tablets). The game has two input contexts: **UI input** (menus, HUD, overlays) and **world input** (PixiJS canvas — camera control, entity selection, building placement).

The input system must support remapping and must be fully documented for players.

---

# Design Goals

- **Predictable.** The same input should produce the same result regardless of context, unless context overrides are intentional and clearly communicated.
- **Accessible.** All actions must be achievable via keyboard alone. No mouse-only mandatory interactions.
- **Rebindable.** Key bindings must be customizable by the player.
- **Non-blocking.** Input handling must not interfere with simulation or rendering performance.
- **Session-persistent.** Custom key bindings and input preferences must survive save/load.

---

# Non-Goals

- This document does not specify the technical implementation of the input system (event handling architecture, input queue, etc.). That belongs in `08-technical/`.
- This document does not define gamepad/controller support. The project is browser-based; controller support is not in scope unless specified in a future ADR.

---

# Input Contexts

## 1. World Input (Canvas)

When the PixiJS canvas has focus, input controls camera movement, entity selection, and building placement.

**Mouse:**
- **Left click:** Select entity (building, villager, hero, resource) under cursor. In build mode: place building/decorate/pave road.
- **Right click:** Context menu on selected entity (if applicable). In build mode: cancel placement.
- **Middle click + drag:** Pan camera (alternative to edge scroll).
- **Scroll wheel:** Zoom in/out.
- **Edge scroll:** Move cursor to screen edge to pan camera (configurable, off by default).

**Keyboard:**
- **Arrow keys / WASD:** Pan camera.
- **+ / - or mouse wheel:** Zoom in/out.
- **Space:** Pause/resume simulation.
- **1–9:** Speed control (1 = 1x, 2 = 2x, etc. — exact mapping TBD).
- **B:** Enter build mode.
- **R:** Enter road-paving mode.
- **Delete / Backspace:** Demolish selected building (with confirmation).
- **Escape:** Deselect entity / cancel build mode.
- **Tab:** Cycle through selectable entities.

> **TODO:** Define the complete default keybinding map. The above is provisional.
>
> **TODO:** Define context menu behavior — what actions appear, how they are triggered by keyboard.
>
> **TODO:** Define multi-select behavior (if applicable) — drag-select, shift-click.

---

## 2. UI Input (Menus, HUD, Overlays)

When a UI element has focus, input controls menu navigation and interaction. This follows standard web conventions.

**Keyboard:**
- **Tab / Shift+Tab:** Move focus forward/backward through interactive elements.
- **Enter / Space:** Activate focused element.
- **Escape:** Close current menu/modal. Return focus to the world canvas if top-level menu is closed.
- **Arrow keys:** Navigate within compound widgets (dropdowns, lists, tree views, sliders).
- **Keyboard shortcuts:** Direct access to specific menus (e.g., C for Chronicle, H for Heroes, R for Research).

> **TODO:** Define keyboard shortcuts for opening each menu.
>
> **TODO:** Define behavior when a keyboard shortcut is pressed while a modal is open — should it be ignored, or should the modal close and then the shortcut action execute?

---

## 3. Touch Input

As a browser-based game, touch input is a secondary but relevant context.

**Touch gestures:**
- **Tap:** Select entity / activate UI element.
- **Long press:** Context menu (world) / right-click equivalent.
- **Pinch:** Zoom in/out.
- **Two-finger drag:** Pan camera.
- **Swipe:** Scroll menus/lists.

> **TODO:** Define whether touch input is a launch requirement or a post-launch enhancement.
>
> **TODO:** Define the minimum touch target sizes and whether they differ from the accessibility requirement of 44×44 CSS pixels.
>
> **TODO:** Define whether the HUD layout adapts for touch (larger buttons, different positions).

---

# Input Priority and Conflict Resolution

When the player presses a key or clicks, the input system must determine which context receives the event:

1. **Modal dialogs** — highest priority. If a modal is open, all input goes to the modal (focus trapped).
2. **Open menus** — input goes to the focused menu element. Keyboard shortcuts that do not conflict with menu navigation may still function (e.g., Space for pause).
3. **HUD elements** — if a HUD element has focus, input goes to it.
4. **World canvas** — lowest priority. Receives input when no UI element has focus.

> **TODO:** Define the complete input priority stack. What about tooltips? What about drag-and-drop operations that cross UI/world boundaries?
>
> **TODO:** Define whether keyboard shortcuts are global (always work) or context-sensitive (only work when canvas has focus).

---

# Key Rebinding

**Requirements:**
- The player must be able to rebind all keyboard shortcuts via the Settings menu.
- Rebinding must detect conflicts and warn the player.
- Default bindings must be restorable.
- Rebindings must persist across sessions (stored in save data or browser LocalStorage).

> **TODO:** Define which actions are rebindable — all keyboard shortcuts, or only a subset?
>
> **TODO:** Define the rebinding UI — list of actions with current binding, click to rebind, press new key.
>
> **TODO:** Define whether mouse buttons are rebindable.

---

# Acceptance Criteria

- [ ] All game actions are achievable via keyboard alone.
- [ ] Mouse and keyboard input do not conflict — the same action can be triggered by either.
- [ ] Input priority stack correctly routes events to the active context.
- [ ] Key bindings can be rebound via Settings.
- [ ] Custom bindings persist across sessions.
- [ ] Touch input works for core interactions (if in scope for launch).

---

# Open Questions

- TODO: Complete default keybinding map.
- TODO: Touch input — launch requirement or post-launch?
- TODO: Gamepad/controller support — ever in scope?
- TODO: Input latency requirements — what is the acceptable input-to-visual-feedback latency?
- TODO: Multi-select and group commands — drag-select, shift-click, control groups?
- TODO: Copy/paste support for building layouts? (Player Expression pillar suggests freedom — this could be a quality-of-life feature.)

---

# Related Documents

- `UX Principles.md` — governing UX principles
- `HUD.md` — HUD elements that receive input focus
- `Menus.md` — menu navigation conventions
- `Accessibility.md` — keyboard navigation requirements
- `08-technical/` — technical input system architecture (TODO: link when populated)
