---
title: "Future Mechanics"
id: parking-lot/future-mechanics
version: 0.1.0
status: Draft
author: Lead Technical Writer
last_updated: 2026-07-05
depends_on:
  - docs/00-foundation/Principles.md
  - docs/01-vision/Design Pillars.md
  - docs/09-roadmap/MVP.md
used_by: []
tags:
  - parking-lot
  - future
  - expansions
  - post-release
  - rejected
---

# Purpose

Catalog mechanics that are clearly out of scope for the initial release but worth remembering for post-release updates, expansions, or explicit rejection. This document is a parking lot — not a spec. Entries may be promoted into the roadmap through the RFC process, or they may remain here indefinitely.

---

# Overview

The Long Reign's initial release scope (through Alpha → Beta → Release) implements the complete design as specified in the Game Design Documents. This document captures mechanics that sit beyond that scope — ideas worth considering after the game ships, large-scale expansions, and mechanics explicitly rejected by the project's design principles.

---

# Post-Release

Mechanics that are out of scope for the initial release but could be added in free updates after the game ships. These are smaller in scope than expansions and should not require fundamental architectural changes.

## Modding Support

- **Description:** Allow players to create and share custom content — new building types, decoration sets, hero characters, or even region maps. Aligns with the Player Expression pillar and the project's open philosophy.
- **Rationale:** The game is browser-based and single-player; modding carries no competitive or balance concerns. The handcrafted-world philosophy may limit map modding, but asset modding (buildings, decorations, heroes) is a natural extension.
- **Considerations:** Would require a mod loading API, asset pipeline documentation, and save-file compatibility handling.
- **TODO:** Define modding scope, API surface, and distribution model.

## Desktop Client

- **Description:** A standalone desktop application wrapping the browser game, distributed via Steam, itch.io, or direct download. Would provide offline play, better performance, and access to storefront audiences.
- **Rationale:** The game is browser-based, which is ideal for the initial release, but a desktop client expands the potential audience and enables features like Steam Cloud saves, achievements, and workshop integration.
- **Considerations:** Requires Electron or equivalent wrapper; save migration between browser and desktop; storefront compliance.
- **TODO:** Evaluate distribution platforms, wrapper technology, and save-file portability.

## Additional Regions

- **Description:** New unlockable regions added to the world map post-release — each with unique resources, recruitable heroes, building unlocks, and Chronicle events.
- **Rationale:** The handcrafted world is finite; additional regions extend playtime and provide fresh exploration content without altering core systems. Source material does not specify a total region count, leaving room for growth.
- **Considerations:** Must not invalidate existing save files; region placement must respect the existing world map layout.
- **TODO:** Define region addition process, content requirements per region, and save-file compatibility.

## Additional Heroes

- **Description:** New named heroes added to the roster beyond the initial 10–20, with their own personalities, backstories, and unique abilities.
- **Rationale:** Heroes are a small cast; adding more deepens the Living Memories system and provides more variety in exploration and combat.
- **Considerations:** Each hero requires design, writing, art, and ability implementation. Must integrate with difficulty/mortality settings.
- **TODO:** Define hero addition process, content requirements per hero, and how new heroes are discovered/recruited.

## Additional Research Branches

- **Description:** New branches added to the technology tree beyond the initial four (agriculture, trade, industry, religion). Examples: architecture, medicine, exploration, culture.
- **Rationale:** The technology tree is described as "medium-sized" — post-release branches extend progression without overhauling the research system.
- **Considerations:** Each new branch needs visible effects (architecture changes, new mechanics) per the Meaningful Growth pillar.
- **TODO:** Define candidate research branches, their visible effects, and tree integration points.

## Additional Decorations

- **Description:** New decoration types added to the catalog — statues, gardens, monuments, seasonal decorations, cultural decorations tied to colony identity.
- **Rationale:** Decorations are meaningful (influencing happiness, prestige, settlement quality) and support Player Expression. A larger catalog deepens kingdom personalization.
- **Considerations:** Each decoration type needs art assets and influence values. Must integrate with the existing decoration system.
- **TODO:** Define decoration addition process and content requirements.

---

# Expansions

Large-scale content additions that would be released as major updates (paid or free) after the initial release. Expansions may introduce new systems, mechanics, or simulation layers that go beyond the scope of post-release updates.

## New Continents

- **Description:** A major world map expansion adding a new continent with its own set of regions, resources, heroes, and narrative context. Distinct from the "Additional Regions" post-release category — this is a new landmass with its own identity.
- **Rationale:** The current world map is finite. A new continent dramatically extends exploration and settlement scope.
- **Considerations:** Requires significant art, design, and writing investment. Must not invalidate existing save files. May require new sea travel mechanics.
- **TODO:** Define continent scope, content requirements, and integration with the existing world map.

## Dynasty / Legacy System

- **Description:** A system where the player's rule eventually ends (death, abdication, or retirement) and a successor — possibly a child or appointed heir — takes over the kingdom. The new ruler inherits the kingdom's state but brings their own traits, opening new gameplay possibilities.
- **Rationale:** Villagers already have full life cycles (birth, aging, death). Extending this to the player character deepens the Living Simulation pillar and creates generational storytelling. The Chronicle would record dynastic transitions.
- **Considerations:** Major architectural change — the player's relationship to the kingdom changes. Would need to define what carries over (buildings, resources, Chronicle, heroes) and what resets or changes.
- **TODO:** Define dynasty mechanics, succession rules, trait inheritance, and architectural impact.

## Diplomacy and External Kingdoms

- **Description:** The introduction of other AI-controlled kingdoms on the world map, with diplomatic relations (trade agreements, alliances, rivalries, wars) emerging from simulation.
- **Rationale:** The Chronicle records "wars" as an event type, but the current design has no external political entities. Diplomacy would deepen the Emergent Stories pillar and give wars meaningful context.
- **Considerations:** Risk of scope creep — this is a major new system. Must remain simulation-driven rather than quest-driven. Must not introduce multiplayer or competitive pressure.
- **TODO:** Define diplomacy system, AI kingdom behavior, and how relations affect the player's kingdom.

## New Playable Starting Conditions

- **Description:** Alternative starting scenarios — different biomes, different initial resources, different challenges. Example: starting in a mountainous region vs. a coastal plain vs. an arid frontier.
- **Rationale:** Deepens replayability. The current design assumes a single starting condition (frontier settlers). Alternative starts create different emergent stories.
- **Considerations:** Must not fragment the player base or create a "best" start. Each start should be balanced for different playstyles, not different difficulty.
- **TODO:** Define candidate starting conditions, their resource profiles, and their unique challenges.

## Full Simulation Depth Extensions

- **Description:** Deeper simulation layers that go beyond the Alpha scope — disease and medicine, crime and law enforcement, education specializations, cultural movements, architectural styles.
- **Rationale:** The Living Simulation pillar could always go deeper. These layers add richness without changing the core loop.
- **Considerations:** Risk of violating Cozy Complexity — each new layer must add depth without adding stress or micromanagement.
- **TODO:** Prioritize candidate simulation layers; define which are expansions vs. which are never appropriate.

---

# Never

Mechanics explicitly rejected by the project's design principles or Architectural Decision Records. These entries exist to prevent future contributors from accidentally proposing them. They are non-negotiable.

## Multiplayer

- **Rejected by:** ADR: "Single-player forever." *The Long Reign — Project Handoff* § Architectural Decision Records.
- **Rationale:** The game's emotional goal — a personal kingdom the player returns to — is fundamentally single-player. Multiplayer would introduce competition, comparison, and social pressure that violates the Cozy Complexity and Respect the Player's Time pillars.
- **Status:** Non-negotiable. Do not propose.

## Monetization of Any Kind

- **Rejected by:** ADR: "No monetization." *The Long Reign — Project Handoff* § Architectural Decision Records; *Respect the Player's Time.md*.
- **Rationale:** The game will never include premium currency, battle passes, paid cosmetics, paid expansions that fragment the player base, or any other monetization model. The game is a complete product, not a service.
- **Status:** Non-negotiable. Do not propose.

## Offline Progress

- **Rejected by:** ADR: "No offline progress." *The Long Reign — Project Handoff* § Save System; *Respect the Player's Time.md*.
- **Rationale:** Time stops while the game is closed. The kingdom does not progress, degrade, or change in the player's absence. Offline progress would create pressure to check in and violate the Respect the Player's Time pillar.
- **Status:** Non-negotiable. Do not propose.

## Daily Rewards

- **Rejected by:** *Respect the Player's Time.md* § Prohibited Mechanics.
- **Rationale:** Rewards tied to daily login create FOMO and punish players who take breaks. The player should return because they want to see their kingdom, not because they'll miss a reward.
- **Status:** Non-negotiable. Do not propose.

## Login Streaks

- **Rejected by:** *Respect the Player's Time.md* § Prohibited Mechanics.
- **Rationale:** Streak mechanics incentivize daily play through loss aversion. This violates the game's philosophy that absence should never be punished.
- **Status:** Non-negotiable. Do not propose.

## Battle Passes

- **Rejected by:** *Respect the Player's Time.md* § Prohibited Mechanics.
- **Rationale:** Battle passes are a monetization and engagement mechanic that creates FOMO, time pressure, and psychological compulsion. They are incompatible with every design pillar.
- **Status:** Non-negotiable. Do not propose.

## Energy Systems

- **Rejected by:** *Respect the Player's Time.md* § Prohibited Mechanics.
- **Rationale:** Energy bars, stamina systems, and time-gated action limits create artificial scarcity and pressure the player to play on the game's schedule rather than their own.
- **Status:** Non-negotiable. Do not propose.

## FOMO Mechanics

- **Rejected by:** *Respect the Player's Time.md* § Prohibited Mechanics.
- **Rationale:** Limited-time offers, event-exclusive items that never return, countdown timers, and any other mechanic that creates fear of missing out. These violate the Respect the Player's Time pillar and the Six-Month Return Test.
- **Status:** Non-negotiable. Do not propose.

## Daily Quests

- **Rejected by:** *Respect the Player's Time.md* § Prohibited Mechanics.
- **Rationale:** Quests that refresh on a daily timer create a routine obligation. The game's events should emerge from the simulation, not from a rotating schedule.
- **Status:** Non-negotiable. Do not propose.

## Mechanics That Punish Taking Breaks

- **Rejected by:** *Respect the Player's Time.md* § Prohibited Mechanics.
- **Rationale:** No decay, no atrophy, no degradation of the kingdom while the player is away. The kingdom should be exactly as the player left it — no catch-up needed, no penalty for absence.
- **Status:** Non-negotiable. Do not propose.

---

# How to Promote an Idea

1. Write an RFC (see `00-foundation/RFC Process.md`).
2. The RFC should reference the relevant entry in this document.
3. If the RFC is accepted, the idea moves into the roadmap (`docs/09-roadmap/`) and its entry here is updated to reflect promotion.
4. Ideas in the "Never" section may only be reconsidered through a formal ADR that updates the project's design principles — and only if the rationale for the original rejection has fundamentally changed.

---

# Related Documents

- `00-foundation/Principles.md` — Design pillars that govern all mechanics
- `00-foundation/ADR Process.md` — Process for updating ADRs
- `00-foundation/RFC Process.md` — Process for promoting ideas
- `01-vision/Respect the Player's Time.md` — The pillar that rejects most "Never" entries
- `Interesting Ideas.md` — Design ideas that are parked or adjacent (not yet committed or rejected)
- `docs/09-roadmap/` — Milestones and release planning
- Source: *The Long Reign — Project Handoff*
- Source: *Project Genesis — Brainstorming History*