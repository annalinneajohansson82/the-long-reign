---
title:
id: templates/design-document-template

version: 0.1.0
status: Draft
author:

last_updated:

depends_on: []

used_by: []

tags: []
---

# Purpose

*Why does this document exist? State the problem or opportunity this design addresses in one or two sentences. Keep it focused — if you need more than a paragraph, the scope may be too broad. Reference vision documents or design pillars from `Principles.md` where applicable.*

---

# Overview

*Summarise the design at a high level. A reader should understand what this system is, who it affects, and how it fits into the broader project — all without reading the rest of the document. Aim for 2–4 paragraphs.*

---

# Design Goals

*What does this design intend to achieve? List concrete, measurable goals. Each goal should be something a reviewer can verify after reading the full document. Prefer goals that describe outcomes, not implementation details.*

- **Goal**: *description of the desired outcome*

---

# Non-Goals

*What is explicitly out of scope? Listing non-goals prevents scope creep and clarifies boundaries. Anything not listed here may still be considered in scope during review. If a non-goal is likely to become a goal later, note that here.*

- **Non-Goal**: *description of what this design deliberately excludes*

---

# Gameplay Rules

*Define the mechanics, constraints, and behaviour of this system. Be precise enough that an engineer could implement from this section alone. Use numbered rules, state machines, or tables as needed. If a rule has exceptions, list them explicitly.*

---

# Player Experience

*Describe what the player sees, hears, feels, and does. Walk through the flow from the player's perspective — first encounter, repeated use, mastery. Include UI mockup references if available. This is the "why should the player care" section and should connect back to design pillars.*

---

# Edge Cases

*What happens at the boundaries? List unusual conditions, extreme inputs, and interactions with other systems. Every edge case should have a resolution or an explicit decision to defer. An unhandled edge case is a future bug.*

- **Case**: *description of edge case and expected behaviour*

---

# Acceptance Criteria

*How do we know this design is correctly implemented? Write testable, binary criteria. Each criterion should be something a QA tester or automated test can verify with a yes/no answer. These criteria flow directly into the Technical Specification's testing strategy.*

- [ ] *criterion — phrased as a verifiable statement*

---

# Open Questions

*What hasn't been decided yet? Each question should have an owner and, ideally, a deadline. Mark resolved questions with ~~strikethrough~~ rather than deleting them — the history matters for future readers.*

- **Q**: *question text* — Owner: *name or role*

---

# Related Documents

*Cross-reference all documents that inform, depend on, or are informed by this one. Use document IDs (e.g., `VIS-001`, `foundation/documentation-standards`) rather than file paths. Update `depends_on` and `used_by` in both this document and the referenced documents.*

- `DOC-ID` — *brief description of the relationship*

---

# Changelog

*Track every substantive change to this document after initial approval. Include date, author, version bump, and a summary of what changed. Minor typo fixes that don't affect meaning may be omitted.*

| Date | Version | Author | Change |
|------|---------|--------|--------|
|      |         |        |        |
