## Git & GitHub identity

All automated git commits, PR creation, and PR reviews use the machine user identity
(`hermes-agent-annajohansson`) configured in `.env`. Before ANY `git commit`, `git push`,
`gh pr create`, `gh pr review`, or GitHub API call directed at this repo, source the
project environment:

```bash
source .env && \
  export GIT_AUTHOR_NAME="$HERMES_MACHINE_USER_NAME" \
         GIT_AUTHOR_EMAIL="$HERMES_MACHINE_USER_EMAIL" \
         GIT_COMMITTER_NAME="$HERMES_MACHINE_USER_NAME" \
         GIT_COMMITTER_EMAIL="$HERMES_MACHINE_USER_EMAIL" \
         GH_TOKEN="$HERMES_GITHUB_TOKEN"
```

These env vars override git global config only for the current shell process.
Anna's manual `git commit` uses her global config and is unaffected.

## PR safeguards

**Always add the repo owner as a requested reviewer on every PR.** This is a hard rule
until the automated workflow has proven itself. The owner reviews alongside the agent
reviewers and can catch misclassifications, bad escalations, or review errors.

```bash
gh pr edit <number> --add-reviewer annalinnejohansson82
```

Run this immediately after `gh pr create`. Do not skip it.

## Subagent PR review signatures

All PR reviews come from the same machine user account. To differentiate subagents
in the PR timeline, every review or review comment MUST include an identity header.

**Role agents** (Chief Engineer, Lead Technical Writer, Documentation Specialist, Lead Systems Designer):

```
### Review by <Role> (<Model>)
```

**Ad-hoc / unnamed subagents** (CI fixers, spot-checkers, one-off delegates):

```
### Review by <Descriptor> (<Model>)
```

The descriptor should be a short label describing what the subagent was tasked with
(e.g. `CI Fix Agent`, `Spot Check`, `Code Review Agent`).

**Inline comments** use a compact suffix in both cases: `— <Role or Descriptor>`

Examples:
- `### Review by Chief Engineer (Claude Opus)`
- `### Review by CI Fix Agent (DeepSeek V4)`
- `This could be drier. — Lead Technical Writer`
- `Timeout should be configurable. — Spot Check`

The header is the only differentiation — the GitHub account is always `hermes-agent-annajohansson`.

## PR auto-review

When an agent opens a PR, it MUST immediately spawn at least one review subagent.
The number and role(s) of reviewers are determined by the change classification below.

### Classification

Before creating the PR, run:

```bash
git diff main...HEAD --stat
git diff main...HEAD --name-only
```

Use the file paths to classify the change against this table:

| Change touches | Reviewer role | Notes |
|---------------|---------------|-------|
| `docs/` (specs, ADRs, standards) | Lead Technical Writer | Terminology, clarity, cross-references, doc standards |
| `.ai/` (system prompts, operating manual, calibration) | Documentation Specialist | AI workflow correctness, prompt quality, consistency |
| Source code, build scripts, CI, config | Chief Engineer | Correctness, performance, architecture, test coverage |
| Game mechanics, systems, design documents | Lead Systems Designer | Design coherence, pillar alignment, player impact |
| `.gitignore`, `.env.example`, AGENTS.md | Documentation Specialist | Operational correctness |
| Multiple domains (cross-cutting) | One reviewer per domain | Spawned in parallel as separate subagents |

**Simple single-domain changes** (typo fix, one-file doc edit, a single config tweak) →
one reviewer in the matching role.

**Cross-cutting changes** (new mechanic + supporting code + docs) → one reviewer per
domain, spawned in parallel via `delegate_task` with `tasks=[]`.

### Spawning reviewers

After `gh pr create`, spawn the reviewer(s). Each subagent receives:

- The PR number
- The review signature format from above
- Instructions to apply the review checklist (correctness, security, quality, testing, performance, docs)
- The escalation rules below

The PR-opening agent posts a comment summarising which reviews were requested:

```
Auto-review dispatched: Chief Engineer, Lead Systems Designer
```

### Human-requested review

The repo owner can also trigger a review manually ("review PR #4", "re-review PR #4 as Lead Technical Writer"). When triggered this way, the specified role overrides the
classification table.

## PR review loop

Once reviews are posted, the PR enters the review loop. The **author agent** (the agent
that opened the PR) and the **reviewer agent(s)** iterate until resolution or escalation.

### Author agent responsibilities

When responding to a review:

1. **Bugs and errors must be fixed.** No discussion. Fix, push, reply to the thread with
   "Fixed in `<sha>`" and mark the thread resolved.

2. **Suggestions backed by documented standards** (doc standards, design pillars, architecture
   rules) may be accepted or contested. To contest: reply with a specific reference to the
   contradicting document, and the reasoning. Do not contest without a doc reference.

3. **Suggestions without documented support** (taste, style, approach preferences) may be
   accepted or contested with reasoning. If the reviewer disagrees with the reasoning, the
   thread escalates immediately — do not debate taste for multiple rounds.

### Reviewer agent responsibilities

When re-reviewing after author changes:

1. **Verify bug fixes.** Check the new commits. If fixed, resolve the thread. If not fixed
   or partially fixed, say what's still wrong.

2. **Respond to contested suggestions.** If the author provided a valid doc reference that
   supports their approach, accept it and resolve. If the reference doesn't actually support
   the claim, say so. If it's a matter of judgment without a documented answer, either accept
   or escalate — do not go another round on the same point.

### Round limits

- **3 rounds maximum** per review thread. After 3 exchanges on the same point without
  resolution, escalate. This applies even to bug fixes — if the author has tried 3 times
  and the reviewer still says it's wrong, something deeper is wrong.

### Escalation

When agents cannot resolve a thread:

1. Apply the `human-needed` label:
   ```bash
   gh pr edit <number> --add-label human-needed
   ```
2. Post a summary comment @-mentioning the repo owner:
   ```
   @annalinnejohansson82 — agents deadlocked on `<path>:<line>`.
   Reviewer says: ... Author says: ... No documented answer found.
   ```
3. The owner is already a requested reviewer (from PR safeguards), so no need to re-add.

The `human-needed` label stays until the owner resolves or dismisses the thread.
The author agent must not merge while this label is present.