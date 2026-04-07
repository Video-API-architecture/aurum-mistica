import { useTranslation } from "react-i18next";
import WhatsAppMotionCta from "@/components/WhatsAppMotionCta";

const FloatingWhatsApp = () => {
  const { t } = useTranslation();
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex items-end justify-end">
      <WhatsAppMotionCta
        className="pointer-events-auto pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] shadow-lg transition-transform duration-300 hover:scale-110"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        title={t("floatingWhatsapp.title")}
      >
        <span className="text-2xl">💬</span>
      </WhatsAppMotionCta>
    </div>
  );
};

export default FloatingWhatsApp;
