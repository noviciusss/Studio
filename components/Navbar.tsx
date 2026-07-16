"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "होम", en: "Home", href: "#home" },
  { label: "सेवाएं", en: "Services", href: "#services" },
  { label: "गैलरी", en: "Gallery", href: "#gallery" },
  { label: "संपर्क", en: "Contact", href: "#contact" },
];

const navInner: React.CSSProperties = {
  maxWidth: "1400px",
  margin: "0 auto",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#8b1e1e]/90 backdrop-blur-md shadow-lg shadow-[#8b1e1e]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div style={navInner}>
        {/* Logo */}
        <Link
          href="#home"
          className="flex flex-col leading-tight group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-devanagari text-xl font-bold text-[#e8d5a8] group-hover:text-white transition-colors">
            सागर स्टूडियो
          </span>
          <span className="text-[10px] text-[#e8d5a8]/70 font-light tracking-widest uppercase">
            Sagar Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center group"
            >
              <span className="font-devanagari text-sm text-[#e8d5a8] group-hover:text-white transition-colors">
                {link.label}
              </span>
              <span className="text-[9px] text-[#e8d5a8]/50 group-hover:text-[#e8d5a8] transition-colors">
                {link.en}
              </span>
            </Link>
          ))}
          <a
            href="tel:+919415415800"
            id="navbar-call-btn"
            className="flex items-center gap-2 bg-[#e8d5a8] text-[#8b1e1e] px-4 py-2 rounded-full font-semibold text-sm hover:bg-white transition-all hover:scale-105 shadow-md"
          >
            <Phone size={14} />
            Call Now
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+919415415800"
            className="flex items-center gap-1 bg-[#e8d5a8] text-[#8b1e1e] px-3 py-1.5 rounded-full text-xs font-semibold"
          >
            <Phone size={12} />
            Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#e8d5a8] p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#8b1e1e]/95 backdrop-blur-md border-t border-[#e8d5a8]/20"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 hover:bg-white/10 transition-colors"
                >
                  <span className="font-devanagari text-[#e8d5a8] text-base">
                    {link.label}
                  </span>
                  <span className="text-[#e8d5a8]/50 text-xs">— {link.en}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
