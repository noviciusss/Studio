"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Container } from "@/components/Container";
import {
  Camera,
  Video,
  Users,
  CreditCard,
  Frame,
  Printer,
  Mail,
  Copy,
  FileText,
  Layers,
  ScanLine,
  MessageCircle,
  IdCard,
  Map,
  ScrollText,
  Phone,
  Upload,
  Package,
  Building2,
  Zap,
} from "lucide-react";

type Service = {
  icon: React.ReactNode;
  hi: string;
  en: string;
  featured?: boolean;
};

type Category = {
  title: string;
  en: string;
  icon: React.ReactNode;
  services: Service[];
};

const categories: Category[] = [
  {
    title: "फोटोग्राफी और वीडियोग्राफी",
    en: "Photography & Videography",
    icon: <Camera size={20} />,
    services: [
      { icon: <Camera size={20} />, hi: "शादी की फोटोग्राफी", en: "Wedding Photography", featured: true },
      { icon: <Video size={20} />, hi: "वीडियोग्राफी", en: "Videography" },
      { icon: <Users size={20} />, hi: "पारिवारिक / पोर्ट्रेट", en: "Family & Portrait" },
      { icon: <CreditCard size={20} />, hi: "पासपोर्ट साइज़ फोटो", en: "Passport Size Photos" },
      { icon: <Zap size={20} />, hi: "अर्जेंट फोटो सेवा", en: "Urgent Photo Service" },
      { icon: <Frame size={20} />, hi: "फोटो फ्रेमिंग और एल्बम", en: "Framing & Albums" },
    ],
  },
  {
    title: "प्रिंटिंग सेवाएं",
    en: "Printing Services",
    icon: <Printer size={20} />,
    services: [
      { icon: <Mail size={20} />, hi: "शादी के कार्ड", en: "Wedding Cards" },
      { icon: <FileText size={20} />, hi: "पम्पलेट / फ्लायर", en: "Pamphlets & Flyers" },
      { icon: <ScrollText size={20} />, hi: "चुनावी / शोक कार्ड", en: "Election / Death Cards" },
      { icon: <Printer size={20} />, hi: "कलर एवं B&W प्रिंट", en: "Color & B&W Printing" },
      { icon: <Copy size={20} />, hi: "फोटोस्टेट / कलर", en: "Photostat / Color Xerox" },
      { icon: <Layers size={20} />, hi: "लैमिनेशन", en: "Lamination" },
      { icon: <ScanLine size={20} />, hi: "जेरोक्स एवं स्कैनिंग", en: "Xerox & Scanning" },
    ],
  },
  {
    title: "सरकारी सेवाएं",
    en: "Government Services",
    icon: <Building2 size={20} />,
    services: [
      { icon: <IdCard size={20} />, hi: "पैन कार्ड अप्लाई / प्रिंट", en: "PAN Card Apply & Print" },
      { icon: <Map size={20} />, hi: "भूलेख परिणाम प्रिंट", en: "Bhulekh Result Print" },
      { icon: <FileText size={20} />, hi: "अन्य सरकारी फॉर्म", en: "Other Govt. Forms" },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// Featured card for Wedding Photography
function FeaturedCard({ service }: { service: Service }) {
  return (
    <motion.div
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-2xl overflow-hidden border border-[#8b1e1e]/20 shadow-md relative group"
      style={{
        background: "linear-gradient(135deg, #5c1212 0%, #8b1e1e 50%, #7a1a1a 100%)",
      }}
    >
      <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#e8d5a8]/15 flex items-center justify-center text-[#e8d5a8] flex-shrink-0">
          <Camera size={28} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#e8d5a8]/50 text-[10px] uppercase tracking-[0.25em] font-medium">
              Featured Service
            </span>
            <div className="w-12 h-px bg-[#e8d5a8]/25" />
          </div>
          <h3 className="font-devanagari text-[#e8d5a8] text-2xl font-bold mb-1" style={{ lineHeight: 1.5 }}>
            शादी की फोटोग्राफी
          </h3>
          <p className="text-[#e8d5a8]/55 text-sm mb-4">
            Wedding Photography — Capturing your most precious memories
          </p>
          <a
            href="tel:+919415415800"
            className="inline-flex items-center gap-2 bg-[#e8d5a8] text-[#6b1616] px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={{
              transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(232,213,168,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <Phone size={14} />
            Book Now
          </a>
        </div>
        {/* Decorative aperture */}
        <div className="hidden sm:block opacity-10 flex-shrink-0">
          <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden="true">
            <circle cx="60" cy="60" r="58" stroke="#e8d5a8" strokeWidth="0.5" fill="none" />
            <circle cx="60" cy="60" r="45" stroke="#e8d5a8" strokeWidth="0.5" fill="none" />
            <circle cx="60" cy="60" r="28" stroke="#e8d5a8" strokeWidth="1" fill="none" />
            {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => (
              <line
                key={i}
                x1="60" y1="60"
                x2={60 + 58 * Math.cos((angle * Math.PI) / 180)}
                y2={60 + 58 * Math.sin((angle * Math.PI) / 180)}
                stroke="#e8d5a8" strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// WhatsApp Printing — premium flow card
function WhatsAppPrintCard() {
  return (
    <motion.div
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="col-span-full rounded-2xl border border-[#25d366]/30 shadow-sm overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}
    >
      <div className="p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#25d366]/15 flex items-center justify-center text-[#1da851]">
            <MessageCircle size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-devanagari text-[#1da851] text-lg font-bold" style={{ lineHeight: 1.5 }}>
                WhatsApp प्रिंट
              </h3>
              <span className="bg-[#25d366] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                Fast
              </span>
            </div>
            <p className="text-[#2b2320]/50 text-xs">WhatsApp Printing Service</p>
          </div>
        </div>

        {/* Flow illustration */}
        <div className="flex items-center gap-3 mb-6 max-w-xs">
          {[
            { icon: Upload, label: "Send File", hi: "फाइल भेजें" },
            { icon: Printer, label: "Print", hi: "प्रिंट" },
            { icon: Package, label: "Pickup", hi: "उठाएं" },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-11 h-11 rounded-full bg-[#25d366]/15 flex items-center justify-center text-[#1da851]">
                    <Icon size={17} />
                  </div>
                  <p className="font-devanagari text-[#2b2320] text-[10px] font-medium" style={{ lineHeight: 1.5 }}>
                    {step.hi}
                  </p>
                  <p className="text-[#2b2320]/40 text-[9px] uppercase tracking-wide">
                    {step.label}
                  </p>
                </div>
                {i < 2 && (
                  <div className="flex items-center pb-8">
                    <div className="w-8 h-px bg-[#25d366]/40" />
                    <span className="text-[#25d366]/60 text-xs ml-0.5">›</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="https://wa.me/919415415800?text=नमस्ते%20सागर%20स्टूडियो%2C%20मुझे%20WhatsApp%20प्रिंट%20करवाना%20है।%20मैं%20अपनी%20फ़ाइल%20भेज%20रहा/रही%20हूँ।"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all"
          style={{
            transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,211,102,0.3)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <MessageCircle size={15} />
          WhatsApp पर फाइल भेजें
        </a>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="rounded-xl p-5 border border-[#e8d5a8]/30 bg-white flex items-start gap-4 group relative hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
    >
      <div className="w-10 h-10 rounded-lg bg-[#8b1e1e]/7 flex items-center justify-center text-[#8b1e1e] flex-shrink-0 mt-0.5">
        {service.icon}
      </div>
      <div className="flex-1 pr-8">
        <p className="font-devanagari text-[#2b2320] text-sm font-semibold" style={{ lineHeight: 1.7 }}>
          {service.hi}
        </p>
        <p className="text-[#2b2320]/45 text-xs mt-0.5">{service.en}</p>
        <p className="text-[#8b1e1e] text-[10px] mt-1.5 font-medium">
          संपर्क करें · Contact for pricing
        </p>
      </div>
      <a
        href="tel:+919415415800"
        title="Call for details"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#8b1e1e]/7 hover:bg-[#8b1e1e] text-[#8b1e1e] hover:text-white flex items-center justify-center transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <Phone size={13} />
      </a>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="services"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
      className="bg-[#fbf6ee]"
    >
      <Container>
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#5a4632]/50" />
            <span className="text-[#5a4632] text-[11px] font-medium tracking-[0.25em] uppercase">
              हमारी सेवाएं · Our Services
            </span>
            <div className="w-8 h-px bg-[#5a4632]/50" />
          </div>
          <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-4 pt-3">
            क्या-क्या मिलता है
          </h2>
          <p className="text-[#2b2320]/55 text-sm max-w-md mx-auto">
            Everything we offer — from wedding photography to government document services
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="space-y-20">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8b1e1e]/8 flex items-center justify-center text-[#8b1e1e]">
                  {cat.icon}
                </div>
                <div>
                  <h3
                    className="font-devanagari text-xl font-bold text-[#8b1e1e]"
                    style={{ lineHeight: 1.6 }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-[#2b2320]/40 text-xs">{cat.en}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#5a4632]/20 to-transparent ml-2" />
              </motion.div>

              {/* Service cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Featured Wedding Photography card (first category only) */}
                {catIdx === 0 && <FeaturedCard service={cat.services[0]} />}

                {/* WhatsApp Print as premium card in printing category */}
                {catIdx === 1 && <WhatsAppPrintCard />}

                {cat.services
                  .filter((svc) => !(catIdx === 0 && svc.featured))
                  .map((svc, i) => (
                    <ServiceCard key={i} service={svc} index={i + 1} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
