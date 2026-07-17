"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Printer, FileText, Quote } from "lucide-react";
import { Container } from "@/components/Container";

const serviceColumns = [
  {
    icon: Camera,
    title: "Photography",
    hi: "फोटोग्राफी",
    items: ["Wedding", "Passport", "Portrait", "Events"],
  },
  {
    icon: Printer,
    title: "Printing",
    hi: "प्रिंटिंग",
    items: ["Color", "Lamination", "Photostat", "WhatsApp Print"],
  },
  {
    icon: FileText,
    title: "Government",
    hi: "सरकारी",
    items: ["PAN Card", "Bhulekh", "Forms", "Xerox"],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      style={{ paddingTop: "10rem", paddingBottom: "9rem" }}
      className="bg-[#fbf6ee] vignette-section"
    >
      <Container>
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="w-8 h-px bg-[#5a4632]/50" />
          <span className="text-[#5a4632] text-[11px] font-medium tracking-[0.25em] uppercase">
            हमारे बारे में · About Us
          </span>
        </motion.div>

        {/* Story block */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-2 leading-tight">
              प्रतापगढ़ का भरोसेमंद स्टूडियो
            </h2>
            <p className="text-[#8b1e1e] text-sm font-medium tracking-wide mb-8">
              Pratapgarh&apos;s Most Trusted Studio
            </p>

            {/* Warm story — Hindi */}
            <p className="font-devanagari deva-body text-[#2b2320] text-base mb-5" style={{ lineHeight: 2.1 }}>
              चाहे शादी की यादें हों, पासपोर्ट फोटो हो, या जरूरी कागज़ात — गड़वारा तिराहे के आसपास के परिवार सालों से सागर स्टूडियो पर भरोसा करते आए हैं।
            </p>

            {/* Warm story — English */}
            <p className="text-[#2b2320]/65 text-sm leading-relaxed mb-10">
              Whether it&apos;s wedding memories, passport photographs, or important documents — families around Gadwara Tiraha have trusted Sagar Studio for years. We bring the same care and quality to every single job, whether it&apos;s a grand wedding album or a simple photocopy.
            </p>

            {/* Gold divider */}
            <div className="divider-gold mb-10" />

            {/* Owner Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="camera-corner bg-white border border-[#e8d5a8]/60 rounded-2xl p-6"
            >
              <div className="flex items-start gap-5">
                {/* Initials avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8b1e1e] to-[#6b1616] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-[#e8d5a8] text-base font-bold tracking-wider">RBS</span>
                </div>
                <div className="flex-1">
                  <p className="text-[#5a4632] text-[10px] uppercase font-semibold tracking-[0.2em] mb-1">
                    Proprietor · स्वामी
                  </p>
                  <h4
                    className="font-devanagari text-xl font-bold text-[#2b2320]"
                    style={{ lineHeight: 1.5 }}
                  >
                    राकेश बहादुर सिंह
                  </h4>
                  <p className="text-[#2b2320]/50 text-xs font-medium mb-4">
                    Rakesh Bahadur Singh
                  </p>
                  <div className="flex items-start gap-2">
                    <Quote size={14} className="text-[#5a4632]/50 flex-shrink-0 mt-0.5" />
                    <p className="text-[#2b2320]/60 text-sm italic leading-relaxed">
                      Committed to serving our customers with honesty and quality.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Service overview — replacing generic counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-3 gap-4"
          >
            {serviceColumns.map((col, i) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-5 border border-[#e8d5a8]/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#8b1e1e]/8 flex items-center justify-center text-[#8b1e1e] mb-4">
                    <Icon size={18} />
                  </div>
                  <p className="font-devanagari text-[#8b1e1e] text-xs font-bold mb-1" style={{ lineHeight: 1.7 }}>
                    {col.hi}
                  </p>
                  <p className="text-[#2b2320]/40 text-[10px] uppercase tracking-wider mb-3">
                    {col.title}
                  </p>
                  <div className="divider-gold mb-3" />
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item} className="text-[#2b2320]/65 text-xs flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#5a4632]/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Storefront photo placeholder — intentional, not dead */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="camera-corner rounded-3xl bg-gradient-to-r from-[#e8d5a8]/10 to-[#8b1e1e]/5 border border-[#e8d5a8]/40 p-14 flex flex-col items-center gap-4 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#8b1e1e]/8 flex items-center justify-center">
            <Camera size={26} className="text-[#8b1e1e]/60" />
          </div>
          <div>
            <p className="font-devanagari text-[#8b1e1e]/70 font-medium text-lg mb-1" style={{ lineHeight: 1.7 }}>
              दुकान की फोटो यहाँ आएगी
            </p>
            <p className="text-[#2b2320]/35 text-sm">
              Storefront photo · Coming soon
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
