export type AppLocale = "pt" | "en" | "es";

/** Prefix for routes: "" (Portuguese at root), "/en", or "/es". */
export type LocalePrefix = "" | "/en" | "/es";

export function localeFromPathPrefix(pathname: string): AppLocale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "pt";
}

export function prefixForLocale(locale: AppLocale): LocalePrefix {
  if (locale === "en") return "/en";
  if (locale === "es") return "/es";
  return "";
}

/** Path without locale prefix: `/`, `/whatsapp`, `/servicos/foo`. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname === "/en" ? "/" : pathname.slice("/en".length);
    return rest === "" ? "/" : rest.startsWith("/") ? rest : `/${rest}`;
  }
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const rest = pathname === "/es" ? "/" : pathname.slice("/es".length);
    return rest === "" ? "/" : rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname || "/";
}

export function pathForLocale(locale: AppLocale, pathWithoutLocale: string): string {
  const p =
    pathWithoutLocale === "" || pathWithoutLocale === "/"
      ? "/"
      : pathWithoutLocale.startsWith("/")
        ? pathWithoutLocale
        : `/${pathWithoutLocale}`;
  if (locale === "pt") return p;
  const pre = locale === "en" ? "/en" : "/es";
  if (p === "/") return pre;
  return `${pre}${p}`;
}

export function localizedPath(prefix: LocalePrefix, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return prefix || "/";
  if (!prefix) return p;
  return `${prefix}${p}`;
}

export function htmlLangFor(locale: AppLocale): string {
  if (locale === "pt") return "pt-BR";
  return locale;
}
