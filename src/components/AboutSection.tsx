import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { InteractivePortraitFrame } from './InteractivePortraitFrame';

interface AboutSectionProps {
  portraitSrc?: string | null;
  onPhotoUpdated?: (dataUrl: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ portraitSrc, onPhotoUpdated }) => {
  const [activeStoryTab, setActiveStoryTab] = useState<'who' | 'education' | 'why' | 'interests' | 'goals'>('who');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const storyItems = [
    {
      id: 'who',
      number: '01',
      title: 'Wie Ik Ben',
      text: PORTFOLIO_PROFILE.aboutStory.whoAmI,
      tag: 'Identiteit & Esthetiek'
    },
    {
      id: 'education',
      number: '02',
      title: 'Opleiding',
      text: PORTFOLIO_PROFILE.aboutStory.education,
      tag: PORTFOLIO_PROFILE.studyProgramme
    },
    {
      id: 'why',
      number: '03',
      title: 'Waarom AI',
      text: PORTFOLIO_PROFILE.aboutStory.whyFutureproofAI,
      tag: 'Motivatie'
    },
    {
      id: 'interests',
      number: '04',
      title: 'Fascinatie',
      text: PORTFOLIO_PROFILE.aboutStory.aiInterests,
      tag: 'Onderzoek'
    },
    {
      id: 'goals',
      number: '05',
      title: 'Doelstelling',
      text: PORTFOLIO_PROFILE.aboutStory.minorGoals,
      tag: 'Ambitie'
    }
  ];

  const currentStory = storyItems.find((s) => s.id === activeStoryTab) || storyItems[0];

  const skillPills = [
    "B2B Account Management",
    "MEDDPICC Methodiek",
    "Claude 3.5 Sonnet & LLM Regie",
    "Sales Intelligence (Apollo / Gong)",
    "Consultative Selling",
    "Prompt Structuur & Triangulatie",
    "Sales Funnel & Forecasting",
    "Onderhandelen & Contract Closing"
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-14 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#050505] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header with Kinetic Typography */}
        <div className="mb-8 sm:mb-12">
          <div className="section-label mb-2">
            <span>Over Mij</span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0ece4] leading-[1.05]">
            Het Verhaal Achter
          </h2>
          
          <motion.div
            style={{ x: headingX }}
            className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight stroked-text flex items-center gap-4 sm:gap-6 mt-1 will-change-transform"
          >
            <span className="w-8 sm:w-16 h-[1px] bg-[#b8860b] shrink-0" />
            <span>mijn creatieve visie</span>
          </motion.div>
        </div>

        {/* 2-Column Open Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left: Clean, Unboxed Portrait with Subtle Metadata */}
          <div className="lg:col-span-5">
            <div className="relative max-w-[420px]">
              <InteractivePortraitFrame
                target="secondary"
                imageSrc={portraitSrc}
                label="Tycho Somers (L'Amour Paris)"
                subLabel="Sleep 'Afbeelding.jpeg' hierheen of klik om te uploaden"
                aspectRatioClass="aspect-[3/4]"
                onPhotoUpdated={onPhotoUpdated}
              />
              
              <div className="mt-3 flex justify-between items-center text-xs font-mono text-[#8a8a8a]">
                <span className="text-[10px] tracking-[0.2em] text-[#b8860b] uppercase">
                  MAKER // COMMERCIËLE ECONOMIE
                </span>
                <span className="text-[10px] tracking-widest text-[#666]">FIG. 02</span>
              </div>
            </div>

            {/* Factsheet in borderless minimal rows in Dutch */}
            <div className="mt-6 max-w-[420px] space-y-2 text-xs font-mono text-[#8a8a8a] border-t border-white/[0.08] pt-4">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="uppercase text-[#555]">Opleiding</span>
                <span className="text-[#f0ece4] text-right">{PORTFOLIO_PROFILE.studyProgramme}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="uppercase text-[#555]">Minor</span>
                <span className="text-[#f0ece4]">{PORTFOLIO_PROFILE.minorName}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="uppercase text-[#555]">Periode</span>
                <span className="text-[#b8860b]">{PORTFOLIO_PROFILE.minorPeriod}</span>
              </div>
            </div>
          </div>

          {/* Right: Flowing Bio, Minimalist Numbers & Story Dossier */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Editorial Bio Text */}
            <div className="space-y-4 text-[#8a8a8a] text-base leading-relaxed font-light">
              <p className="text-[#f0ece4] font-normal leading-relaxed text-base sm:text-lg">
                {PORTFOLIO_PROFILE.aboutStory.whoAmI}
              </p>
              <p>
                {PORTFOLIO_PROFILE.aboutStory.whyFutureproofAI}
              </p>
            </div>

            {/* Minimalist Numbers in Dutch */}
            <div className="grid grid-cols-3 gap-6 py-5 border-y border-white/[0.08]">
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#b8860b] font-bold">
                  25/26
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a8a] block mt-1 font-mono">Academiejaar</span>
              </div>
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#f0ece4] font-bold">
                  02
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a8a] block mt-1 font-mono">Research Stories</span>
              </div>
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#f0ece4] font-bold">
                  03
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a8a] block mt-1 font-mono">Experimenten</span>
              </div>
            </div>

            {/* Open Dossier Navigation */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-4 h-[1px] bg-[#b8860b]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a] font-mono">
                  VERDIEPING & MOTIVATIE
                </span>
              </div>

              {/* Minimal Text Selector in Dutch */}
              <div className="flex flex-wrap gap-2">
                {storyItems.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStoryTab(tab.id as typeof activeStoryTab)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                      activeStoryTab === tab.id
                        ? 'bg-[#b8860b] text-[#050505] font-bold'
                        : 'border border-white/10 text-[#8a8a8a] hover:text-[#f0ece4] hover:border-white/25'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Seamless Story Text Display */}
              <div className="pl-4 sm:pl-6 border-l border-[#b8860b]/40 py-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs text-[#b8860b] font-bold">{currentStory.number}</span>
                  <h3 className="font-editorial text-2xl text-[#f0ece4] font-bold">{currentStory.title}</h3>
                  <span className="text-[10px] tracking-widest text-[#666] uppercase font-mono ml-auto">
                    {currentStory.tag}
                  </span>
                </div>
                <p className="text-[#8a8a8a] text-sm sm:text-base leading-relaxed font-light">
                  {currentStory.text}
                </p>
              </div>
            </div>

            {/* Floating Pill Tags in Dutch */}
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#555] block font-mono">
                GEREEDSCHAPSKIST & EXPERTISE
              </span>
              <div className="flex flex-wrap gap-2">
                {skillPills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-[#c0b8ac] text-xs font-mono tracking-wider transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Minimalist Editorial Quote */}
            <div className="pt-2">
              <p className="font-serif-editorial text-xl sm:text-2xl text-[#f0ece4]/90 italic leading-relaxed">
                "{PORTFOLIO_PROFILE.editorialQuotes[0]}"
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
