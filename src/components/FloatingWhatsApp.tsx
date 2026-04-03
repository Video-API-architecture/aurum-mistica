import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="pulse-ring fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_45%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      title="Fale conosco no WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
