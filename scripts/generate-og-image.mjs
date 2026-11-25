import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const width = 1200;
const height = 630;
const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#f8fafc"/><stop offset=".55" stop-color="#ecfeff"/><stop offset="1" stop-color="#e0f2fe"/></linearGradient><linearGradient id="glow"><stop stop-color="#06b6d4" stop-opacity=".3"/><stop offset="1" stop-color="#2563eb" stop-opacity=".03"/></linearGradient></defs><rect width="1200" height="630" fill="url(#bg)"/><circle cx="1080" cy="80" r="320" fill="url(#glow)"/><circle cx="550" cy="620" r="360" fill="url(#glow)"/><rect x="64" y="70" width="56" height="56" rx="14" fill="#111827"/><text x="138" y="107" font-family="Arial,sans-serif" font-size="27" font-weight="700" fill="#0f172a">Dev-Tech</text><text x="64" y="218" font-family="Arial,sans-serif" font-size="50" font-weight="700" fill="#0f172a">Soluciones digitales</text><text x="64" y="278" font-family="Arial,sans-serif" font-size="50" font-weight="700" fill="#0e7490">para hacer avanzar</text><text x="64" y="338" font-family="Arial,sans-serif" font-size="50" font-weight="700" fill="#0e7490">tu negocio.</text><text x="66" y="390" font-family="Arial,sans-serif" font-size="20" fill="#475569">Desarrollo web, aplicaciones y sistemas a medida.</text><rect x="64" y="445" width="320" height="43" rx="21" fill="#0f172a"/><text x="82" y="473" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#fff">ESTRATEGIA · DISEÑO · DESARROLLO</text><rect x="650" y="110" width="486" height="300" rx="23" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><rect x="745" y="380" width="405" height="185" rx="18" fill="#fff" stroke="#cbd5e1" stroke-width="2"/><rect x="1040" y="278" width="122" height="255" rx="25" fill="#0f172a" stroke="#fff" stroke-width="5"/></svg>`);

await mkdir("public", { recursive: true });
const logo = await sharp("public/brand/dev-tech-mark.png").resize(56, 56, { fit: "contain" }).png().toBuffer();
const projects = "public/projects/optimized/";
const dashboard = await sharp(projects + "nuevo-front.webp").resize(466, 242, { fit: "cover", position: "top" }).toBuffer();
const website = await sharp(projects + "tony-refrigeracion.webp").resize(385, 144, { fit: "cover", position: "top" }).toBuffer();
const mobile = await sharp(projects + "mano-a-mano.webp").resize(104, 227, { fit: "contain", background: "#fff" }).toBuffer();
await sharp(svg).composite([
  { input: logo, left: 64, top: 70 },
  { input: dashboard, left: 660, top: 119 },
  { input: website, left: 755, top: 389 },
  { input: mobile, left: 1049, top: 291 },
]).png({ compressionLevel: 9 }).toFile("public/og-dev-tech.png");
const meta = await sharp("public/og-dev-tech.png").metadata();
if (meta.width !== width || meta.height !== height) throw new Error("Open Graph image must be 1200x630.");
console.log(`Generated ${meta.width}x${meta.height} Open Graph image.`);
