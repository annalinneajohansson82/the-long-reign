# The Long Reign

_A browser-based kingdom-building simulation._

Start with a handful of settlers and an untouched frontier. Over many hours, build a capital, colonies, roads, industries, trade networks — and a history that's uniquely yours. Then walk away for six months, come back, and think: *"Wow... I built all this."*

The settlement is the protagonist. The kingdom waits patiently. The stories emerge from the simulation, not from a script.

---

## Status: MVP Playable

The MVP is implemented and playable. You can place a town hall, click trees to gather wood, build houses and a stockpile and a forester's hut, upgrade buildings through multiple tiers, and watch your settlement grow. It's a sandbox — no endpoint, no win condition, just the loop.

**Tech stack:** TypeScript 5 + Vite 6 + PixiJS 8 + React 19

**What exists:**
- 30×20 grid with ~25 trees and 10 villagers
- Click-to-gather: click a tree, nearest villager walks to it, wood is added to stockpile
- 4 building types: town hall (6 upgrade tiers), house (2 tiers, visual variants), stockpile (50 wood cap), forester's hut (auto-plants trees)
- Toolbar with affordability/unlock/cap checks, contextual upgrade prompts
- A* pathfinding, dirty-flag rendering, auto-save, beforeunload save
- Full spec: ~80+ documentation files, ADR log, glossary, 6 design pillars

**What doesn't yet exist:** Exploration, heroes, multiple resources, production chains, colonies, combat, seasons, world generation, audio, pixel art.

---

## Quick Start

```bash
npm install
npm run dev      # dev server on localhost:5173
npm test         # 7 tests
npm run build    # production build
```

---

## Philosophy

- **No monetization.** No premium currency, no battle passes, no daily rewards. Free and open source.
- **No FOMO.** The game never punishes you for taking a break.
- **No teleporting resources.** Logistics are visible. You watch carts move ore from mines to blacksmiths.
- **Cozy complexity.** Rich systems, low stress. Depth through interaction, not punishment.
- **The Six-Month Return Test.** Every feature must answer: *"Will this make the player smile when returning after six months?"*

---

## Documentation

Everything lives in [`docs/`](docs/). Start here:

- [`00-foundation/`](docs/00-foundation/) — why this project exists, design pillars, and how decisions are made
- [`01-vision/`](docs/01-vision/) — the vision, core gameplay loop, and design philosophy
- [`02-gameplay/MVP.md`](docs/02-gameplay/MVP.md) — MVP scope boundary and accepted decisions
- [`08-technical/MVP-Technical-Specification.md`](docs/08-technical/MVP-Technical-Specification.md) — data structures, render architecture, build order

All documentation descends from the foundation. Read in numbered order.

---

## License

This project is open source. License TBD.
