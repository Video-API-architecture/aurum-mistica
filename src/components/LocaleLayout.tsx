import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { AppLocale, LocalePrefix } from "@/lib/locale";
import { htmlLangFor } from "@/lib/locale";
import { LocaleProvider } from "@/contexts/LocaleContext";

type Props = {
  locale: AppLocale;
  prefix: LocalePrefix;
};

const LocaleLayout = ({ locale, prefix }: Props) => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    void i18n.changeLanguage(locale);
    document.documentElement.lang = htmlLangFor(locale);
  }, [locale, i18n]);

  return (
    <LocaleProvider locale={locale} prefix={prefix}>
      <Outlet />
    </LocaleProvider>
  );
};

export default LocaleLayout;
