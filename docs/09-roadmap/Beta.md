---
title: Beta — Polish, Balance, and Stabilization
id: roadmap/beta

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - roadmap/mvp
  - roadmap/vertical-slice
  - roadmap/alpha
  - foundation/readme
  - foundation/why
  - foundation/principles

used_by:
  - roadmap/release
  - All implementation planning

tags:
  - roadmap
  - beta
  - milestone
---

# Purpose

Define the Beta milestone for The Long Reign. Beta is the polish, balance, and stabilization phase. No new features are implemented. No new systems are added. The entire effort focuses on tuning what exists, eliminating bugs, improving performance, achieving accessibility compliance, and preparing the game for public release.

Beta is the phase where the game transforms from "functional" to "enjoyable."

---

# Overview

Alpha delivered a feature-complete internal build. Beta makes that build player-ready. Every system is balanced. Every edge case is handled. Performance meets targets. Accessibility meets standards. The game feels good to play for extended sessions.

This milestone answers: "Is this game ready for players?"

---

# Documentation Prerequisites

No new specification documents are required for Beta. However, the following documentation activities must be complete:

- All existing documentation reviewed for accuracy against the Alpha build
- All documentation drift detected and resolved (implementation matches documentation)
- All ADRs updated to reflect any design changes made during Alpha
- `docs/08-technical/Performance.md` — Performance targets defined and baselines measured
- `docs/06-ui/Accessibility.md` — Accessibility compliance criteria finalized
- `docs/08-technical/Coding Standards.md` — Finalized with Beta-era conventions
- All Alpha documentation TODOs resolved or explicitly deferred to Future Expansions

---

# Beta Scope

## In Scope

### Balance
- Economy balancing: all production chain costs, outputs, and timings tuned
- Pacing: progression speed across all game stages evaluated and adjusted
- Hero balance: all hero abilities, stats, and progression balanced
- Villager simulation: life cycle timing, profession distribution, population dynamics
- Resource scarcity: availability, regeneration rates, and gathering efficiency
- Research costs and effects balanced across all technology tree branches
- Combat difficulty balanced across all encounter types
- Seasonal effects balanced (positive and negative impacts proportional)
- Colony specialization: emergent identity weighting tuned for diversity
- Decoration influence values balanced (happiness, prestige, quality)
- Failure thresholds: calibrated so failure is a real but fair possibility
- Difficulty settings: Easy/Medium/Hard each provide the intended experience

### Performance
- Rendering performance: target frame rate achieved on minimum-spec hardware
- Memory usage: within acceptable bounds for browser-based deployment
- Save/Load performance: acceptable load times and file sizes
- Simulation performance: AI and simulation ticks do not degrade gameplay
- Asset loading: initial load time and streaming performance optimized
- Identify and fix performance regressions

### Accessibility
- Full accessibility audit against WCAG criteria (or equivalent internal standard)
- Keyboard navigation: every action navigable without mouse
- Semantic HTML: correct element usage throughout
- ARIA: labels, roles, and states applied
- Screen reader support: all information conveyed audibly
- Focus management: logical tab order, visible focus indicators
- Reduced motion support: animations respect user preference
- Color contrast: all text and interactive elements meet contrast ratios
- Scalable UI: layout remains functional at varied zoom levels
- Accessible dialogs: focus trapping, escape to close, labeled properly
- Accessible forms: labels, error messages, validation communicated

### Quality
- Bug fixing: all known bugs from Alpha resolved
- Edge case coverage: all documented edge cases tested and handled
- Crash resilience: no crashes under normal or extended play
- Save integrity: no save corruption; graceful handling of corrupted saves
- UI polish: consistent spacing, alignment, responsiveness
- Visual polish: art consistent, animations smooth, no visual glitches
- Audio: implemented (if deferred from Alpha)
- Notification system tuned: relevant but not intrusive
- Tutorial/onboarding: clear first-time player experience

### Testing
- Full regression test suite passing
- Integration tests for all system interactions
- Unit test coverage at target threshold
- Manual playtesting: extended sessions (10+ hours) by human testers
- Save compatibility: old saves load correctly after updates
- Cross-browser testing on target browsers

### Documentation
- Documentation sync: all implementation accurately reflected in docs
- ADR log complete: all significant decisions recorded
- Glossary complete: all terms defined
- Roadmap updated with Beta status

---

## Out of Scope for Beta

- New features or systems (deferred to roadmap/future-expansions or parking-lot)
- New content (new buildings, heroes, regions, resources, etc.)
- Major UI redesigns
- Localization (roadmap/release)
- Deployment infrastructure (roadmap/release)
- Marketing or community building (roadmap/release)

---

# Design Goals

- Achieve Cozy Complexity: the game should feel deep but not overwhelming
- Pass the Six-Month Return Test in extended playtesting
- Validate that Respect the Player's Time holds across long play sessions
- Ensure the game is accessible to players with diverse needs
- Confirm that the North Star (make the kingdom feel more alive) is achieved consistently

---

# Non-Goals

- Beta does not add new features
- Beta does not redesign existing systems (unless a system fundamentally fails the Six-Month Return Test)
- Beta is not a public release — it may be shared with trusted testers but is not publicly distributed

---

# Entry Criteria

- Alpha exit criteria are met
- All feature implementation is code-complete
- No known critical or major bugs block Beta entry
- Alpha playtesting feedback collected and triaged

---

# Exit Criteria

- All Beta In Scope items completed
- Economy and pacing balanced across all game stages
- Performance meets targets on minimum-spec hardware
- Accessibility audit passed with all issues resolved
- All known bugs resolved; no known critical, major, or common minor bugs
- Test suite passing at target coverage
- Extended playtesting completed with positive feedback
- No system violates any of the six design pillars
- The Six-Month Return Test passes in playtesting
- Human approval for all Beta work
- All review pipeline steps have passed
- Documentation is synchronized with implementation

---

# Open Questions

- TODO: Target frame rate and minimum hardware specification
- TODO: Acceptable save file size and load time targets
- TODO: Specific WCAG level target (A, AA, AAA) or equivalent accessibility standard
- TODO: Beta tester selection criteria and count
- TODO: Minimum duration for extended playtesting sessions
- TODO: Accepted bug severity thresholds for Beta exit (zero critical? zero major? how many minor?)
- TODO: Target unit test coverage percentage
- TODO: Cross-browser target list (Chrome, Firefox, Safari, Edge; which versions?)
- TODO: Whether Beta includes any external (non-team) testers

---

# Related Documents

- `roadmap/mvp` — MVP (predecessor milestone)
- `roadmap/vertical-slice` — Vertical Slice (predecessor milestone)
- `roadmap/alpha` — Alpha (predecessor milestone)
- `roadmap/release` — Release (successor milestone)
- `01-vision/Design Pillars.md` — Pillars Beta must validate
- `01-vision/The Six-Month Return Test.md` — Test Beta build must pass
- `01-vision/Respect the Player's Time.md` — Principle Beta must uphold
- `06-ui/Accessibility.md` — Accessibility criteria
- `08-technical/Performance.md` — Performance targets
- `08-technical/AI Development Workflow.md` — Review pipeline stages
