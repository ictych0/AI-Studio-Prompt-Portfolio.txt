import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  TrendingUp,
  Briefcase,
  Activity,
  Compass,
  MapPin,
  Target,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { InteractivePortraitFrame } from './InteractivePortraitFrame';

interface AboutSectionProps {
  portraitSrc?: string | null;
  onPhotoUpdated?: (dataUrl: string) => void;
  onNavigateCareer?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  portraitSrc,
  onPhotoUpdated,
  onNavigateCareer,
}) => {
  const [activeMinorTab, setActiveMinorTab] = useState<'why' | 'interests' | 'goals'>('why');
  const [isMinorExpanded, setIsMinorExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const focusPillars = [
    {
      title: "Sales",
      desc: "Kansen herkennen, onderhandelen en samen tot de beste deal komen.",
      tag: "COMMERCIE"
    },
    {
      title: "Relationships",
      desc: "Echt luisteren en duurzame vertrouwensrelaties opbouwen.",
      tag: "VERBINDING"
    },
    {
      title: "Strategy",
      desc: "Marktbewegingen begrijpen en consultative waarde toevoegen.",
      tag: "INZICHT"
    },
    {
      title: "Results",
      desc: "Prestatiegericht werken in een omgeving waar ambitie wordt beloond.",
      tag: "PRESTATIE"
    }
  ];

  const offTheClockItems = [
    {
      category: "SPORT & COMPETITIE",
      title: "Hockey & Golf",
      description: "Veel op het hockeyveld en regelmatig op de golfbaan te vinden. Focus, tactisch inzicht en plezier in het spel."
    },
    {
      category: "ANALYSE & ECONOMIE",
      title: "Aandelenmarkt & Bedrijven",
      description: "Met grote interesse volgen waarom markten bewegen en hoe nieuws, verwachtingen en strategie ondernemingswaarde beïnvloeden."
    },
    {
      category: "SOCIAAL LEVEN",
      title: "Vrienden, Terras & Festivals",
      description: "Graag onder de mensen: ontspannen op het terras, naar festivals gaan of samen sporten met vrienden."
    },
    {
      category: "LOCATIE & ROOTS",
      title: "Utrecht & Berlicum",
      description: "Woonachtig in het bruisende Utrecht en regelmatig in Berlicum, waar mijn ouders wonen en mijn roots liggen."
    }
  ];

  const minorStories = [
    {
      id: 'why',
      title: 'Waarom AI?',
      text: PORTFOLIO_PROFILE.aboutStory.whyFutureproofAI,
      tag: 'Motivatie'
    },
    {
      id: 'interests',
      title: 'Fascinatie voor Sales Tech',
      text: PORTFOLIO_PROFILE.aboutStory.aiInterests,
      tag: 'Onderzoek'
    },
    {
      id: 'goals',
      title: 'Doelstelling Minor',
      text: PORTFOLIO_PROFILE.aboutStory.minorGoals,
      tag: 'Ambitie'
    }
  ];

  const currentMinorStory = minorStories.find((s) => s.id === activeMinorTab) || minorStories[0];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 bg-[#050505] border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER & MAIN EDITORIAL HEADLINE                               */}
        {/* ========================================================================= */}
        <div className="border-b border-white/[0.08] pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#b8860b]" />
            <span className="font-mono text-xs text-[#b8860b] tracking-[0.25em] uppercase font-bold">
              ABOUT ME
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#f0ece4] leading-[1.08] max-w-5xl">
            Commercieel ingesteld. Sociaal.{" "}
            <span className="font-serif-editorial italic text-[#b8860b] font-normal block sm:inline">
              Nieuwsgierig naar wat er morgen gebeurt.
            </span>
          </h2>

          <motion.div
            style={{ x: headingX }}
            className="font-editorial text-2xl sm:text-4xl text-[#333] font-bold tracking-tight uppercase flex items-center gap-4 mt-4 select-none will-change-transform"
          >
            <span className="w-8 sm:w-16 h-[1px] bg-white/10 shrink-0" />
            <span>Tycho Somers // Persoonlijk Profiel & Commerciële Ambitie</span>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CORE EDITORIAL COMPOSITION (PHOTO + INTRO + STATS)                    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Grote Persoonlijke Foto (Tycho bij L'Amour Paris) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-full rounded-[2px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
              <InteractivePortraitFrame
                target="secondary"
                imageSrc={portraitSrc}
                label="Tycho Somers // L'Amour Paris"
                subLabel="Foto onbewerkt & in volle resolutie geplaatst"
                aspectRatioClass="aspect-[4/5]"
                onPhotoUpdated={onPhotoUpdated}
              />

              <div className="p-4 bg-[#0a0a0a] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#8a8a8a]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b8860b]" />
                  <span className="uppercase text-[#f0ece4] tracking-wider">FIG. 02 — TYCHO SOMERS</span>
                </div>
                <span className="text-[#666] tracking-widest">22 JAAR</span>
              </div>
            </div>

            {/* Editorial Metadata Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 bg-[#0a0a0a] border border-white/[0.06] rounded-[2px]">
                <span className="text-[10px] text-[#666] uppercase block tracking-wider">Studie</span>
                <span className="text-[#f0ece4] font-medium mt-0.5 block">Commerciële Economie</span>
                <span className="text-[10px] text-[#8a8a8a]">Hogeschool Utrecht</span>
              </div>
              <div className="p-3 bg-[#0a0a0a] border border-white/[0.06] rounded-[2px]">
                <span className="text-[10px] text-[#666] uppercase block tracking-wider">Huidige Rol</span>
                <span className="text-[#b8860b] font-medium mt-0.5 block">Sales Agent</span>
                <span className="text-[10px] text-[#8a8a8a]">Fonky — Utrecht</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling & Dynamic Breakdown */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Lead Narrative Text */}
            <div className="space-y-5">
              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#f0ece4] leading-snug font-normal">
                "Ik krijg energie van mensen, commercie en resultaat. Daarom spreekt de wereld van sales mij aan: relaties opbouwen, kansen herkennen, mensen overtuigen, onderhandelen en uiteindelijk samen tot een goede deal komen."
              </p>
              
              <div className="space-y-4 text-[#a09a8f] text-base leading-relaxed font-light">
                <p>
                  Ik ben <strong>Tycho Somers</strong>, 22 jaar en vierdejaars student Commerciële Economie aan de Hogeschool Utrecht. Mijn passie voor commercie is niet theoretisch ontstaan, maar in de praktijk gevormd door direct contact met mensen.
                </p>
                <p>
                  Mijn eerdere werkervaring in onder andere de <strong>horeca, verkoop, recruitment en accountmanagement</strong> heeft mij laten ontdekken waar mijn kracht ligt: energie krijgen van menselijk contact, verantwoordelijkheid dragen en het behalen van meetbare resultaten.
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/[0.08]">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#b8860b] block">
                  22
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a] mt-1 block">
                  Leeftijd
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#f0ece4] block">
                  04
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a] mt-1 block">
                  Jaars Student
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#f0ece4] block">
                  B2B
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a] mt-1 block">
                  Sales Ambitie
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#b8860b] block">
                  AI
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a] mt-1 block">
                  Futureproof
                </span>
              </div>
            </div>

            {/* Core Focus Pillars */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8a8a8a] uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>KERNFOCUS & DRIJFVEREN</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 bg-[#0a0a0a] border border-white/[0.06] hover:border-[#b8860b]/40 rounded-[2px] transition-colors group"
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h4 className="font-editorial text-lg font-bold text-[#f0ece4] group-hover:text-[#b8860b] transition-colors">
                        {pillar.title}
                      </h4>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#666]">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#8a8a8a] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. WORK & SALES: FONKY UTRECHT                                            */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 bg-gradient-to-b from-[#0a0a0a] to-[#070707] border border-white/[0.08] rounded-[3px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8860b]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-[#b8860b]/15 border border-[#b8860b]/40 text-[#b8860b] font-mono text-[11px] uppercase tracking-widest rounded-full font-bold">
                Huidige Functie // Sales
              </span>
              <span className="text-xs font-mono text-[#666] uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8a8a8a]" />
                Utrecht, Nederland
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8a8a8a] block">
                FONKY — UTRECHT
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#f0ece4]">
                Sales Agent
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#c8c2b7] leading-relaxed font-light">
              Naast mijn studie werk ik als <strong>Sales Agent bij Fonky in Utrecht</strong>. Hier doe ik directe praktijkervaring op binnen sales en werk ik in een dynamische omgeving waarin resultaten en prestaties centraal staan. Dit sluit naadloos aan bij mijn commerciële instelling en geeft mij dagelijks de mogelijkheid om mezelf continu verder te ontwikkelen in het overtuigen van mensen, omgaan met bezwaren en het sluiten van deals.
            </p>

            <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#a09a8f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                <span>Prestatiegerichte cultuur</span>
              </div>
              <div className="flex items-center gap-2 text-[#a09a8f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                <span>Direct klantcontact & pitching</span>
              </div>
              <div className="flex items-center gap-2 text-[#a09a8f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                <span>Target- en resultaatgedreven</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. PERSONAL SIDE: OFF THE CLOCK                                           */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="font-mono text-xs text-[#b8860b] tracking-[0.25em] uppercase font-bold block mb-1">
                PERSONAL SIDE
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#f0ece4]">
                Off The Clock
              </h3>
            </div>
            <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a] max-w-md">
              Buiten studie en werk ben ik vooral actief en graag onder de mensen. De drive en energie die ik haal uit sport en sociaal contact neem ik direct mee in mijn werk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offTheClockItems.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#080808] border border-white/[0.06] hover:border-white/20 rounded-[2px] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#b8860b] tracking-widest uppercase block mb-2">
                    {item.category}
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#f0ece4] group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8a8a8a] leading-relaxed font-light mt-3">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#555]">
                  <span>TYCHO SOMERS</span>
                  <span>OFF THE CLOCK</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. ACADEMISCH PROFIEL & MINOR FUTUREPROOF MET AI                           */}
        {/* ========================================================================= */}
        <div className="border border-white/[0.08] bg-[#080808] rounded-[2px] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#b8860b]" />
              <div>
                <span className="text-[10px] font-mono text-[#b8860b] uppercase tracking-widest block">
                  ACADEMISCHE VERDIEPING // HU
                </span>
                <h4 className="font-editorial text-xl font-bold text-[#f0ece4]">
                  Minor: Futureproof met AI (2025 – 2026)
                </h4>
              </div>
            </div>

            <button
              onClick={() => setIsMinorExpanded(!isMinorExpanded)}
              className="px-4 py-2 border border-white/10 hover:border-[#b8860b] text-[#8a8a8a] hover:text-white rounded-[2px] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{isMinorExpanded ? 'Verberg Toelichting' : 'Bekijk Toelichting & Doelen'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMinorExpanded ? 'rotate-180 text-[#b8860b]' : ''}`} />
            </button>
          </div>

          {isMinorExpanded && (
            <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-6">
              <div className="flex flex-wrap gap-2">
                {minorStories.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMinorTab(tab.id as typeof activeMinorTab)}
                    className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                      activeMinorTab === tab.id
                        ? 'bg-[#b8860b] text-[#050505] font-bold'
                        : 'border border-white/10 text-[#8a8a8a] hover:text-[#f0ece4]'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="pl-4 sm:pl-6 border-l-2 border-[#b8860b] py-1">
                <span className="text-[10px] font-mono text-[#b8860b] tracking-widest uppercase block mb-1">
                  {currentMinorStory.tag}
                </span>
                <p className="text-[#c8c2b7] text-sm sm:text-base leading-relaxed font-light">
                  {currentMinorStory.text}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 6. WHERE I'M HEADING & NATURAL TRANSITION TO CAREER SECTION               */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-14 bg-gradient-to-r from-[#0d0d0d] via-[#090909] to-[#0d0d0d] border border-[#b8860b]/30 rounded-[3px] space-y-8 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <Compass className="w-4 h-4 text-[#b8860b]" />
              <span className="font-mono text-xs text-[#b8860b] tracking-[0.25em] uppercase font-bold">
                WHERE I'M HEADING
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-[#f0ece4] leading-tight">
              "Mijn doel is een carrière waarin commercie, relaties, strategie en resultaat samenkomen."
            </h3>

            <p className="text-sm sm:text-base text-[#a09a8f] leading-relaxed font-light">
              Op dit moment kijk ik vooral vooruit. Ik wil ontdekken welke richting binnen sales het beste bij mij past en welke rol AI gaat spelen in mijn toekomstige werk als <strong>Account Executive</strong>. Mijn ambitie ligt in een commerciële omgeving waarin prestaties worden beloond, ik mezelf kan blijven ontwikkelen en ik uiteindelijk verantwoordelijkheid kan dragen voor grote klanten en deals.
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#666]">
              <span>VOLGEND ONDERDEEL: DROOMBAAN & ONDERZOEK (RS01 / RS02)</span>
            </div>

            <button
              onClick={() => {
                if (onNavigateCareer) {
                  onNavigateCareer();
                } else {
                  const el = document.getElementById('career');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3.5 bg-[#b8860b] hover:bg-[#d4a843] text-[#050505] font-bold text-xs uppercase tracking-[0.2em] rounded-[2px] transition-all flex items-center gap-3 cursor-pointer shadow-xl shadow-[#b8860b]/20 group"
            >
              <span>Explore My Future Career</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
