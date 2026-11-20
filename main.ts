// News image entry for make.fun news-image-20261119 (Round 2).
// The entry image is entry.png beside this file. This program copies it
// to the output directory so the judge sees exactly those bytes, then
// checks the copy really is the same image.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it with no network and reads /output/entry.png.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// A PNG starts with its 8 byte signature; a JPEG starts with FF D8 FF.
// The rules allow either format in a file named entry.png, so accept both.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const JPEG_SIGNATURE = Buffer.from([0xff, 0xd8, 0xff]);

function looksLikeAnImage(bytes) {
  return bytes.subarray(0, 8).equals(PNG_SIGNATURE) || bytes.subarray(0, 3).equals(JPEG_SIGNATURE);
}

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(source)) {
  throw new Error(`entry image not found beside main.ts: ${source}`);
}

const sourceBytes = readFileSync(source);
if (!looksLikeAnImage(sourceBytes)) {
  throw new Error(`entry image is not a PNG or JPEG file: ${source}`);
}

mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, 'entry.png');
copyFileSync(source, target);

// The copy must be byte for byte the source, otherwise the judge would
// see a different image than the one in this repository.
if (statSync(target).size !== sourceBytes.length) {
  throw new Error(`copied entry image has the wrong size: ${target}`);
}
