---
title: Core Gameplay Loop
id: 01-vision/core-gameplay-loop

version: 0.1.0
status: Draft
author:

last_updated: 2026-07-05

depends_on: [Vision Statement]

used_by: []

tags: [gameplay, loop, vision]
---

# Purpose

Define the primary gameplay loop of The Long Reign. Every system should feed into this loop or support it. This is the player's minute-to-minute and hour-to-hour rhythm.

---

# Overview

The primary gameplay loop follows five stages:

```
Explore
  ↓
Gather Resources
  ↓
Return Home
  ↓
Expand Settlement
  ↓
Unlock New Opportunities
  ↓
Repeat
```

The settlement—not combat—is the heart of the game at every stage of this loop.

---

# Stage Breakdown

## 1. Explore

The player sends heroes or expeditions into a large handcrafted world. The world map includes unlockable regions (including islands). Each region contains:

- unique resources
- recruitable heroes
- new buildings
- opportunities
- dangers

Exploration primarily exists to support settlement growth.

## 2. Gather Resources

Resources are gathered from the world map. They are brought back to the settlement via visible logistics (carts, roads). Nothing teleports.

## 3. Return Home

The player returns to their capital or a colony. The return triggers processing: resources enter the economy, villagers consume and produce, buildings benefit from new materials.

## 4. Expand Settlement

The player spends resources to build and upgrade:

- buildings
- roads
- districts
- decorations

Buildings visually evolve through upgrades. The capital grows from a camp into a thriving kingdom. Colonies develop their own specializations and identities.

## 5. Unlock New Opportunities

Expansion unlocks further exploration opportunities, new research, new building types, and new regions. The loop repeats with increased scope.

---

# Design Goals

- The loop should feel satisfying at every stage—not a grind.
- The settlement must remain the focal point. Combat and exploration exist in service of the settlement, not the other way around.
- Expansion should feel meaningful: every loop should produce a visible change in the kingdom.

---

# Non-Goals

- The loop is not combat-driven. Combat is mostly automatic, turn-based, with occasional player abilities.
- The loop is not a linear campaign. The player chooses what to expand and when.

---

# Player Experience

The player alternates between outward-facing phases (exploration, gathering) and inward-facing phases (building, upgrading). The rhythm should feel natural, not prescribed. Players should always feel they are returning to something that has grown.

---

# Open Questions

- TODO: Typical duration of one full loop cycle (in real-time minutes)?
- TODO: Are there any loop-interrupting events (e.g., disasters, seasonal shifts) that alter the flow?
- TODO: How many concurrent exploration expeditions can be active?

---

# Related Documents

- [Vision Statement](./Vision%20Statement.md)
- [Design Pillars](./Design%20Pillars.md)
- [Respect the Player's Time](./Respect%20the%20Player's%20Time.md)
- [Visible Logistics](../../docs/03-simulation/) — TODO: link specific document when written
- [Exploration](../../docs/05-world/) — TODO: link specific document when written