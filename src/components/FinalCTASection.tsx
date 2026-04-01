import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      <div className="relative container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            A sua vida <span className="text-gradient-gold">não muda sozinha.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-10">
            Mas pode começar a mudar <span className="text-foreground font-medium">hoje</span>.
          </p>

          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-gold text-primary-foreground font-semibold text-lg px-12 py-5 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            QUERO TRANSFORMAR MINHA VIDA
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
