import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";
import { BLOG_POSTS } from "../src/data/blog/posts";
import type { BlogPost } from "../src/data/blog/types";

function escapeHtmlAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function replaceTitle(html: string, title: string): string {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtmlAttr(title)}</title>`);
}

/** Must not use `<meta[\s\S]*?name=` — that matches from the first `<meta` in the document. */
function replaceNameDescription(html: string, content: string): string {
  return html.replace(
    /<meta(?:\s*\n\s*)?name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${escapeHtmlAttr(content)}" />`,
  );
}

function replaceCanonical(html: string, href: string): string {
  return html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${escapeHtmlAttr(href)}" />`,
  );
}

function replaceOgType(html: string, type: "website" | "article"): string {
  return html.replace(
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${type}" />`,
  );
}

function replaceOgUrl(html: string, url: string): string {
  return html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${escapeHtmlAttr(url)}" />`,
  );
}

function replaceOgTitle(html: string, title: string): string {
  return html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtmlAttr(title)}" />`,
  );
}

function replaceOgDescription(html: string, content: string): string {
  return html.replace(
    /<meta(?:\s*\n\s*)?property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${escapeHtmlAttr(content)}" />`,
  );
}

function replaceTwitterTitle(html: string, title: string): string {
  return html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtmlAttr(title)}" />`,
  );
}

function replaceTwitterDescription(html: string, content: string): string {
  return html.replace(
    /<meta(?:\s*\n\s*)?name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${escapeHtmlAttr(content)}" />`,
  );
}

function applyArticlePublishedTime(html: string, isoDate: string): string {
  return html.replace(
    /(<meta property="og:type" content="article" \/>)/,
    `$1\n    <meta property="article:published_time" content="${escapeHtmlAttr(isoDate)}" />`,
  );
}

function applyPageMeta(
  html: string,
  opts: {
    title: string;
    description: string;
    pageUrl: string;
    ogType: "website" | "article";
  },
): string {
  let out = html;
  out = replaceTitle(out, opts.title);
  out = replaceNameDescription(out, opts.description);
  out = replaceCanonical(out, opts.pageUrl);
  out = replaceOgType(out, opts.ogType);
  out = replaceOgUrl(out, opts.pageUrl);
  out = replaceOgTitle(out, opts.title);
  out = replaceOgDescription(out, opts.description);
  out = replaceTwitterTitle(out, opts.title);
  out = replaceTwitterDescription(out, opts.description);
  return out;
}

function blogPostPageHtml(template: string, post: BlogPost, siteUrl: string): string {
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const headTitle = `${post.title} | Aurum Mística`;
  let html = applyPageMeta(template, {
    title: headTitle,
    description: post.description,
    pageUrl,
    ogType: "article",
  });
  html = applyArticlePublishedTime(html, post.date);
  return html;
}

function blogListPageHtml(template: string, title: string, description: string, siteUrl: string): string {
  const pageUrl = `${siteUrl}/blog`;
  return applyPageMeta(template, {
    title,
    description,
    pageUrl,
    ogType: "website",
  });
}

export function prerenderBlogHtmlPlugin(siteUrl: string): Plugin {
  const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

  return {
    name: "prerender-blog-html",
    apply: "build",
    closeBundle() {
      const distIndex = path.join(projectRoot, "dist/index.html");
      if (!fs.existsSync(distIndex)) {
        console.warn("[prerender-blog-html] dist/index.html missing; skipping.");
        return;
      }

      const template = fs.readFileSync(distIndex, "utf8");
      const ptPath = path.join(projectRoot, "src/locales/pt.json");
      const pt = JSON.parse(fs.readFileSync(ptPath, "utf8")) as {
        meta: { blogListTitle: string; blogListDesc: string };
      };

      const listHtml = blogListPageHtml(template, pt.meta.blogListTitle, pt.meta.blogListDesc, siteUrl);
      fs.mkdirSync(path.join(projectRoot, "dist", "blog"), { recursive: true });
      fs.writeFileSync(path.join(projectRoot, "dist", "blog", "index.html"), listHtml);

      for (const post of BLOG_POSTS) {
        const html = blogPostPageHtml(template, post, siteUrl);
        const dir = path.join(projectRoot, "dist", "blog", post.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), html);
      }

      console.log(`[prerender-blog-html] wrote /blog + ${BLOG_POSTS.length} post HTML shells for crawlers`);
    },
  };
}
