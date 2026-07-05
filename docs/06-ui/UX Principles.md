---
title: UX Principles
id: ui/ux-principles

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/principles
  - VIS-001

used_by:
  - All UI documents
  - Frontend Agent
  - UX Consistency Agent
  - Accessibility Agent

tags:
  - ui
  - ux
  - principles
  - design
---

# Purpose

Define the UX principles that govern all user interface decisions in The Long Reign. Every UI element, interaction pattern, and information display must be consistent with these principles. These principles are derived from the project's six design pillars and serve as the UI-level translation of those pillars.

---

# Overview

The Long Reign is a browser-based kingdom-building simulation. The player spends most of their time looking at their kingdom. The UI's primary job is to stay out of the way while providing essential information and controls. The kingdom itself is the interface — the HUD and menus exist to support interaction with the world, not to replace or obscure it.

These principles apply to all UI surfaces: HUD, menus, notifications, modals, tooltips, settings screens, and any future interface additions.

---

# Core UX Principles

## 1. The Kingdom Is the Interface

The player's primary view is the world. UI elements should be minimal, contextual, and transparent wherever possible. Information should be discoverable by looking at the kingdom — not by reading a spreadsheet.

**Derived from:** Living Simulation, Meaningful Growth, The North Star

**Implications:**
- Prefer in-world indicators over HUD elements (e.g., visual building state rather than a status panel).
- The HUD should be collapsible or auto-hiding to maximize visible kingdom area.
- The Chronicle and Living Memories are the only acceptable deep-read interfaces — they are intentionally text-rich because they serve a narrative purpose.

> **TODO:** Define specific rules for when information belongs in-world vs. in the HUD vs. in a menu.

---

## 2. No FOMO. No Pressure. No Guilt.

The UI must never create a sense of urgency, missed opportunity, or obligation. No countdown timers. No red notification badges indicating missed content. No "you haven't played in X days" messages. No "limited time!" banners.

**Derived from:** Respect the Player's Time, The Six-Month Return Test

**Implications:**
- Notifications are informational only — never urgent, never demanding action.
- The game never surfaces a player's absence duration.
- There is no "daily" anything in the UI — no daily quests, no daily reward popups, no streak trackers.
- Return after six months should present no UI pressure cues.

> **Open Question:** Is a purely informational "here's what your kingdom has been up to" summary on return acceptable, or does it violate the spirit of no-pressure return? (See `01-vision/Respect the Player's Time.md`, Open Questions.)

---

## 3. Cozy Visual Hierarchy

The UI should feel calm, inviting, and legible. It should never feel like a cockpit. Depth should be revealed gradually — complex systems should not present all their information at once.

**Derived from:** Cozy Complexity

**Implications:**
- Progressive disclosure: surface common actions, tuck advanced controls behind secondary interactions.
- Avoid dense grids of numbers. Use visual representations where possible.
- Color palette should be warm and subdued — consistent with the cozy fantasy / frontier colony art direction.
- Typography should prioritize readability over style.

> **TODO:** Define the UI color palette, typography scale, and spacing system. Coordinate with `07-art/`.

---

## 4. Every Action Produces Visible Feedback

When the player does something, the UI must acknowledge it immediately and clearly. Growth must be visible — this is a design pillar, not merely an art direction preference.

**Derived from:** Meaningful Growth

**Implications:**
- Building construction/upgrades produce immediate visual changes in the world.
- Resource changes are animated (rising/falling counters, not just number updates).
- Road paving produces immediate path changes.
- Chronicle entries appear with a gentle, non-interrupting animation.
- No action should feel like it "did nothing."

> **TODO:** Define animation principles — duration, easing curves, interruptibility. Coordinate with frontend rendering approach (PixiJS world layer + React UI layer).

---

## 5. Return-Friendly Design

A player returning after a long absence should reorient effortlessly. The UI should help them remember where they were and what they were doing — without making them feel lost or guilty.

**Derived from:** The Six-Month Return Test, Full Session Persistence

**Implications:**
- On load, restore: camera position, zoom level, selected building/entity, open panels, expedition state, game speed, world state (as specified in the Handoff, Full Session Persistence section).
- The UI state is part of the save. The player should not need to re-open menus they had open.
- Avoid "tutorial" re-triggers on return. Do not assume the player has forgotten how to play.
- The Chronicle should be the primary re-orientation tool — the player can browse their kingdom's history to remember what happened.

> **TODO:** Define the exact list of UI state properties that must be persisted/restored.

---

## 6. Accessible by Default

Accessibility is a first-class engineering concern, not an afterthought. Every UI element must be operable via keyboard, readable by screen readers, and responsive to user preferences (reduced motion, color contrast, font scaling).

**Derived from:** Accessibility Agent specification (Workflow v2), browser platform requirements

**Implications:**
- All UI must support keyboard navigation.
- All UI must use semantic HTML and appropriate ARIA attributes.
- Color must never be the sole differentiator of meaning.
- Animations must respect `prefers-reduced-motion`.
- UI must scale correctly at different zoom levels and viewport sizes.
- See `Accessibility.md` for full specification.

---

## 7. Consistent Interaction Patterns

The same action should work the same way everywhere. If clicking a building opens a detail panel, clicking any building should open a detail panel. If Escape closes a modal, Escape should close every modal.

**Derived from:** UX Consistency Agent specification (Workflow v2), general UX best practices

**Implications:**
- Define canonical interaction patterns for: selection, context menus, drag-and-drop, confirmation dialogs, modal dismissal, panel opening/closing.
- These patterns must be documented once and referenced — not redefined per feature.
- The UX Consistency Agent is responsible for enforcing these during review.

> **TODO:** Define canonical interaction patterns in a separate document or as a section within this document.

---

## 8. Information Lives in One Place

No duplicated information. If resource counts appear in the HUD, the same numbers should not also appear in a sidebar panel with different formatting or update timing. Single source of truth for all displayed data.

**Derived from:** Documentation Standards (single source of truth philosophy), general UI consistency

**Implications:**
- Shared UI state management — likely a centralized store (Redux, Zustand, or equivalent).
- If two UI surfaces display the same data, they must share the same data source.
- Avoid derived displays that can desync.

> **TODO:** Define the UI state architecture. This is a technical design decision that belongs in `08-technical/`.

---

# Non-Goals

- This document does not specify exact layout, pixel positions, or color hex codes. Those belong in the design system specification.
- This document does not define specific UI components. Those belong in individual UI documents and the component library.
- This document does not prescribe a specific frontend framework (React is implied by the Workflow v2 document's Frontend Agent specification, but the UX principles are framework-agnostic).

---

# Acceptance Criteria

- Every UI feature proposal can be traced to at least one UX principle in this document.
- No UI feature violates any of the eight principles.
- No UI feature introduces FOMO, pressure, or guilt mechanics.
- The UX Consistency Agent can use this document as its evaluation rubric.

---

# Open Questions

- TODO: Prioritization when principles conflict (e.g., "Visible Feedback" vs. "Cozy Visual Hierarchy" — how much animation is too much?)
- TODO: Should there be a formal "UI review checklist" derived from these principles?
- TODO: What is the process for proposing a new UX principle or modifying an existing one? ADR?
- TODO: Should accessibility be elevated to a standalone principle (#6 above) or remain a cross-cutting concern embedded in all principles?

---

# Related Documents

- `00-foundation/Principles.md` — The six design pillars these UX principles are derived from
- `01-vision/Design Pillars.md` — Detailed pillar definitions
- `01-vision/Respect the Player's Time.md` — Source of the no-FOMO principle
- `01-vision/The Six-Month Return Test.md` — Source of the return-friendly principle
- `Accessibility.md` — Full accessibility specification
- `HUD.md` — HUD design
- `Menus.md` — Menu design
- `Input.md` — Input system
- `Notifications.md` — Notification system
- `08-technical/AI Development Workflow.md` — UX Consistency Agent and Accessibility Agent specifications
