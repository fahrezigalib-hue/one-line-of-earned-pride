// Entry for make.fun bounty u-mang-one-line-of-earned-pride-a0138557:
// "One Line of Earned Pride" — one line, at most 240
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";

// The bounty gate accepts 1 to 240 characters; fail loudly rather
// than write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-240`);
}
import { join } from "node:path";

const LINE =
  "He practised the same piano piece every night after his shift for a year, and at his daughter's recital he finally played it without looking at his hands.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
