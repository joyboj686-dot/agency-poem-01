import { join } from "node:path";
import { writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.txt");

const poem = `You wrote it in the time it took the kettle to boil.
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
`;

writeFileSync(target, poem, "utf-8");
