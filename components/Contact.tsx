"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { Container } from "@/components/Container";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 bg-[#fbf6ee]">
      <Container>
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-0.5 bg-[#8b1e1e]" />
            <span className="text-[#8b1e1e] text-xs font-semibold tracking-widest uppercase">
              हमसे मिलें · Visit Us
            </span>
            <div className="w-10 h-0.5 bg-[#8b1e1e]" />
          </div>
          <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-4 pt-3">
            संपर्क करें
          </h2>
          <p className="text-[#2b2320]/60 text-sm">Contact us anytime</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-5">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-[#e8d5a8]/40 flex gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#8b1e1e] flex items-center justify-center text-white flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-semibold text-[#2b2320] text-sm mb-2">
                  पता · Address
                </p>
                <p className="font-devanagari text-[#2b2320] text-sm" style={{ lineHeight: 1.9 }}>
                  गड़वारा तिराहा, प्रतापगढ़, उत्तर प्रदेश — 230502
                </p>
                <p className="text-[#2b2320]/50 text-xs mt-1">
                  Gadwara Tiraha, Pratapgarh, UP – 230502
                </p>
              </div>
            </motion.div>

            {/* Owner Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-[#e8d5a8]/40 flex gap-5 items-center"
            >
              <div className="w-11 h-11 rounded-xl bg-[#8b1e1e] flex items-center justify-center text-[#e8d5a8] text-lg font-bold flex-shrink-0">
                👤
              </div>
              <div>
                <p className="text-[#8b1e1e] text-[10px] uppercase font-bold tracking-wider mb-1">
                  स्वामी · Proprietor
                </p>
                <h4 className="font-devanagari text-lg font-bold text-[#2b2320]" style={{ lineHeight: 1.4 }}>
                  राकेश बहादुर सिंह
                </h4>
                <p className="text-[#2b2320]/60 text-xs font-medium">
                  Rakesh Bahadur Singh
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-[#e8d5a8]/40 flex gap-5 items-center"
            >
              <div className="w-11 h-11 rounded-xl bg-[#8b1e1e] flex items-center justify-center text-white flex-shrink-0">
                <Phone size={18} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#2b2320] text-sm mb-1">
                  फ़ोन · Phone
                </p>
                <a
                  href="tel:+919415415800"
                  id="contact-call-btn"
                  className="text-[#8b1e1e] font-bold text-xl hover:underline"
                >
                  9415415800
                </a>
              </div>
              <a
                href="tel:+919415415800"
                className="bg-[#8b1e1e] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#6b1616] transition-all hover:scale-105 shadow-md flex-shrink-0 flex items-center gap-1.5"
              >
                <span>📞 Call Now</span>
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-[#e8d5a8]/40 flex gap-5 items-center"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25d366] flex items-center justify-center text-white flex-shrink-0">
                <MessageCircle size={18} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#2b2320] text-sm mb-1">
                  WhatsApp
                </p>
                <p className="font-devanagari text-[#2b2320]/60 text-xs" style={{ lineHeight: 1.7 }}>
                  फाइल भेजें, प्रिंट करवाएं
                </p>
                <p className="text-[#2b2320]/40 text-xs">Send file, get prints</p>
              </div>
              <a
                href="https://wa.me/919415415800"
                id="contact-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1da851] transition-all hover:scale-105 shadow-md flex-shrink-0 flex items-center gap-1.5"
              >
                <span>💬 Chat Now</span>
              </a>
            </motion.div>

            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-[#e8d5a8]/40 flex gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e8d5a8] flex items-center justify-center text-[#8b1e1e] flex-shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="font-semibold text-[#2b2320] text-sm mb-2">
                  समय · Timings
                </p>
                <p className="font-devanagari text-[#2b2320] text-sm" style={{ lineHeight: 1.9 }}>
                  खुला है सातों दिन — सुबह 9 बजे से रात 8 बजे तक
                </p>
                <p className="text-[#2b2320]/50 text-xs mt-1">
                  Open 7 days a week · 9:00 AM – 8:00 PM
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-600 text-xs font-medium">
                    Open Today
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Get Directions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href="https://maps.app.goo.gl/qEgnYj78iWgBMDz39"
                id="get-directions-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#8b1e1e] text-[#e8d5a8] px-6 py-4.5 rounded-2xl font-bold text-base hover:bg-[#6b1616] transition-all hover:scale-[1.02] shadow-lg shadow-[#8b1e1e]/20"
                style={{ padding: "1.1rem 1.5rem" }}
              >
                <Navigation size={20} />
                <span className="font-devanagari" style={{ lineHeight: 1.5 }}>
                  🗺️ रास्ता देखें
                </span>
                <span className="text-[#e8d5a8]/60 font-normal text-sm">
                  · Get Directions
                </span>
              </a>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-[#e8d5a8]/40 h-[460px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Sagar+Studio+Gadwara+Tiraha+Pratapgarh+UP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sagar Studio location on Google Maps"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
