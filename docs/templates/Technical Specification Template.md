---
title:
id: templates/technical-specification-template

version: 0.1.0
status: Draft
author:

last_updated:

depends_on: []

used_by: []

tags: []
---

# Purpose

*Why does this technical specification exist? State which design document(s) it implements and what technical problem it solves. Link to the corresponding design document(s) by ID. If this spec covers ground not addressed by any design document, explain why.*

---

# Overview

*Summarise the technical approach at a high level. What component(s) are affected? What is the architecture pattern? Which engine subsystems are involved? A reader should understand the shape of the solution without needing to read every section. Aim for 2–3 paragraphs.*

---

# Architecture

*Describe the system architecture. Include component diagrams (ASCII art or referenced images), data flow between components, and interfaces between modules. Be explicit about what lives where, how components communicate, and what coupling exists. If the architecture introduces new patterns, justify them here.*

---

# Data Models

*Define all data structures, schemas, and persistent state. For each entity, specify fields, types, constraints, and relationships. Use tables or code blocks as appropriate. Include serialisation format and migration strategy if the data must persist across versions.*

---

# API/Signatures

*List all public interfaces — function signatures, class APIs, network endpoints, or event signatures. For each entry, include the full signature, parameter descriptions, return values, and a brief description of behaviour and side effects. Non-public helpers may be omitted unless architecturally significant.*

---

# Performance Considerations

*What are the performance constraints? Document expected load, memory budgets, frame budgets (if real-time), and any known hotspots. Include profiling strategy if performance is a known risk. If this system has no meaningful performance concerns, state that explicitly rather than leaving this section empty.*

---

# Testing Strategy

*How will this implementation be verified? List test categories (unit, integration, performance, manual) and any specific test cases derived from the design document's acceptance criteria. Mention testing tools and frameworks. Include notes on test data, mock requirements, and CI integration.*

---

# Dependencies

*What must exist before this can be implemented? List other technical specifications, libraries, tools, or infrastructure. Include version constraints where relevant. Distinguish between hard dependencies (blockers) and soft dependencies (nice-to-have).*

- **Dependency**: *description, version, and status (ready / in-progress / not started)*

---

# Open Questions

*What technical decisions remain unresolved? Each question should have an owner and context for the uncertainty. Questions resolved during review should be marked ~~strikethrough~~ with the resolution noted.*

- **Q**: *question text* — Owner: *name or role*

---

# Related Documents

*Cross-reference all documents that inform or depend on this specification. Include the design document(s) this spec implements, any ADRs referenced, and downstream specs that depend on this one. Use document IDs.*

- `DOC-ID` — *brief description of the relationship*
