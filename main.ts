// News image entry for make.fun news-image-20261119.
// The entry image is entry.png beside this file. This program copies it
// to the output directory so the judge sees exactly those bytes.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it with no network and reads /output/entry.png.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(source)) {
  throw new Error(`entry image not found beside main.ts: ${source}`);
}

mkdirSync(outputDir, { recursive: true });

copyFileSync(source, join(outputDir, 'entry.png'));
