/**
 * Build angler assets from any raw Meshy biped export folder.
 *
 * Meshy ships one ~5-14 MB GLB per animation, each re-embedding the full mesh
 * and the same multi-megabyte texture. Every clip in a biped export rides the
 * same 24-joint skeleton (Hips / LeftUpLeg / ... / headfront) and — critically —
 * that skeleton is identical across *different* Meshy biped characters too. So
 * we only ever need:
 *
 *   1. one body GLB  (mesh + skin + downscaled texture, no animation)
 *   2. one tiny GLB per clip (animation + node hierarchy only, no mesh)
 *
 * Matching bone names mean the clips bind straight onto the body's skeleton at
 * runtime with no Mixamo-style retargeting — and a clip built for one character
 * can be reused by another (see Sun Smiler's cast in src/data/characters.js).
 *
 * This generalises scripts/build-angler-model.mjs, which was hardcoded to the
 * Sproto Guardian's file and clip names.
 *
 * Usage: node scripts/build-meshy-angler.mjs <meshy-folder> <out-id>
 */
import fs from "node:fs";
import path from "node:path";
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, prune, resample, simplify, textureCompress, weld } from "@gltf-transform/functions";
import { MeshoptSimplifier } from "meshoptimizer";
import sharp from "sharp";

const [SRC, OUT_ID] = process.argv.slice(2);
if (!SRC || !OUT_ID || !fs.existsSync(SRC)) {
  console.error("Usage: node scripts/build-meshy-angler.mjs <meshy-folder> <out-id>");
  process.exit(1);
}

const OUT_DIR = path.resolve("public/models/characters");

// Meshy's clip names vary per export, so map them onto the roles anglerBody.js
// actually plays. First match wins; anything unmatched (the 0.03s bind-pose
// "clip0", spare locomotion like running) is dropped.
const CLIP_ROLES = [
  [/^rigify_clip$/i, "idle"],
  [/Backflip|Spin_Jump|Jump|Hooks/i, "cast"],
  [/walking/i, "walk"],
];

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const mb = (f) => (fs.statSync(f).size / 1048576).toFixed(2);

const sources = fs
  .readdirSync(SRC)
  .filter((f) => f.toLowerCase().endsWith(".glb"))
  .map((f) => path.join(SRC, f))
  .sort();
if (!sources.length) {
  console.error(`no .glb files in ${SRC}`);
  process.exit(1);
}

// Prefer a mesh-only "Character_output" export; otherwise any file works —
// every withSkin GLB carries the same mesh, we just strip its animations.
const bodySrc = sources.find((f) => /Character_output/i.test(f)) || sources[0];

/** Body: keep mesh + skin, drop animation, shrink the texture to 1024 WebP. */
async function buildBody() {
  const doc = await io.read(bodySrc);
  const root = doc.getRoot();

  for (const anim of root.listAnimations()) anim.dispose();

  // Meshy ships ~100k triangles. The angler renders knee-high on a dock, so
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

  const out = path.join(OUT_DIR, `${OUT_ID}.glb`);
  await io.write(out, doc);
  console.log(`body  <- ${path.basename(bodySrc)}`);
  console.log(`      -> ${path.relative(process.cwd(), out)}  ${mb(out)} MB`);
}

/**
 * Clip: keep the node hierarchy + one animation, drop every mesh, material,
 * texture and skin. What is left is just keyframe data.
 */
async function buildClip(file, clipName, role) {
  const doc = await io.read(file);
  const root = doc.getRoot();

  const keep = root.listAnimations().find((a) => a.getName() === clipName);
  for (const anim of root.listAnimations()) if (anim !== keep) anim.dispose();
  keep.setName(role);

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

  const out = path.join(OUT_DIR, `${OUT_ID}-${role}.glb`);
  await io.write(out, doc);
  console.log(`${role.padEnd(5)} <- ${clipName}`);
  console.log(`      -> ${path.relative(process.cwd(), out)}  ${mb(out)} MB`);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
await buildBody();

const built = new Set();
for (const file of sources) {
  const doc = await io.read(file);
  for (const anim of doc.getRoot().listAnimations()) {
    const name = anim.getName();
    const role = CLIP_ROLES.find(([re]) => re.test(name))?.[1];
    if (!role || built.has(role)) continue;
    built.add(role);
    await buildClip(file, name, role);
  }
}

for (const role of ["idle", "cast", "walk"]) {
  if (!built.has(role)) console.warn(`note: no ${role} clip in this export — reuse another character's`);
}
