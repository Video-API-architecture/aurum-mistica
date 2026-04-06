import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { AppLocale } from "@/lib/locale";
import {
  getAllServicesFlat,
  getServiceCategories,
  getServicesBySlug,
  type ServiceCategory,
  type ServiceData,
} from "@/data/services";

function catalogLocale(lng: string): AppLocale {
  if (lng === "en" || lng === "es" || lng === "pt") return lng;
  return "pt";
}

export function useServiceCatalog(): {
  locale: AppLocale;
  categories: ServiceCategory[];
  bySlug: Record<string, ServiceData>;
  allFlat: ServiceData[];
} {
  const { i18n } = useTranslation();
  const locale = catalogLocale(i18n.language);

  return useMemo(
    () => ({
      locale,
      categories: getServiceCategories(locale),
      bySlug: getServicesBySlug(locale),
      allFlat: getAllServicesFlat(locale),
    }),
    [locale]
  );
}
