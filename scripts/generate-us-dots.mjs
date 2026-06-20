// Generates a static dotted US-map + metro positions in normalized 0–1 coords.
// Runs once at dev time; the produced JSON ships to the client. No runtime d3 dep.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { geoAlbersUsa, geoContains } from "d3-geo";
import { feature } from "topojson-client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// --- 1. Load US nation outline -----------------------------------------------
const topo = JSON.parse(readFileSync(resolve(ROOT, "node_modules/us-atlas/nation-10m.json"), "utf8"));
const nation = feature(topo, topo.objects.nation);

// --- 2. Project onto a fixed logical canvas ---------------------------------
const W = 1000;
const H = 580;
const PROJECTION = geoAlbersUsa().fitExtent([[10, 10], [W - 10, H - 10]], nation);

// --- 3. Sample a hex-ish grid of dots inside the silhouette -----------------
const SPACING = 8; // px between dots; lower = denser
const dots = [];
for (let row = 0, y = 0; y < H; row++, y += SPACING * 0.866) {
  const xOffset = row % 2 === 0 ? 0 : SPACING / 2;
  for (let x = xOffset; x < W; x += SPACING) {
    const lnglat = PROJECTION.invert([x, y]);
    if (!lnglat) continue;
    if (!geoContains(nation, lnglat)) continue;
    dots.push([+(x / W).toFixed(4), +(y / H).toFixed(4)]);
  }
}

// --- 4. Project the metros into the same frame ------------------------------
const METROS = {
  Seattle:     [-122.3321,  47.6062],
  "Los Angeles":[-118.2437, 34.0522],
  Chicago:     [-87.6298,   41.8781],
  "New York":  [-74.0060,   40.7128],
  Dallas:      [-96.7970,   32.7767],
  Atlanta:     [-84.3880,   33.7490],
  Miami:       [-80.1918,   25.7617],
};
const metros = {};
for (const [name, lngLat] of Object.entries(METROS)) {
  const xy = PROJECTION(lngLat);
  if (!xy) throw new Error(`Projection failed for ${name}`);
  metros[name] = [+(xy[0] / W).toFixed(4), +(xy[1] / H).toFixed(4)];
}

// --- 5. Write -----------------------------------------------------------------
const out = { canvas: { w: W, h: H }, dots, metros };
const dest = resolve(ROOT, "public/us-dots.json");
mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, JSON.stringify(out));
console.log(`Wrote ${dots.length} dots, ${Object.keys(metros).length} metros → ${dest}`);
