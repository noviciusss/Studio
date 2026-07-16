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
  MessageSquare,
  IdCard,
  Map,
  ScrollText,
} from "lucide-react";

type Service = {
  icon: React.ReactNode;
  hi: string;
  en: string;
};

type Category = {
  title: string;
  en: string;
  emoji: string;
  services: Service[];
};

const categories: Category[] = [
  {
    title: "फोटोग्राफी और वीडियोग्राफी",
    en: "Photography & Videography",
    emoji: "📸",
    services: [
      { icon: <Camera size={20} />, hi: "शादी की फोटोग्राफी", en: "Wedding Photography" },
      { icon: <Video size={20} />, hi: "वीडियोग्राफी", en: "Videography" },
      { icon: <Users size={20} />, hi: "पारिवारिक / पोर्ट्रेट", en: "Family & Portrait" },
      { icon: <CreditCard size={20} />, hi: "पासपोर्ट साइज़ फोटो", en: "Passport Size Photos" },
      { icon: <Camera size={20} />, hi: "अर्जेंट फोटो सेवा", en: "Urgent Photo Service" },
      { icon: <Frame size={20} />, hi: "फोटो फ्रेमिंग और एल्बम", en: "Framing & Albums" },
    ],
  },
  {
    title: "प्रिंटिंग सेवाएं",
    en: "Printing Services",
    emoji: "🖨️",
    services: [
      { icon: <Mail size={20} />, hi: "शादी के कार्ड", en: "Wedding Cards" },
      { icon: <FileText size={20} />, hi: "पम्पलेट / फ्लायर", en: "Pamphlets & Flyers" },
      { icon: <ScrollText size={20} />, hi: "चुनावी / शोक कार्ड", en: "Election / Death Cards" },
      { icon: <Printer size={20} />, hi: "कलर एवं B&W प्रिंट", en: "Color & B&W Printing" },
      { icon: <Copy size={20} />, hi: "फोटोस्टेट / कलर", en: "Photostat / Color Xerox" },
      { icon: <Layers size={20} />, hi: "लैमिनेशन", en: "Lamination" },
      { icon: <ScanLine size={20} />, hi: "जेरोक्स एवं स्कैनिंग", en: "Xerox & Scanning" },
      { icon: <MessageSquare size={20} />, hi: "WhatsApp प्रिंट", en: "WhatsApp Print" },
    ],
  },
  {
    title: "सरकारी सेवाएं",
    en: "Government Services",
    emoji: "🏛️",
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
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(139,30,30,0.12)" }}
      className="bg-white rounded-xl p-5 border border-[#e8d5a8]/30 flex items-start gap-4 cursor-default transition-all"
    >
      <div className="w-10 h-10 rounded-lg bg-[#8b1e1e]/8 flex items-center justify-center text-[#8b1e1e] flex-shrink-0 mt-0.5">
        {service.icon}
      </div>
      <div>
        <p className="font-devanagari text-[#2b2320] text-sm font-semibold" style={{ lineHeight: 1.7 }}>
          {service.hi}
        </p>
        <p className="text-[#2b2320]/50 text-xs mt-0.5">{service.en}</p>
        <p className="text-[#8b1e1e] text-[10px] mt-1.5 font-medium">
          संपर्क करें · Contact for pricing
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-36 bg-[#fbf6ee]">
      <Container>
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-0.5 bg-[#8b1e1e]" />
            <span className="text-[#8b1e1e] text-xs font-semibold tracking-widest uppercase">
              हमारी सेवाएं · Our Services
            </span>
            <div className="w-10 h-0.5 bg-[#8b1e1e]" />
          </div>
          <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-4 pt-3">
            क्या-क्या मिलता है
          </h2>
          <p className="text-[#2b2320]/60 text-sm max-w-md mx-auto">
            Everything we offer — from wedding photography to government
            document services
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-7"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <div>
                  <h3 className="font-devanagari text-xl font-bold text-[#8b1e1e]" style={{ lineHeight: 1.6 }}>
                    {cat.title}
                  </h3>
                  <p className="text-[#2b2320]/50 text-xs">{cat.en}</p>
                </div>
                <div className="flex-1 h-px bg-[#e8d5a8]/60 ml-2" />
              </motion.div>

              {/* Service cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((svc, i) => (
                  <ServiceCard key={i} service={svc} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
