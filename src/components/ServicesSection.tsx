import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ServiceData } from "@/data/services";
import { useServiceCatalog } from "@/hooks/useServiceCatalog";
import { useLocale } from "@/contexts/LocaleContext";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const { localizedPath } = useLocale();
  const { categories } = useServiceCatalog();

  const previsoes = categories.find((c) => c.id === "previsoes")!.services;
  const consultasEspecificas = categories.find((c) => c.id === "consultas-especificas")!.services;
  const leituras = categories.find((c) => c.id === "leituras-personalizadas")!.services;
  const sessoes = categories.find((c) => c.id === "sessoes")!.services;
  const previsoesLabel = categories.find((c) => c.id === "previsoes")!.label;

  const ServiceButtons = ({
    service,
    requestLabel,
  }: {
    service: ServiceData;
    requestLabel: string;
  }) => (
    <div className="flex gap-2 mt-4 justify-center flex-wrap">
      <WhatsAppMotionCta
        toWhatsAppPage
        className="shimmer bg-gradient-gold text-primary-foreground font-semibold px-4 py-2 rounded-lg text-xs tracking-wide hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {requestLabel}
      </WhatsAppMotionCta>
      <Link
        to={localizedPath(`/servicos/${service.slug}`)}
        className="border border-primary/50 text-primary font-semibold px-4 py-2 rounded-lg text-xs hover:bg-primary/10 hover:border-primary/70 transition-all duration-300"
      >
        {t("servicesSection.learnMore")}
      </Link>
    </div>
  );

  const CategoryHeader = ({ label, categorySlug }: { label: string; categorySlug?: string }) => (
    <div className="flex items-center justify-center gap-3 mb-4">
      <h4 className="font-display text-xl font-semibold text-primary">{label}</h4>
      {categorySlug && (
        <Link
          to={localizedPath(`/servicos/${categorySlug}`)}
          className="text-xs border border-primary/40 text-primary px-3 py-1 rounded-full hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
        >
          {t("servicesSection.learnMore")}
        </Link>
      )}
    </div>
  );

  return (
    <section id="servicos" className="py-24 bg-gradient-cosmic">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t("servicesSection.title")}{" "}
            <span className="text-shimmer-gold">{t("servicesSection.titleAccent")}</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">{t("servicesSection.subtitle")}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center mb-2">
            {t("servicesSection.avulsasTitle")}
          </h3>
          <p className="text-center text-muted-foreground font-light mb-8 text-sm">
            {t("servicesSection.avulsasNote")}
          </p>

          <CategoryHeader label={previsoesLabel} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {previsoes.map((item, i) => (
              <motion.div
                key={item.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-mystical p-6 text-center glow-border-hover group"
              >
                <motion.span
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h5 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h5>
                <p className="text-primary font-bold text-xl mb-1">{item.price}</p>
                <ServiceButtons service={item} requestLabel={t("servicesSection.requestForecast")} />
              </motion.div>
            ))}
          </div>

          <CategoryHeader
            label={categories.find((c) => c.id === "consultas-especificas")!.label}
            categorySlug="consultas-especificas"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {consultasEspecificas.map((item, i) => (
              <motion.div
                key={item.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-mystical p-6 text-center glow-border-hover group"
              >
                <motion.span
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h5 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h5>
                {item.cardDesc && (
                  <p className="text-muted-foreground text-sm mb-2">{item.cardDesc}</p>
                )}
                <p className="text-primary font-bold text-xl mb-1">{item.price}</p>
                <ServiceButtons service={item} requestLabel={t("servicesSection.requestConsult")} />
              </motion.div>
            ))}
          </div>

          <CategoryHeader
            label={categories.find((c) => c.id === "leituras-personalizadas")!.label}
            categorySlug="leituras-personalizadas"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leituras.map((item, i) => (
              <motion.div
                key={item.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-mystical p-6 text-center glow-border-hover group"
              >
                <motion.span
                  className="text-3xl block mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h5 className="font-display text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h5>
                <p className="text-primary font-bold text-xl mb-1">{item.price}</p>
                <ServiceButtons service={item} requestLabel={t("servicesSection.requestReading")} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
        >
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center mb-2">
            {t("servicesSection.liveTitle")}
          </h3>
          <p className="text-center text-muted-foreground font-light mb-8 text-sm">
            {t("servicesSection.liveNote")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sessoes.map((s, i) => (
              <motion.div
                key={s.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
                className={`relative card-mystical p-8 text-center glow-border-hover transition-all duration-300 ${
                  s.popular ? "border-primary/50 scale-[1.02] glow-gold" : ""
                }`}
              >
                {s.popular && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full tracking-wider shimmer"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {t("servicesSection.mostPopular")}
                  </motion.div>
                )}

                <motion.span
                  className="text-4xl block mb-4"
                  animate={s.popular ? { scale: [1, 1.1, 1] } : {}}
                  transition={
                    s.popular ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}
                  }
                >
                  {s.icon}
                </motion.span>

                <h4 className="font-display text-2xl font-bold mb-1">{s.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{s.duration}</p>
                <p className="text-primary font-bold text-3xl mb-4">{s.price}</p>

                <ul className="space-y-3 text-sm text-foreground/80 mb-6">
                  {s.features?.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 justify-center">
                      <span className="text-primary">✦</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <WhatsAppMotionCta
                    toWhatsAppPage
                    className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 text-sm tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t("servicesSection.request")}
                  </WhatsAppMotionCta>
                  <Link
                    to={localizedPath(`/servicos/${s.slug}`)}
                    className="inline-block text-center border border-primary/40 text-primary font-semibold px-8 py-3 rounded-lg text-sm hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 tracking-wide"
                  >
                    {t("servicesSection.learnMore")}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
