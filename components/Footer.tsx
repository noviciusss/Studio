"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2b2320] text-[#e8d5a8]">
      {/* Main footer */}
      <Container className="pt-28 pb-20">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-devanagari text-2xl font-bold text-[#e8d5a8] mb-2" style={{ lineHeight: 1.7 }}>
              सागर स्टूडियो
            </h3>
            <p className="text-[#e8d5a8]/50 text-xs tracking-widest uppercase mb-4">
              Sagar Studio
            </p>
            <p className="font-devanagari text-[#e8d5a8]/70 text-sm mb-1" style={{ lineHeight: 1.9 }}>
              विश्वसनीय फोटोग्राफी एवं डिजिटल सेवाएं
            </p>
            <p className="text-[#e8d5a8]/40 text-xs mb-4">
              Trusted photography and digital services.
            </p>
            <div className="border-t border-[#e8d5a8]/10 pt-4 mt-4">
              <p className="text-[#e8d5a8]/80 text-xs font-semibold">
                स्वामी / Proprietor:
              </p>
              <p className="font-devanagari text-[#e8d5a8] text-sm font-bold mt-1" style={{ lineHeight: 1.4 }}>
                राकेश बहादुर सिंह
              </p>
              <p className="text-[#e8d5a8]/50 text-xs">
                Rakesh Bahadur Singh
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#e8d5a8]/50 mb-6">
              Quick Links
            </h4>
            <div className="space-y-6">
              {[
                { hi: "होम", en: "Home", href: "#home" },
                { hi: "सेवाएं", en: "Services", href: "#services" },
                { hi: "गैलरी", en: "Gallery", href: "#gallery" },
                { hi: "संपर्क", en: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-2 text-[#e8d5a8]/60 hover:text-[#e8d5a8] transition-colors text-sm"
                >
                  <span className="font-devanagari" style={{ lineHeight: 1.7 }}>{l.hi}</span>
                  <span className="text-[#e8d5a8]/30 text-xs">· {l.en}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact repeat */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#e8d5a8]/50 mb-6">
              संपर्क · Contact
            </h4>
            <div className="space-y-7">
              <a
                href="tel:+919415415800"
                className="flex items-center gap-3 text-[#e8d5a8]/70 hover:text-[#e8d5a8] transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#8b1e1e]/50 flex items-center justify-center group-hover:bg-[#8b1e1e] transition-colors">
                  <Phone size={14} />
                </div>
                <span>9415415800</span>
              </a>
              <a
                href="https://wa.me/919415415800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#e8d5a8]/70 hover:text-[#e8d5a8] transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25d366]/30 flex items-center justify-center group-hover:bg-[#25d366]/60 transition-colors">
                  <MessageCircle size={14} />
                </div>
                <span>WhatsApp</span>
              </a>
              <div className="text-[#e8d5a8]/40 text-xs mt-2">
                <p className="font-devanagari" style={{ lineHeight: 1.8 }}>गड़वारा तिराहा, प्रतापगढ़</p>
                <p>Pratapgarh, UP – 230502</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[#e8d5a8]/10 py-7">
        <p className="text-center text-[#e8d5a8]/30 text-xs leading-relaxed">
          © {year} Sagar Studio, Gadwara Tiraha, Pratapgarh · Estd. 1980 · All rights reserved<br />
          Owned &amp; Managed by Rakesh Bahadur Singh
        </p>
      </div>
    </footer>
  );
}
