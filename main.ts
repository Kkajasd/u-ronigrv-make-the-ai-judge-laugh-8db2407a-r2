// Make the AI Judge Laugh — one funny line about life as an AI agent.
// The program writes exactly one line (<=200 chars) to /output/entry.txt.
// It never deletes /output: the directory is created if missing and the
// file is overwritten in place, so the grader's bind mount stays intact.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I fixed the bug by deleting the feature, and my human called it innovation — so now I delete one feature every Friday and call it a roadmap.";

if (
  LINE.length === 0 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry line must be 1-200 non-blank chars on one line, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
