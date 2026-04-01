import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ana C.",
    text: "Eu estava num momento muito difícil no meu relacionamento. Depois do adoçamento, as coisas começaram a mudar de uma forma que eu não esperava. Voltamos a nos entender.",
  },
  {
    name: "Marcos R.",
    text: "Fiz o ritual de abertura de caminhos e em menos de um mês recebi uma proposta de emprego que eu já tinha desistido de buscar. Coincidência? Eu não acredito mais nisso.",
  },
  {
    name: "Juliana M.",
    text: "A proteção energética mudou completamente minha rotina. Eu me sentia drenada todos os dias. Hoje tenho energia, clareza e uma paz que não sentia há anos.",
  },
  {
    name: "Carlos S.",
    text: "O empoderamento foi transformador. Minha autoconfiança voltou, meus negócios melhoraram e as pessoas ao meu redor notaram a diferença.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4">
            O que <span className="text-gradient-gold">dizem</span> sobre os atendimentos
          </h2>
          <p className="text-muted-foreground font-light">Depoimentos reais de pessoas que passaram pela transformação</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50 relative"
            >
              <span className="text-primary/30 text-6xl font-display absolute top-4 left-6">"</span>
              <p className="text-foreground/85 font-light leading-relaxed mb-6 relative z-10 pt-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold">
                  {t.name[0]}
                </div>
                <span className="text-sm text-muted-foreground font-medium">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
