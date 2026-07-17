"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Camera } from "lucide-react";
import { Container } from "@/components/Container";
import Image from "next/image";

// Very small aspect ratio variation — mostly square with subtle differences
const items = [
  {
    id: 1,
    label: "शादी की फोटोग्राफी",
    en: "Wedding Photography",
    category: "Wedding",
    img: "/gallery/wedding.png",
    aspect: "aspect-[5/6]",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपकी शादी की फोटोग्राफी के सैंपल देखने हैं।",
  },
  {
    id: 2,
    label: "प्री-वेडिंग शूट",
    en: "Pre-Wedding Shoot",
    category: "Wedding",
    img: "/gallery/wedding.png",
    aspect: "aspect-square",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपके प्री-वेडिंग शूट के सैंपल देखने हैं।",
  },
  {
    id: 3,
    label: "पारिवारिक पोर्ट्रेट",
    en: "Family Portrait",
    category: "Portrait",
    img: "/gallery/portrait.png",
    aspect: "aspect-[6/5]",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपके पारिवारिक पोर्ट्रेट के सैंपल देखने हैं।",
  },
  {
    id: 4,
    label: "इवेंट कवरेज",
    en: "Event Coverage",
    category: "Events",
    img: "/gallery/wedding.png",
    aspect: "aspect-square",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपके इवेंट कवरेज के सैंपल देखने हैं।",
  },
  {
    id: 5,
    label: "कैंडिड शूट",
    en: "Candid Shoot",
    category: "Portrait",
    img: "/gallery/portrait.png",
    aspect: "aspect-[5/6]",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपके कैंडिड शूट के सैंपल देखने हैं।",
  },
  {
    id: 6,
    label: "शादी के निमंत्रण कार्ड",
    en: "Wedding Invitation Cards",
    category: "Printing",
    img: "/gallery/printing.png",
    aspect: "aspect-square",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपके शादी के कार्ड के सैंपल देखने हैं।",
  },
  {
    id: 7,
    label: "कस्टम प्रिंटिंग",
    en: "Custom Printing",
    category: "Printing",
    img: "/gallery/printing.png",
    aspect: "aspect-[6/5]",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपकी कस्टम प्रिंटिंग के सैंपल देखने हैं।",
  },
  {
    id: 8,
    label: "डिजिटल एल्बम",
    en: "Digital Album & Framing",
    category: "Cards",
    img: "/gallery/special.png",
    aspect: "aspect-square",
    waMsg: "नमस्ते सागर प्रेस, मुझे आपके फोटो फ्रेम और एल्बम के सैंपल देखने हैं।",
  },
];

function GalleryCard({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  return (
    <motion.a
      href={`https://wa.me/919415415800?text=${encodeURIComponent(item.waMsg)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.05 + index * 0.05, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative group ${item.aspect} rounded-2xl overflow-hidden block cursor-pointer`}
    >
      {/* Image */}
      <Image
        src={item.img}
        alt={item.en}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
        loading="lazy"
      />

      {/* Dark overlay — always subtle, stronger on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-400" />

      {/* Category badge — appears on hover */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-[#e8d5a8]/90 text-[#2b2320] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {item.category}
        </span>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <p className="font-devanagari text-white text-xs font-bold leading-relaxed">
          {item.label}
        </p>
        <p className="text-white/55 text-[9px] uppercase tracking-wider mt-0.5">
          {item.en}
        </p>
      </div>

      {/* WhatsApp hint on hover */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <div className="w-8 h-8 rounded-full bg-[#25d366]/90 flex items-center justify-center shadow-md">
          <MessageCircle size={14} className="text-white" />
        </div>
      </div>
    </motion.a>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-6 py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-[#8b1e1e]/8 flex items-center justify-center">
        <Camera size={32} className="text-[#8b1e1e]/50" />
      </div>
      <div>
        <p className="font-devanagari text-[#8b1e1e]/70 text-xl font-medium mb-2">
          पोर्टफोलियो जल्द आएगा
        </p>
        <p className="text-[#2b2320]/40 text-sm">Portfolio coming soon</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const hasItems = items.length > 0;

  return (
    <section
      id="gallery"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
      className="bg-white"
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
              हमारा काम · Our Work
            </span>
            <div className="w-8 h-px bg-[#5a4632]/50" />
          </div>
          <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-4 pt-3">
            गैलरी
          </h2>
          <p className="text-[#2b2320]/55 text-sm">
            हमारे वास्तविक कार्य के सैंपल देखने के लिए किसी भी फ़ोटो पर क्लिक करें
          </p>
        </motion.div>

        {/* Gallery Grid — centered uniform grid with subtle aspect variation */}
        {hasItems ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/919415415800?text=नमस्ते%20सागर%20प्रेस%2C%20मुझे%20आपके%20काम%20की%20गैलरी%20के%20और%20सैंपल्स%20देखने%20हैं।"
            id="gallery-wa-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-full text-sm font-semibold shadow-lg btn-touch"
            style={{
              transition:
                "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(37,211,102,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <MessageCircle size={18} />
            WhatsApp पर अपना काम देखें · Ask us on WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
