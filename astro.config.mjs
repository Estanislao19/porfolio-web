import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

const command = process.argv.find((argument) => ["dev", "build", "preview"].includes(argument));
const mode = command === "build" ? "production" : "development";
const envFromFiles = loadEnv(mode, process.cwd(), "PUBLIC_");
for (const [key, value] of Object.entries(envFromFiles)) {
  if (process.env[key] === undefined) process.env[key] = value;
}
const { siteConfig } = await import("./src/config/site.mjs");

export default defineConfig({
  site: siteConfig.domain,
  integrations: [tailwind(), robotsTxt({ sitemap: `${siteConfig.domain}/sitemap.xml` })],
});
