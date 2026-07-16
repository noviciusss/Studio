"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Camera } from "lucide-react";
import { Container } from "@/components/Container";
import Image from "next/image";

const items = [
  {
    id: 1,
    label: "शादी की फोटोग्राफी",
    en: "Wedding Photography",
    img: "/gallery/wedding.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपकी शादी की फोटोग्राफी (Wedding Photography) के सैंपल देखने हैं।",
  },
  {
    id: 2,
    label: "प्री-वेडिंग शूट",
    en: "Pre-Wedding Shoot",
    img: "/gallery/wedding.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपके प्री-वेडिंग शूट (Pre-Wedding) के सैंपल देखने हैं।",
  },
  {
    id: 3,
    label: "इवेंट कवरेज",
    en: "Event Coverage",
    img: "/gallery/wedding.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपके इवेंट कवरेज (Event Coverage) के सैंपल देखने हैं।",
  },
  {
    id: 4,
    label: "पारिवारिक पोर्ट्रेट",
    en: "Family Portrait",
    img: "/gallery/portrait.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपके पारिवारिक पोर्ट्रेट (Family Portrait) के सैंपल देखने हैं।",
  },
  {
    id: 5,
    label: "कैंडिड शूट",
    en: "Candid Shoot",
    img: "/gallery/portrait.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपके कैंडिड शूट (Candid Photography) के सैंपल देखने हैं।",
  },
  {
    id: 6,
    label: "शादी के निमंत्रण कार्ड",
    en: "Wedding Invitation Cards",
    img: "/gallery/printing.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपके द्वारा प्रिंट किए गए शादी के कार्ड के सैंपल देखने हैं।",
  },
  {
    id: 7,
    label: "कस्टम प्रिंटिंग",
    en: "Custom Printing",
    img: "/gallery/printing.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपकी पम्पलेट और कस्टम प्रिंटिंग के सैंपल देखने हैं।",
  },
  {
    id: 8,
    label: "डिजिटल एल्बम व फ्रेम",
    en: "Digital Album & Framing",
    img: "/gallery/special.png",
    waMsg: "नमस्ते सागर स्टूडियो, मुझे आपके कस्टमाइज्ड फोटो फ्रेम और एल्बम डिजाइन के सैंपल देखने हैं।",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" style={{ paddingTop: "10rem", paddingBottom: "10rem" }} className="bg-white">
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
            हमारे वास्तविक कार्य के सैंपल देखने के लिए किसी भी फ़ोटो पर क्लिक करें
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.id}
              href={`https://wa.me/919415415800?text=${encodeURIComponent(item.waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="relative group aspect-square rounded-2xl overflow-hidden border border-[#e8d5a8]/40 shadow-sm hover:shadow-lg transition-all cursor-pointer bg-[#fbf6ee]"
            >
              {/* Main Photo */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.img}
                  alt={item.en}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-[0.98] group-hover:brightness-90"
                />
              </div>

              {/* Title Overlay (Bottom bar) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10">
                <p className="font-devanagari text-white text-xs font-bold leading-relaxed">
                  {item.label}
                </p>
                <p className="text-white/60 text-[9px] uppercase tracking-wider mt-0.5">
                  {item.en}
                </p>
              </div>

              {/* Hover overlay with WhatsApp trigger visual */}
              <div className="absolute inset-0 bg-[#25d366]/0 group-hover:bg-[#25d366]/75 transition-all duration-300 flex items-center justify-center z-20">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1.5 text-white text-center p-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <span className="text-[11px] font-bold font-devanagari">व्हाट्सएप पर सैंपल देखें</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-90">WhatsApp Samples</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA to share photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/919415415800?text=नमस्ते%20सागर%20स्टूडियो%2C%20मुझे%20आपके%20काम%20की%20गैलरी%20के%20और%20सैंपल्स%20देखने%20हैं।"
            id="gallery-wa-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#1da851] transition-all hover:scale-105 shadow-lg"
          >
            💬 WhatsApp पर अपना काम देखें · Ask us on WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
