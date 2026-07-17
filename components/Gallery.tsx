"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/Container";
import Image from "next/image";

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

type Item = (typeof items)[0];

// ─── Lightbox ──────────────────────────────────────────────────────────────
function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: Item;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const touchStartX = useRef<number | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? onNext() : onPrev();
    }
    touchStartX.current = null;
  };

  const waUrl = `https://wa.me/919415415800?text=${encodeURIComponent(item.waMsg)}`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/80 backdrop-blur-sm flex-shrink-0">
        <div>
          <p className="font-devanagari text-white text-base font-bold leading-tight">
            {item.label}
          </p>
          <p className="text-white/50 text-[11px] uppercase tracking-wider mt-0.5">
            {item.en}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-xs">
            {index + 1}/{total}
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20"
            aria-label="Close"
          >
            <X size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Image area — fills available space */}
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={item.img}
          alt={item.en}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />

        {/* Prev / Next — desktop only, hidden on narrow mobile */}
        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:flex w-10 h-10 rounded-full bg-black/50 items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex w-10 h-10 rounded-full bg-black/50 items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-4 bg-black/90 flex-shrink-0">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#25d366] text-white w-full py-3.5 rounded-xl font-semibold text-sm active:scale-[0.98] transition-transform"
        >
          <MessageCircle size={18} />
          <span className="font-devanagari">इस काम के बारे में पूछें</span>
          <span className="text-white/70 text-xs">· Ask About This</span>
        </a>

        {/* Swipe hint — mobile only */}
        <p className="text-white/25 text-[10px] text-center mt-2 sm:hidden">
          ← स्वाइप करें · Swipe to browse →
        </p>
      </div>
    </motion.div>
  );
}

// ─── Gallery Card ───────────────────────────────────────────────────────────
function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: Item;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: 0.05 + index * 0.05,
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`relative group ${item.aspect} rounded-2xl overflow-hidden w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-[#e8d5a8]`}
      aria-label={`${item.label} देखें`}
    >
      <Image
        src={item.img}
        alt={item.en}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
        loading="lazy"
      />

      {/* Always-on bottom gradient — not just hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

      {/* Gold category badge — always visible, top-left */}
      <div className="absolute top-3 left-3">
        <span className="bg-[#e8d5a8] text-[#2b2320] text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {item.category}
        </span>
      </div>

      {/* Labels — always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="font-devanagari text-white text-xs font-bold leading-snug">
          {item.label}
        </p>
        <p className="text-white/50 text-[9px] uppercase tracking-wider mt-0.5">
          {item.en}
        </p>
      </div>

      {/* Tap affordance overlay — a subtle expand icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-200">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}

// ─── Main Export ────────────────────────────────────────────────────────────
export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setActiveIndex(index), []);
  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const goPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + items.length) % items.length
      ),
    []
  );
  const goNext = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i + 1) % items.length
      ),
    []
  );

  return (
    <>
      {/* Lightbox rendered at root level, outside section flow */}
      {activeIndex !== null && (
        <Lightbox
          item={items[activeIndex]}
          index={activeIndex}
          total={items.length}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}

      <section
        id="gallery"
        style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
        className="bg-white"
      >
        <Container>
          {/* Section title */}
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
            {/* Updated hint — tells user what happens on tap */}
            <p className="text-[#2b2320]/55 text-sm">
              फ़ोटो पर टैप करें और बड़ी साइज़ में देखें · Tap any photo to
              view full size
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {items.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onOpen={() => openLightbox(i)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-14 text-center"
          >
            <a
              href="https://wa.me/919415415800?text=नमस्ते%20सागर%20प्रेस%2C%20मुझे%20आपके%20काम%20की%20गैलरी%20के%20और%20सैंपल्स%20देखने%20हैं।"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-full text-sm font-semibold shadow-lg active:scale-[0.97] transition-transform"
            >
              <MessageCircle size={18} />
              <span className="font-devanagari">WhatsApp पर और सैंपल देखें</span>
              <span className="text-white/70 text-xs">· More on WhatsApp</span>
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
