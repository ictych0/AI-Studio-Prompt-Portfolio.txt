import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

export const EditorialIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      ref={sectionRef}
      id="editorial-intro"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#050505] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header with Kinetic Typography */}
        <div className="mb-16 sm:mb-24">
          <div className="section-label mb-3">
            <span>Visie & Filosofie</span>
          </div>
          
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f0ece4] leading-[1.05]">
            Waar Technologie
          </h2>
          
          <motion.div
            style={{ x: headingX }}
            className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight stroked-text flex items-center gap-4 sm:gap-6 mt-1 will-change-transform"
          >
            <span className="w-12 sm:w-20 h-[1px] bg-[#b8860b] shrink-0" />
            <span>& compromisloos vakmanschap versmelten</span>
          </motion.div>
        </div>

        {/* Fluid 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Asymmetric Visual Composition with Gentle Scroll Parallax */}
          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-6 relative will-change-transform"
          >
            <div className="aspect-[4/5] rounded-[3px] overflow-hidden shadow-2xl relative border border-white/[0.06]">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
                alt="Haute couture textuur"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end text-xs font-mono">
                <span className="text-[10px] tracking-[0.2em] text-[#b8860b] uppercase">SERIE // ZIJDE & BLADGOUD</span>
                <span className="text-[#8a8a8a]">FIG. 01</span>
              </div>
            </div>

            {/* Overlapping Secondary Floating Visual */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 lg:-right-8 w-[50%] aspect-[4/3] rounded-[3px] overflow-hidden shadow-2xl border border-white/10 z-10">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                alt="Digitale vloeistof textuur"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>
          </motion.div>

          {/* Right: Flowing Editorial Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-editorial text-2xl sm:text-4xl text-[#f0ece4] font-bold leading-tight">
              "De toekomst van creatieve AI draait niet om generieke efficiëntie, maar om esthetische autoriteit en regie."
            </h3>

            <div className="space-y-5 text-[#8a8a8a] text-base sm:text-lg leading-relaxed font-light">
              <p>
                In een tijdperk waarin generatieve modellen vaak worden ingezet voor snelle, zielloze massaproductie, kies ik bewust voor een andere weg: <strong className="font-medium text-[#f0ece4]">diepgang, haute couture visuele grandeur en kritisch meesterschap</strong>.
              </p>

              <p>
                Tijdens mijn minor <span className="text-[#b8860b] font-medium">Futureproof met AI</span> onderzoek ik hoe kunstmatige intelligentie kan fungeren als een digitaal atelier. Waar fysieke materialen zoals vloeibaar bladgoud, monumentale stoffen en gesmolten marmer onbetaalbaar of fysiek onmogelijk zijn, maakt AI het mogelijk om deze visuele werelden met uiterste precisie te componeren.
              </p>

              <blockquote className="font-serif-editorial text-xl sm:text-2xl text-[#f0ece4] italic pl-5 border-l border-[#b8860b] py-1">
                "{PORTFOLIO_PROFILE.editorialQuotes[1]}"
              </blockquote>
            </div>

            {/* Micro Pillars in Dutch */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="text-[#b8860b] font-mono text-[10px] tracking-[0.2em] block mb-1 uppercase">01 // VISIE</span>
                <span className="text-[#c0b8ac] font-light leading-relaxed">Extravagante esthetiek en haute couture digital art.</span>
              </div>
              <div>
                <span className="text-[#b8860b] font-mono text-[10px] tracking-[0.2em] block mb-1 uppercase">02 // REGIE</span>
                <span className="text-[#c0b8ac] font-light leading-relaxed">Strikte menselijke controle over het algoritme.</span>
              </div>
              <div>
                <span className="text-[#b8860b] font-mono text-[10px] tracking-[0.2em] block mb-1 uppercase">03 // ETHIEK</span>
                <span className="text-[#c0b8ac] font-light leading-relaxed">Transparant over bronnen, prompts en techniek.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
