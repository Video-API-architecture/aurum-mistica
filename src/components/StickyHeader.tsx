import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useOptionalLocale } from "@/contexts/LocaleContext";
import { localizedPath } from "@/lib/locale";

const StickyHeader = () => {
  const { t } = useTranslation();
  const localeCtx = useOptionalLocale();
  const prefix = localeCtx?.prefix ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: t("nav.services"), href: "#servicos" },
      { label: t("nav.howItWorks"), href: "#como-funciona" },
      { label: t("nav.about"), href: "#sobre" },
      { label: t("nav.testimonials"), href: "#depoimentos" },
      { label: t("nav.faq"), href: "#faq" },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homePath = localizedPath(prefix, "/");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 z-50 w-full max-w-full overflow-x-hidden transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/30 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 min-w-0 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href={`${homePath}#hero`}
          className="min-w-0 shrink font-display text-lg font-bold text-primary transition-opacity hover:opacity-80 sm:text-xl"
        >
          Aurum Mística
        </a>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <nav className="flex items-center gap-6">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <WhatsAppMotionCta
              toWhatsAppPage
              className="shimmer bg-gradient-gold text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {t("nav.consultNow")}
            </WhatsAppMotionCta>
          </nav>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <button
            className="text-foreground text-2xl hover:text-primary transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border/30 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 py-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-muted-foreground hover:text-primary transition-colors font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <WhatsAppMotionCta
                toWhatsAppPage
                className="shimmer bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.consultNow")}
              </WhatsAppMotionCta>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default StickyHeader;
