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
