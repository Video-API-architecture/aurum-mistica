import { motion } from "framer-motion";
import { useMemo } from "react";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";

const FinalCTASection = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-cosmic">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="star-particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="text-5xl block mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🔮
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Pronto para Descobrir <span className="text-shimmer-gold">seu Caminho?</span>
          </h2>
          <motion.p
            className="text-xl text-muted-foreground font-light mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Sua transformação começa com uma pergunta. As cartas já têm a resposta.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <WhatsAppMotionCta
              toWhatsAppPage
              className="shimmer inline-block bg-gradient-gold text-primary-foreground font-semibold text-lg px-12 py-5 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              FALE COM AURUM MÍSTICA
            </WhatsAppMotionCta>
            <motion.a
              href="#servicos"
              className="inline-block border-2 border-primary/50 text-primary font-semibold text-lg px-10 py-5 rounded-lg hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 tracking-wide"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              VER SERVIÇOS
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
