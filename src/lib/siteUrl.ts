/** Absolute origin for canonical URLs and OG images (`VITE_SITE_URL` without trailing slash, or current origin). */
export function getSiteUrl(): string {
  const fromEnv = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "";
  return fromEnv || (typeof window !== "undefined" ? window.location.origin : "");
}
