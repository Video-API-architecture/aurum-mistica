import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import cosmicBg from "@/assets/cosmic-bg.jpg";
import aurum1 from "@/assets/aurum-1.jpeg";
import aurum2 from "@/assets/aurum-2.jpeg";
import aurum3 from "@/assets/aurum-3.jpeg";
import { AnimatePresence } from "framer-motion";

const images = [aurum1, aurum2, aurum3];

const floatingIcons = ["🌙", "⭐", "🔮", "✨", "🌟", "☽"];

const StarField = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-particle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--duration": `${star.duration}s`,
            "--delay": `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={cosmicBg}
          alt="Cosmos místico"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <StarField />

      {/* Floating mystical icons */}
      {floatingIcons.map((icon, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl opacity-20 pointer-events-none select-none"
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

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="inline-block mb-4" variants={childVariant}>
              <span className="text-sm font-body tracking-[0.3em] uppercase text-primary/80">
                ✦ Tarot & Consultas Espirituais ✦
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4"
              variants={childVariant}
            >
              <span className="text-shimmer-gold">Aurum Mística</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl font-display font-medium text-foreground/90 mb-6"
              variants={childVariant}
            >
              Desvende os Mistérios do Seu Caminho ✨🔮
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 mb-3"
              variants={childVariant}
            >
              Respostas em até 24 horas | Consultas por Áudio ou Vídeo
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 mb-10"
              variants={childVariant}
            >
              Leituras de tarot personalizadas para amor, carreira, propósito e autoconhecimento.
            </motion.p>

            <motion.div variants={childVariant}>
              <motion.a
                href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold text-lg px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                AGENDE SUA CONSULTA
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Photo carousel */}
          <motion.div
            className="flex-shrink-0 w-64 md:w-72 lg:w-80"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 animate-glow-breathe">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt="Aurum Mística"
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
