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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const sections = ["home", "services", "gallery", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: "-35% 0px -55% 0px" }
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
          ? "bg-[#4a0e0e]/75 backdrop-blur-xl py-2.5 shadow-sm shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="nav-container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="flex flex-col leading-tight group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-devanagari text-xl font-bold text-[#e8d5a8] group-hover:text-white transition-colors duration-300">
            सागर स्टूडियो
          </span>
          <span className="text-[10px] text-[#e8d5a8]/50 font-light tracking-[0.3em] uppercase">
            Sagar Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
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
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#e8d5a8]/75 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`text-[9px] tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-[#e8d5a8]/80"
                      : "text-[#e8d5a8]/35 group-hover:text-[#e8d5a8]/60"
                  }`}
                >
                  {link.en}
                </span>

                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#e8d5a8]/70 origin-left"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />

                {/* Hover underline (non-active) */}
                {!isActive && (
                  <div className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#e8d5a8]/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                )}
              </Link>
            );
          })}

          <a
            href="tel:+919415415800"
            id="navbar-call-btn"
            className="flex items-center gap-2 bg-[#e8d5a8] text-[#6b1616] px-6 py-2.5 rounded-full font-semibold text-sm shadow-md transition-all duration-250"
            style={{
              transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(232,213,168,0.25)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <Phone size={13} />
            Call Now
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+919415415800"
            className="btn-touch flex items-center gap-1.5 bg-[#e8d5a8] text-[#6b1616] px-5 py-2.5 rounded-full text-xs font-semibold"
          >
            <Phone size={12} />
            Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#e8d5a8] p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-[#4a0e0e]/90 backdrop-blur-xl border-t border-[#5a4632]/30"
          >
            <nav className="flex flex-col py-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-6 py-3.5 transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-[#e8d5a8]/75 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-devanagari text-base font-medium">
                        {link.label}
                      </span>
                      <span className="opacity-50 text-xs">— {link.en}</span>
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e8d5a8]" />
                    )}
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
