import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
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

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-body tracking-[0.3em] uppercase text-primary/80">
              ✦ Rituais Energéticos ✦
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight mb-6">
            Transforme sua energia e{" "}
            <span className="text-gradient-gold">destrave sua vida</span>{" "}
            com rituais espirituais personalizados
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10">
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
