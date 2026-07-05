---
title: "Interesting Ideas"
id: parking-lot/interesting-ideas
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-05
depends_on:
  - docs/00-foundation/Principles.md
  - docs/01-vision/Design Pillars.md
used_by: []
tags:
  - parking-lot
  - ideas
  - deferred
  - speculative
---

# Purpose

Catalog design ideas that were discussed, considered, or implied during the project's genesis and documentation phase but are not committed to the current design. This is a parking lot — not a spec. Ideas here may be promoted into the Game Design Document through the RFC process, or they may stay here indefinitely.

Each entry includes its source, status, and a brief description. Statuses:
- **Parked:** Discussed with some detail but intentionally deferred or not yet designed.
- **Adjacent:** Mentioned in source material or implied by committed systems, but not explored.
- **Speculative:** Logically adjacent to the project's vision but not mentioned in any source material.

---

# Overview

The Long Reign's design emerged from broad brainstorming that touched on many ideas beyond the committed scope. This document captures those threads so they are not lost. The project's North Star — *make the kingdom feel more alive* — should guide any decision to promote an idea from the parking lot.

---

# Ideas

## Difficulty Modes (Beyond Hero Mortality)

- **Source:** *The Long Reign — Project Handoff* § Heroes; *Combat.md*
- **Status:** Parked
- **Description:** The source material specifies three difficulty levels affecting hero mortality: Easy (heroes never die), Medium (heroes become injured and return to the capital), and Hard (permanent death is possible). However, difficulty is only defined in the context of hero mortality. A broader difficulty system — affecting resource scarcity, villager needs, disaster frequency, or other simulation parameters — has not been discussed.
- **Open Question:** Is difficulty a single global setting, or a set of independent toggles? Does it affect anything beyond hero mortality?

---

## Religion as a Research Branch

- **Source:** *The Long Reign — Project Handoff* § Research; *Research.md*
- **Status:** Adjacent
- **Description:** "Religion" is listed as one of four example research branches (alongside agriculture, trade, and industry). It is mentioned exactly once in the source material with no further expansion. The Research.md spec includes it as a placeholder branch with a TODO. No mechanics, buildings, or effects have been defined.
- **Open Question:** What does religion research produce? Religious buildings? Cultural influence? Clergy villagers? Does it affect happiness, prestige, or Chronicle events?

---

## Wars

- **Source:** *The Long Reign — Project Handoff* § Chronicle; *Chronicle.md*; *Events.md*
- **Status:** Adjacent
- **Description:** "Wars" are listed as a Chronicle event type and as a category in Events.md, but no war mechanics are designed. Combat is defined as hero-focused, turn-based, and mostly automatic — likely insufficient as a foundation for kingdom-scale warfare. Wars may be a narrative/Chronicle concept rather than a gameplay system, but the source material does not clarify.
- **Open Question:** Are wars simulation-driven events that the Chronicle records, or player-facing systems? If wars exist, how do they interact with the "mostly automatic" combat model?

---

## Islands and Sea Routes

- **Source:** *The Long Reign — Project Handoff* § Exploration; *Exploration.md*; *World Overview.md*
- **Status:** Parked
- **Description:** The world includes islands and maritime regions. Islands are mentioned as part of the exploration system and world map, but no mechanics for reaching them have been designed. The source material implies boats or maritime travel but does not specify. Sea routes, naval trade, or water-based colony access are not discussed.
- **Open Question:** How are islands reached — boats, bridges, or some other mechanic? Are there sea-based resources, dangers, or trade routes? Are islands treated as regions, separate maps, or something else?

---

## Seasonal Events (Specifics)

- **Source:** *The Long Reign — Project Handoff* § Seasons; *Seasons.md*; *Events.md*
- **Status:** Adjacent
- **Description:** The source material lists three seasonal effects: harvests (positive), winter hardships (negative), and exploration opportunities (contextual). These are scaffolding — the Seasons.md spec and Events.md both contain extensive TODOs. The design intent is clear (seasons matter), but the specifics are not. Seasonal festivals, visual changes, and season-specific production chains are open questions.
- **Open Question:** How many seasons? What are the specific gameplay effects of each? Are there seasonal festivals or special events?

---

## Wonders

- **Source:** *The Long Reign — Project Handoff* § Chronicle; *Chronicle.md*
- **Status:** Adjacent
- **Description:** "Completed wonders" is listed as a Chronicle event type across multiple source documents. This implies a wonder-building mechanic — major construction projects that are notable enough to record in the kingdom's history. No specification exists for what wonders are, how they are built, what they cost, or what they provide.
- **Open Question:** What constitutes a wonder? Are they unique per save, per kingdom, or predefined? What gameplay benefits do they confer?

---

## Player-Choice Events

- **Source:** *Events.md* (Open Questions)
- **Status:** Speculative
- **Description:** Events.md asks: "Are there player-choice events (e.g., 'A merchant offers a trade deal — accept or decline?') or are all events simulation-driven?" The project's emphasis on emergent stories suggests most events should be simulation-driven, but occasional player-facing decisions could add depth without violating design principles.
- **Open Question:** If player-choice events exist, what is their scope? Are they standalone popups, integrated into the Chronicle, or part of the HUD?

---

## Welcome-Back Summaries

- **Source:** *Respect the Player's Time.md* (Open Questions)
- **Status:** Speculative
- **Description:** The Respect the Player's Time spec asks: "Are 'welcome back' messages or 'here's what happened while you were away' summaries (purely informational, no rewards) acceptable, or do they violate the spirit of this pillar?" Since time stops while the game is closed, there is nothing to summarize — but a purely cosmetic recap of the kingdom's state at the time of the last save could support the Six-Month Return Test.
- **Open Question:** Would a cosmetic welcome-back summary (no rewards, no pressure) enhance or undermine the return experience?

---

## Chronicle Player Annotations

- **Source:** *Chronicle.md* (Open Questions)
- **Status:** Speculative
- **Description:** Chronicle.md asks: "Does the Chronicle support player annotations or notes?" Allowing the player to add personal notes to Chronicle entries would deepen the emotional attachment to the kingdom's history, but it shifts the Chronicle from a purely simulation-driven record to a partially player-authored document.
- **Open Question:** Would player annotations enhance or dilute the Chronicle's emergent-story identity?

---

## Biomes and Climate Zones

- **Source:** *World Overview.md* (Open Questions)
- **Status:** Speculative
- **Description:** World Overview.md asks: "Are there biomes or climate zones that affect gameplay beyond seasons?" Different regions could have different climates — arid, temperate, coastal, mountainous — each with distinct resources, challenges, and visual identities. This would deepen the world's sense of place without requiring procedural generation.
- **Open Question:** How many biomes? What are their gameplay effects? Do they interact with seasons, production chains, or colony specialization?

---

## Tutorial System

- **Source:** *MVP.md* (Open Questions)
- **Status:** Adjacent
- **Description:** The MVP spec asks whether the MVP should include a basic tutorial or tooltip system. The game's philosophy of "the simulation teaches the player" (exemplified by desire paths) suggests the tutorial could itself be simulation-driven rather than a traditional scripted walkthrough.
- **Open Question:** Should the tutorial be a separate mode, integrated into early gameplay, or entirely simulation-driven?

---

## Carts as Visible Units

- **Source:** *Project Genesis — Brainstorming History* § Visible Logistics; *Roads and Logistics.md*
- **Status:** Adjacent
- **Description:** The source material describes resources physically moving through the kingdom: Mine → Cart → Warehouse → Blacksmith → Market. This implies carts as visible, moving units on the map. The committed design says "nothing teleports" and "logistics should be visible," but the specific implementation of carts — their appearance, behavior, pathfinding, and interaction with roads — is not specified.
- **Open Question:** Are carts individual units with their own simulation? Do they interact with road quality? Can they be blocked or disrupted?

---

# How to Promote an Idea

1. Write an RFC (see `00-foundation/RFC Process.md`).
2. The RFC should reference the relevant entry in this document.
3. If the RFC is accepted, the idea moves into the Game Design Document and its entry here is removed or marked as promoted.

Ideas that conflict with the six design pillars (see `00-foundation/Principles.md`) should not be promoted without a formal ADR that updates the principles.

---

# Related Documents

- `00-foundation/Principles.md` — Design pillars that govern all ideas
- `00-foundation/RFC Process.md` — Process for promoting ideas
- `00-foundation/ADR Process.md` — Process for updating design principles
- `Future Mechanics.md` — Ideas explicitly out of scope for release (post-release, expansions, never)
- `docs/09-roadmap/` — Milestones and release planning
- Source: *The Long Reign — Project Handoff*
- Source: *Project Genesis — Brainstorming History*