import { createContext, useContext, type ReactNode } from "react";
import type { AppLocale, LocalePrefix } from "@/lib/locale";
import { localizedPath as buildLocalizedPath } from "@/lib/locale";

export type LocaleContextValue = {
  locale: AppLocale;
  prefix: LocalePrefix;
  localizedPath: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  prefix,
  children,
}: {
  locale: AppLocale;
  prefix: LocalePrefix;
  children: ReactNode;
}) {
  const value: LocaleContextValue = {
    locale,
    prefix,
    localizedPath: (path: string) => buildLocalizedPath(prefix, path),
  };
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

/** For components that may render outside LocaleProvider (e.g. rare); prefer useLocale. */
export function useOptionalLocale(): LocaleContextValue | null {
  return useContext(LocaleContext);
}
