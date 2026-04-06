export type { ServiceCategory, ServiceData } from "./serviceCatalog/types";
export {
  getAllServicesFlat,
  getServiceCategories,
  getServicesBySlug,
} from "./serviceCatalog";

import {
  getAllServicesFlat,
  getServiceCategories,
  getServicesBySlug,
} from "./serviceCatalog";

/** Portuguese-only snapshot for legacy imports; prefer getServiceCategories(locale). */
export const SERVICE_CATEGORIES = getServiceCategories("pt");

/** Portuguese-only; prefer getServicesBySlug(locale). */
export const SERVICES_BY_SLUG = getServicesBySlug("pt");

export const ALL_SERVICES = getAllServicesFlat("pt");
