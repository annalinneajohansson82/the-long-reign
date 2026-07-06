---
title: Release — Public Launch
id: 09-roadmap/release

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-06

depends_on:
  - 09-roadmap/mvp
  - 09-roadmap/vertical-slice
  - 09-roadmap/alpha
  - 09-roadmap/beta
  - 00-foundation/readme
  - 00-foundation/why
  - 00-foundation/principles

used_by:
  - 09-roadmap/future-expansions
  - All implementation planning

tags:
  - roadmap
  - release
  - milestone
---

# Purpose

Define the Release milestone for The Long Reign. Release is the public launch. The game is complete, stable, accessible, and ready for players. Every system has been implemented, balanced, polished, and validated against the project's design pillars and emotional goal.

Release is the moment the project's vision becomes available to the public.

---

# Overview

Beta delivered a polished, balanced, player-ready build. Release takes that build and deploys it publicly. This phase covers final deployment infrastructure, launch preparation, and the transition from development to live operations.

This milestone answers: "The game is ready. Is everything else ready for players to find and play it?"

---

# Documentation Prerequisites

All documentation must be finalized and release-ready:

- All specification documents across `00-foundation/` through `08-technical/` finalized
- All ADRs recorded in `10-decisions/`
- All RFCs in `11-rfc/` resolved (accepted, rejected, or deferred)
- Glossary complete and consistent
- `docs/09-roadmap/` — All milestone documents reflect final status
- Release notes drafted
- Player-facing documentation (tutorial content, in-game help) finalized
- Deployment documentation completed

---

# Release Scope

## In Scope

### Deployment
- Production hosting configured and deployed
- Domain and DNS configured
- CDN for static assets
- Build pipeline for production releases
- Versioning scheme established
- Update mechanism (how players receive patches)

### Final Quality
- Any remaining Beta bugs resolved
- Final round of cross-browser testing
- Final accessibility validation
- Save backward compatibility verified for release version
- Performance validated on production infrastructure

### Launch Preparation
- Store page or distribution page ready (platform TBD)
- Game description, screenshots, and promotional materials prepared
- Privacy policy and terms of service (if applicable)
- Analytics (if any) implemented and validated
- Error reporting/monitoring set up

### Localization
- If any localization is included for launch: translations complete and reviewed

### Save System Hardening
- Save versioning scheme operational for post-release patches
- Migration path for future save format changes defined
- JSON export/import validated for player use

---

## Out of Scope for Release

- Post-launch features and expansions (09-roadmap/future-expansions)
- Live service infrastructure beyond basic error monitoring
- Community management tooling
- Content updates or seasonal events
- Platform-specific ports (mobile, desktop wrappers)

---

# Design Goals

- Deliver the complete vision: the game fully realizes the emotional goal from `Why.md`
- The first-time player experience is smooth: tutorial, onboarding, and early game are polished
- The returning player experience passes the Six-Month Return Test
- All six design pillars are not just present but felt by players
- The game is technically reliable: no crashes, no save corruption, no significant performance issues

---

# Non-Goals

- Release does not add new features or content beyond Beta
- Release does not include post-launch live service features
- Release does not need to establish a monetization model — `00-foundation/Why.md` (Open Questions) already resolves this: the game is 100% free and open source, with no monetization beyond a possible, entirely optional GitHub Sponsors or Ko-fi link

---

# Entry Criteria

- Beta exit criteria are met
- No known critical or major bugs
- Performance validated on production-like infrastructure
- Accessibility validated
- Documentation finalized
- Human approval for public release

---

# Exit Criteria

- Game deployed to production and publicly accessible
- Players can: discover the game, start playing, save progress, return later, and continue
- No critical bugs identified in the first 72 hours of public availability
- Monitoring confirms stability under real player load
- The game passes the Six-Month Return Test in live context: early player feedback confirms the emotional goal
- Human approval for release declaration

---

# Open Questions

- TODO: Release date (target)
- TODO: Distribution platform (self-hosted web, itch.io, Steam browser wrapper, other)
- **Resolved:** Monetization model. `00-foundation/Why.md` (Open Questions) confirms the game is 100% free and open source, with no monetization beyond a possible, entirely optional GitHub Sponsors or Ko-fi link.
- TODO: Domain name
- TODO: Hosting provider and deployment architecture
- TODO: Analytics approach (none, privacy-respecting, standard — must align with Respect the Player's Time)
- TODO: Localization scope for launch (English only, or multiple languages?)
- TODO: Launch marketing and community strategy
- TODO: Post-release support commitment (bug fixes only, content patches, expansions?)
- TODO: Version numbering scheme (semantic, calendar-based, other)
- TODO: Update cadence and patching policy

---

# Related Documents

- `09-roadmap/mvp` through `09-roadmap/beta` — Predecessor milestones
- `09-roadmap/future-expansions` — Future Expansions (successor)
- `00-foundation/Why.md` — Emotional goal the release must deliver
- `01-vision/Vision Statement.md` — Vision the release must realize
- `01-vision/Design Pillars.md` — Pillars the release must uphold
- `01-vision/Respect the Player's Time.md` — Principle that governs release decisions (analytics, monetization, etc.)
- `08-technical/Technology Stack.md` — Technology choices affecting deployment
- `08-technical/Save System.md` — Save versioning and migration
