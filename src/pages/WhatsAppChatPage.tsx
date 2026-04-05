import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhatsAppHelperNumberAndActions from "@/components/WhatsAppHelperNumberAndActions";

const WhatsAppChatPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/30 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex h-14 max-w-2xl items-center px-4">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            ← Voltar ao início
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-2xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <span className="mb-4 block text-5xl" aria-hidden>
            💬
          </span>
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Fale com a Aurum Mística no WhatsApp
          </h1>
          <p className="mt-3 text-muted-foreground">
            No app do TikTok ou Instagram, o link direto pode ser bloqueado. Use o número abaixo ou
            abra o site no Chrome ou Safari.
          </p>

          <WhatsAppHelperNumberAndActions />
        </motion.div>
      </main>
    </div>
  );
};

export default WhatsAppChatPage;
