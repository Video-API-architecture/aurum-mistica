import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WhatsAppPlainCta from "@/components/WhatsAppPlainCta";

type FooterLink =
  | { kind: "hash"; href: string; labelKey: string }
  | { kind: "route"; to: string; labelKey: string };

const FooterSection = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links: FooterLink[] = [
    { kind: "hash", href: "#servicos", labelKey: "footer.links.services" },
    { kind: "hash", href: "#sobre", labelKey: "footer.links.about" },
    { kind: "hash", href: "#faq", labelKey: "footer.links.faq" },
    { kind: "route", to: "/blog", labelKey: "footer.links.blog" },
    { kind: "hash", href: "#contato", labelKey: "footer.links.contact" },
  ];

  return (
    <footer id="contato" className="py-16 relative">
      <div className="gradient-divider mb-16" />

      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-2">Aurum Mística</h3>
            <p className="text-sm text-muted-foreground font-light">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.kind === "hash" ? link.href : link.to}>
                  {link.kind === "hash" ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary text-xs">✦</span>
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary text-xs">✦</span>
                      {t(link.labelKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <WhatsAppPlainCta className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group text-left">
                <span className="group-hover:scale-110 transition-transform duration-300">📲</span> WhatsApp
              </WhatsAppPlainCta>
              <a
                href="https://www.tiktok.com/@aurummisticaoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">🎵</span> TikTok
              </a>
            </div>
          </div>
        </motion.div>

        <div className="gradient-divider mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-xs text-muted-foreground/60 font-light text-center mb-3">{t("footer.disclaimer")}</p>
          <p className="text-sm text-muted-foreground/60 font-light text-center">
            {t("footer.rights", { year })}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
