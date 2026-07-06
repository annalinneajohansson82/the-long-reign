# Changelog

All notable changes to The Long Reign.

Format header: `## [date] — PR# — Summary`

---

## [2026-07-06] — PR #9 — MVP Implementation (M1–M10)

### Added

- **Scaffold (M1):** Vite 6 + TypeScript 5 + PixiJS 8 + React 19 project structure
- **Grid (M2):** 30×20 tile grid with alternating color rendering
- **Trees (M3):** ~25 trees placed on spawn, sapling growth system
- **Villagers (M4):** 10 idle/walking/gathering sprites on grid
- **Gathering (M5):** Click tree → nearest idle villager walks → gathers → +3 wood
- **Building placement (M6):** Toolbar with affordability/unlock/cap checks, click-to-place on grid
- **Town hall (M7):** 6 upgrade tiers (0→50→150→450→1350→4050 wood), house cap scaling, upgrade prompt UI
- **Stockpile (M8):** 50 wood capacity, overflow loss enforcement
- **Forester's hut (M9):** Auto-plants saplings on empty tiles within radius, ~30s growth timer
- **Save/load (M10):** localStorage auto-save every 30s, beforeunload handler, resume from save on load
- **Pathfinding:** A* that respects grid walkable flags
- **Render optimization:** Dirty-flag rendering — only re-render on state change
- **Tests:** 7 unit tests for `gameReducer`

### Changed

- Buildings.md: populated with MVP building types, costs, tiers, visual pool, house caps
- Resources.md: narrowed to single wood resource, click-to-gather mechanics, stockpile rules
- .gitignore: added `dist/`
- README.md: updated with MVP status, quick start, project links

### Architecture

- `src/game/state/GameState.ts` — pure reducer, all actions, A* pathfinding
- `src/game/state/initialState.ts` — seed state (grid, trees, villagers, 5 starting wood)
- `src/game/entities/` — GridTile, Building/BuildingDefinition, Villager, Tree types
- `src/game/render/index.ts` — Grid/tree/building/villager PixiJS renderers
- `src/game/Game.ts` — Application wrapper, tick loop, click handler, save lifecycle
- `src/ui/` — React overlay (App, WoodCounter, Toolbar, UpgradePrompt, useGameState hook)
- `src/save/saveManager.ts` — localStorage save/load utilities

---

## [2026-07-05] — PR #8 — Project-Agnostic Documentation

### Changed

- AGENTS.md: all project-specific values moved to `.env`
- `.env.example`: machine user identity template for per-project configuration
- AGENTS.md and `.env.example` are fully portable across repos

---

## [2026-07-05] — PR #7 — Documentation Fixes

### Fixed

- Removed hardcoded username from AGENTS.md
- Environment variables now control all identity configuration

---

## [2026-07-05] — PR #5 — Agent Workflow

### Added

- Session lifecycle procedures and handoff workflow
- Machine user git identity for automated commits/PRs
- PR review workflow: classification table, review loop, 3-round limit, escalation rules
- Threaded review conversations, self-approval workaround
- PR labeling system (domain/size/merge-tier)
- System prompts for 4 role types: Chief Engineer, Lead Technical Writer, Documentation Specialist, Lead Systems Designer

---

## [2026-07-05] — PR #2 — Design Audit

### Changed

- 7 audit passes cross-referencing all gameplay/simulation/economy/world/UI/art/technical docs against foundation
- Updated cross-references, terminology, and document status fields
- Buildings.md and Resources.md carry forward TODOs as Open Questions for MVP resolution

---

## [~2026-06] — Initial Setup

### Added

- Repository created, documentation structure bootstrapped
- 9 foundation ADRs: single-player, no monetization, no offline progress, spec-first, browser-based, settlement as protagonist, docs as source of truth, ADR/RFC process
- 6 design pillars ranked and documented
- Foundation docs: Why.md, Principles.md, Glossary.md, Project Structure.md, Documentation Standards.md, ADR Process.md, RFC Process.md
- Vision docs: Vision Statement, Core Gameplay Loop, Design Pillars, Six-Month Return Test, Respect the Player's Time
- ~70 directories of gameplay/simulation/economy/world/UI/art/technical docs drafted
- AI operating model: role-based system prompts, model-role calibration, session lifecycle
