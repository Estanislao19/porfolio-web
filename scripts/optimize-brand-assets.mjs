import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";

// Crop the existing mark and wordmark from the original artwork without redrawing them.
const source = "public/dev-tech.png";
const outputDir = "public/brand";
await mkdir(outputDir, { recursive: true });

const makeTransparent = async ({ left, top, width, height }, output, color) => {
  const { data, info } = await sharp(source)
    .extract({ left, top, width, height })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let pixel = 0; pixel < info.width * info.height; pixel++) {
    const offset = pixel * info.channels;
    const luminance = Math.round(data[offset] * 0.2126 + data[offset + 1] * 0.7152 + data[offset + 2] * 0.0722);
    const target = pixel * 4;
    rgba[target] = color[0];
    rgba[target + 1] = color[1];
    rgba[target + 2] = color[2];
    rgba[target + 3] = luminance;
  }

  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9, palette: true })
    .toFile(`${outputDir}/${output}`);
};

const ink = [15, 23, 42];
const white = [255, 255, 255];
const markCrop = { left: 226, top: 479, width: 160, height: 71 };
const wordmarkCrop = { left: 226, top: 479, width: 570, height: 71 };
await makeTransparent(markCrop, "dev-tech-mark.png", white);
await makeTransparent(markCrop, "dev-tech-mark-ink.png", ink);
await makeTransparent(wordmarkCrop, "dev-tech-wordmark.png", white);
await makeTransparent(wordmarkCrop, "dev-tech-wordmark-ink.png", ink);

const markData = (await readFile(`${outputDir}/dev-tech-mark.png`)).toString("base64");
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#0f172a"/><image x="4" y="19" width="56" height="26" href="data:image/png;base64,${markData}" preserveAspectRatio="xMidYMid meet"/></svg>`;
await writeFile("public/favicon.svg", favicon);
console.log("Created transparent DT/wordmark variants and regenerated the favicon from the original.");
