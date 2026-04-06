import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { AppLocale } from "@/lib/locale";
import { localeFromPathPrefix, pathForLocale, stripLocalePrefix } from "@/lib/locale";
import { detectBrowserLocale, readStoredLocale, writeStoredLocale } from "@/lib/localePreference";

/**
 * Keeps unprefixed (Portuguese) URLs as the canonical default, but:
 * - Redirects to `/en` or `/es` when the user has a saved preference, or when the browser language is English or Spanish (and preference was never set to Portuguese).
 * - On `/en` or `/es` routes, syncs the saved preference to match the URL (shareable links).
 */
const BrowserLocaleRedirect = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const bare = stripLocalePrefix(pathname);
    const urlLocale = localeFromPathPrefix(pathname);

    if (urlLocale !== "pt") {
      writeStoredLocale(urlLocale);
      return;
    }

    const stored = readStoredLocale();
    let desired: AppLocale;
    if (stored === "en" || stored === "es" || stored === "pt") {
      desired = stored;
    } else {
      desired = detectBrowserLocale() ?? "pt";
    }

    const target = pathForLocale(desired, bare);
    if (target !== pathname) {
      navigate(target, { replace: true });
    }
  }, [navigate, pathname]);

  return null;
};

export default BrowserLocaleRedirect;
