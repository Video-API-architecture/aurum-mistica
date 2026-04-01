import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import aurum1 from "@/assets/aurum-1.jpeg";
import aurum2 from "@/assets/aurum-2.jpeg";
import aurum3 from "@/assets/aurum-3.jpeg";

const images = [aurum1, aurum2, aurum3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Rituais espirituais"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block mb-6">
              <span className="text-sm font-body tracking-[0.3em] uppercase text-primary/80">
                ✦ Rituais Energéticos ✦
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight mb-6">
              Transforme sua energia e{" "}
              <span className="text-gradient-gold">destrave sua vida</span>{" "}
              com rituais espirituais personalizados
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 mb-10">
              Atendimentos energéticos focados em amor, proteção, prosperidade e alinhamento espiritual.
            </p>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-gold text-primary-foreground font-semibold text-lg px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              QUERO MEU ATENDIMENTO
            </motion.a>
          </motion.div>

          {/* Photo carousel */}
          <motion.div
            className="flex-shrink-0 w-64 md:w-72 lg:w-80"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt="Aurum Mística - Live"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary/50 text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
