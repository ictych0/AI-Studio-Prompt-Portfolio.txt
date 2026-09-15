import React, { useRef } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LEARNING_TIMELINE } from '../data/portfolioData';

export const LearningTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={sectionRef}
      id="learn"
      className="relative py-14 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#050505] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header with Kinetic Typography */}
        <div className="mb-8 sm:mb-10">
          <div className="section-label mb-2">
            <span>Mijn Leerproces</span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0ece4] leading-[1.05]">
            De Evolutie
          </h2>
          
          <motion.div
            style={{ x: headingX }}
            className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight stroked-text flex items-center gap-4 sm:gap-6 mt-1 will-change-transform"
          >
            <span className="w-8 sm:w-16 h-[1px] bg-[#b8860b] shrink-0" />
            <span>& van experiment naar meesterschap</span>
          </motion.div>
        </div>

        {/* Open Chronological Ledger */}
        <div className="border-t border-white/[0.08]">
          {LEARNING_TIMELINE.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="py-7 sm:py-9 border-b border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group"
              >
                {/* Left Column: Number, Phase, Date */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs sm:text-sm text-[#b8860b] font-bold">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[11px] text-[#8a8a8a] tracking-widest uppercase">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f0ece4] group-hover:text-white transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#666]">
                    <span>{item.period}</span>
                    <span>//</span>
                    <span className="text-[#b8860b]">{item.badge}</span>
                  </div>
                </div>

                {/* Right Column: Narrative Journey */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Attempt */}
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#8a8a8a] uppercase block mb-1">
                      WAT IK HEB GEPROBEERD
                    </span>
                    <p className="text-base text-[#f0ece4]/90 font-light leading-relaxed">
                      {item.attempted}
                    </p>
                  </div>

                  {/* Two-Column Insight: Stumble vs Breakthrough */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
                    
                    {/* The Stumble */}
                    <div className="space-y-1.5 pl-4 border-l border-amber-600/50">
                      <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px] tracking-wider uppercase">
                        <AlertCircle className="w-3 h-3" />
                        <span>HET STRUIKELBLOK</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#c0b8ac] font-light leading-relaxed">
                        {item.wentWrong}
                      </p>
                    </div>

                    {/* The Breakthrough */}
                    <div className="space-y-1.5 pl-4 border-l border-emerald-500/50">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] tracking-wider uppercase">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>DE DOORBRAAK</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#f0ece4] font-light leading-relaxed">
                        {item.learned}
                      </p>
                    </div>

                  </div>

                  {/* Feedback & Next Steps */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 text-xs font-light">
                    <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a] max-w-lg">
                      "{item.feedback}"
                    </p>
                    <div className="flex items-center gap-2 font-mono text-xs text-[#b8860b] shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>Vervolgstap: {item.nextSteps}</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Conclusion Quote */}
        <div className="pt-20 text-center">
          <p className="font-serif-editorial text-2xl sm:text-4xl text-[#f0ece4] italic max-w-3xl mx-auto leading-snug">
            "Creatief meesterschap met AI ontstaat pas wanneer je stopt met vechten tegen imperfectie, en leert sturen met esthetische autoriteit."
          </p>
          <span className="font-mono text-xs text-[#b8860b] uppercase tracking-[0.2em] block mt-4">
            — CONCLUSIE VAN MIJN LEERPROCES // TYCHO SOMERS
          </span>
        </div>

      </div>

    </section>
  );
};
