"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Image } from "lucide-react";
import { Container } from "@/components/Container";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="pt-36 pb-32 bg-[#fbf6ee]">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid md:grid-cols-2 gap-14 items-start"
        >
          {/* Text side */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-0.5 bg-[#8b1e1e]" />
              <span className="text-[#8b1e1e] text-xs font-semibold tracking-widest uppercase">
                हमारे बारे में · About Us
              </span>
            </div>

            <h2 className="font-devanagari deva-heading text-4xl sm:text-5xl font-bold text-[#2b2320] mb-3 leading-tight">
              प्रतापगढ़ का भरोसेमंद स्टूडियो
            </h2>
            <p className="text-[#8b1e1e] font-medium mb-8 text-sm tracking-wide">
              Pratapgarh&apos;s Most Trusted Studio
            </p>

            <p className="font-devanagari deva-body text-[#2b2320] mb-5 text-base">
              सागर स्टूडियो प्रतापगढ़ के गड़वारा तिराहा पर पिछले{" "}
              <strong>40+ वर्षों</strong> से सेवा दे रहा है। हमारे{" "}
              <strong>दादा जी द्वारा शुरू</strong> किया गया यह स्टूडियो आज
              फोटोग्राफी से लेकर सरकारी दस्तावेज़ों तक हर ज़रूरत पूरी करता है।
            </p>

            <p className="text-[#2b2320]/70 text-sm leading-relaxed mb-8">
              Serving Pratapgarh&apos;s Gadwara Tiraha for over 40 years.
              Started by our grandfather, Sagar Studio today covers everything
              from wedding photography to government document services.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3.5 mb-8">
              {[
                "📸 Wedding Photography",
                "🖨️ Printing & Photostat",
                "🪪 PAN Card Services",
                "⚡ Urgent Photo",
              ].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#8b1e1e]/5 border border-[#8b1e1e]/30 text-[#8b1e1e] text-sm px-6 py-3.5 rounded-full font-semibold cursor-pointer shadow-sm hover:bg-[#8b1e1e]/10 transition-colors inline-block"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Owner Info Block */}
            <div className="bg-[#e8d5a8]/20 border border-[#e8d5a8]/60 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8b1e1e] flex items-center justify-center text-[#e8d5a8] text-lg font-bold flex-shrink-0">
                👤
              </div>
              <div>
                <p className="text-[#8b1e1e] text-[10px] uppercase font-bold tracking-wider">
                  स्वामी · Proprietor
                </p>
                <h4 className="font-devanagari text-lg font-bold text-[#2b2320]" style={{ lineHeight: 1.4 }}>
                  राकेश बहादुर सिंह
                </h4>
                <p className="text-[#2b2320]/60 text-xs font-medium">
                  Rakesh Bahadur Singh
                </p>
              </div>
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: 40, suffix: "+", label: "वर्षों की सेवा", en: "Years of Service", icon: "🏛️" },
              { value: 7, suffix: "", label: "दिन खुला", en: "Days a Week", icon: "📅" },
              { value: 9, suffix: "AM–8PM", label: "समय", en: "Working Hours", icon: "🕘" },
              { value: 3, suffix: "", label: "पीढ़ियों का विश्वास", en: "Generations of Trust", icon: "❤️" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8d5a8]/40 text-center hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#8b1e1e] mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-devanagari text-[#2b2320] text-sm font-medium" style={{ lineHeight: 1.6 }}>
                  {stat.label}
                </p>
                <p className="text-[#2b2320]/50 text-[11px] mt-1">{stat.en}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-[#8b1e1e]/5 to-[#e8d5a8]/20 border-2 border-dashed border-[#8b1e1e]/20 p-12 flex flex-col items-center gap-4 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-[#8b1e1e]/10 flex items-center justify-center">
            <Image size={24} className="text-[#8b1e1e]" />
          </div>
          <p className="font-devanagari text-[#8b1e1e] font-medium text-lg" style={{ lineHeight: 1.6 }}>
            दुकान की फोटो यहाँ आएगी
          </p>
          <p className="text-[#2b2320]/40 text-sm">
            Storefront photo — drop your image here when ready
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
