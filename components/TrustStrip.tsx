"use client";

import { motion } from "framer-motion";
import { Camera, Printer, FileText, Zap } from "lucide-react";

const strips = [
  {
    icon: Camera,
    hi: "शादी की फोटोग्राफी",
    en: "Wedding Photography",
    href: "#services",
  },
  {
    icon: Printer,
    hi: "WhatsApp प्रिंटिंग",
    en: "WhatsApp Printing",
    href: "#services",
  },
  {
    icon: FileText,
    hi: "सरकारी सेवाएं",
    en: "Government Services",
    href: "#services",
  },
  {
    icon: Zap,
    hi: "अर्जेंट फोटो",
    en: "Urgent Photos",
    href: "#services",
  },
];

export default function TrustStrip() {
  return (
    <div className="bg-[#2b2320] border-y border-[#5a4632]/30">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {strips.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex flex-col sm:flex-row items-center gap-3 px-6 py-5 text-center sm:text-left border-r border-[#5a4632]/20 last:border-r-0 hover:bg-[#3a2e28] transition-colors duration-300 cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                <div className="w-10 h-10 rounded-full bg-[#5a4632]/25 flex items-center justify-center text-[#e8d5a8] group-hover:bg-[#8b1e1e]/30 transition-colors duration-300 flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-devanagari text-[#e8d5a8] text-sm font-medium" style={{ lineHeight: 1.7 }}>
                    {item.hi}
                  </p>
                  <p className="text-[#e8d5a8]/40 text-[10px] tracking-wider uppercase">
                    {item.en}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
