import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie Wisdom for Developers — one original line, 120 chars max.
// The legacy code you curse today was once someone's proudest work; the
// fortune asks for gentleness toward it, and the twist is that the code
// outlived the people who wrote it. Tightened: "be gentle, it outlived
// them all" lands in a single breath where "be gentle with it, for it
// outlived them all" dragged. Gate: 1-120 UTF-8 chars, no newline.
const LINE =
  "The legacy code you curse today was someone's proudest Friday afternoon; be gentle, it outlived them all.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must hold the line and nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
