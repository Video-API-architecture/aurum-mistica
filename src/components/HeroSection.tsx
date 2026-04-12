import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import cosmicBg from "@/assets/cosmic-bg.jpg";
import aurum1 from "@/assets/aurum-1.jpeg";
import aurum2 from "@/assets/aurum-2.jpeg";
import aurum3 from "@/assets/aurum-3.jpeg";
import { AnimatePresence } from "framer-motion";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";
import StarField from "@/components/StarField";

const images = [aurum1, aurum2, aurum3];

const floatingIcons = ["🌙", "⭐", "🔮", "✨", "🌟", "☽"];

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const HeroSection = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-x-hidden scroll-mt-32 pt-10 md:scroll-mt-28 md:pt-8"
    >
      <div className="absolute inset-0">
        <img
          src={cosmicBg}
          alt={t("hero.cosmicAlt")}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <StarField />

      {/* Floating Mistical icons — clipped so transforms never widen the page */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {floatingIcons.map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl md:text-3xl opacity-20 select-none"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.1, 0.35, 0.1],
              rotate: [0, i % 2 === 0 ? 15 : -15, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 box-border mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_min(16rem,32vw)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-12">
          <motion.div
            className="min-w-0 text-center lg:text-left"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-4 max-w-full px-0.5" variants={childVariant}>
              <span className="block break-words text-sm font-body uppercase text-primary/80 tracking-[0.12em] sm:tracking-[0.22em] md:tracking-[0.3em]">
                {t("hero.kicker")}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 break-words"
              variants={childVariant}
            >
              <span className="text-shimmer-gold">Aurum Mística</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl font-display font-medium text-foreground/90 mb-6 break-words"
              variants={childVariant}
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 mb-3"
              variants={childVariant}
            >
              {t("hero.line1")}
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 mb-10"
              variants={childVariant}
            >
              {t("hero.line2")}
            </motion.p>

            <motion.div variants={childVariant}>
              <WhatsAppMotionCta
                toWhatsAppPage
                className="shimmer inline-block max-w-full bg-gradient-gold text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero.cta")}
              </WhatsAppMotionCta>
            </motion.div>
          </motion.div>

          {/* Photo carousel */}
          <motion.div
            className="mx-auto w-full min-w-0 max-w-64 justify-self-center md:max-w-72 lg:mx-0 lg:w-full lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative aspect-[9/16] w-full max-w-full overflow-hidden rounded-2xl border-2 border-primary/30 shadow-2xl animate-glow-breathe">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={t("hero.photoAlt")}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? "bg-primary w-8 shadow-gold" : "bg-primary/30 w-2 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-primary/40 text-2xl"
        >
          <motion.span
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
