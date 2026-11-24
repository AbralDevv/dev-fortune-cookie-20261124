import * as fs from "node:fs";
import * as path from "node:path";

const LINE = `Whisper "it's just a one-line config tweak" today, and you will soon learn the first names of everyone in Finance.`;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR && process.env.MAKEFUN_OUTPUT_DIR.length > 0
    ? process.env.MAKEFUN_OUTPUT_DIR
    : fs.existsSync("/output")
      ? "/output"
      : path.join(process.cwd(), "output");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars) to ${outDir}`);
