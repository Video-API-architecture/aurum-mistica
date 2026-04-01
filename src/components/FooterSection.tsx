const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-light"
              >
                📲 WhatsApp
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-light"
              >
                📷 Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">Aviso Importante</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Os atendimentos possuem caráter espiritual e energético, não substituindo tratamentos
              médicos, psicológicos ou financeiros. Procure sempre acompanhamento profissional adequado.
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground/60 font-light">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
