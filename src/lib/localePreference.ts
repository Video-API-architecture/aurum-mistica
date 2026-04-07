import type { AppLocale } from "./locale";

/** Persisted from the URL and when the user picks a language (switcher). */
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
