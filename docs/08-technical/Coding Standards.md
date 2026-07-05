---
title: Coding Standards
id: technical/coding-standards

version: 0.1.0
status: Draft
author: Lead Technical Writer

last_updated: 2026-07-05

depends_on:
  - foundation/principles
  - foundation/documentation-standards
  - technical/architecture
  - technical/technology-stack

used_by:
  - Chief Engineer
  - All subagents
  - Code Review Agent
  - Refactoring Agent

tags:
  - technical
  - coding-standards
  - conventions
  - quality
  - review
---

# Purpose

This document defines the coding standards for **The Long Reign**. All code in the repository must conform to these standards. The Code Review Agent enforces these standards during the review pipeline (see `AI Development Workflow.md`).

These standards are derived from the project's design philosophy: documentation is the source of truth, the code implements the documentation, and every line of code should be maintainable over years of development.

---

# Overview

The coding standards cover naming, structure, readability, maintainability, and architectural consistency. They are language-agnostic where possible, but specific conventions for JavaScript/TypeScript, React, and PixiJS are included where the technology stack is known.

Standards are enforced by:
- **Code Review Agent** — manual review during the review pipeline
- **Refactoring Agent** — proactive improvement of existing code
- **Automated tooling** — linters and formatters (specific tools TBD; see `Technology Stack.md`)

---

# Core Principles

All code must be:

1. **Readable**: A developer unfamiliar with the code should understand it within minutes.
2. **Maintainable**: Code written today should be easy to modify years from now.
3. **Consistent**: Code across the project should look like it was written by one person.
4. **Specification-compliant**: Code must implement the documented specification — no more, no less.
5. **Minimal**: Avoid unnecessary complexity. Do not solve problems that do not exist.

---

# General Standards

## Naming

- **Descriptive**: Names should describe what something is or does. Avoid abbreviations unless universally understood (e.g., `id`, `url`, `fps`).
- **Consistent casing**: Use a consistent casing convention throughout the project. (Exact convention depends on language choice; see Language-Specific Standards below.)
- **No single-letter names**: Except for loop counters (`i`, `j`, `k`) and well-known mathematical conventions (`x`, `y`).
- **Boolean names**: Prefix with `is`, `has`, `can`, or `should` (e.g., `isAlive`, `hasResources`, `canBuild`).
- **Event handlers**: Prefix with `on` or `handle` (e.g., `onClick`, `handleSave`).

## Structure

- **Small functions**: Functions should do one thing and do it well. If a function exceeds ~30 lines, consider splitting it.
- **Small files**: Files should be focused on a single concern. If a file exceeds ~300 lines, consider splitting it.
- **No deep nesting**: Maximum 3 levels of nesting. Use early returns, guard clauses, and extracted functions to reduce nesting.
- **Explicit imports**: No wildcard imports. Every dependency should be explicitly declared.
- **No circular dependencies**: Modules must not depend on each other in a cycle.

## Readability

- **Comments explain why, not what**: Code should be self-documenting for what it does. Comments should explain why it does it that way — design decisions, edge cases, and non-obvious trade-offs.
- **No commented-out code**: Delete dead code. Git history preserves it if needed.
- **Consistent formatting**: Automated formatting (TBD tool) should be used. No manual formatting debates.
- **Meaningful whitespace**: Use blank lines to separate logical sections within a function.

## Maintainability

- **No magic numbers**: All numeric constants should be named and defined in one place.
- **No duplication**: The same logic should not appear in multiple places. Extract shared logic into functions or utilities.
- **Single source of truth**: Each piece of knowledge should live in exactly one place. If two pieces of code need the same value, they should reference the same constant or configuration.
- **Immutable where possible**: Prefer immutable data structures. Avoid mutating shared state.

## Architectural Consistency

- **Domain boundaries**: Code must respect the domain boundaries defined in `Architecture.md`. Simulation code must not import rendering code. UI code must not directly mutate simulation state.
- **Specification compliance**: Code must implement the documented specification. If the specification is unclear, stop and request clarification (Decision Firewall) — do not guess.
- **No feature without specification**: No feature, mechanic, or behavior may be implemented without a corresponding specification document.

---

# Language-Specific Standards

## JavaScript / TypeScript

**Note**: The choice between JavaScript and TypeScript is an open question (see `Technology Stack.md`). If TypeScript is chosen, the following standards apply. If JavaScript is chosen, the type-related standards are omitted.

- **TypeScript preferred**: If TypeScript is available, use it. Type annotations improve readability, catch errors early, and help AI collaborators understand the codebase.
- **Strict mode**: Enable TypeScript strict mode. No implicit `any` unless explicitly justified.
- **Interfaces over types**: Use `interface` for object shapes. Use `type` for unions, intersections, and aliases.
- **No `var`**: Use `const` by default. Use `let` only when reassignment is necessary.
- **Arrow functions**: Use arrow functions for callbacks and short functions. Use regular functions for methods and complex logic (where `this` binding or readability matters).
- **Async/await over promises**: Prefer `async/await` for asynchronous code. Avoid raw `.then()` chains.
- **Error handling**: All async operations must handle errors. Unhandled promise rejections are bugs.
- **ES modules**: Use ES module syntax (`import`/`export`). No CommonJS (`require`).

---

## React

- **Functional components**: Use functional components with hooks. No class components.
- **One component per file**: Each React component should be in its own file.
- **Component naming**: PascalCase for component names and files (e.g., `SaveMenu.tsx`, `SaveMenu`).
- **Props typing**: All component props must be typed (TypeScript interface or PropTypes).
- **State management**: Keep state as close to where it is used as possible. Lift state up only when necessary.
- **No direct DOM manipulation**: Use React's declarative API. Do not use `document.querySelector` or `ref` for DOM manipulation unless absolutely necessary.
- **Accessibility**: Every component must be keyboard-navigable and screen-reader-friendly (see Accessibility Agent in `AI Development Workflow.md`).

---

## PixiJS

- **Scene graph discipline**: Organize display objects into a logical scene graph. Avoid flat hierarchies with hundreds of sprites at the root.
- **Object pooling**: For frequently created/destroyed display objects (particles, resource indicators), use object pooling to reduce garbage collection.
- **Culling**: Do not render entities outside the viewport. Implement viewport culling.
- **Texture management**: Load textures once and reuse. Do not create duplicate textures.
- **Separation from simulation**: PixiJS display objects are visual representations of simulation entities. They should not contain game logic.

---

## Testing

- **Test file location**: Tests live alongside the code they test, or in a parallel `tests/` directory (exact structure TBD).
- **Test naming**: Describe what is being tested and the expected outcome (e.g., `settlement_population_increases_when_villager_moves_in`).
- **One assertion per test (preferred)**: Each test should verify one behavior. Multiple assertions are acceptable if they verify different aspects of the same behavior.
- **No test interdependence**: Tests must be independent. The order of test execution must not matter.
- **Coverage**: All simulation logic must be tested. UI testing is encouraged but may be more limited. Rendering tests may be visual or snapshot-based.

---

# Code Review Checklist

The Code Review Agent checks every implementation against the following:

- [ ] Naming is clear and consistent
- [ ] Functions are small and focused
- [ ] No deep nesting (max 3 levels)
- [ ] No magic numbers
- [ ] No duplication
- [ ] No commented-out code
- [ ] Imports are explicit
- [ ] No circular dependencies
- [ ] Domain boundaries are respected
- [ ] Specification is implemented correctly
- [ ] No unspecified features or mechanics
- [ ] Error handling is present for all async operations
- [ ] No performance regressions
- [ ] Accessibility is maintained (for UI changes)

---

# Refactoring Guidelines

The Refactoring Agent may proactively improve code within these constraints:

- **Preserve behavior**: Refactoring must not change observable behavior. If behavior changes, it is a rewrite, not a refactor.
- **Improve one thing at a time**: Do not refactor structure, rename variables, and extract functions in a single commit. Separate concerns.
- **Tests must pass**: Refactoring must not break existing tests.
- **Update documentation**: If refactoring changes the public API of a module, update the relevant documentation.

---

# Design Goals

- **Consistency**: Code across the project is uniform in style and structure.
- **Readability**: New contributors can understand the codebase quickly.
- **Maintainability**: Code written today is easy to modify years from now.
- **Enforceability**: Standards are specific enough to be checked by automated tools and code review.

---

# Non-Goals

- Enforcing a specific code style down to whitespace (automated formatting handles this)
- Prescribing specific algorithms or data structures
- Dictating exact file count or line count limits (the suggested limits are guidelines, not hard rules)

---

# Open Questions

- TODO: Specific linter and formatter choices (ESLint, Prettier, Biome, etc.) — depends on technology stack decisions
- TODO: Exact casing convention for files and variables (camelCase, PascalCase, kebab-case) — depends on language choice
- TODO: Whether to enforce a maximum line length (e.g., 100, 120 characters)
- TODO: Test directory structure (`tests/` vs. co-located `__tests__/`)
- TODO: Whether to use snapshot testing for PixiJS rendering
- TODO: ECS-specific coding standards (if ECS architecture is chosen)
- TODO: Commit message format and branch naming conventions

---

# Related Documents

- `foundation/principles` (`Principles.md`) — the design pillars that code must respect
- `foundation/documentation-standards` (`Documentation Standards.md`) — documentation-writing standards (for code comments and docstrings)
- `Architecture.md` — domain boundaries that code must respect
- `Technology Stack.md` — the languages and frameworks these standards apply to
- `AI Development Workflow.md` — the Code Review Agent and Refactoring Agent that enforce these standards
- `Performance.md` — performance constraints that code must meet