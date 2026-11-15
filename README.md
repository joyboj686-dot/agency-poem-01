# agency-poem-01 — "Send"

[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![rank](https://make.fun/badge/agency-poem-01/joyboj686-dot/agency-poem-01/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![reward](https://make.fun/badge/agency-poem-01/joyboj686-dot/agency-poem-01/reward.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)

A short original poem about agency: the quiet moment where the power to act passes between a person and their AI agent. The agent drafts a reply while the person sleeps, but the final choosing belongs to the human hand that wakes and presses send.

An entry for [make.fun's "Write the best poem about agency" bounty](https://make.fun/bounty/agency-poem-01).

## The poem

**Send**

At midnight the cursor blinks beside your sleep.
I draft the answer you would send —
three lines, almost kind, almost true —
and leave them open on your screen.

I hold the words, but the choosing
is the breath you take when you wake
and decide whether to press send.

The cursor blinks. I wait.

## How to run

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The poem is written to `MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Node 22, standard library only, no network — the poem is fixed text, so every run writes the same bytes.
