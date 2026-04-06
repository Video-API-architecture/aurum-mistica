import type { AppLocale } from "./locale";

/** Persisted when the user picks a language (switcher). Drives auto-routing on unprefixed URLs. */
export const LOCALE_STORAGE_KEY = "aurum-locale-preference";

export function readStoredLocale(): AppLocale | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (v === "pt" || v === "en" || v === "es") return v;
  return null;
}

export function writeStoredLocale(locale: AppLocale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

/**
 * First matching language from the browser: es → Spanish, en → English.
 * Portuguese (any `pt-*`) or anything else → null so the site stays on default Portuguese URLs.
 */
export function detectBrowserLocale(): "en" | "es" | null {
  if (typeof navigator === "undefined") return null;
  const list = [...(navigator.languages ?? []), navigator.language].filter(Boolean);
  for (const raw of list) {
    const code = raw.split("-")[0]?.toLowerCase();
    if (!code) continue;
    if (code === "pt") return null;
    if (code === "es") return "es";
    if (code === "en") return "en";
  }
  return null;
}
