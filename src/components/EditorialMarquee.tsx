import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const EditorialMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // When scrolling down, the marquee smoothly glides along the X axis
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const items = [
    "FUTUREPROOF MET AI",
    "WAT IK MAAK, ONDERZOEK & LEER",
    "MENSELIJKE REGIE OVER HET ALGORITME",
    "BAROKKE OVERDAAD & SYNTHETISCHE KUNST",
    "PROMPT-ARCHITECTUUR & DIFFUSIE",
    "ETHISCHE TRANSPARANTIE & REFLECTIE",
    "VAKMANSCHAP IN DE LATENT SPACE",
    "HAUTE COUTURE DIGITAAL ATELIER",
  ];

  return (
    <div
      ref={containerRef}
      className="relative py-4 sm:py-5 bg-[#080808] border-y border-white/[0.06] overflow-hidden select-none"
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6 sm:mx-10 shrink-0">
            <span className="font-editorial text-xs sm:text-sm tracking-[0.24em] uppercase text-[#8a8a8a] hover:text-[#f0ece4] transition-colors">
              {text}
            </span>
            <span className="ml-6 sm:ml-10 text-[#b8860b] text-xs font-mono">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
