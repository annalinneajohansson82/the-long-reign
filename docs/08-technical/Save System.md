---
title: Save System
id: 08-technical/save-system

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 00-foundation/why
  - 00-foundation/principles
  - 08-technical/architecture

used_by:
  - Backend / Simulation Agent
  - Chief Engineer
  - Testing Agent

tags:
  - technical
  - save-system
  - persistence
  - localstorage
  - data
---

# Purpose

This document defines the save system for **The Long Reign** — how game state is persisted, restored, exported, and versioned.

The save system is the primary mechanism by which the player's kingdom survives between sessions. It must be reliable, transparent, and respectful of the player's time.

---

# Overview

The Long Reign uses browser LocalStorage as its primary persistence mechanism. All save data is stored locally on the player's machine. There is no server-side storage, no cloud sync, and no online requirement.

The save system supports:

- Autosave
- Manual save
- Manual load
- Multiple save slots
- JSON export (for backup and sharing)
- JSON import (for restoring from backup)
- Save versioning (for forward compatibility)
- Full session persistence (camera, UI state, world state)

Time does not pass while the game is closed. There is no offline progress simulation. When the player closes the browser, the simulation clock stops. When they return and load their save, the world is exactly as they left it.

---

# Save Slots

The game supports multiple save slots. Each slot contains the complete game state at the time of saving.

**Slot metadata**:
- Slot name (player-assigned)
- Timestamp of last save
- In-game date / year
- Kingdom name
- Play time (total hours played)
- Preview thumbnail (optional — for save selection UI)

The exact number of slots is not specified in source material. A reasonable default is 5–10 slots, subject to LocalStorage quota limits.

---

# Autosave

The game autosaves at regular intervals. The exact interval is not specified in source material.

**Autosave behavior**:
- Autosave does not interrupt gameplay (it occurs in the background).
- Autosave writes to a dedicated autosave slot (separate from manual save slots).
- If the browser is closed unexpectedly, the autosave preserves progress since the last manual save.
- Autosave must not cause noticeable frame drops or input lag.

---

# Manual Save and Load

**Manual save**:
- The player can save at any time to any save slot.
- Saving overwrites the selected slot.
- The player is warned before overwriting an existing save.
- The save operation must complete before the game continues (synchronous from the player's perspective).

**Manual load**:
- The player can load any save slot from the main menu or in-game.
- Loading restores the complete session state (see Session Persistence below).
- Loading a save replaces the current game state entirely.
- The player is warned before loading if they have unsaved progress.

---

# Session Persistence

When loading a save, the following state is restored:

- Camera position
- Zoom level
- Selected building (if any)
- Open UI panels
- Expedition state (if any expedition is in progress)
- Game speed setting
- World state (all entities, simulation state, resources, etc.)

The player should feel they are returning to a persistent world — not restarting a session.

Closing the browser should preserve progress via the most recent autosave or manual save. The save system must write to LocalStorage before the `beforeunload` event completes (or use an equivalent mechanism to guarantee persistence on tab close).

---

# Storage Mechanism

**Primary storage**: `window.localStorage`

**Format**: JSON (serialized game state)

**Key structure**: Save data is stored under prefixed keys to avoid collisions with other LocalStorage usage.

```text
the-long-reign:save:slot:<slotId>        — Full save data
the-long-reign:save:autosave             — Autosave data
the-long-reign:save:meta                 — Save metadata index (list of slots, timestamps)
the-long-reign:config                    — Player settings (volume, game speed preference, etc.)
```

**Size considerations**:
- LocalStorage is typically limited to 5–10 MB per origin.
- Save data must fit within this limit.
- Large worlds with many entities may require compression or incremental saving.
- If a save approaches the quota, the player should be warned before saving fails.

---

# JSON Export and Import

**Export**:
- The player can export a save slot to a JSON file.
- The file is downloaded through the browser's standard download mechanism.
- The exported file contains the complete save data plus metadata (version, timestamp, kingdom name).
- The file extension should be `.json` or a project-specific extension (e.g., `.tlrsave`).

**Import**:
- The player can import a JSON save file.
- The imported save is validated before being accepted:
  - Is the JSON well-formed?
  - Is the save version compatible?
  - Is the data internally consistent?
- On successful import, the save appears as a new save slot (it does not overwrite existing slots unless the player chooses to).
- On import failure, the player receives a clear error message.

---

# Save Versioning

Every save carries a version number. The version number allows the game to detect and handle saves from older (or newer) versions.

**Version format**: Semantic versioning (`MAJOR.MINOR.PATCH`), or a simple incrementing integer — the source material does not specify. Either approach is acceptable as long as it is consistent.

**Compatibility rules**:
- The game can load saves from the current version.
- The game can load saves from older versions, applying migration logic as needed.
- The game must not load saves from newer versions (to prevent data corruption from unknown fields).
- The game must warn the player if a save was created by a newer version.

**Migration**:
- When loading an older save, the save system applies a sequence of migrations to bring it to the current version.
- Migrations are idempotent (applying the same migration twice produces the same result).
- Migrations are versioned and stored in the codebase alongside the save system.

---

# Design Goals

- **Reliability**: Save data must survive browser crashes and unexpected closes.
- **Transparency**: The player always knows when the game was last saved.
- **Portability**: JSON export/import allows players to move saves between browsers or machines.
- **Forward compatibility**: Versioning ensures saves from older game versions remain loadable.
- **Privacy**: All save data is local — nothing is uploaded to a server.

---

# Non-Goals

- Cloud save synchronization
- Server-side save validation
- Save encryption (players own their save files; there is no anti-cheat concern in a single-player game)
- Save compression (unless required to stay within LocalStorage quotas)
- Offline progress tracking

---

# Acceptance Criteria

- [ ] Autosave fires at a regular interval without interrupting gameplay.
- [ ] Manual save and load work correctly for all save slots.
- [ ] Closing the browser preserves progress (tested across major browsers).
- [ ] Session state (camera, zoom, panels, etc.) is fully restored on load.
- [ ] JSON export produces a valid, complete save file.
- [ ] JSON import validates, accepts compatible saves, and rejects incompatible ones.
- [ ] Save versioning handles old, current, and newer versions correctly.
- [ ] Save data survives LocalStorage quota errors with a clear user message.

---

# Edge Cases

- **LocalStorage full**: The save system must handle quota errors gracefully. Warn the player and suggest exporting existing saves to free space.
- **Corrupted save data**: If LocalStorage contains malformed JSON, the save system should detect it and offer recovery options (e.g., load from autosave, import from file).
- **Browser in private/incognito mode**: LocalStorage may be unavailable or cleared between sessions. The game should detect this and warn the player.
- **Concurrent tabs**: If the game is open in multiple tabs, only one tab should write to LocalStorage at a time. The source material does not specify behavior for concurrent tabs — TODO.
- **Very large saves**: Worlds with many entities may produce saves approaching the LocalStorage limit. Performance of serialization/deserialization must be considered.

---

# Open Questions

- TODO: Autosave interval (every 1 minute? 5 minutes? on significant events?)
- TODO: Maximum number of save slots
- TODO: Save file extension (`.json` vs. `.tlrsave`)
- TODO: Version number format (semantic versioning vs. incrementing integer)
- TODO: Whether autosave should also save on specific events (e.g., before combat, after major construction)
- TODO: Behavior when multiple tabs are open (lock file? warn? allow but with risk of overwrites?)
- TODO: Whether save preview thumbnails are generated at save time or on demand
- TODO: Save data pruning — if a villager dies, is their data removed or marked as dead and retained?

---

# Related Documents

- `00-foundation/why` (`Why.md`) — the emotional goal (return after months, smile)
- `00-foundation/principles` (`Principles.md`) — Respect the Player's Time (no FOMO, kingdom waits)
- `Architecture.md` — where persistence fits in the architecture
- `Data Models.md` — what data is saved
- `Performance.md` — serialization/deserialization performance targets