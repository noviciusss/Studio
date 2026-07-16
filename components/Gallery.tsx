"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera } from "lucide-react";
import { Container } from "@/components/Container";

const placeholders = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: i < 3 ? "Wedding" : i < 5 ? "Portrait" : i < 7 ? "Printing" : "Special",
}));

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="py-24 bg-white">
      <Container>
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-0.5 bg-[#8b1e1e]" />
            <span className="text-[#8b1e1e] text-xs font-semibold tracking-widest uppercase">
              हमारा काम · Our Work
            </span>
            <div className="w-10 h-0.5 bg-[#8b1e1e]" />
          </div>
          <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-4 pt-3">
            गैलरी
          </h2>
          <p className="text-[#2b2320]/60 text-sm">
            Our work — photos, albums, wedding cards &amp; more
          </p>
        </motion.div>

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-block bg-[#8b1e1e]/6 border border-[#8b1e1e]/15 rounded-full py-2.5 px-6">
            <span className="font-devanagari text-[#8b1e1e] text-sm" style={{ lineHeight: 1.6 }}>
              📷 फ़ोटो जल्द जोड़े जाएंगे —{" "}
            </span>
            <span className="text-[#2b2320]/50 text-xs">
              Photos coming soon
            </span>
          </span>
        </motion.div>

        {/* Placeholder grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {placeholders.map((ph, i) => (
            <motion.div
              key={ph.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="relative group aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#e8d5a8]/30 to-[#8b1e1e]/10 border-2 border-dashed border-[#8b1e1e]/20 cursor-pointer"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#8b1e1e]/0 group-hover:bg-[#8b1e1e]/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1 text-white">
                  <Camera size={22} />
                  <span className="text-xs font-medium">View</span>
                </div>
              </div>

              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-3">
                <div className="w-10 h-10 rounded-full bg-[#8b1e1e]/10 flex items-center justify-center">
                  <Camera size={18} className="text-[#8b1e1e]/40" />
                </div>
                <span className="text-[#8b1e1e]/40 text-[11px] font-medium">
                  {ph.label}
                </span>
                <span className="text-[#2b2320]/25 text-[10px]">
                  Photo #{ph.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to share photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/919415415800"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#1da851] transition-all hover:scale-105 shadow-lg"
          >
            💬 WhatsApp पर अपना काम देखें · Ask us on WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
