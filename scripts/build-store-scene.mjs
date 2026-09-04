/**
 * Compresses the raw obj2gltf-converted VR store GLB for web delivery:
 * dedups/welds/prunes, and shrinks every texture to WebP at a sane resolution.
 * The store is static geometry (no skin/animation), so this can be more
 * aggressive than the character pipeline — no skinning data to preserve.
 *
 * Usage: node scripts/build-store-scene.mjs <raw-glb-path>
 */
import fs from "node:fs";
import path from "node:path";
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, prune, textureCompress, weld } from "@gltf-transform/functions";
import sharp from "sharp";

const [SRC] = process.argv.slice(2);
if (!SRC || !fs.existsSync(SRC)) {
  console.error("Usage: node scripts/build-store-scene.mjs <raw-glb-path>");
  process.exit(1);
}

const OUT = path.resolve("public/models/world/store.glb");
fs.mkdirSync(path.dirname(OUT), { recursive: true });

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(SRC);

await doc.transform(
  dedup(),
  weld(),
  textureCompress({ encoder: sharp, targetFormat: "webp", resize: [768, 768] }),
  prune(),
);

// The source OBJ was authored for exterior fly-by renders — many wall/shelf
// faces have normals pointing outward only. Walking the camera INSIDE the
// store means those faces backface-cull to nothing. doubleSided fixes that
// without needing to fix winding order per-mesh.
for (const mat of doc.getRoot().listMaterials()) mat.setDoubleSided(true);

await io.write(OUT, doc);
const mb = (fs.statSync(OUT).size / 1048576).toFixed(2);
console.log(`-> ${OUT}  ${mb} MB`);
