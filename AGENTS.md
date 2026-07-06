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