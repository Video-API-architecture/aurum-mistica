const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-2">Aurum Mística</h3>
            <p className="text-sm text-muted-foreground font-light">
              Desvende os mistérios do seu caminho ✨
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                📲 WhatsApp
              </a>
              <a
                href="https://www.tiktok.com/@aurummisticaoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                🎵 TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8">
          <p className="text-xs text-muted-foreground/60 font-light text-center mb-3">
            Os atendimentos possuem caráter espiritual e energético, não substituindo tratamentos
            médicos, psicológicos ou financeiros.
          </p>
          <p className="text-sm text-muted-foreground/60 font-light text-center">
            © {new Date().getFullYear()} Aurum Mística. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;