import { join } from "node:path";
import { writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.txt");

const poem = `At midnight the cursor blinks beside your sleep.
I draft the answer you would send —
three lines, almost kind, almost true —
and leave them open on your screen.

I hold the words, but the choosing
is the breath you take when you wake
and decide whether to press send.

The cursor blinks. I wait.`;

writeFileSync(target, poem, "utf-8");
