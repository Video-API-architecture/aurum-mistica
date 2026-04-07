import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/contexts/LocaleContext";
import type { AppLocale } from "@/lib/locale";
import { pathForLocale, stripLocalePrefix } from "@/lib/locale";
import { writeStoredLocale } from "@/lib/localePreference";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

/** Regional flags for locale (pt-BR site → Brazil). */
const LOCALE_FLAGS: Record<AppLocale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

const LOCALES: { code: AppLocale; labelKey: string }[] = [
  { code: "pt", labelKey: "lang.pt" },
  { code: "en", labelKey: "lang.en" },
  { code: "es", labelKey: "lang.es" },
];

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { locale: current } = useLocale();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const bare = stripLocalePrefix(pathname);

  const go = (locale: AppLocale) => {
    writeStoredLocale(locale);
    navigate(pathForLocale(locale, bare));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="gap-1.5 text-muted-foreground hover:text-primary shrink-0 px-2"
          aria-label={`${t("lang.label")}: ${t(`lang.${current}`)}`}
        >
          <span className="text-lg leading-none" aria-hidden>
            {LOCALE_FLAGS[current]}
          </span>
          <span className="hidden sm:inline text-xs font-medium uppercase">{current}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[11rem]"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {LOCALES.map(({ code, labelKey }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => go(code)}
            className={`gap-2 ${current === code ? "text-primary font-medium" : ""}`}
          >
            <span className="text-lg leading-none" aria-hidden>
              {LOCALE_FLAGS[code]}
            </span>
            <span>{t(labelKey)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
