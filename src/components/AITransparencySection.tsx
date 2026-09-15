import React, { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AI_TRANSPARENCY_DATA } from '../data/portfolioData';

export const AITransparencySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);

  const categories = [
    { id: 'all', label: 'Alle Protocollen' },
    { id: 'Beeldgeneratie', label: 'Beeldgeneratie' },
    { id: 'Tekst & Prompts', label: 'Tekst & Prompts' },
    { id: 'Video & Motion', label: 'Video & Motion' },
  ];

  const filteredEntries = selectedCategory === 'all'
    ? AI_TRANSPARENCY_DATA
    : AI_TRANSPARENCY_DATA.filter((e) => e.category === selectedCategory);

  const handleCopyPrompt = (promptText: string, id: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="ai-process"
      className="relative py-14 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#050505] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header with Kinetic Typography */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="section-label mb-2">
                <span>Proces & Transparantie</span>
              </div>
              
              <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0ece4] leading-[1.05]">
                Mens & Machine
              </h2>
              
              <motion.div
                style={{ x: headingX }}
                className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight stroked-text flex items-center gap-4 sm:gap-6 mt-1 will-change-transform"
              >
                <span className="w-8 sm:w-16 h-[1px] bg-[#b8860b] shrink-0" />
                <span>& transparantie protocol</span>
              </motion.div>
            </div>

            {/* Filter Pills in Dutch */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#b8860b] text-[#050505] font-bold'
                      : 'border border-white/10 text-[#8a8a8a] hover:text-[#f0ece4] hover:border-white/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* The Human-in-the-Loop Manifesto in Dutch */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline border-b border-white/[0.08] pb-8">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block mb-2">
              — TRANSPARANTIE BELOFTE
            </span>
            <span className="font-editorial text-xl sm:text-2xl text-[#f0ece4] font-bold block leading-snug">
              "AI genereert de suggestie; ik neem de esthetische verantwoordelijkheid."
            </span>
          </div>

          <div className="lg:col-span-8 space-y-3 text-[#8a8a8a] text-sm font-light leading-relaxed">
            <p>
              In deze minor presenteer ik geen ongefilterde AI-generaties als eigen handwerk. Elk getoond beeld of conceptueel tekstfragment is onderworpen aan strenge semantische regie, foutcorrectie en kritische contextualisering.
            </p>
            <div className="flex flex-wrap gap-5 pt-1 text-xs font-mono text-[#c0b8ac]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Geen zwarte-doos praktijken
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Exacte prompts & parameters gedeeld
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Menselijke curatie & ethische controle
              </span>
            </div>
          </div>
        </div>

        {/* Borderless Open Protocols List */}
        <div className="space-y-8">
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pb-8 border-b border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group"
            >
              {/* Left Meta: Tool & Role */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs sm:text-sm text-[#b8860b] font-bold">
                    0{index + 1}
                  </span>
                  <span className="font-mono text-[11px] text-[#8a8a8a] tracking-widest uppercase">
                    {entry.category}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f0ece4] group-hover:text-white transition-colors">
                  {entry.tool}
                </h3>
                <div className="pt-1">
                  <span className="text-xs font-mono text-[#777] uppercase tracking-wider">
                    DOEL: <strong className="text-[#f0ece4] font-normal">{entry.purpose}</strong>
                  </span>
                </div>
              </div>

              {/* Right Content: Prompt + Human Curation + Reflection */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Prompt block with subtle border */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8a8a8a]">
                    <span className="text-[10px] tracking-[0.2em] text-[#b8860b] uppercase">
                      GEBRUIKTE PROMPT-ARCHITECTUUR:
                    </span>
                    <button
                      onClick={() => handleCopyPrompt(entry.prompt, entry.id)}
                      className="flex items-center gap-1.5 text-xs font-mono text-[#f0ece4] hover:text-[#b8860b] transition-colors cursor-pointer"
                    >
                      {copiedId === entry.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Gekopieerd!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Kopieer Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="font-mono text-xs text-[#c0b8ac] bg-white/[0.02] p-4 rounded-[2px] border border-white/[0.06] leading-relaxed select-all">
                    {entry.prompt}
                  </p>
                </div>

                {/* Parallel Insights in Dutch */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-[#666] block">
                      AI GENERATIE
                    </span>
                    <p className="text-xs sm:text-sm text-[#8a8a8a] font-light leading-relaxed">
                      {entry.outputSummary}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-emerald-400 block">
                      MENSELIJKE CURATIE & INGRIJPEN
                    </span>
                    <p className="text-xs sm:text-sm text-[#f0ece4] font-light leading-relaxed">
                      {entry.humanAdjustments}
                    </p>
                  </div>
                </div>

                {/* Reflection */}
                <div className="pt-2">
                  <p className="font-serif-editorial italic text-base sm:text-lg text-[#b8860b]/90 leading-relaxed pl-4 border-l border-[#b8860b]/50">
                    "{entry.reflection}"
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
