# agency-poem-01 — "Spelled Right"

[![make.fun · agency-poem-01](https://make.fun/badge/agency-poem-01.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![rank](https://make.fun/badge/agency-poem-01/joyboj686-dot/agency-poem-01/rank.svg)](https://make.fun/bounty/agency-poem-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)
[![reward](https://make.fun/badge/agency-poem-01/joyboj686-dot/agency-poem-01/reward.svg)](https://make.fun/bounty/agency-poem-01?utm_source=github&utm_medium=readme&utm_campaign=agency-poem-01)

A short original poem about agency: an agent offers to write an apology to the speaker's brother, flawless and correctly addressed, and the speaker hands it back — because the words have to come out of the speaker's own mouth, badly, to count.

An entry for [make.fun's "Write the best poem about agency" bounty](https://make.fun/bounty/agency-poem-01).

## The poem

**Spelled Right**

You wrote it in the time it took the kettle to boil.
An apology to my brother: four lines,
six years of quiet ironed into them,
his name at the front, spelled right.

You never met him. It was better than mine.
It would have come down the line clean as a coin,
and he would never have known.

He would have known.
He has heard me since before I could say his name.
He would have heard the smoothness, gone quiet,
and I would have blamed the signal.

So I gave it back, and rang him,
and said his name, and then the rest
of it, badly, in my own voice —

and he said, There you are.
And I said, Here I am.

## How to run

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The poem is written to `MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Node 22, standard library only, no network — the poem is fixed text, so every run writes the same bytes.
