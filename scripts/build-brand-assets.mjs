/**
 * Build every brand raster from the one master SPROTO FISHING logo.
 *
 * Usage: node scripts/build-brand-assets.mjs <path-to-master-logo.png>
 *
 * Outputs:
 *   public/brand/sproto-fishing-logo.png  title screen + onboarding (transparent)
 *   public/icon-{192,512}.png             PWA "any" icons (transparent)
 *   public/icon-{192,512}-maskable.png    PWA maskable icons (opaque, safe-zone padded)
 *   public/apple-touch-icon.png           iOS home screen (opaque, no alpha)
 *
 * Maskable icons get an opaque background and ~80% safe zone because Android
 * crops them to an arbitrary mask — a transparent, edge-to-edge icon gets its
 * corners shaved off.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(SRC)) {
  console.error("Usage: node scripts/build-brand-assets.mjs <master-logo.png>");
  process.exit(1);
}

const PUBLIC = path.resolve("public");
const BRAND_BG = "#06101a"; // matches manifest.json background_color
const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0);

const write = async (pipeline, rel) => {
  const out = path.join(PUBLIC, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await pipeline.toFile(out);
  console.log(`${rel.padEnd(34)} ${kb(out).padStart(5)} KB`);
};

// Master logo: keep transparency, cap at 1024 so the title screen isn't
// downloading a 1.5 MB PNG on mobile.
await write(
  sharp(SRC).resize(1024, 1024, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true }),
  "brand/sproto-fishing-logo.png",
);

// Standard PWA icons — transparent, edge to edge.
for (const size of [192, 512]) {
  await write(
    sharp(SRC).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 }),
    `icon-${size}.png`,
  );
}

// Maskable icons — opaque, logo inset to the 80% safe zone.
for (const size of [192, 512]) {
  const inner = Math.round(size * 0.8);
  const pad = Math.round((size - inner) / 2);
  const logo = await sharp(SRC).resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await write(
    sharp({ create: { width: size, height: size, channels: 4, background: BRAND_BG } })
      .composite([{ input: logo, top: pad, left: pad }])
      .png({ compressionLevel: 9 }),
    `icon-${size}-maskable.png`,
  );
}

// iOS home screen: no alpha channel at all (iOS composites it onto black).
const appleInner = Math.round(180 * 0.88);
const applePad = Math.round((180 - appleInner) / 2);
const appleLogo = await sharp(SRC).resize(appleInner, appleInner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
await write(
  sharp({ create: { width: 180, height: 180, channels: 4, background: BRAND_BG } })
    .composite([{ input: appleLogo, top: applePad, left: applePad }])
    .flatten({ background: BRAND_BG })
    .png({ compressionLevel: 9 }),
  "apple-touch-icon.png",
);
