---
title: Notifications
id: 06-ui/notifications

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - 06-ui/ux-principles
  - 06-ui/hud

used_by:
  - Frontend Agent
  - UX Consistency Agent
  - Gameplay Compliance Agent

tags:
  - ui
  - notifications
  - chronicle
  - events
---

# Purpose

Define the notification system — how the game communicates events to the player. This includes Chronicle entries, gameplay event notifications, and system messages. The notification system is subject to the strictest constraints in the project: it must inform without pressuring, and it must never violate the Respect the Player's Time pillar.

---

# Overview

Notifications in The Long Reign serve one purpose: to inform the player about what is happening in their kingdom. They do not create urgency. They do not demand action. They do not punish absence. They are the kingdom's gentle way of keeping the player aware — nothing more.

The Chronicle is the game's flagship notification mechanism for historically significant events. Other notifications cover immediate gameplay events (construction complete, resource milestone, hero status change).

All notifications must pass the Six-Month Return Test: "Will seeing this notification make the player smile when returning after six months?"

---

# Design Goals

- **Informational, not instructional.** Notifications tell the player what happened, not what they should do.
- **Gentle.** Notifications should appear quietly, without urgency cues (no flashing, no red badges, no countdowns).
- **Dismissable.** Every notification must be dismissable by the player. No notification should persist indefinitely without a dismiss option.
- **Non-stacking.** Notifications should not accumulate into an overwhelming backlog. Old notifications should fade or move to the Chronicle.
- **No FOMO.** Never remind the player of what they missed. Never indicate elapsed time since last login. Never compare current state to a hypothetical state if they had played more.
- **Accessible.** Notifications must be announced to screen readers and must not rely solely on visual presentation.

---

# Non-Goals

- Notifications are not a quest log or objective tracker. The game has no daily quests, no mission objectives.
- Notifications are not a tutorial system. Onboarding is a separate concern.
- Notifications are not a replacement for the Chronicle. The Chronicle is the authoritative historical record; notifications are transient.

---

# Notification Types

> **Note:** The source material does not enumerate notification types. The following list is derived from gameplay systems described in the Handoff and design documents.

## 1. Chronicle Entries

**Derived from:** Chronicle (Handoff — flagship system), Emergent Stories (design pillar)

The most important notification type. Chronicle entries record significant historical events. When an event occurs that qualifies for the Chronicle, a notification appears. The player can click through to read the full entry in the Chronicle menu.

**Triggering events:**
- Births
- Marriages
- Deaths
- Colony foundings
- Discoveries
- Disasters
- Hero achievements
- Completed wonders
- Wars
- Technological advances

**Behavior:**
- Chronicle notification appears in the notification area.
- Player can click to open the Chronicle at that entry.
- Notification auto-fades after a reasonable period (TBD — likely 10–30 seconds).
- Chronicle entries are permanent — they persist in the Chronicle menu regardless of notification dismissal.

> **TODO:** Define which events rise to the level of a notification vs. which are recorded silently in the Chronicle.
>
> **TODO:** Define the visual distinction between positive events (birth, wedding, discovery), neutral events (colony founding, tech advance), and negative events (death, disaster, war).

---

## 2. Construction and Upgrade Notifications

**Derived from:** Meaningful Growth (design pillar — progress should always be visible), Buildings (`02-gameplay/Buildings.md`)

Notifies the player when construction or upgrade completes.

**Behavior:**
- "Building Complete" or "Upgrade Complete" with building name and location.
- Auto-dismisses after a short period (TBD).
- Optionally: a subtle in-world visual pulse on the completed building.

> **TODO:** Define notification timing — immediate on completion, or batched (e.g., "3 buildings completed")?

---

## 3. Resource Milestones

**Derived from:** Economy (Handoff), Meaningful Growth

Notifies the player when resource thresholds are reached (first coal mine, 1000 food stored, etc.). These are achievement-like notifications that reinforce the sense of growth.

> **TODO:** Define which milestones trigger notifications. Derive from the economy and progression systems when specified.

---

## 4. Hero Status Changes

**Derived from:** Heroes (Handoff — hero mortality, injury system), Combat (`02-gameplay/Combat.md`)

Notifies the player of hero state changes:
- Hero injured (Medium/Hard difficulty) — returns to capital
- Hero death (Hard difficulty)
- Hero level up
- Hero recruitment
- Significant hero achievement

> **TODO:** Define the full list of hero status notifications.
>
> **TODO:** Define the visual treatment for hero death notifications — this is a rare, emotionally significant event.

---

## 5. Seasonal and Environmental Events

**Derived from:** Seasons (Handoff — "Seasons affect gameplay. Both positive and negative.")

Notifies the player of seasonal transitions and significant environmental events.

**Examples (from source material):**
- Harvest season begins
- Winter hardships
- Exploration opportunities open/close

> **TODO:** Define the full list of seasonal notifications. Coordinate with the seasons system specification (not yet written).

---

## 6. System Messages

Low-priority system messages: autosave confirmation, import/export status, settings applied. These should be unobtrusive — a brief toast or status bar message.

---

# Notification Behavior

## Visual Presentation

- Notifications appear in the notification area of the HUD (see `HUD.md`).
- They should not obscure the kingdom — no center-screen popups for routine notifications.
- Animation: gentle fade-in, no bouncing, no flashing, no pulsing urgency indicators.
- Each notification has a type indicator (icon) and a short text message.
- Clicking a notification navigates to the relevant interface (Chronicle, building, hero sheet).

> **TODO:** Define the exact visual design — position, size, icon set, typography, animation parameters.
>
> **TODO:** Define maximum number of simultaneously visible notifications.

---

## Dismissal and Queuing

- Every notification is dismissable (click X, or auto-fades).
- Notifications should not accumulate. If the player is away from the keyboard, old notifications should fade; the player should not return to a screen full of unread notifications.
- The Chronicle is the permanent record. Notifications are ephemeral prompts to look at the Chronicle.

> **TODO:** Define the notification queue behavior — max queue length, FIFO vs. priority, what happens when the queue is full.
>
> **TODO:** Define whether notifications are queued while menus are open, or delivered immediately.

---

## No-Absence Policy

When a player returns after an absence (hours, days, or six months), the notification area must be empty. No "while you were away" summary. No backlog of missed notifications. No "you missed X events."

The player can open the Chronicle to see what happened. The notification system does not surface absence-related information.

This is a hard requirement derived from Respect the Player's Time.

> **Open Question:** Is a single, unobtrusive "Your kingdom has been quiet. Open the Chronicle to catch up." message acceptable on return, or does any return message violate the spirit? See `01-vision/Respect the Player's Time.md`, Open Questions.

---

# Accessibility

- Notifications must be announced via `aria-live` regions for screen reader users.
- Notification text must be concise and screen-reader friendly.
- Notification icons must have text alternatives.
- Notification color coding must have secondary indicators (per `Accessibility.md` requirement #3).

---

# Acceptance Criteria

- [ ] All Chronicle-triggering events produce a notification.
- [ ] Notifications are dismissable and auto-fade.
- [ ] No notification conveys urgency, pressure, or FOMO.
- [ ] Returning after an absence presents no notification backlog.
- [ ] Notifications are accessible to screen readers.
- [ ] Clicking a Chronicle notification opens the Chronicle at the relevant entry.
- [ ] Notification area is empty on initial game load (fresh save).
- [ ] No notification contains a countdown, timer, or "time remaining" element.

---

# Open Questions

- TODO: Complete list of events that trigger notifications vs. silent Chronicle entries.
- TODO: Notification animation parameters — duration, easing, whether they respect reduced motion.
- TODO: Maximum simultaneous notifications and queue overflow behavior.
- TODO: Visual design — position, icons, typography, color coding.
- TODO: Whether the player can configure notification preferences (which types appear, duration, position).
- TODO: Sound design — do notifications have associated audio cues? If so, how does this interact with the audio accessibility requirements?

---

# Related Documents

- `UX Principles.md` — principles #2 (No FOMO) and #3 (Cozy Visual Hierarchy)
- `HUD.md` — notification area in the HUD
- `Menus.md` — Chronicle menu (where notifications lead)
- `Accessibility.md` — accessibility requirements
- `01-vision/Respect the Player's Time.md` — the hard constraint on no-FOMO
- `01-vision/The Six-Month Return Test.md` — evaluation heuristic
- `03-simulation/Chronicle.md` — TODO: link when populated
