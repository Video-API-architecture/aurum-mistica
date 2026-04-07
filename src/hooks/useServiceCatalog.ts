import { useMemo } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import type { AppLocale } from "@/lib/locale";
import {
  getAllServicesFlat,
  getServiceCategories,
  getServicesBySlug,
  type ServiceCategory,
  type ServiceData,
} from "@/data/services";

export function useServiceCatalog(): {
  locale: AppLocale;
  categories: ServiceCategory[];
  bySlug: Record<string, ServiceData>;
  allFlat: ServiceData[];
} {
  const { locale } = useLocale();

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
