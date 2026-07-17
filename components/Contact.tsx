"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { Container } from "@/components/Container";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
      className="bg-[#fbf6ee]"
    >
      <Container>
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#5a4632]/50" />
            <span className="text-[#5a4632] text-[11px] font-medium tracking-[0.25em] uppercase">
              हमसे मिलें · Visit Us
            </span>
            <div className="w-8 h-px bg-[#5a4632]/50" />
          </div>
          <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-4 pt-3">
            संपर्क करें
          </h2>
          <p className="text-[#2b2320]/55 text-sm">Contact us anytime</p>
        </motion.div>

        {/* Two-column layout: info left, map right */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info cards — left */}
          <div className="space-y-3">

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-4 border border-[#e8d5a8]/40 flex gap-4 items-center hover:shadow-sm transition-shadow"
            >
              <div className="w-9 h-9 rounded-lg bg-[#8b1e1e] flex items-center justify-center text-white flex-shrink-0">
                <MapPin size={15} />
              </div>
              <div>
                <p className="font-semibold text-[#2b2320] text-xs mb-1">पता · Address</p>
                <p className="font-devanagari text-[#2b2320] text-sm" style={{ lineHeight: 1.8 }}>
                  गड़वारा तिराहा, प्रतापगढ़, उत्तर प्रदेश — 230502
                </p>
                <p className="text-[#2b2320]/45 text-xs mt-0.5">
                  Gadwara Tiraha, Pratapgarh, UP – 230502
                </p>
              </div>
            </motion.div>

            {/* Phone — visually strongest */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="pulse-red bg-[#8b1e1e] rounded-xl p-4 border border-[#8b1e1e]/20 flex gap-4 items-center"
            >
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                <Phone size={15} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white/70 text-xs mb-0.5">फ़ोन · Phone</p>
                <a
                  href="tel:+919415415800"
                  id="contact-call-btn"
                  className="text-white font-bold text-lg hover:text-[#e8d5a8] transition-colors"
                >
                  9415415800
                </a>
              </div>
              <a
                href="tel:+919415415800"
                className="bg-white text-[#8b1e1e] px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 flex-shrink-0 hover:bg-[#e8d5a8] transition-colors"
              >
                <Phone size={12} />
                Call Now
              </a>
            </motion.div>

            {/* WhatsApp — expands on hover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.26, duration: 0.6 }}
              className="bg-white rounded-xl p-4 border border-[#e8d5a8]/40 flex gap-4 items-center hover:border-[#25d366]/40 hover:bg-[#f0fdf4] transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#25d366] flex items-center justify-center text-white flex-shrink-0">
                <MessageCircle size={15} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#2b2320] text-xs mb-0.5">WhatsApp</p>
                <p className="font-devanagari text-[#2b2320]/55 text-xs" style={{ lineHeight: 1.7 }}>
                  फाइल भेजें, प्रिंट करवाएं
                </p>
                <p className="text-[#2b2320]/35 text-xs">Send file, get prints</p>
              </div>
              <a
                href="https://wa.me/919415415800"
                id="contact-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 flex-shrink-0 overflow-hidden transition-all duration-300"
              >
                <MessageCircle size={12} />
                <span>Chat</span>
                <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-300 whitespace-nowrap">
                  &nbsp;WhatsApp Us
                </span>
              </a>
            </motion.div>

            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.34, duration: 0.6 }}
              className="bg-white rounded-xl p-4 border border-[#e8d5a8]/40 flex gap-4 hover:shadow-sm transition-shadow"
            >
              <div className="w-9 h-9 rounded-lg bg-[#e8d5a8] flex items-center justify-center text-[#8b1e1e] flex-shrink-0">
                <Clock size={15} />
              </div>
              <div>
                <p className="font-semibold text-[#2b2320] text-xs mb-1">समय · Timings</p>
                <p className="font-devanagari text-[#2b2320] text-sm" style={{ lineHeight: 1.8 }}>
                  खुला है सातों दिन — सुबह 9 बजे से रात 8 बजे तक
                </p>
                <p className="text-[#2b2320]/45 text-xs mt-0.5">
                  Open 7 days a week · 9:00 AM – 8:00 PM
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-600 text-xs font-medium">Open Today</span>
                </div>
              </div>
            </motion.div>

            {/* Get Directions — dark background */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.6 }}
            >
              <a
                href="https://maps.app.goo.gl/qEgnYj78iWgBMDz39"
                id="get-directions-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-touch flex items-center justify-center gap-3 w-full bg-[#2b2320] text-[#e8d5a8] px-5 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1a1614] transition-all hover:-translate-y-0.5 shadow-md"
              >
                <Navigation size={17} />
                <span className="font-devanagari" style={{ lineHeight: 1.5 }}>
                  रास्ता देखें
                </span>
                <span className="text-[#e8d5a8]/50 font-normal text-xs">· Get Directions</span>
              </a>
            </motion.div>
          </div>

          {/* Google Map — right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-[#e8d5a8]/40"
            style={{ height: "460px" }}
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
