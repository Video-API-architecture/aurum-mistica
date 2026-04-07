import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { localeFromPathPrefix } from "@/lib/locale";
import { writeStoredLocale } from "@/lib/localePreference";

/**
 * Keeps `aurum-locale-preference` aligned with the URL. Unprefixed routes are Portuguese (`/`, …);
 * `/en` and `/es` trees sync storage when opened directly (e.g. shared links). No automatic redirect
 * from `/` — visiting the root always stays on the Portuguese site.
 */
const BrowserLocaleRedirect = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    writeStoredLocale(localeFromPathPrefix(pathname));
  }, [pathname]);

  return null;
};

export default BrowserLocaleRedirect;
