/**
 * Build the Sproto Guardian angler assets from the raw Meshy export.
 *
 * Meshy ships one ~14 MB GLB per animation, each re-embedding the full mesh
 * and the same 2048x2048 RGBA texture — ~72 MB for five files. All five share
 * an identical 24-joint skeleton with matching bone names, so we only need:
 *
 *   1. one body GLB  (mesh + skin + downscaled texture, no animation)
 *   2. one tiny GLB per clip (animation + node hierarchy only, no mesh)
 *
 * Because the bone names match, the clips bind straight onto the body's
 * skeleton at runtime with no Mixamo-style retargeting.
 *
 * Usage: node scripts/build-angler-model.mjs "<path to Meshy folder>"
 */
import fs from "node:fs";
import path from "node:path";
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, prune, resample, simplify, textureCompress, weld } from "@gltf-transform/functions";
import { MeshoptSimplifier } from "meshoptimizer";
import sharp from "sharp";

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(SRC)) {
  console.error("Usage: node scripts/build-angler-model.mjs <meshy-folder>");
  process.exit(1);
}

const PREFIX = "Meshy_AI_Cheerful_Snack_Guardi_biped";
const OUT_DIR = path.resolve("public/models/characters");
const src = (suffix) => path.join(SRC, `${PREFIX}_${suffix}.glb`);

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const mb = (f) => (fs.statSync(f).size / 1048576).toFixed(2);

/** Body: keep mesh + skin, drop animation, shrink the texture to 1024 WebP. */
async function buildBody() {
  const doc = await io.read(src("Character_output"));
  const root = doc.getRoot();

  // The bind-pose "clip0" is 0.03s of nothing; the real clips ship separately.
  for (const anim of root.listAnimations()) anim.dispose();

  // Meshy ships ~104k triangles. The angler renders knee-high on a dock, so
  // most of that detail is invisible. Simplify hard, but keep the output plain
  // glTF — the runtime GLTFLoader has no Draco or Meshopt decoder registered,
  // so any compressed geometry would simply fail to load.
  await MeshoptSimplifier.ready;
  await doc.transform(
    dedup(),
    weld(),
    simplify({ simplifier: MeshoptSimplifier, ratio: 0.2, error: 0.004, lockBorder: true }),
    textureCompress({ encoder: sharp, targetFormat: "webp", resize: [1024, 1024] }),
    prune(),
  );

  const out = path.join(OUT_DIR, "sproto-guardian.glb");
  await io.write(out, doc);
  console.log(`body  -> ${path.relative(process.cwd(), out)}  ${mb(out)} MB`);
}

/**
 * Clip: keep the node hierarchy + one animation, drop every mesh, material,
 * texture and skin. What is left is just keyframe data.
 */
async function buildClip(suffix, clipName, outName) {
  const doc = await io.read(src(suffix));
  const root = doc.getRoot();

  const keep = root.listAnimations().find((a) => a.getName() === clipName);
  if (!keep) {
    const names = root.listAnimations().map((a) => a.getName());
    throw new Error(`clip "${clipName}" not in ${suffix} (have: ${names.join(", ")})`);
  }
  for (const anim of root.listAnimations()) if (anim !== keep) anim.dispose();
  keep.setName(outName);

  // Detach geometry from the scene graph, then drop the assets themselves.
  for (const node of root.listNodes()) {
    if (node.getMesh()) node.setMesh(null);
    if (node.getSkin()) node.setSkin(null);
  }
  for (const skin of root.listSkins()) skin.dispose();
  for (const mesh of root.listMeshes()) mesh.dispose();
  for (const mat of root.listMaterials()) mat.dispose();
  for (const tex of root.listTextures()) tex.dispose();

  await doc.transform(resample(), prune(), dedup());

  const out = path.join(OUT_DIR, `sproto-guardian-${outName}.glb`);
  await io.write(out, doc);
  console.log(`${outName.padEnd(5)} -> ${path.relative(process.cwd(), out)}  ${mb(out)} MB`);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
await buildBody();
await buildClip("Animation_01a05eb3-c710-7743-b07d-3369ce0e7e41_withSkin", "rigify_clip", "idle");
await buildClip("Animation_Backflip_and_Hooks_withSkin", "Armature|Backflip_and_Hooks|baselayer", "cast");
await buildClip("Animation_Walking_withSkin", "Armature|walking_man|baselayer", "walk");
