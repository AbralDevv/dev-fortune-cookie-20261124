import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune Cookie Wisdom for Developers — entrypoint.
// The fortune is a single line, written byte-for-byte to entry.txt with no
// trailing newline, exactly as the competition requires.
const LINE = "Whisper \"it's just a one-line config tweak\" today, and you will soon learn the first names of everyone in Finance.";

function resolveOutDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

const outDir = resolveOutDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
