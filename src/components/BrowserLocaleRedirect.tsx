import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { AppLocale } from "@/lib/locale";
import { localeFromPathPrefix, pathForLocale, stripLocalePrefix } from "@/lib/locale";
import { readStoredLocale, writeStoredLocale } from "@/lib/localePreference";

/**
 * Unprefixed URLs are the Portuguese route tree. Default locale is Portuguese (`/`, `/whatsapp`, …).
 * If the user chose English or Spanish in the switcher, that preference is stored and unprefixed URLs
 * redirect to `/en/...` or `/es/...`. Opening `/en` or `/es` directly syncs the stored preference.
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
      desired = "pt";
    }

    const target = pathForLocale(desired, bare);
    if (target !== pathname) {
      navigate(target, { replace: true });
    }
  }, [navigate, pathname]);

  return null;
};

export default BrowserLocaleRedirect;
