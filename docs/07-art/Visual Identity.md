---
title: Visual Identity
id: 07-art/visual-identity

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-06

depends_on:
  - 07-art/art-direction
  - 07-art/pixel-art-style
  - 00-foundation/principles

used_by:
  - UI implementation
  - Branding and marketing assets
  - All visual presentation

tags:
  - art
  - visual-identity
  - branding
  - ui
  - color
  - typography
---

# Purpose

Define the visual identity of The Long Reign beyond pixel art assets — the UI design philosophy, color systems, typography, branding, and the visual relationship between interface and game world. The visual identity ensures that the game presents a coherent, warm, and inviting face to the player that aligns with the cozy fantasy atmosphere.

---

# Overview

The visual identity of The Long Reign must make the player feel they are entering a world worth spending time in. The UI should never compete with the kingdom for attention — the settlement is the visual focus. The interface exists to serve the player, not to demand engagement.

The source material provides no direct UI or branding specification. The following is derived from the design pillars, atmosphere, and gameplay systems. All explicit design choices not grounded in source material are marked as TODO or Open Questions.

---

# Design Goals

- **Kingdom-First Design.** The game world is the primary visual element. UI elements should be as minimal and unobtrusive as possible while remaining functional.
- **Cozy Fantasy Identity.** Colors should be warm. Typography should feel handcrafted but readable. The visual identity should say "come in and stay a while" — not "hurry up and play."

  > **TODO:** Not confirmed by 00-foundation/01-vision — requires Creative Director confirmation.
- **Meaningful Growth Reflection.** The UI should reflect kingdom progression. A late-game HUD might show more information (more resources, more colonies, more heroes) than an early-game HUD, but should scale gracefully.
- **Respect the Player's Time.** The UI must never display: countdown timers, daily reward claim buttons, login streak trackers, energy bars, premium currency indicators, battle pass progress, FOMO banners, or "you've been gone" guilt messages.
- **The Six-Month Return Test.** A returning player should feel welcomed, not overwhelmed. The UI should help them re-orient without drowning them in "what you missed" notifications.
- **Accessibility.** The UI should be readable and navigable. Color should not be the sole means of conveying information. See `docs/06-ui/Accessibility.md` for detailed accessibility requirements (TODO: populate).

---

# Non-Goals

- The visual identity does not mimic any existing game's UI or branding.
- The UI is not gamified. No progress bars that create urgency. No red notification badges that demand clearing.
- The UI does not use dark patterns — no confusing layouts that trick the player into unintended actions.
- This document does not specify individual UI component pixel measurements or implementation details. Those belong in `docs/06-ui/` and technical specifications.

---

# Color System

> **TODO:** The source material provides no color specifications. The following is derived from the cozy fantasy frontier atmosphere.

### Philosophy

The color system should feel warm, natural, and inviting. Earth tones dominate. Bright, saturated colors are used sparingly for emphasis — never for urgency.

### Proposed Palette Categories

| Category | Description | Example Range |
|----------|-------------|---------------|
| Background | Warm neutrals — parchment, wood, stone | Beiges, warm grays, browns |
| Primary | Key interactive elements — buttons, headers | Warm gold, amber |
| Secondary | Supporting elements — borders, dividers | Muted green, soft brown |
| Accent | Important state indicators — selected, highlighted | Soft amber glow, warm teal |
| Text Primary | Main body text | Dark brown or warm charcoal |
| Text Secondary | Less important text — labels, descriptions | Muted brown-gray |
| Success | Positive feedback — milestone, upgrade complete | Soft green-gold |
| Warning | Attention needed — resource shortage, fire risk | Muted amber-orange |
| Danger | Failure states — fire, revolt, decline | Muted red-brown |
| Seasonal Overlay | Season-specific UI tinting | Spring green, autumn amber, winter blue-gray |

> **Open Question:** Should the color system be formalized as design tokens (W3C DTCG format) for implementation consistency?

---

# Typography

> **TODO:** The source material provides no typography specification.

### Philosophy

Typography should feel handcrafted and thematic without sacrificing readability. The player will spend many hours reading UI text — legibility is paramount.

### Proposed Type Hierarchy

| Role | Style | Notes |
|------|-------|-------|
| Title / Logo | Custom or display typeface | Thematic, recognizable, warm |
| Headings | Serif or slab-serif | Evokes fantasy / historical feel |
| Body | Highly readable serif or sans-serif | Must be legible at small sizes |
| UI Labels | Sans-serif, clear | Functional, not decorative |
| Chronicle Text | Serif, book-like | Evokes historical record, journal |
| Numbers / Stats | Tabular figures, monospaced | For resource counts, timelines |

> **Open Question:** Should the game use web fonts, custom bitmap fonts (pixel art style), or a mix? Are there specific font recommendations?

---

# UI Design Philosophy

### Kingdom-First Layout

The game world occupies the majority of the screen. UI elements should:

- Be placed at screen edges (top bar, bottom bar, side panels) to avoid obscuring the kingdom
- Use transparency or semi-transparency where possible to maintain world visibility
- Be collapsible or hideable — the player should be able to view their kingdom unobstructed

### Information Density

Follow the Cozy Complexity pillar: rich information without overwhelm.

- **Early game:** Minimal HUD — few resources, few buildings, few heroes. The UI should feel spacious.
- **Mid game:** Moderate HUD — more resources to track, more colonies, Chronicle entries accumulating. UI expands gracefully.
- **Late game:** Full HUD — all systems active. UI should remain organized and readable, not cluttered.

### Panel Design

Panels (building details, villager info, Chronicle, research tree, etc.) should:

- Feel like part of the world — parchment textures, wood frames, thematic borders
- Be clearly readable with good contrast
- Not obscure the entire game world when open
- Have smooth open/close animations (see `Animation.md`)

---

# Branding

> **TODO:** The source material provides a working title ("The Long Reign") and tagline ("Rise of a Living Kingdom") but no branding direction.

### Title Treatment

The game's title should communicate the core themes: time, permanence, growth, and warmth.

- **The Long Reign** — suggests a kingdom that endures, a player's lasting mark on the world
- The title treatment should feel established, not aggressive. Warm, not cold.

### Tagline

**Rise of a Living Kingdom** — supports the simulation focus. "Living" directly references the Living Simulation pillar. "Rise" suggests organic growth, not conquest.

### Logo Direction

> **Open Question:** What is the logo style? Possibilities derived from atmosphere:
> - A crown or castle silhouette in warm pixel art
> - A tree growing from a settlement (growth + life)
> - Typography-forward with ornamental flourishes
> - TODO: Formal logo design direction needed

---

# HUD Elements

> **TODO:** The source material does not specify HUD layout. The following is derived from gameplay requirements.

### Required HUD Elements (derived from game systems)

| Element | Purpose | Source |
|---------|---------|--------|
| Resource Display | Show current resource counts (coal, steel, glass, leather, cloth, food, luxury goods, etc.) | Economy system |
| Population Display | Show villager count, available workers | Villager system |
| Building Menu | Access building placement and upgrade | Building system |
| Road Tool | Pave desire paths, build roads | Road system |
| Decoration Menu | Place decorations | Decoration system |
| Season/Date Display | Show current season and in-game date | Seasons system |
| Chronicle Access | Open the Chronicle | Chronicle system |
| Hero Panel | View and manage heroes | Hero system |
| Research Tree | Access research | Research system |
| Colony Overview | Switch between capital and colony views | Colony system |
| Minimap | Navigate the world map | Exploration system |
| Save/Load/Menu | Access save, load, settings | Save system |

### What the HUD Must Not Display

- Daily reward claims or countdowns
- Login streak counters
- Energy bars
- Premium currency balances
- Battle pass progress
- "Limited time!" banners
- Red notification badges demanding attention
- "Welcome back! Here's what you missed!" guilt summaries *(Note: per `Respect the Player's Time.md` Resolved Questions, neutral "here's what happened" welcome-back summaries are permitted if opt-out via settings and no rewards are attached — only guilt/FOMO-framed versions are prohibited.)*

---

# Chronicle Visual Identity

The Chronicle is one of the game's flagship systems. Its visual identity deserves special consideration.

- Should feel like a **historical record** — a book, scroll, or tapestry
- Typography should evoke written history (serif, book-like)
- Events should be organized chronologically with clear visual hierarchy
- Milestone events (colony founding, wonder completion, hero achievements) should have visual distinction (e.g., illuminated initials, ornamental dividers)
- Should feel **personal** to the player's kingdom — not a generic game log

---

# Seasonal UI Theming

Seasons affect gameplay. The UI should subtly reflect the current season:

- **Spring:** Fresh green accents, floral ornamentation
- **Summer:** Warm gold accents, bright but not harsh
- **Autumn:** Amber and orange accents, harvest motifs
- **Winter:** Cool blue-gray accents, frost ornamentation, warm contrast elements (firelight, candles)

Thematic changes should be subtle — the UI should not dramatically change layout or readability per season.

---

# Accessibility Baseline

> **TODO:** Detailed accessibility specification belongs in `docs/06-ui/Accessibility.md`. This section outlines art-relevant accessibility requirements.

- Color is not the sole means of conveying information (resource warnings, building states, etc.)
- UI text must meet contrast ratio requirements
- Interactive elements must be clearly distinguishable from non-interactive elements
- No rapidly flashing or strobing elements (photosensitivity)
- UI should scale gracefully with browser zoom

---

# Acceptance Criteria

- [ ] The UI color palette is warm and consistent with cozy fantasy atmosphere
- [ ] The HUD does not display any forbidden elements (daily rewards, energy, premium currency, FOMO indicators)
- [ ] The Chronicle has a distinct visual identity that evokes historical record-keeping
- [ ] UI elements do not obscure the game world unnecessarily
- [ ] Seasonal UI theming is subtle and readable
- [ ] All UI text meets contrast and readability standards
- [ ] The game world is visually dominant over the UI
- [ ] The title/logo treatment aligns with the cozy fantasy tone

---

# Open Questions

1. What is the logo design direction? (Crown? Tree? Typographic? Settlement silhouette?)
2. What is the title screen / main menu visual concept?
3. Should the color system be formalized as design tokens (W3C DTCG)?
4. What are the specific typefaces for headings, body, UI labels, and Chronicle?
5. Should UI elements use pixel art styling (consistent with game art) or a higher-resolution overlay style?
6. What is the HUD layout? (Top bar + bottom bar? Side panels? Floating?)
7. How does the UI scale across different browser window sizes? (Responsive? Fixed viewport?)
8. Should there be an optional "immersion mode" that hides all UI?
9. How are colonies visually differentiated in the UI? (Colored tabs? Unique icons per colony specialization?)
10. What is the loading screen and splash screen design?

---

# Related Documents

- `Art Direction.md` — overall visual philosophy (07-art/art-direction)
- `Pixel Art Style.md` — pixel art technical constraints (07-art/pixel-art-style)
- `Animation.md` — UI animation direction (07-art/animation)
- `Audio.md` — UI audio feedback (07-art/audio)
- `docs/06-ui/HUD.md` — HUD specification (TODO: populate)
- `docs/06-ui/Menus.md` — menu specification (TODO: populate)
- `docs/06-ui/Accessibility.md` — accessibility specification (TODO: populate)
- `docs/01-vision/Design Pillars.md` — the six design pillars (VIS-002)
- `docs/00-foundation/Principles.md` — design principles (00-foundation/principles)
- `docs/03-simulation/Chronicle.md` — Chronicle system
- `docs/03-simulation/Seasons.md` — seasonal effects
- `docs/02-gameplay/Buildings.md` — building UI interactions (02-gameplay/buildings)
- Source: *The Long Reign — Project Handoff* § Respect the Player's Time (forbidden HUD elements), § Chronicle, § Decorations
- Source: *Project Genesis — Brainstorming History* § The Chronicle, § Living Memories
