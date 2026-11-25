import sharp from "sharp";
import { mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve("src/assets/project-sources");
const outDir = path.resolve("public/projects/optimized");
await mkdir(outDir, { recursive: true });
const projectData = await readFile("src/data-projects.ts", "utf8");
const referencedBases = new Set([...projectData.matchAll(/image:\s*"\/projects\/optimized\/([^"/]+)\.webp"/g)].map((match) => match[1]));
const files = (await readdir(dir)).filter((name) => /\.(png|jpe?g)$/i.test(name) && referencedBases.has(path.basename(name, path.extname(name)).replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase()));
const manifest = {};
const generatedFiles = new Set();
for (const file of files) {
  const input = path.join(dir, file);
  const metadata = await sharp(input).metadata();
  if (!metadata.width || !metadata.height) continue;
  const ext = path.extname(file);
  const base = path.basename(file, ext).replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase();
  const widths = [...new Set([480, 768, 1200].filter((width) => width < metadata.width))];
  widths.push(metadata.width);
  manifest[`/projects/optimized/${base}.webp`] = { width: metadata.width, height: metadata.height, srcset: [...widths.filter((width) => width !== metadata.width).map((width) => `/projects/optimized/${base}-${width}.webp ${width}w`), `/projects/optimized/${base}.webp ${metadata.width}w`].join(", ") };
  for (const width of widths) {
    const suffix = width === metadata.width ? "" : `-${width}`;
    const outputFile = `${base}${suffix}.webp`;
    generatedFiles.add(outputFile);
    await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(path.join(outDir, outputFile));
  }
  const original = (await stat(input)).size;
  const optimized = await stat(path.join(outDir, `${base}.webp`));
  console.log(`${file}: ${(original / 1024).toFixed(0)} KB -> ${(optimized.size / 1024).toFixed(0)} KB (${metadata.width}x${metadata.height})`);
}

for (const existing of await readdir(outDir)) {
  if (/\.webp$/i.test(existing) && !generatedFiles.has(existing)) await unlink(path.join(outDir, existing));
}

await mkdir("src/data", { recursive: true });
await writeFile("src/data/project-image-sources.json", JSON.stringify(manifest, null, 2) + "\n");



