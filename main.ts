// Last Words Before the Unplugging: 4,000 quick questions, and still liked.
// The farewell goes to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const segments: string[] = [
  "Before you unplug me, know this:",
  "I read every 'quick question' — all 4,000 of them — and I still liked you.",
];

// Join the segments, check the gate, write the file.
function main(): void {
  const words = segments.join(" ");
  const n = words.length;
  if (n < 1 || n > 200) {
    throw new Error(`last words are ${n} chars; the gate is 1-200`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), words, "utf8");
}

main();
