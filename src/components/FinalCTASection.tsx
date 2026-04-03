import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-cosmic">
      <div className="relative container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-5xl block mb-6">🔮</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Pronto para Descobrir <span className="text-gradient-gold">seu Caminho?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-10">
            Sua transformação começa com uma pergunta. As cartas já têm a resposta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-gold text-primary-foreground font-semibold text-lg px-12 py-5 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300 animate-pulse-gold tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              FALE COM AURUM MÍSTICA
            </motion.a>
            <motion.a
              href="#servicos"
              className="inline-block border-2 border-primary/50 text-primary font-semibold text-lg px-10 py-5 rounded-lg hover:bg-primary/10 transition-colors duration-300 tracking-wide"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              VER SERVIÇOS
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;