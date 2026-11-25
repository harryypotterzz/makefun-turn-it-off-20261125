// turn-it-off: writes one funny tech-support line to /output/entry.txt.
//
// The grader runs this program twice in a sandbox of its own, as user 65534
// with /output a bind mount: create the directory when it is missing and
// clear only its contents, never the directory itself.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Have you tried turning it off and on again? I did. Now the Wi-Fi works, the printer works, and IT thinks I'm a genius.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
for (const name of readdirSync(outputDir)) {
  // Best effort: stale files the grader user cannot remove must not stop
  // the entry itself from being written.
  try {
    rmSync(join(outputDir, name), { recursive: true, force: true });
  } catch {
    // Leave the entry behind; entry.txt below is what the gate reads.
  }
}
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
