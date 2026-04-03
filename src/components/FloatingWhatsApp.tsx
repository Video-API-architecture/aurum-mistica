import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex items-end justify-end">
      <motion.a
        href="https://api.whatsapp.com/send/?phone=5521967622489&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] shadow-lg transition-transform duration-300 hover:scale-110"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        title="Fale conosco no WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
