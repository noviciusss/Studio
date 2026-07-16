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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    // Active Section Observer
    const sections = ["home", "services", "gallery", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px" } // trigger when section occupies main center of viewport
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((obs) => {
        if (obs && obs.el) obs.observer.unobserve(obs.el);
      });
    };
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center group relative py-1"
              >
                <span
                  className={`font-devanagari text-sm transition-colors duration-300 ${
                    isActive ? "text-white font-bold" : "text-[#e8d5a8]/80 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`text-[9px] transition-colors duration-300 ${
                    isActive ? "text-[#e8d5a8] font-medium" : "text-[#e8d5a8]/50 group-hover:text-[#e8d5a8]"
                  }`}
                >
                  {link.en}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#e8d5a8] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href="tel:+919415415800"
            id="navbar-call-btn"
            className="flex items-center gap-2 bg-[#e8d5a8] text-[#8b1e1e] px-6 py-3 rounded-full font-semibold text-sm hover:bg-white transition-all hover:scale-105 shadow-md"
          >
            <Phone size={14} />
            Call Now
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+919415415800"
            className="flex items-center gap-1 bg-[#e8d5a8] text-[#8b1e1e] px-5 py-2.5 rounded-full text-xs font-semibold"
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-6 py-3 transition-colors ${
                      isActive ? "bg-white/10 text-white" : "text-[#e8d5a8]/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-devanagari text-base font-medium">
                        {link.label}
                      </span>
                      <span className="opacity-60 text-xs">— {link.en}</span>
                    </div>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#e8d5a8]" />}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
