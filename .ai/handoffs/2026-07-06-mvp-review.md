---
title: Session Handoff — Chief Engineer MVP Review (Pre-PTO)
version: 0.1.0
status: Draft
last_updated: 2026-07-06
tags:
  - ops
  - ai
  - handoff
  - mvp
  - review
---

# Handoff

## Session Metadata

- **Date**: 2026-07-06
- **Role**: Chief Engineer (final session before PTO — see `model-role-calibration.md` for role fallbacks from 2026-07-07)
- **Task**: Play-test the MVP end-to-end and deliver a full engineering + design review with an actionable backlog for the team to execute during the Chief Engineer's absence.

## How this review was produced

1. Full read of the implementation (`src/`, 18 files) against `docs/02-gameplay/MVP.md`, `docs/02-gameplay/Buildings.md`, and `docs/08-technical/MVP-Technical-Specification.md`.
2. Reducer-level bug reproductions (7 passing repro tests, run via Vitest against the real `gameReducer`).
3. Automated browser playthrough (Chromium + Playwright against `npm run dev`): town hall placement, 144 gather clicks, upgrade attempt, save/load round-trip, FPS + heap measurement.
4. Two delegated sub-reviews: **Lead Systems Designer** (design-doc consistency + economy math) and **QA Lead** (test suite, flakiness measurement, tooling audit). Their verified findings are folded in below.

**Verdict:** The core loop *works* — click tree → villager walks → wood → place/upgrade — and the architecture (pure reducer, actions, React overlay) is the right shape. But the MVP currently **cannot pass its own validation test** ("loop feels satisfying for 20–30 minutes", MVP.md:120): one guaranteed crash, one runaway memory leak, and one progression dead-end each independently end a session well before 30 minutes.

---

# Findings

## P0 — Game-breaking. Fix before any further play-testing.

### P0-1. Building a forester freezes the game ~30 s later (guaranteed crash)

`src/game/Game.ts:47` dispatches `{ type: 'TICK', foresterPick: Math.random() }` — a float in [0,1). The reducer (`src/game/state/GameState.ts:174`) computes `const idx = action.foresterPick % empty.length`, which for a float < 1 returns the float itself; `empty[0.736…]` is `undefined` and `spot.x` throws `TypeError`. Because the throw happens before the reducer returns, `foresterTimer` never resets — **every subsequent tick re-throws and the simulation freezes permanently**, exactly `FORESTER_INTERVAL` (1800 ticks ≈ 30 s) after the first forester is placed. Verified with a repro test.

**Fix:** dispatch an integer seed (`Math.floor(Math.random() * 2**31)`) and/or `Math.floor(...)` in the reducer before the modulo. Add the regression test from the QA test plan (item 1).

### P0-2. Render loop leaks memory unboundedly — 9 fps and 2.7 GB heap after ~2 minutes

Measured in the playthrough: **9.3 fps, 2748 MB JS heap** after roughly two minutes of play. Two compounding defects in `src/game/Game.ts`:

- The "dirty flag" is decorative: `dispatch()` sets `dirty = true` unconditionally, and TICK is dispatched every animation frame, so `render()` rebuilds the entire scene (≈640 new `Graphics` objects) 60×/second.
- `render()` calls `this.stateContainer.removeChildren()`, which **removes but does not destroy** children in PixiJS 8. Every frame's Graphics objects (and their GPU-side GeometryData) are leaked.

Consequence: fps decays continuously, and because the simulation is tick-per-frame (see P1-2), the game itself slows to a crawl. The README/CHANGELOG claim of "dirty-flag rendering — only re-render on state change" is factually untrue as shipped.

**Fix (minimum):** destroy children on rebuild (`removeChildren().forEach(c => c.destroy(true))`) and only mark dirty when TICK actually changed state. **Fix (right):** retained scene graph — create Graphics once per entity, mutate position/visibility on change, per the renderer split the tech spec already specifies (`GridRenderer`, `TreeRenderer`, …, MVP-Technical-Specification.md:76-81).

### P0-3. Progression dead-ends at Town Hall tier 2 — 4 of the 6 advertised tiers are mathematically unreachable

Wood is hard-capped at 50 (`initialState.ts:74`; overflow discarded per Resources.md/MVP.md). TH upgrade costs are 50/150/450/1350/4050 (`Buildings.md:87`, `building.ts:30`). **150 > 50: TH2→3 can never be afforded**, no matter how long the player plays. Verified in a repro test and in the browser.

Worse, the intuitive fix doesn't exist: **placing a stockpile is a no-op** — `PLACE_BUILDING` never touches `stockpileCapacity` (the `STOCKPILE_CAPACITY` constant in `building.ts:69` is dead code). The player pays 5 wood for a sprite. This is a contradiction *within the design docs* (cost curve in Buildings.md vs. fixed capacity in Resources.md:137-140 / MVP.md:114), so per the Chain of Authority it is a **design decision, routed to the Lead Systems Designer / Creative Director** — see Design Decisions Required below. Engineering must not invent the fix.

## P1 — Spec violations and major defects

1. **Unreachable trees are gathered remotely.** `findPath` returns `[]` both for "no path" and "already there"; `GATHER` assigns the villager anyway and TICK promotes an empty-path walker straight to `gathering` — a tree fully walled off by buildings is chopped from across the map and wood credited (repro-verified). Spec explicitly requires "No valid path → villager remains idle" (MVP-Technical-Specification.md:324). Fix: distinguish no-path from zero-length path; reject the assignment.
2. **Simulation speed is frame-rate-coupled.** TICK fires once per `requestAnimationFrame` with no fixed timestep: on a 120 Hz display the whole game runs 2× fast; at the leaked-heap 9 fps it runs 6× slow. All balance timings (forester 30 s, sapling 30 s, gather 1 s) silently scale with the player's monitor. Fix: fixed-timestep accumulator (e.g. 60 ticks/s of simulated time regardless of render rate).
3. **Villagers move 1 tile per tick = 60 tiles/second.** Spec says "one tile per N ticks" (MVP-Technical-Specification.md:228). Walking is effectively teleportation — the single most visible piece of the core loop ("watch the villager walk to the tree") doesn't read at all. Pick N (6–10 ticks/tile ≈ 6–10 tiles/s) and interpolate sub-tile rendering.
4. **Save format has no version and no validation.** `saveManager.ts` does a bare `JSON.parse(...) as GameState`. Spec requires `version: 1` + validate-on-load (MVP-Technical-Specification.md:276-282). Any schema change or hand-corrupted valid-JSON save will crash deep in the reducer/renderer instead of falling back to a new game. Playtest confirmed the saved blob has no `version` field.
5. **The reducer trusts the UI for all gating.** Repro-verified: `PLACE_BUILDING` happily places a forester at TH tier 1 (`unlocksAtTownHallTier` is only read by `Toolbar.tsx`), and a **second town hall** can be placed during the `playing` phase (the townHall-specific branch only guards the `placingTownHall` phase; the generic branch has no type check). Invariants belong in the reducer; the toolbar is presentation.
6. **Building IDs collide.** `id: building-${state.gameTime}` — any two placements between ticks share an ID (repro-verified: two houses both `building-0`). Upgrades then hit the wrong building (`find` by id). Use a monotonic counter in state or `crypto.randomUUID()`.
7. **Only the first forester ever plants.** `state.buildings.find(b => b.type === 'forester')` + a single global `foresterTimer`. A second forester hut is inert (repro-verified). Either per-building timers or an explicit "max 1 forester" rule — currently nothing prevents buying multiple useless huts.
8. **Idle wander is specified but absent.** MVP.md:73/116 and the tech-spec state machine (wander-timer self-loop) require it; `villager.ts` has no wander state and TICK has no idle branch. The settlement reads as frozen mannequins between clicks — this is pillar-level ("Living Simulation").
9. **React HUD re-renders 60×/second.** `useGameState` subscribes to every dispatch including TICK, so the entire overlay re-renders every frame even when nothing visible changed. Throttle notifications to actual state changes (the TICK reducer already returns a new object every tick — consider returning the same reference when nothing changed, which also fixes the dirty flag).

## P2 — UX / polish gaps (all specified, none implemented)

1. **No placement preview or invalid-tile rejection cue** (Buildings.md:70 "visual rejection cue"; tech-spec M11 `GridOverlay.tsx`). Clicking an occupied tile in placement mode fails silently and placement mode persists with no ghost showing what/where you're placing.
2. **No stockpile fill indicator** (M8/M11 `StockpileRenderer`) — the stockpile has no feedback at all, compounding P0-3's "it does nothing" problem.
3. **Layout:** the 960×640 grid is pinned top-left with dead space right/bottom; the top HUD bar **covers grid row 0** — a tree spawned at y=0 sits half-hidden behind the wood counter (observed in playtest screenshots). Center the board and exclude row 0 from spawns, or inset the canvas below the HUD.
4. **No "new game" control.** With auto-save + beforeunload-save, a player (or tester) can never restart without dev-tools. Even the MVP validation protocol needs a reset button.
5. **Unlock/afford feedback is tooltip-only** (`title` attribute) — invisible on touch devices and not announced to screen readers. Show the lock reason inline; add ARIA labels. Keyboard access to canvas interactions is absent entirely (docs/06-ui/Accessibility.md is aspirational for MVP, but the toolbar buttons at least should be reachable).
6. **Saplings are harvestable for the full 3 wood** the moment they're planted (`GameState.ts:132`), defeating the 30 s growth pacing. Design call needed (see below), but flagging here because it's also a one-line exploit.

## Design decisions required (route to Lead Systems Designer → Creative Director)

The implementation must not invent these; per the Decision Firewall they are stop-conditions for the affected work:

| # | Decision | Where it lands |
|---|----------|----------------|
| D1 | Rebalance TH cost curve so every tier is bankable under achievable capacity | `Buildings.md` Upgrade Costs, `MVP.md` Accepted Decisions |
| D2 | Make stockpiles grant capacity (e.g. small innate base + 50 per stockpile) so the building exists for a reason | `Resources.md` Storage, `MVP.md` |
| D3 | Explicit unlock-tier table — the implemented "everything unlocks at TH2" was invented (docs are silent) and voids the documented T1 house cap of 2 (`Buildings.md:99`); recommend house/stockpile/forester at T1 | `Buildings.md` |
| D4 | Reword "TH upgrades unlock new building types" (`MVP.md:56`) — with 4 total types there is nothing to unlock; TH scales caps/capacity only | `MVP.md`, `Buildings.md:57` |
| D5 | Give houses a mechanical effect (recommend: villager count scales with houses, tying the cap ladder to gather throughput) or rescope the loop language — currently houses are purely cosmetic wood-sinks against a fixed 10 villagers | `MVP.md:73`, `Buildings.md:58` |
| D6 | Sapling harvestability: not harvestable until mature, or reduced yield | `Resources.md:126-128` |
| D7 | Idle wander: implement as specced, or formally strike from Accepted Decisions | `MVP.md:116` |
| D8 | Multiple foresters: allowed (per-hut timers) or capped at 1 | `Buildings.md` |
| D9 | Re-label `Progression.md` as full-game scope — its acceptance criteria reference Explore/Research/Heroes/Chronicle, all out of MVP scope | `Progression.md` |

Economy context for D1/D2 (Lead Systems Designer's math): map holds 75 wood + 5 starting; the forester sustains ≈6 wood/min; everything buildable after TH2 costs 185 wood ⇒ ≈26 minutes of pure forester-waiting with zero visible town-hall growth after minute ~3. As designed, the 20–30 minute validation window is mostly idle grind.

## Process & tooling

1. **`npm run lint` is broken** — ESLint is not in devDependencies and there is no eslint config anywhere; Prettier absent too. Both are claimed by the tech spec. Install + flat config + format check.
2. **No CI.** No `.github/` at all. Minimum workflow: `npm ci && tsc --noEmit && vitest run && npm run build` on PR.
3. **Test suite: 7 tests, and one is flaky.** The town-hall placement test asserts on tile (10,10) while `createInitialState()` scatters trees randomly — measured **4.5% failure rate** (Monte-Carlo over 100k inits; 1 failure in 30 real suite runs). Root cause: `Math.random()` inside `initialState.ts` — inject a seeded RNG (`src/utils/random.ts` was specced and never created). Zero coverage of GATHER, TICK/villager state machine, forester (where P0-1 lived), saplings, save/load, pathfinding, stockpile clamp, house cap. Both P0 code bugs sat in untested paths.
4. **Architecture drift vs tech spec** — no `systems/` layer, renderers merged into one file, A* embedded in `GameState.ts` instead of `utils/pathfinding.ts`, inline styles instead of CSS Modules, custom Game class instead of context+useReducer. Several of these are defensible simplifications, but docs are the source of truth here: either refactor or amend the spec deliberately. The spec's file layout is also what makes the P0-2 renderer rewrite tractable.
5. **Docs overstate the build**: README/CHANGELOG claim dirty-flag rendering (false in effect) and "M1–M10 complete" while M8's fill indicator and several M-level acceptance behaviors (above) are missing. Sync after fixes.
6. `tools/bootstrap-docs.sh` hardcodes `$HOME/Projects/the-long-reign`.

---

# Prioritized backlog for the team

**Week 1 — make it playable (engineering, no design input needed):**
1. Fix forester float-index crash + regression test (P0-1).
2. Fix render leak: destroy on rebuild, real dirty flag; then retained renderers per spec (P0-2).
3. Fixed-timestep simulation; villager speed N ticks/tile with interpolation (P1-2, P1-3).
4. De-flake tests via seeded RNG injection; add CI workflow; fix lint tooling (Process 1–3).
5. Save versioning + shape validation + corrupt-save fallback (P1-4).

**Week 2 — correctness hardening:**
6. Reducer-level gating (unlock tiers, single town hall, house cap) (P1-5); unique building IDs (P1-6); no-path rejection (P1-1); React notification throttling (P1-9).
7. QA Lead's 10-test plan (see QA report in PR description) — GATHER, TICK state machine, save round-trip, stockpile clamp, house cap, A* properties.

**Week 2–3 — pending design decisions D1–D9:**
8. Implement rebalanced economy + stockpile capacity + unlock table once approved.
9. Idle wander, per-hut forester timers, sapling rules per decisions.

**Week 3 — UX polish (spec already covers all of it):**
10. Placement ghost + invalid-tile cue, stockpile fill indicator, centered board / HUD-safe row 0, new-game button, inline lock reasons + basic ARIA.

**Exit criterion:** a fresh player can play 30 minutes with no crash, stable fps and memory, visibly walking villagers, reach TH3+ (post-rebalance), and every documented acceptance criterion in Buildings.md is either met or formally amended.

## Warnings

- Do **not** stack economy fixes before D1/D2 are approved — the numbers interlock (capacity, cost curve, forester throughput) and piecemeal changes will just move the dead-end.
- The renderer rewrite (P0-2) and fixed timestep (P1-2) touch the same loop; do them as one PR to avoid re-testing twice.
- When adding save versioning, bump to `version: 1` and treat all existing unversioned saves as corrupt → new game. Do not attempt migration of pre-version saves.
- Repro tests for every finding above exist in the review session transcript; the QA test plan enumerates them — write them first, watch them fail, then fix.
