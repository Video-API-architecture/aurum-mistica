import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import { BLOG_POSTS } from "../src/data/blog/posts";
import { getAllServicesFlat } from "../src/data/services";
import { pathForLocale, type AppLocale } from "../src/lib/locale";

const LOCALES: AppLocale[] = ["pt", "en", "es"];

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

type UrlEntry = { loc: string; lastmod?: string; changefreq: string; priority: string };

function buildEntries(siteUrl: string): UrlEntry[] {
  const today = new Date().toISOString().slice(0, 10);
  const entries: UrlEntry[] = [];

  for (const locale of LOCALES) {
    const homePath = pathForLocale(locale, "/");
    entries.push({
      loc: `${siteUrl}${homePath}`,
      lastmod: today,
      changefreq: "weekly",
      priority: locale === "pt" ? "1.0" : "0.9",
    });

    const whatsappPath = pathForLocale(locale, "/whatsapp");
    entries.push({
      loc: `${siteUrl}${whatsappPath}`,
      changefreq: "monthly",
      priority: "0.5",
    });
  }

  entries.push({
    loc: `${siteUrl}/blog`,
    lastmod: today,
    changefreq: "weekly",
    priority: "0.9",
  });

  for (const post of BLOG_POSTS) {
    entries.push({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  for (const locale of LOCALES) {
    for (const service of getAllServicesFlat(locale)) {
      const p = pathForLocale(locale, `/servicos/${service.slug}`);
      entries.push({
        loc: `${siteUrl}${p}`,
        lastmod: today,
        changefreq: "monthly",
        priority: "0.75",
      });
    }
  }

  entries.sort((a, b) => a.loc.localeCompare(b.loc));
  return entries;
}

function serializeSitemap(entries: UrlEntry[]): string {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];
  for (const e of entries) {
    lines.push("  <url>");
    lines.push(`    <loc>${escapeXml(e.loc)}</loc>`);
    if (e.lastmod) lines.push(`    <lastmod>${e.lastmod}</lastmod>`);
    lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
    lines.push(`    <priority>${e.priority}</priority>`);
    lines.push("  </url>");
  }
  lines.push("</urlset>");
  return `${lines.join("\n")}\n`;
}

export function generateSitemapPlugin(siteUrl: string): Plugin {
  const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

  return {
    name: "generate-sitemap",
    apply: "build",
    closeBundle() {
      const entries = buildEntries(siteUrl);
      const xml = serializeSitemap(entries);
      fs.writeFileSync(path.join(projectRoot, "dist", "sitemap.xml"), xml, "utf8");

      const robotsSrc = path.join(projectRoot, "public", "robots.txt");
      const robotsBase = fs.existsSync(robotsSrc)
        ? fs.readFileSync(robotsSrc, "utf8").trimEnd()
        : "User-agent: *\nAllow: /";
      const robotsOut = `${robotsBase}\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
      fs.writeFileSync(path.join(projectRoot, "dist", "robots.txt"), robotsOut, "utf8");

      console.log(`[generate-sitemap] wrote sitemap.xml (${entries.length} URLs) and robots.txt`);
    },
  };
}
