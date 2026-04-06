import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Item = { name: string; text: string };

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const avatars = [
  "/testimonials/ana-m.jpg",
  "/testimonials/joao-m.jpg",
  "/testimonials/carla-r.jpg",
  "/testimonials/pedro-l.jpg",
];

const SocialProofSection = () => {
  const { t } = useTranslation();
  const testimonials = t("socialProof.items", { returnObjects: true }) as Item[];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t("socialProof.title")} <span className="text-shimmer-gold">{t("socialProof.titleAccent")}</span>
          </h2>
          <p className="text-muted-foreground font-light">{t("socialProof.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className="card-mystical p-8 relative glow-border-hover group"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <motion.span
                    key={j}
                    className="text-primary text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.12 + j * 0.05 + 0.3,
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <span className="text-primary/10 text-7xl font-display absolute top-2 right-6 select-none group-hover:text-primary/20 transition-colors duration-500">"</span>
              <p className="text-foreground/85 font-light leading-relaxed mb-6 relative z-10">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <motion.div
                  className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-primary/30 bg-primary/10 ring-2 ring-primary/10"
                  whileHover={{ scale: 1.08, borderColor: "hsl(43 80% 52% / 0.6)" }}
                >
                  <img
                    src={avatars[i]}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <span className="text-sm text-muted-foreground font-medium">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
