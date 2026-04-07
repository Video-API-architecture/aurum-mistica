import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/contexts/LocaleContext";
import WhatsAppHelperNumberAndActions from "@/components/WhatsAppHelperNumberAndActions";

const WhatsAppChatPage = () => {
  const { t } = useTranslation();
  const { localizedPath } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("meta.whatsappTitle")}</title>
      </Helmet>
      <header className="border-b border-border/30 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex h-14 max-w-2xl items-center px-4">
          <Link
            to={localizedPath("/")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t("whatsappPage.back")}
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
            {t("whatsappPage.title")}
          </h1>
          <p className="mt-3 text-muted-foreground">{t("whatsappPage.body")}</p>

          <WhatsAppHelperNumberAndActions />
        </motion.div>
      </main>
    </div>
  );
};

export default WhatsAppChatPage;
