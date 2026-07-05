---
title: Accessibility
id: ui/accessibility

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - ui/ux-principles
  - technical/architecture

used_by:
  - Accessibility Agent
  - Frontend Agent
  - Code Review Agent
  - UX Consistency Agent

tags:
  - ui
  - accessibility
  - a11y
  - engineering
---

# Purpose

Define the accessibility requirements for The Long Reign. Accessibility is a first-class engineering concern — not an afterthought. Every user-facing feature must meet these requirements before it is considered complete.

This document serves as the reference for the Accessibility Agent (defined in `08-technical/AI Development Workflow.md`) and the accessibility review step in the engineering pipeline.

---

# Overview

The Long Reign is a browser-based game. This provides a strong foundation for accessibility — web standards (semantic HTML, ARIA, CSS media queries) are mature and well-supported. The game's visual layer (PixiJS canvas) presents additional challenges that require explicit engineering attention.

The game must be playable by users with diverse needs, including those who use:
- Keyboard-only navigation
- Screen readers
- Screen magnification
- Reduced motion preferences
- Color vision deficiency accommodations

---

# Design Goals

- **Inclusive by default.** Accessibility is not a mode — it is a requirement. Every feature ships accessible.
- **Standards-based.** Leverage WCAG 2.1 Level AA as the minimum target wherever applicable. Use platform-native accessibility APIs.
- **Testable.** Every accessibility requirement must have a verifiable acceptance criterion.
- **Progressive.** Accessibility support should improve over time. Initial release should meet core requirements; subsequent releases should expand coverage.

---

# Non-Goals

- This document does not prescribe a specific UI framework or accessibility library. Those are technical implementation decisions.
- This document does not guarantee WCAG 2.1 AAA compliance for every criterion. AA is the minimum target.
- This document does not cover accessibility of development tools or documentation — only the player-facing game.

---

# Requirements

## 1. Keyboard Navigation

All interactive elements must be reachable and operable via keyboard alone.

**Requirements:**
- Tab order must be logical and follow visual layout.
- Focus must be visible at all times (visible focus ring, not removed via `outline: none` without replacement).
- All actions must be triggerable via keyboard (Enter/Space for activation, Escape for dismissal, arrow keys for navigation within compound widgets).
- Keyboard shortcuts must be documented and rebindable (see `Input.md`).
- No keyboard traps — the player must always be able to navigate away from any element.

**Specific to canvas (PixiJS):**
- The game canvas must be focusable.
- When the canvas has focus, keyboard input routes to game controls (camera pan, entity selection, build mode).
- A clear visual indicator must show when canvas has focus vs. when UI overlays have focus.

> **TODO:** Define the exact keyboard control scheme for the canvas. Coordinate with `Input.md`.
>
> **TODO:** Define focus management during modal dialogs — focus must be trapped within the modal until dismissed.

---

## 2. Screen Reader Support

All UI elements must expose appropriate information to screen readers.

**Requirements:**
- All React-based UI (menus, HUD, notifications, modals) must use semantic HTML elements and ARIA attributes.
- Dynamic content changes (resource updates, notification arrivals, selection changes) must be announced via live regions (`aria-live`).
- The game canvas must provide a text-based alternative for screen reader users. This may be:
  - A parallel DOM-based representation of the visible game state.
  - An accessible description updated on significant state changes.
  - A structured text output mode.

> **TODO:** Define the screen reader strategy for the PixiJS canvas. This is a significant engineering challenge. Options: (a) hidden DOM layer mirroring game state, (b) text descriptions via `aria-live` region updated on state changes, (c) a dedicated "accessibility mode" that replaces the canvas with a text-based interface.
>
> **TODO:** Define what canvas-state information must be exposed to screen readers (entity positions, building types, resource counts, selection state).

---

## 3. Color and Contrast

**Requirements:**
- Text must meet WCAG 2.1 AA contrast ratios: 4.5:1 for normal text, 3:1 for large text.
- UI component boundaries and states must meet 3:1 contrast ratio.
- Color must never be the sole differentiator of meaning. All color-coded information must have a secondary indicator (icon, pattern, text label).
- At minimum, a deuteranopia-friendly (red-green) color blind mode must be provided.

> **TODO:** Define the color blind mode strategy — palette swaps, pattern overlays, or both?
>
> **TODO:** Define whether color blind modes are preset (deuteranopia, protanopia, tritanopia) or customizable.
>
> **TODO:** Verify that the planned art direction's color palette meets contrast requirements. Coordinate with `07-art/`.

---

## 4. Reduced Motion

**Requirements:**
- All animations and transitions must respect the `prefers-reduced-motion` CSS media query.
- When reduced motion is active: animations must be instant or disabled entirely, parallax effects disabled, auto-scrolling eliminated where possible.
- The game must provide an in-game toggle for reduced motion (independent of OS-level setting).

> **TODO:** Define how reduced motion affects in-game animations (building construction, resource transport along roads, villager movement, season transitions, combat animations).
>
> **TODO:** Define whether reduced motion applies to UI transitions only, or also to in-world simulation visuals.

---

## 5. Scalable UI

**Requirements:**
- UI must function correctly at browser zoom levels from 100% to 200%.
- Text must be resizable without breaking layout.
- UI must be responsive — functional at viewport widths from 1024px (small laptop) to 4K.
- Touch targets must be at least 44×44 CSS pixels (WCAG 2.1 target size, enhanced).

> **TODO:** Define minimum supported viewport dimensions.
>
> **TODO:** Define whether a dedicated mobile/tablet layout is required (the project is browser-based, and tablets are a plausible platform).

---

## 6. Accessible Dialogs and Modals

**Requirements:**
- When a modal opens, focus must move to the modal.
- Focus must be trapped within the modal until it is dismissed.
- The modal must be dismissible via Escape and via a visible close button.
- The area behind the modal must be inert (not interactable).
- The modal's role and label must be exposed to screen readers (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`).

---

## 7. Accessible Forms

**Requirements:**
- All form inputs must have associated labels (`<label>` or `aria-label`).
- Required fields must be indicated both visually and programmatically (`required` attribute or `aria-required`).
- Error messages must be associated with their inputs (`aria-describedby`) and announced to screen readers.
- Form validation should occur on blur or submit — not on every keystroke (to avoid excessive announcements).

---

## 8. Audio Accessibility

**Requirements:**
- All audio cues must have visual equivalents (subtitles, icons, text notifications).
- The game must provide separate volume controls for music, SFX, and ambience.
- The game must be fully playable with audio disabled.

> **TODO:** Define the subtitle/caption system — which audio events get captioned? How are captions displayed?

---

## 9. Cognitive Accessibility

**Requirements:**
- UI complexity should be progressive — advanced information behind secondary interactions.
- Consistent navigation patterns throughout (same actions in same places).
- Clear, plain language in all UI text. Avoid jargon where possible.
- Session time should not be pressured (derived from Respect the Player's Time — no timers, no urgency).

---

# Accessibility Agent Review Checklist

Per the Accessibility Agent specification in `08-technical/AI Development Workflow.md`, every user-facing feature is reviewed for:

- [ ] Keyboard navigation
- [ ] Semantic HTML
- [ ] ARIA usage
- [ ] Screen reader support
- [ ] Focus management
- [ ] Reduced motion support
- [ ] Color contrast
- [ ] Scalable UI
- [ ] Responsive layouts
- [ ] Accessible dialogs
- [ ] Accessible forms

---

# Acceptance Criteria

- [ ] All interactive elements are keyboard-accessible.
- [ ] All UI text meets WCAG 2.1 AA contrast ratios.
- [ ] Color is never the sole differentiator of meaning.
- [ ] A color blind mode is available (minimum: deuteranopia).
- [ ] Reduced motion is supported (OS-level detection + in-game toggle).
- [ ] UI functions at 200% browser zoom without breaking.
- [ ] Screen reader can navigate and announce all menu interfaces.
- [ ] The game is playable with audio disabled.
- [ ] The Accessibility Agent review checklist passes for every user-facing feature.

---

# Open Questions

- TODO: Screen reader strategy for the PixiJS canvas — which approach is selected?
- TODO: Color blind mode implementation — palette swaps, patterns, or both?
- TODO: Minimum supported viewport / device sizes?
- TODO: Is a dedicated "accessibility mode" (text-based interface) required for severe visual impairments?
- TODO: What level of automated accessibility testing will be integrated into CI? (axe-core, Lighthouse, pa11y?)
- TODO: Should accessibility requirements extend to the project's development tools and documentation (per the Documentation Standards, documentation is the project)?

---

# Related Documents

- `UX Principles.md` — principle #6 (Accessible by Default) and #3 (Cozy Visual Hierarchy)
- `Input.md` — keyboard control scheme
- `Menus.md` — menu accessibility requirements in context
- `HUD.md` — HUD accessibility
- `Notifications.md` — notification accessibility (live regions)
- `08-technical/AI Development Workflow.md` — Accessibility Agent specification
- `01-vision/Respect the Player's Time.md` — cognitive accessibility implications
- WCAG 2.1 — external standard reference
