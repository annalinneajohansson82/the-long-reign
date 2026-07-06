---
title: Session Handoff Template
version: 0.1.0
status: Draft

last_updated: 2026-07-05

tags:
  - ops
  - ai
  - template
---

# Purpose

Template for ending an AI session so the next session can resume the work — even if the next session runs on a different model (see `model-role-calibration.md`: models change as subscriptions lapse). Copy everything below the divider and fill it in at the end of a session.

**Save path:** copy this template to `.ai/handoffs/YYYY-MM-DD.md` (replacing `YYYY-MM-DD` with today's date) and fill in the copy. Do not overwrite the template itself.

A good handoff means the next session needs nothing except this document, the standard context package for the role, and the repository.

---

# Handoff

## Session Metadata

- **Date**:
- **Role**: <!-- e.g. Chief Engineer, Lead Technical Writer -->
- **Model / provider**: <!-- as assigned in model-role-calibration.md at the time -->
- **Task**: <!-- one-paragraph task description, as originally given -->

## State of Work

### Completed

<!-- What was finished this session. Reference document IDs / file paths and commits. -->

-

### In Progress

<!-- What was started but not finished. Be precise about *where* it stopped. -->

-

### Blocked

<!-- What cannot proceed and why. Name the missing specification or decision, and who it is routed to (per AI Routing Policy.md). -->

-

## Decisions

<!-- Decisions made this session (with authority: human-approved vs. draft/proposal), and decisions deliberately deferred. -->

-

## Open Questions Raised

<!-- Questions added to documents' Open Questions sections or the parking lot this session. List them so the next session doesn't rediscover them. -->

-

## Files Touched

<!-- Documents and files created or modified, with a word on what changed in each. -->

-

## Next Steps

<!-- Ordered list: what the next session should do first. Include which documents to load beyond the standard role package. -->

1.

## Warnings

<!-- Anything the next session might get wrong: known inconsistencies, half-applied renames, documents mid-rewrite, stale cross-references. -->

-
