"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient — original */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6b1616] via-[#8b1e1e] to-[#5a1212]" />

      {/* Decorative gold circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e8d5a8]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#e8d5a8]/8 blur-3xl" />

      {/* Subtle grid texture — original */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 40px, #e8d5a8 40px, #e8d5a8 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #e8d5a8 40px, #e8d5a8 41px)",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-[#e8d5a8]/15 border border-[#e8d5a8]/30 rounded-full px-4 py-1.5 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#e8d5a8] animate-pulse" />
          <span className="text-[#e8d5a8] text-xs font-medium tracking-wider uppercase">
            Trusted Studio · Serving Pratapgarh
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-devanagari text-5xl sm:text-7xl font-bold mb-4 text-shimmer pt-4 deva-heading"
        >
          सागर स्टूडियो
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#e8d5a8]/60 text-base sm:text-lg tracking-[0.3em] uppercase font-light mb-6"
        >
          Sagar Studio
        </motion.p>

        {/* Subheading */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <p className="font-devanagari text-[#e8d5a8] text-lg sm:text-xl leading-relaxed mb-2">
            फोटोग्राफी, प्रिंटिंग और सरकारी सेवाएं
          </p>
          <p className="text-[#e8d5a8]/60 text-sm sm:text-base">
            Photography, Printing &amp; Government Services
          </p>
          <p className="font-devanagari text-[#e8d5a8]/70 text-sm mt-2">
            गड़वारा तिराहा, प्रतापगढ़ · Gadwara Tiraha, Pratapgarh
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:+919415415800"
            id="hero-call-btn"
            className="pulse-red btn-touch flex items-center gap-3 bg-[#e8d5a8] text-[#8b1e1e] px-8 py-4 rounded-full font-bold text-base shadow-xl w-full sm:w-auto justify-center"
            style={{
              transition:
                "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, filter 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 32px rgba(232,213,168,0.25)";
              el.style.filter = "brightness(1.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "";
              el.style.filter = "";
            }}
          >
            <Phone size={20} />
            <span>अभी कॉल करें</span>
            <span className="text-xs font-normal opacity-70">Call Now</span>
          </a>

          <a
            href="https://wa.me/919415415800"
            id="hero-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-green btn-touch flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl w-full sm:w-auto justify-center"
            style={{
              transition:
                "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, filter 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 32px rgba(37,211,102,0.3)";
              el.style.filter = "brightness(1.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "";
              el.style.filter = "";
            }}
          >
            <MessageCircle size={20} />
            <span>WhatsApp करें</span>
            <span className="text-xs font-normal opacity-70">WhatsApp Now</span>
          </a>
        </motion.div>

        {/* WhatsApp print hint */}
        <motion.p
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-[#e8d5a8]/40 text-xs"
        >
          WhatsApp पर फाइल भेजें → प्रिंट करवाएं · Send file on WhatsApp for
          print service
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#e8d5a8]/40"
      >
        <span className="text-xs tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
