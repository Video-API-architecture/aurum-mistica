/**
 * Canonical origin for builds (sitemap, prerender, index.html placeholders).
 * Upgrades http→https in production for non-localhost hosts so sitemap URLs match
 * Netlify’s HTTPS URLs and reduce Search Console “Page with redirect” when env was mis-set to http://.
 */
export function normalizeSiteUrlForBuild(raw: string | undefined, mode: string): string {
  const fallbackLocal = "http://localhost:8080";
  const trimmed = (raw ?? "").trim().replace(/\/$/, "");
  const input = trimmed || fallbackLocal;

  try {
    const withScheme = /^https?:\/\//i.test(input) ? input : `https://${input}`;
    const u = new URL(withScheme);
    const isLocal = u.hostname === "localhost" || u.hostname === "127.0.0.1";

    if (mode === "production" && !isLocal && u.protocol === "http:") {
      u.protocol = "https:";
    }

    return u.origin;
  } catch {
    return trimmed || fallbackLocal;
  }
}
