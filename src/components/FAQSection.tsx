import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona a consulta por áudio?",
    a: "Você envia sua pergunta via WhatsApp e recebe a resposta em áudio detalhado com a interpretação das cartas em até 24 horas.",
  },
  {
    q: "Posso fazer perguntas sobre qualquer assunto?",
    a: "Sim! Amor, carreira, finanças, saúde espiritual, decisões importantes — as cartas trazem orientação para qualquer área da sua vida.",
  },
  {
    q: "Qual a diferença entre os baralhos?",
    a: "Cada baralho traz uma perspectiva diferente. Quanto mais baralhos utilizados, mais camadas e detalhes a leitura revela sobre sua situação.",
  },
  {
    q: "Quanto tempo leva para receber minha resposta?",
    a: "As consultas por áudio são entregues em até 24 horas. Sessões ao vivo são agendadas conforme disponibilidade.",
  },
  {
    q: "As consultas são confidenciais?",
    a: "Sim, 100%. Todas as informações compartilhadas são tratadas com total sigilo e respeito.",
  },
  {
    q: "Quais formas de pagamento aceita?",
    a: "Aceitamos Pix, transferência bancária e cartões de crédito.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-mystical px-6 border border-border/50"
              >
                <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;