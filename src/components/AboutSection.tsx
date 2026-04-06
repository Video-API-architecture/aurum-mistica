import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Badge = { icon: string; text: string };

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const AboutSection = () => {
  const { t } = useTranslation();
  const trustBadges = t("about.badges", { returnObjects: true }) as Badge[];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t("about.title")} <span className="text-shimmer-gold">{t("about.titleAccent")}</span>
          </h2>
          <motion.p
            className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("about.body")}
          </motion.p>

          <motion.div
            className="card-mystical p-8 max-w-lg mx-auto relative overflow-hidden glow-border-hover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="absolute top-2 left-4 text-primary/10 text-7xl font-display leading-none select-none">"</span>
            <span className="absolute bottom-0 right-4 text-primary/10 text-7xl font-display leading-none select-none">"</span>
            <p className="text-foreground font-display text-xl italic relative z-10 leading-relaxed">
              {t("about.quote")}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={badgeVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-mystical p-6 text-center glow-border-hover group cursor-default"
            >
              <motion.span
                className="text-3xl block mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {badge.icon}
              </motion.span>
              <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {badge.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
