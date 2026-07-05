---
title: Research
id: gameplay/research
version: 0.1.0
status: Draft
author:
last_updated: 2026-07-05
depends_on: []
used_by:
  - 02-gameplay/Progression.md
  - 02-gameplay/Buildings.md
tags:
  - gameplay
  - research
  - technology
  - progression
---

# Purpose

Define the research system — the technology tree, how research is conducted, and how technological advances affect the kingdom.

---

# Overview

Research is a medium-sized technology tree that allows villages to evolve into different economic identities. It is designed to be deep enough to provide meaningful choice without being overwhelming. Research should produce visible changes in the kingdom whenever possible — new architecture, improved logistics, new production capabilities.

Research is one of the systems feeding into the core gameplay loop: expanding the settlement unlocks new opportunities, and research is a primary source of those opportunities.

---

# Design Goals

- **Medium Scope.** The technology tree should be large enough for meaningful choice without being overwhelming.
- **Visible Change.** Research should change what the player sees — architecture, infrastructure, settlement appearance.
- **Economic Identity.** Different research paths allow villages and colonies to develop distinct economic identities (agriculture, trade, industry, religion).
- **Long-Term Progression.** Research supports many hours of incremental advancement.

---

# Non-Goals

- The technology tree is not intended to be a vast, overwhelming 4X-style tree.
- Research is not gated behind arbitrary timers or premium currency.
- This document does not define specific technologies, costs, or prerequisites.

---

# Research Branches

The source material provides four example research directions. The complete tree is not yet specified.

## Agriculture

Technologies improving food production, farming efficiency, and agricultural output.

> **TODO:** Define agriculture technologies.

## Trade

Technologies improving trade routes, market efficiency, and economic exchange.

> **TODO:** Define trade technologies.

## Industry

Technologies improving production chains, manufacturing efficiency, and resource processing.

> **TODO:** Define industry technologies.

## Religion

Technologies or developments related to religious buildings, cultural influence, and spiritual life of the settlement.

> **TODO:** Define religion technologies.

---

# Research Mechanics

The source material does not specify how research is conducted. Open questions include:

> **TODO:** Define research mechanics:
> - How is research initiated (player choice from a tree, automatic based on conditions)?
> - What is the cost of research (resources, time, villager assignment)?
> - Are there research buildings (e.g., library, university)?
> - How do research prerequisites work?
> - Is research global (shared across all settlements) or per-settlement?

---

# Visible Research Effects

A design principle: research should produce visible changes whenever possible. Examples from source material:
- Research changes architecture.
- Infrastructure improvements are observable.

> **TODO:** For each technology, define what visible change occurs in the settlement.

---

# Chronicle Integration

Technological advances are recorded in the Chronicle alongside births, deaths, marriages, and other major events.

---

# Acceptance Criteria

- [ ] A technology tree exists with at least the four defined branches (agriculture, trade, industry, religion).
- [ ] Research produces at least one visible change in the settlement.
- [ ] Technological advances are recorded in the Chronicle.
- [ ] Different research paths lead to observably different settlement identities.

---

# Open Questions

1. How is research conducted mechanically (player choice, resource cost, time, buildings)?
2. What is the complete technology tree?
3. Is research global or per-settlement?
4. Can research be accelerated, and if so, how?
5. What visible changes does each technology produce?

---

# Related Documents

- `02-gameplay/Progression.md` — How research fits into overall progression
- `02-gameplay/Buildings.md` — Research buildings
- `03-simulation/Chronicle.md` — Chronicle event recording
- `04-economy/` — Economy documents (research costs likely involve resources)
- `00-foundation/Glossary.md` — Glossary definitions
