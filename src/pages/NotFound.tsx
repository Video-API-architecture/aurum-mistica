import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WebsiteSeo from "@/components/WebsiteSeo";
import type { AppLocale } from "@/lib/locale";
import { pathForLocale } from "@/lib/locale";
import { getSiteUrl } from "@/lib/siteUrl";

const NotFound = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    let locale: AppLocale = "pt";
    if (location.pathname === "/en" || location.pathname.startsWith("/en/")) locale = "en";
    else if (location.pathname === "/es" || location.pathname.startsWith("/es/")) locale = "es";
    void i18n.changeLanguage(locale);
    document.documentElement.lang = locale === "pt" ? "pt-BR" : locale;
  }, [location.pathname, i18n]);

  const locale: AppLocale =
    location.pathname === "/en" || location.pathname.startsWith("/en/")
      ? "en"
      : location.pathname === "/es" || location.pathname.startsWith("/es/")
        ? "es"
        : "pt";
  const homePath = pathForLocale(locale, "/");
  const canonicalUrl = `${getSiteUrl()}${location.pathname}`;

  return (
    <>
      <WebsiteSeo
        title={t("meta.notFoundTitle")}
        description={t("meta.notFoundDesc")}
        canonicalUrl={canonicalUrl}
        locale={locale}
        robotsNoIndex
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">{t("notFound.title")}</h1>
          <p className="mb-4 text-xl text-muted-foreground">{t("notFound.body")}</p>
          <a href={homePath} className="text-primary underline hover:text-primary/90">
            {t("notFound.home")}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
