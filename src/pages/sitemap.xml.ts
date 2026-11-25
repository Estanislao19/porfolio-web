import { siteConfig } from "@/config/site.mjs";

const paths = ["/"];
const urls = paths.map((path) => `<url><loc>${new URL(path, siteConfig.domain)}</loc></url>`).join("");

export const GET = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });


