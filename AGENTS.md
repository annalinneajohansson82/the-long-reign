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