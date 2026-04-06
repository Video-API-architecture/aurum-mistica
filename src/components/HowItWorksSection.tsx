import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Step = { icon: string; title: string; desc: string };

const stepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true }) as Step[];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            {t("howItWorks.title")} <span className="text-shimmer-gold">{t("howItWorks.titleAccent")}</span>
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8">
          <motion.div
            className="hidden md:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-px"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            style={{ originX: 0 }}
          >
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
          </motion.div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stepVariants}
              className="text-center relative"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 text-primary font-semibold text-sm relative z-10 backdrop-blur-sm"
                whileHover={{
                  borderColor: "hsl(43 80% 52%)",
                  boxShadow: "0 0 20px -5px hsl(43 80% 52% / 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                {i + 1}
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
