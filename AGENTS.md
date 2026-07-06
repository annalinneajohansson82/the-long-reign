## Git & GitHub identity

All automated git commits, PR creation, and PR reviews use the machine user identity
(`$HERMES_MACHINE_USER_NAME`) configured in `.env`. Before ANY `git commit`, `git push`,
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

**Always assign the PR creator as the assignee.** This is a hygiene rule — the PR
should be assigned to whoever created it so the owner can see at a glance who is
responsible for driving it.

```bash
gh pr edit <number> --add-assignee "$(gh api user --jq '.login')"
```

**Always add the repo owner as a requested reviewer on every PR.** This is a hard rule
until the automated workflow has proven itself. The owner reviews alongside the agent
reviewers and can catch misclassifications, bad escalations, or review errors.

```bash
gh pr edit <number> --add-reviewer "$HERMES_REPO_OWNER"
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

The header is the only differentiation — the GitHub account is always `$HERMES_MACHINE_USER_NAME`.

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

### PR labeling

After `gh pr create`, apply three label types to the PR. Labels provide traceability
and drive the merge tier decision.

**Domain labels** (one, based on the classification table):

| Label | When |
|-------|------|
| `domain/docs` | `docs/` files, `.md` files |
| `domain/ai-ops` | `.ai/` files, system prompts, operating manual, AGENTS.md |
| `domain/code` | Source code, build scripts, CI, config |
| `domain/design` | Game mechanics, systems, design documents |
| `domain/infra` | `.gitignore`, `.env.example`, environment config |

**Size labels** (one, based on `git diff --stat`):

| Label | Threshold |
|-------|-----------|
| `size/small` | < 50 lines changed |
| `size/medium` | 50–200 lines changed |
| `size/large` | 200+ lines changed |

**Merge tier labels** (one, see Merge tiers below):

| Label | Meaning |
|-------|---------|
| `merge/auto` | Agent can merge when reviews pass |
| `merge/ack` | Agent needs human acknowledgement |
| `merge/manual` | Human must merge manually |

Apply after classification:

```bash
gh pr edit <number> --add-label domain/docs,size/small,merge/auto
```

### Human-requested review

The repo owner can also trigger a review manually ("review PR #4", "re-review PR #4 as Lead Technical Writer"). When triggered this way, the specified role overrides the
classification table.

## PR review loop

Once reviews are posted, the PR enters the review loop. The **author agent** (the agent
that opened the PR) and the **reviewer agent(s)** iterate until resolution or escalation.

**Loop termination:** The review loop ends when all reviewers have returned a clear
APPROVE verdict and all review threads are resolved. The author must verify both
conditions before merging.

### Merge tiers

The merge tier is determined at PR creation and controls what happens after the review
loop completes. The system errs on the side of caution — if in doubt, bump up a tier.

**Tier 1 — `merge/auto`: Agent can merge autonomously**

All of these must be true:
- Only Documentation Specialist or Lead Technical Writer as reviewer (docs/ai-ops)
- `size/small` (< 50 lines)
- No round limits hit
- All reviewers returned APPROVE
- No `human-needed` label was ever applied

After merge, post a comment: "Auto-merged by agent. [1-line summary of what changed]."

**Tier 2 — `merge/ack`: Agent can merge after human acknowledgement**

Any of these trigger tier 2:
- Chief Engineer or Lead Systems Designer as reviewer
- `size/medium` (50–200 lines)
- 2+ reviewer roles assigned

When the review loop completes, the agent posts a "Ready for merge" comment
@-mentioning the repo owner. The agent does NOT merge until the human says "merge"
or clicks the merge button.

**Tier 3 — `merge/manual`: Agent must not merge**

Any of these trigger tier 3:
- `size/large` (200+ lines)
- Any round limit was hit during review
- `human-needed` was applied at any point
- 3+ reviewer roles (cross-cutting)
- Touches CI, build scripts, or architectural decisions
- `domain/design` + `domain/code` in the same PR

The human must review and merge manually. The agent posts a "Manual merge required"
comment with a summary of what needs human attention.

### Self-approval workaround

Because all agent actions use the same machine user token, GitHub blocks the formal
`gh pr review --approve` when the reviewer is also the PR author. Use `--comment`
instead and put the verdict as the first line of the body:

```
APPROVE — all bugs verified fixed, no remaining issues.

### Re-review by Documentation Specialist (DeepSeek V4 Pro)

...
```

A COMMENT review that starts with `APPROVE` counts as approval for loop termination.
Same for `REQUEST_CHANGES` in a COMMENT body — it triggers another round.

### Threaded review conversations

All review-related PR comments MUST be threaded under the comment that triggered them.
This keeps the PR timeline readable for humans joining mid-loop.

- **Author re-requesting review:** reply to the reviewer's comment that flagged the bugs.
  ```bash
  gh pr comment <number> --reply-to <review-comment-url> --body "Re-review requested..."
  ```

- **Reviewer posting re-review:** reply to the author's re-review request comment.
  ```bash
  gh pr comment <number> --reply-to <re-review-request-url> --body "APPROVE — ..."
  ```

- **Escalation comments:** reply to the latest comment in the deadlocked thread.
  ```bash
  gh pr comment <number> --reply-to <latest-thread-comment-url> --body "@${HERMES_REPO_OWNER} — agents deadlocked..."
  ```

The comment URL is returned by `gh pr comment` on creation. Save it for the reply chain.

### Author agent responsibilities

When responding to a review:

1. **Bugs and errors must be fixed.** No discussion. Fix, push, reply to the thread with
   "Fixed in `<sha>`" and mark the thread resolved. Then **re-request review** from the
   reviewer who flagged the issue — spawn a new subagent with the same role, same PR
   number, and the thread context so it can verify the fix. A fix is not resolved until
   the reviewer's re-review confirms it.

2. **Suggestions backed by documented standards** (doc standards, design pillars, architecture
   rules) may be accepted or contested. To contest: reply with a specific reference to the
   contradicting document, and the reasoning. Do not contest without a doc reference.
   If accepted, fix and re-request review as with bugs.

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

- **Round tracking.** Every review and re-review MUST include the round number in its
  header. The author agent counts previous review posts on the same thread before
  responding. If this is round 3 and the issue remains unresolved, escalate instead
  of attempting another fix.

  ```
  ### Review by Chief Engineer (Claude Opus) — Round 1
  ### Re-review by Chief Engineer (Claude Opus) — Round 2
  ### Re-review by Chief Engineer (Claude Opus) — Round 3 (final)
  ```

- **Author enforcement.** Before responding in round 3, the author agent must check:
  has this exact thread been through two prior review cycles? If yes, escalate. Do not
  attempt a third fix — flag it as `human-needed` and let the repo owner decide.

### Escalation

When agents cannot resolve a thread:

1. Apply the `human-needed` label:
   ```bash
   gh pr edit <number> --add-label human-needed
   ```
2. Post a summary comment @-mentioning the repo owner:
   ```
   @${HERMES_REPO_OWNER} — agents deadlocked on `<path>:<line>`.
   Reviewer says: ... Author says: ... No documented answer found.
   ```
3. The owner is already a requested reviewer (from PR safeguards), so no need to re-add.

The `human-needed` label stays until the owner resolves or dismisses the thread.
The author agent must not merge while this label is present.