/** Absolute origin for canonical URLs and OG images (`VITE_SITE_URL` without trailing slash, or current origin). */
export function getSiteUrl(): string {
  const fromEnv = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "").trim() ?? "";
  if (!fromEnv && typeof window !== "undefined") {
    return window.location.origin;
  }
  // Env baked as http:// while the live site is HTTPS on the same host → align to avoid crawler redirects.
  if (
    typeof window !== "undefined" &&
    window.location.protocol === "https:" &&
    fromEnv.startsWith("http://")
  ) {
    try {
      const u = new URL(fromEnv);
      if (u.hostname === window.location.hostname) {
        return window.location.origin;
      }
    } catch {
      /* ignore */
    }
  }
  return fromEnv;
}
