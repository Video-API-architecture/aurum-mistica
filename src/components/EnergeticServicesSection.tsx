import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type PriceLine = { text: string; price: string };
type Category = { name: string; lines: PriceLine[] };

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const EnergeticServicesSection = () => {
  const { t } = useTranslation();
  const categories = t("energeticServices.categories", { returnObjects: true }) as Category[];
  const extras = t("energeticServices.extras", { returnObjects: true }) as PriceLine[];

  return (
    <section id="servicos-energeticos" className="py-24 bg-gradient-dark border-t border-border/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold leading-tight">
            {t("energeticServices.title")}{" "}
            <span className="text-shimmer-gold">{t("energeticServices.titleAccent")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="card-mystical p-6 glow-border-hover"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-4 text-center md:text-left">
                {cat.name}
              </h3>
              <ul className="space-y-3">
                {cat.lines.map((line) => (
                  <li
                    key={`${cat.name}-${line.text}`}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm border-b border-border/30 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-foreground/90">{line.text}</span>
                    <span className="text-primary font-bold whitespace-nowrap sm:ml-3">{line.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
          className="card-mystical p-6 md:p-8 glow-border-hover mb-8"
        >
          <h3 className="font-display text-lg font-semibold text-primary mb-4">{t("energeticServices.extrasTitle")}</h3>
          <ul className="space-y-3">
            {extras.map((line) => (
              <li
                key={line.text}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm border-b border-border/30 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-foreground/90">{line.text}</span>
                <span className="text-primary font-bold whitespace-nowrap sm:ml-3">{line.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionHeaderVariants}
          className="rounded-xl border border-primary/35 bg-primary/5 px-6 py-5 md:px-8 md:py-6 text-center"
        >
          <p className="font-display text-base font-semibold text-primary mb-2">{t("energeticServices.tipTitle")}</p>
          <p className="text-muted-foreground text-sm mb-3">{t("energeticServices.tipIntro")}</p>
          <p className="text-foreground font-medium text-sm md:text-base">{t("energeticServices.comboExample")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnergeticServicesSection;
