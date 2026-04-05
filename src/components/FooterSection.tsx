import { motion } from "framer-motion";
import { useWhatsAppCtaLink } from "@/hooks/useWhatsAppCtaLink";

const FooterSection = () => {
  const { href: whatsappHref, external: whatsappExternal } = useWhatsAppCtaLink();

  return (
    <footer className="py-16 relative">
      {/* Animated gradient divider */}
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
            <p className="text-sm text-muted-foreground font-light">
              Desvende os mistérios do seu caminho ✨
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Sobre", href: "#sobre" },
                { label: "FAQ", href: "#faq" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary text-xs">✦</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={whatsappHref}
                target={whatsappExternal ? "_blank" : undefined}
                rel={whatsappExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">📲</span> WhatsApp
              </a>
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
          <p className="text-xs text-muted-foreground/60 font-light text-center mb-3">
            Os atendimentos possuem caráter espiritual e energético, não substituindo tratamentos
            médicos, psicológicos ou financeiros.
          </p>
          <p className="text-sm text-muted-foreground/60 font-light text-center">
            © {new Date().getFullYear()} Aurum Mística. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
