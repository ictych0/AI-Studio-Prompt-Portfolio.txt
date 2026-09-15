import React, { useState, useRef } from 'react';
import { ChevronDown, Compass, FlaskConical, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RESEARCH_DATA, RESEARCH_STORIES_DATA } from '../data/portfolioData';
import { ResearchStoryCard } from './ResearchStoryCard';

export const ResearchSection: React.FC = () => {
  const [sectionView, setSectionView] = useState<'stories' | 'experiments'>('stories');
  const [openExpIndex, setOpenExpIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const toggleExpAccordion = (index: number) => {
    setOpenExpIndex(openExpIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="relative py-14 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#050505] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header with Kinetic Typography */}
        <div className="mb-8 sm:mb-10">
          <div className="section-label mb-2">
            <span>Wat Ik Verken</span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0ece4] leading-[1.05]">
            Kritisch Onderzoek
          </h2>
          
          <motion.div
            style={{ x: headingX }}
            className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight stroked-text flex items-center gap-4 sm:gap-6 mt-1 will-change-transform"
          >
            <span className="w-8 sm:w-16 h-[1px] bg-[#b8860b] shrink-0" />
            <span>& impact op de beroepspraktijk</span>
          </motion.div>
        </div>

        {/* View Mode Switcher: Research Stories vs Laboratory Experiments */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/[0.08] pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSectionView('stories')}
              className={`px-4 py-2 text-xs sm:text-sm font-mono uppercase tracking-wider rounded-[2px] transition-all flex items-center gap-2 cursor-pointer ${
                sectionView === 'stories'
                  ? 'bg-[#b8860b] text-[#050505] font-bold shadow-lg shadow-[#b8860b]/20'
                  : 'bg-white/[0.03] text-[#8a8a8a] hover:text-[#f0ece4] border border-white/[0.06]'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Onderzoeksverhalen (RS // Beroep & Droombaan)</span>
              <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded bg-black/40 text-black/80 font-mono">
                2 Stories
              </span>
            </button>

            <button
              onClick={() => setSectionView('experiments')}
              className={`px-4 py-2 text-xs sm:text-sm font-mono uppercase tracking-wider rounded-[2px] transition-all flex items-center gap-2 cursor-pointer ${
                sectionView === 'experiments'
                  ? 'bg-[#b8860b] text-[#050505] font-bold shadow-lg shadow-[#b8860b]/20'
                  : 'bg-white/[0.03] text-[#8a8a8a] hover:text-[#f0ece4] border border-white/[0.06]'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Laboratorium Experimenten (EXP)</span>
              <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded bg-white/10 text-[#8a8a8a] font-mono">
                3 Tracks
              </span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#8a8a8a]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Beoordelingscriteria Minor Futureproof met AI</span>
          </div>
        </div>

        {/* View Mode 1: Research Stories (RS // 01 and RS // 02) */}
        {sectionView === 'stories' && (
          <div className="space-y-8 sm:space-y-10 animate-fadeIn">
            {RESEARCH_STORIES_DATA.map((story) => (
              <ResearchStoryCard key={story.id} story={story} />
            ))}
          </div>
        )}

        {/* View Mode 2: Laboratory Experiments (EXP // 01 - EXP // 03) */}
        {sectionView === 'experiments' && (
          <div className="border-t border-white/[0.08] animate-fadeIn">
            {RESEARCH_DATA.map((item, index) => {
              const isOpen = openExpIndex === index;

              return (
                <div
                  key={item.id}
                  className="border-b border-white/[0.08] transition-colors"
                >
                  {/* Accordion Row Trigger in Dutch */}
                  <button
                    onClick={() => toggleExpAccordion(index)}
                    className="w-full py-8 sm:py-10 flex items-start sm:items-center justify-between text-left group cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10">
                      <span className="font-mono text-sm sm:text-base text-[#b8860b] font-bold">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f0ece4] group-hover:text-white transition-colors">
                          {item.tag}
                        </h3>
                        <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a] mt-1 group-hover:text-[#c0b8ac] transition-colors">
                          "{item.question}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0 pt-2 sm:pt-0">
                      <span className="hidden md:inline font-mono text-[10px] text-[#555] uppercase tracking-widest">
                        {isOpen ? 'SLUIT DOSSIER' : 'BEKIJK ONDERZOEK'}
                      </span>
                      <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#b8860b] text-[#050505] border-[#b8860b]' : 'group-hover:border-white/30 text-[#f0ece4]'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Research Dossier */}
                  {isOpen && (
                    <div className="pb-12 sm:pb-16 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                      
                      {/* Left: Visual Evidence */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="aspect-[4/5] rounded-[3px] overflow-hidden shadow-2xl relative border border-white/[0.06]">
                          <img
                            src={item.image}
                            alt={item.question}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover filter contrast-[1.04]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
                          
                          <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#f0ece4] bg-[#050505]/80 backdrop-blur-md px-3 py-2 rounded-[2px] border border-white/10">
                            <span className="block text-[10px] text-[#b8860b] tracking-wider uppercase font-bold">FIG. ONDERZOEKSMATERIAAL</span>
                            <span className="text-[11px] text-[#8a8a8a] truncate block">Testmateriaal & esthetische ruisanalyse</span>
                          </div>
                        </div>

                        {/* Tool Pills */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {item.aiTools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.03] border border-white/[0.08] text-[#c0b8ac]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Flowing Editorial Inquiries in Dutch */}
                      <div className="lg:col-span-7 space-y-8">
                        
                        {/* Context & Method */}
                        <div className="space-y-4">
                          <span className="text-[11px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                            — AANLEIDING & EXPERIMENT
                          </span>
                          <p className="text-base text-[#8a8a8a] leading-relaxed font-light">
                            {item.context}
                          </p>
                          <p className="text-sm text-[#777] leading-relaxed font-light">
                            <strong className="text-[#f0ece4] font-medium">Methodologie: </strong>
                            {item.experiment}
                          </p>
                        </div>

                        {/* Results */}
                        <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                          <span className="text-[11px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                            — RESULTATEN & OBSERVATIES
                          </span>
                          <p className="text-sm sm:text-base text-[#c0b8ac] leading-relaxed font-light">
                            {item.results}
                          </p>
                        </div>

                        {/* Conclusion */}
                        <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                          <span className="text-[11px] font-mono tracking-[0.2em] text-emerald-400 uppercase block">
                            — CONCLUSIE VOOR MIJN MAAKPRAKTIJK
                          </span>
                          <blockquote className="font-serif-editorial italic text-xl sm:text-2xl text-[#f0ece4] leading-relaxed pl-4 border-l border-[#b8860b]">
                            "{item.conclusion}"
                          </blockquote>
                          <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed pl-4">
                            {item.learnings}
                          </p>
                        </div>

                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

