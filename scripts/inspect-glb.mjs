// Parse a .glb container directly (no three.js / DOM needed) and report the
// JSON chunk's animations, skins, meshes and embedded image sizes.
import fs from "node:fs";
import path from "node:path";

function readGlb(file) {
  const buf = fs.readFileSync(file);
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error("not a GLB");
  let off = 12;
  let json = null;
  const bins = [];
  while (off < buf.length) {
    const len = buf.readUInt32LE(off);
    const type = buf.readUInt32LE(off + 4);
    const data = buf.subarray(off + 8, off + 8 + len);
    if (type === 0x4e4f534a) json = JSON.parse(data.toString("utf8"));
    else bins.push(data);
    off += 8 + len + ((4 - (len % 4)) % 4);
  }
  return { json, bin: bins[0], size: buf.length };
}

for (const file of process.argv.slice(2)) {
  const { json: g, size } = readGlb(file);
  console.log(`\n=== ${path.basename(file)}  (${(size / 1048576).toFixed(1)} MB) ===`);
  console.log(`generator: ${g.asset?.generator || "?"}`);

  const anims = g.animations || [];
  console.log(`animations: ${anims.length}`);
  anims.forEach((a, i) => {
    const chans = a.channels?.length || 0;
    console.log(`  [${i}] name="${a.name || "(unnamed)"}" channels=${chans}`);
  });

  console.log(`skins: ${(g.skins || []).length}  meshes: ${(g.meshes || []).length}  nodes: ${(g.nodes || []).length}`);
  const skin = (g.skins || [])[0];
  if (skin) {
    const names = (skin.joints || []).map((j) => g.nodes[j]?.name);
    console.log(`joints: ${names.length}`);
    console.log(`  first 12: ${names.slice(0, 12).join(", ")}`);
  }

  const imgs = g.images || [];
  console.log(`images: ${imgs.length}`);
  imgs.forEach((im, i) => {
    const bv = g.bufferViews?.[im.bufferView];
    const kb = bv ? (bv.byteLength / 1024).toFixed(0) : "?";
    console.log(`  [${i}] ${im.mimeType || im.uri || "?"}  ${kb} KB`);
  });
}
