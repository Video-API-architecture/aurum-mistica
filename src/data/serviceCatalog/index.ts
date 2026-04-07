import type { AppLocale } from "@/lib/locale";
import type { ServiceCategory, ServiceData } from "./types";
import { EN_ALL_SERVICES, EN_SERVICE_CATEGORIES } from "./en";
import { ES_ALL_SERVICES, ES_SERVICE_CATEGORIES } from "./es";
import { PT_ALL_SERVICES, PT_SERVICE_CATEGORIES } from "./pt";

export type { ServiceCategory, ServiceData } from "./types";

const CATEGORIES: Record<AppLocale, ServiceCategory[]> = {
  pt: PT_SERVICE_CATEGORIES,
  en: EN_SERVICE_CATEGORIES,
  es: ES_SERVICE_CATEGORIES,
};

const ALL: Record<AppLocale, ServiceData[]> = {
  pt: PT_ALL_SERVICES,
  en: EN_ALL_SERVICES,
  es: ES_ALL_SERVICES,
};

export function getServiceCategories(locale: AppLocale): ServiceCategory[] {
  return CATEGORIES[locale] ?? CATEGORIES.pt;
}

export function getAllServicesFlat(locale: AppLocale): ServiceData[] {
  return ALL[locale] ?? ALL.pt;
}

export function getServicesBySlug(locale: AppLocale): Record<string, ServiceData> {
  return Object.fromEntries(getAllServicesFlat(locale).map((s) => [s.slug, s]));
}
