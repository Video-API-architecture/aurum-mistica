import { motion } from "framer-motion";

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-3xl mb-6 block">✨</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-8">
            A <span className="text-gradient-gold">solução</span> está na sua energia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Os rituais energéticos são ferramentas ancestrais que atuam no seu campo espiritual,
            ajudando a <span className="text-foreground font-medium">desbloquear caminhos</span>,{" "}
            <span className="text-foreground font-medium">proteger sua energia</span> e{" "}
            <span className="text-foreground font-medium">alinhar sua vida</span> com aquilo que você deseja.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
