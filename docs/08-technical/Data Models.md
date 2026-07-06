---
title: Data Models
id: 08-technical/data-models

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/why
  - 00-foundation/principles
  - 08-technical/architecture
  - 08-technical/save-system

used_by:
  - Backend / Simulation Agent
  - Chief Engineer
  - Save System implementation

tags:
  - technical
  - data-models
  - entities
  - simulation
  - architecture
---

# Purpose

This document defines the data models — the entities, their attributes, and their relationships — that form the backbone of the simulation in **The Long Reign**.

These models are derived from the project's design documents. They define the shape of the data, not the implementation (e.g., whether ECS or OOP is used). Every entity described here corresponds to a documented gameplay concept.

---

# Overview

The simulation is built around entities with state and behavior. The primary entities are:

- **Kingdom** — the top-level container for all game state
- **Settlements** — the capital and colonies
- **Villagers** — simulated individuals
- **Heroes** — named, unique characters
- **Households** — family units formed by villagers
- **Buildings** — constructed structures within settlements
- **Resources** — physical items that move through the kingdom
- **Chronicle Events** — historical records
- **Living Memories** — biographies of important characters

---

# Core Entities

## Kingdom

The root entity. Contains all settlements, global state, and metadata.

| Attribute | Type | Description |
|-----------|------|-------------|
| `name` | string | The kingdom's name |
| `year` | integer | Current in-game year |
| `season` | enum | Current season (Spring, Summer, Autumn, Winter) |
| `capitalId` | reference | Reference to the capital settlement |
| `colonyIds` | array[reference] | References to colony settlements |
| `heroIds` | array[reference] | References to all heroes (active and deceased) |
| `researchTree` | tree | Unlocked and available research nodes |
| `chronicle` | array[reference] | Chronicle event log |
| `difficulty` | enum | Easy / Medium / Hard |
| `gameSpeed` | enum or number | Current game speed setting |

---

## Settlement (Capital / Colony)

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `name` | string | Settlement name |
| `type` | enum | Capital or Colony |
| `position` | {x, y} | Position on world map |
| `population` | integer | Current villager count |
| `buildingIds` | array[reference] | Buildings in this settlement |
| `roadIds` | array[reference] | Roads connected to this settlement |
| `districtIds` | array[reference] | Districts within this settlement |
| `identity` | object | Emergent identity traits (derived, not player-set) |
| `prestige` | number | Settlement prestige rating |
| `happiness` | number | Overall happiness score (derived from villagers, decorations, etc.) |

**Notes**:
- A colony's identity emerges from its buildings, geography, production, and history. It is not chosen from a menu. The `identity` attribute is a derived summary, not an explicit player setting.
- There is exactly one capital. There may be multiple colonies.

---

## Villager

A simulated individual. Villagers are procedurally generated and numerous.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `name` | string | Generated name |
| `age` | integer | Age in in-game years |
| `gender` | enum | Male / Female |
| `householdId` | reference or null | Household they belong to (null if not in a household) |
| `settlementId` | reference | Settlement they live in |
| `profession` | enum or null | Current profession (null if child/retired/unemployed) |
| `education` | enum | Education level (None, Schooled, Advanced) |
| `status` | enum | Child, Student, Working, Retired, Deceased |
| `happiness` | number | Individual happiness |
| `health` | number | Health status |
| `birthYear` | integer | Year of birth |
| `deathYear` | integer or null | Year of death (null if alive) |
| `partnerId` | reference or null | Spouse (null if unmarried) |
| `childIds` | array[reference] | References to children |

**Notes**:
- Villagers move into the kingdom, form households, marry, have children, age, attend school, learn professions, work, retire, and die.
- Schools impact the `education` attribute. Education gates access to certain professions.
- Death does not necessarily remove a villager from the data model — deceased villagers may be retained for the Chronicle and Living Memories (see Open Questions).
- The `gender` attribute (Male / Female) is a data-modeling assumption, not a specified gameplay rule.
  > **TODO:** Not confirmed by 00-foundation/01-vision — requires Creative Director confirmation.

---

## Hero

A named character with personality, backstory, and unique abilities. Approximately 10–20 heroes exist.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `name` | string | Hero name |
| `personality` | object | Personality traits |
| `backstory` | string | Narrative backstory |
| `level` | integer | Current level |
| `experience` | integer | Experience toward next level |
| `profession` | enum | Hero's profession/class |
| `abilities` | array | Unique abilities (mechanics TBD) |
| `status` | enum | Active, Injured, Deceased (depends on difficulty) |
| `settlementId` | reference | Settlement they are associated with |
| `livingMemoryId` | reference | Biography record |
| `mortality` | enum | Immortal / Injured / Mortal (derived from difficulty) |

**Notes**:
- Hero mortality depends on difficulty:
  - Easy: Heroes never die (`mortality = Immortal`).
  - Medium: Heroes become injured and return to the capital (`mortality = Injured`).
  - Hard: Permanent death is possible (`mortality = Mortal`).
- Heroes coexist with ordinary villagers.
- Progression focuses on levels and professions.
- The exact set of abilities and professions is not specified in source material.

---

## Household

A family unit formed by villagers.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `settlementId` | reference | Settlement the household lives in |
| `adultIds` | array[reference] | Adult villagers in the household (partners) |
| `childIds` | array[reference] | Children in the household |
| `buildingId` | reference or null | Building the household occupies (null if homeless/transient) |
| `foundedYear` | integer | Year the household was formed |

**Notes**:
- Villagers marry and form households.
- Children belong to households until they become adults and may form their own.
- Households are the basic social unit of the simulation.

---

## Building

A constructed structure within a settlement.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `type` | enum | Building type (House, School, Blacksmith, Mine, Warehouse, etc.) |
| `level` | integer | Upgrade level (affects capacity, output, appearance) |
| `settlementId` | reference | Settlement this building belongs to |
| `position` | {x, y} | Grid position |
| `size` | {w, h} | Grid dimensions |
| `status` | enum | Under Construction, Active, Damaged, Abandoned |
| `workerIds` | array[reference] | Villagers working at this building |
| `production` | object | Current production state (type TBD) |
| `inventoryId` | reference or null | Reference to building's resource inventory |

**Notes**:
- Buildings visually evolve through upgrades.
- Building types are not exhaustively specified in source material. The `type` enum will grow as gameplay systems are designed.
- Research can unlock new building types and upgrades.

---

## Resource

A physical item or material that moves through the kingdom.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `type` | enum | Resource type (Coal, Steel, Glass, Leather, Cloth, Food, etc.) |
| `quantity` | number | Amount of this resource |
| `locationId` | reference | Where the resource currently is (building, cart, settlement) |
| `locationType` | enum | Building, Cart, Warehouse, Market |

**Notes**:
- Nothing teleports. Resources physically move (Mine → Cart → Warehouse → Blacksmith → Market).
- Resource types are not exhaustively specified. Source material mentions: coal, steel, glass, leather, cloth, agriculture, luxury goods, trade goods, crafting ingredients.

---

## Chronicle Event

An entry in the kingdom's historical record.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `year` | integer | In-game year the event occurred |
| `type` | enum | Birth, Marriage, Death, ColonyFounding, Discovery, Disaster, HeroAchievement, WonderCompleted, War, TechAdvance |
| `title` | string | Short event title |
| `description` | string | Narrative description |
| `relatedEntityIds` | array[reference] | Entities involved in the event |

**Notes**:
- The Chronicle is one of the game's flagship systems.
- Events are automatically recorded — the player does not write them.
- Each save gradually becomes a unique historical document.

---

## Living Memory

A biography for a hero or important villager.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | uuid | Unique identifier |
| `entityId` | reference | The hero or villager this biography belongs to |
| `birthplaceId` | reference | Settlement where they were born |
| `family` | array[reference] | Key family members |
| `profession` | enum | Their profession |
| `achievements` | array[string] | Notable achievements |
| `expeditions` | array[string] | Expeditions they participated in |
| `legacy` | string | Summary of their impact on the kingdom |

**Notes**:
- Living Memories create emotional attachment to characters.
- Not every villager has a Living Memory — only heroes and particularly important villagers.

---

# Entity Relationships

```text
Kingdom
  ├── Capital (Settlement)
  │     ├── Buildings
  │     │     └── Resources (inventory)
  │     ├── Roads
  │     ├── Districts
  │     ├── Villagers
  │     │     └── Households
  │     └── Heroes
  │           └── Living Memories
  ├── Colonies (Settlements) [0..n]
  │     └── (same sub-structure as Capital)
  ├── Chronicle Events
  └── Research Tree
```

---

# Design Goals

- **Completeness**: Every documented gameplay concept has a corresponding data model.
- **Clarity**: Attribute names and types are unambiguous.
- **Extensibility**: New attributes can be added without breaking existing saves (via versioning).
- **Derivation over configuration**: Where possible, attributes are derived from simulation state rather than player-set (e.g., colony identity, happiness).

---

# Non-Goals

- Defining every building type, resource type, or profession (these will be specified in gameplay and economy documents)
- Specifying serialization format (covered in `Save System.md`)
- Specifying database or storage engine (the data models are implementation-agnostic)
- Defining network synchronization (there is no multiplayer)

---

# Open Questions

- TODO: Exact set of building types, resource types, and professions — to be defined in gameplay documents
- TODO: Whether deceased villagers/heroes are retained or pruned from the data model
- TODO: How the research tree is structured (flat list? tree with prerequisites? multiple trees?)
- TODO: How resource movement (physical logistics) is modeled — as a continuous position or discrete location transitions?
- TODO: Whether the data model uses an Entity-Component-System (ECS) architecture or traditional object-oriented entities
- TODO: Precise happiness calculation — which factors contribute and how they are weighted
- TODO: Colony identity derivation algorithm — how buildings, geography, production, and history combine into an identity

---

# Related Documents

- `00-foundation/why` (`Why.md`) — the kingdom-building vision
- `00-foundation/principles` (`Principles.md`) — Living Simulation, Meaningful Growth
- `Save System.md` — how these models are persisted
- `Architecture.md` — where the data models fit in the system
- `02-gameplay/` — detailed gameplay specifications (to be written)
- `03-simulation/` — simulation design documents (to be written)
- `04-economy/` — economy and resource specifications (to be written)