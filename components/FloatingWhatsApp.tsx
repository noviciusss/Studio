"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919415415800?text=नमस्ते%20सागर%20स्टूडियो%2C%20मुझे%20आपकी%20सेवाओं%20के%20बारे%20में%20पूछना%20है।"
      target="_blank"
      rel="noopener noreferrer"
      title="Contact us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg hover:bg-[#1da851] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25d366]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping" />
      <MessageCircle size={28} className="relative z-10" />
    </motion.a>
  );
}
