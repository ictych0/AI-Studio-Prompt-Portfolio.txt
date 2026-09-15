import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FadeInCard } from './FadeInCard';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  Briefcase,
  Target,
  Sparkles,
  Layers,
  ShieldCheck,
  ChevronDown,
  Quote,
  ExternalLink,
  BookOpen,
  Sliders,
  ChevronLeft
} from 'lucide-react';
import {
  CAREER_RESEARCH_HEADER,
  RS01_DATA,
  RS01_WHY_TEXT,
  JOB_PROFILE_BREAKDOWN,
  RS02_DATA,
  AI_SALES_CASES,
  PROS_AND_CONS_MATRIX,
  PROMPT_STRUCTURE_DOSSIER,
  PERSONAL_REFLECTION
} from '../data/careerResearchData';

interface MyFutureCareerPageProps {
  onBackToPortfolio: () => void;
  onOpenGuide: () => void;
}

export const MyFutureCareerPage: React.FC<MyFutureCareerPageProps> = ({
  onBackToPortfolio,
  onOpenGuide,
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [activeTabRS01, setActiveTabRS01] = useState<'profile' | 'why' | 'criteria'>('why');
  const [activeTabRS02, setActiveTabRS02] = useState<'cases' | 'matrix' | 'reflection'>('cases');

  const handleCopyPrompt = () => {
    const fullText = `SYSTEM PROMPT:\n${PROMPT_STRUCTURE_DOSSIER.systemPrompt}\n\nUSER PROMPT:\n${PROMPT_STRUCTURE_DOSSIER.userPrompt}\n\nPARAMETERS:\n${JSON.stringify(PROMPT_STRUCTURE_DOSSIER.parameters, null, 2)}`;
    navigator.clipboard.writeText(fullText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ece4] selection:bg-[#b8860b] selection:text-[#050505] pb-24">
      
      {/* Top Floating Mini-Nav for Quick Jumps */}
      <header className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 px-6 sm:px-12 lg:px-20 transition-all">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
          
          {/* Back to main portfolio */}
          <button
            onClick={onBackToPortfolio}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8a8a8a] hover:text-[#b8860b] transition-colors font-mono cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Terug naar Portfolio</span>
          </button>

          {/* Center Jump Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => scrollToAnchor('career-overview')}
              className="text-[11px] uppercase tracking-wider text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono cursor-pointer"
            >
              Overzicht
            </button>
            <button
              onClick={() => scrollToAnchor('rs01-dream-job')}
              className="text-[11px] uppercase tracking-wider text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
              <span>RS01 Droombaan</span>
            </button>
            <button
              onClick={() => scrollToAnchor('why-ae')}
              className="text-[11px] uppercase tracking-wider text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono cursor-pointer"
            >
              Waarom AE?
            </button>
            <button
              onClick={() => scrollToAnchor('rs02-future-sales')}
              className="text-[11px] uppercase tracking-wider text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
              <span>RS02 AI & Sales</span>
            </button>
            <button
              onClick={() => scrollToAnchor('prompts-sources')}
              className="text-[11px] uppercase tracking-wider text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono cursor-pointer"
            >
              Prompts & Bronnen
            </button>
          </nav>

          {/* Guide button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenGuide}
              className="px-3 py-1 rounded-full border border-white/10 hover:border-[#b8860b] text-[10px] font-mono uppercase tracking-wider text-[#8a8a8a] hover:text-[#b8860b] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#b8860b]" />
              <span className="hidden sm:inline">Aanpas Gids</span>
            </button>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* 1. PAGE HERO                                                          */}
      {/* ===================================================================== */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] overflow-hidden">
        
        {/* Subtle Luxury Ambience Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#b8860b]/[0.035] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1500px] mx-auto relative z-10 space-y-10 sm:space-y-14">
          
          {/* Top Editorial Eyebrow Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#b8860b] animate-pulse" />
              <span className="font-mono text-xs text-[#b8860b] tracking-[0.25em] uppercase font-bold">
                {CAREER_RESEARCH_HEADER.superTitle}
              </span>
              <span className="text-white/20 font-mono">/</span>
              <span className="font-mono text-xs text-[#8a8a8a] tracking-widest uppercase">
                {CAREER_RESEARCH_HEADER.badge}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#8a8a8a]">
              <span>{CAREER_RESEARCH_HEADER.studentInfo.name}</span>
              <span className="text-white/20">•</span>
              <span className="text-[#f0ece4] font-medium">{CAREER_RESEARCH_HEADER.studentInfo.study}</span>
              <span className="text-white/20">•</span>
              <span>{CAREER_RESEARCH_HEADER.studentInfo.academicYear}</span>
            </div>
          </div>

          {/* Giant Monolithic Editorial Title */}
          <div className="space-y-2">
            <h1 className="font-editorial text-[clamp(3.5rem,11vw,9.5rem)] font-extrabold tracking-[-0.04em] text-[#f0ece4] uppercase leading-[0.9] select-none">
              {CAREER_RESEARCH_HEADER.mainTitlePart1}
            </h1>
            <div className="font-editorial text-[clamp(3.5rem,11vw,9.5rem)] font-extrabold tracking-[-0.04em] text-transparent uppercase leading-[0.9] stroked-text select-none flex items-center gap-6 sm:gap-12">
              <span className="w-12 sm:w-28 h-[2px] bg-[#b8860b] shrink-0" />
              <span>{CAREER_RESEARCH_HEADER.mainTitlePart2}</span>
            </div>
          </div>

          {/* Subtitle & High-End Opening Dossier Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-4">
            
            {/* Left: Subtitle & Formal Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <p className="font-editorial text-2xl sm:text-3xl text-[#d4a843] font-medium leading-snug">
                {CAREER_RESEARCH_HEADER.subtitle}
              </p>

              <div className="p-6 sm:p-8 bg-[#0a0a0a] border-l-2 border-[#b8860b] border-y border-r border-white/[0.06] rounded-r-[3px] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
                  <Quote className="w-3.5 h-3.5" />
                  <span>ONDERZOEKSINTRODUCTIE</span>
                </div>
                <p className="font-serif-editorial text-lg sm:text-xl text-[#f0ece4] italic leading-relaxed">
                  "{CAREER_RESEARCH_HEADER.introQuote}"
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#8a8a8a] pt-2 border-t border-white/[0.06]">
                  <span>Focus: Commerciële B2B Praktijk</span>
                  <span>•</span>
                  <span>Droomrol: Account Executive</span>
                  <span>•</span>
                  <span>Impact: Sales AI Automatisering</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Visual Composition & Quick Metadata */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative aspect-[4/3] rounded-[3px] overflow-hidden border border-[#b8860b]/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="High-Rise Modern Architecture Boardroom"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#f0ece4]">
                  <span className="px-2 py-0.5 bg-black/80 border border-white/10 rounded">B2B Commercial HQ</span>
                  <span className="text-[#b8860b]">52°22'N // AMSTERDAM</span>
                </div>
              </div>

              {/* Research Metrics Bar */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0a0a0a] border border-white/[0.06] rounded-[2px]">
                  <span className="block font-editorial text-3xl font-bold text-[#b8860b]">02</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8a8a8a] block mt-0.5">
                    Volledige Research Stories
                  </span>
                </div>
                <div className="p-4 bg-[#0a0a0a] border border-white/[0.06] rounded-[2px]">
                  <span className="block font-editorial text-3xl font-bold text-emerald-400">100%</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8a8a8a] block mt-0.5">
                    Criteria Voldaan (AC & QC)
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. RESEARCH OVERVIEW (TWO LARGE RESEARCH STORY CARDS)                  */}
      {/* ===================================================================== */}
      <section id="career-overview" className="py-14 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] relative">
        <div className="max-w-[1500px] mx-auto space-y-10">
          
          <div>
            <div className="section-label mb-2">
              <span>Onderzoeksoverzicht</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#f0ece4] uppercase">
              MY RESEARCH
            </h2>
            <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a] mt-1">
              Twee formele minor Research Stories — klik op een kaart om direct het dossier te openen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 01: RS01 My Dream Job */}
            <FadeInCard
              delayMs={0}
              onClick={() => scrollToAnchor('rs01-dream-job')}
              className="group p-8 sm:p-10 bg-[#0a0a0a] hover:bg-[#0f0f0f] border border-white/[0.08] hover:border-[#b8860b]/60 rounded-[3px] transition-all duration-300 cursor-pointer space-y-6 relative overflow-hidden shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-4xl font-bold text-[#b8860b]">01</span>
                  <span className="px-2.5 py-0.5 rounded bg-[#b8860b]/15 text-[#b8860b] font-mono text-xs font-bold border border-[#b8860b]/30">
                    RS01
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8a8a8a] group-hover:text-[#b8860b] group-hover:border-[#b8860b] transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f0ece4] group-hover:text-[#b8860b] transition-colors uppercase">
                  MY DREAM JOB
                </h3>
                <p className="font-editorial text-lg text-[#d4a843] font-medium mt-1">
                  Account Executive
                </p>
              </div>

              <p className="text-sm text-[#8a8a8a] leading-relaxed font-light">
                Onderzoek naar het beroepsprofiel van Account Executive binnen high-tech B2B, inclusief dagelijkse werkzaamheden, vaardigheden, omzettargets en mijn persoonlijke match.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  ✓ AC: 3/3 Voldaan
                </span>
                <span className="px-2.5 py-1 rounded bg-amber-950/60 border border-[#b8860b]/40 text-[#d4a843] text-[10px] font-mono">
                  ✓ QC: 4/4 Voldaan
                </span>
              </div>
            </FadeInCard>

            {/* Card 02: RS02 AI & The Future of Sales */}
            <FadeInCard
              delayMs={150}
              onClick={() => scrollToAnchor('rs02-future-sales')}
              className="group p-8 sm:p-10 bg-[#0a0a0a] hover:bg-[#0f0f0f] border border-white/[0.08] hover:border-[#b8860b]/60 rounded-[3px] transition-all duration-300 cursor-pointer space-y-6 relative overflow-hidden shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-4xl font-bold text-[#b8860b]">02</span>
                  <span className="px-2.5 py-0.5 rounded bg-[#b8860b]/15 text-[#b8860b] font-mono text-xs font-bold border border-[#b8860b]/30">
                    RS02
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8a8a8a] group-hover:text-[#b8860b] group-hover:border-[#b8860b] transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f0ece4] group-hover:text-[#b8860b] transition-colors uppercase">
                  AI & THE FUTURE OF SALES
                </h3>
                <p className="font-editorial text-lg text-[#d4a843] font-medium mt-1">
                  De impact van AI op mijn beroepspraktijk
                </p>
              </div>

              <p className="text-sm text-[#8a8a8a] leading-relaxed font-light">
                Analyse van de transformatie van B2B sales cycli: van conversation intelligence (Gong) en geautomatiseerde prospecting (Clay/Apollo) tot het cruciale belang van menselijke consultative empathie.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  ✓ AC: 3/3 Voldaan
                </span>
                <span className="px-2.5 py-1 rounded bg-amber-950/60 border border-[#b8860b]/40 text-[#d4a843] text-[10px] font-mono">
                  ✓ QC: 4/4 Voldaan
                </span>
              </div>
            </FadeInCard>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. RS01 — MY DREAM JOB: ACCOUNT EXECUTIVE                             */}
      {/* ===================================================================== */}
      <section id="rs01-dream-job" className="py-14 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] relative">
        <div className="max-w-[1500px] mx-auto space-y-12">
          
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-[#b8860b]/15 text-[#b8860b] font-mono text-xs font-bold border border-[#b8860b]/30">
                01 — RESEARCH STORY
              </span>
              <span className="font-mono text-xs text-[#8a8a8a] tracking-widest uppercase">
                FORMAL RESEARCH // RS01
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0ece4] uppercase">
              MY DREAM JOB: ACCOUNT EXECUTIVE
            </h2>
            <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a]">
              Onderzoek naar de beroepspraktijk, vaardigheden, AI-impact en persoonlijke match van een Account Executive in B2B.
            </p>
          </div>

          {/* Official Story Definition Block */}
          <div className="p-6 sm:p-8 bg-[#0a0a0a] border-l-4 border-[#b8860b] border-y border-r border-white/[0.06] rounded-r-[3px] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
              <Target className="w-3.5 h-3.5" />
              <span>OFFICIËLE RESEARCH STORY DEFINITIE</span>
            </div>
            <blockquote className="font-serif-editorial text-xl sm:text-2xl text-[#f0ece4] italic leading-relaxed">
              "{RS01_DATA.storyDefinition}"
            </blockquote>
          </div>

          {/* Criteria Checklist Grid: Acceptance Criteria & Quality Criteria */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Acceptance Criteria */}
            <FadeInCard delayMs={0} className="p-6 sm:p-8 bg-[#0a0a0a] border border-white/[0.08] rounded-[3px] space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                    ACCEPTANCE CRITERIA
                  </span>
                  <span className="font-serif-editorial text-sm text-[#8a8a8a] italic">
                    Doen we de juiste dingen?
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                  3/3 Voldaan
                </span>
              </div>

              <ul className="space-y-4 text-sm text-[#f0ece4]">
                {RS01_DATA.acceptanceCriteria.map((ac) => (
                  <li key={ac.id} className="p-4 bg-black/40 border border-white/[0.04] rounded-[2px] space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-medium text-[#f0ece4]">{ac.text}</span>
                    </div>
                    <p className="text-xs text-[#8a8a8a] pl-8 leading-relaxed font-light">
                      <strong className="text-[#b8860b]">Uitwerking: </strong>{ac.details}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeInCard>

            {/* Quality Criteria */}
            <FadeInCard delayMs={150} className="p-6 sm:p-8 bg-[#0a0a0a] border border-white/[0.08] rounded-[3px] space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4a843] font-bold block">
                    QUALITY CRITERIA
                  </span>
                  <span className="font-serif-editorial text-sm text-[#8a8a8a] italic">
                    Doen we de dingen juist?
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-950/80 border border-[#b8860b]/40 text-[#d4a843] text-xs font-mono">
                  4/4 Voldaan
                </span>
              </div>

              <ul className="space-y-4 text-sm text-[#f0ece4]">
                {RS01_DATA.qualityCriteria.map((qc) => (
                  <li key={qc.id} className="p-4 bg-black/40 border border-white/[0.04] rounded-[2px] space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#d4a843] shrink-0 mt-0.5" />
                      <span className="font-medium text-[#f0ece4]">{qc.text}</span>
                    </div>
                    <p className="text-xs text-[#8a8a8a] pl-8 leading-relaxed font-light">
                      <strong className="text-[#b8860b]">Verantwoording: </strong>{qc.details}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeInCard>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. RS01 — WHY ACCOUNT EXECUTIVE? & JOB PROFILE BREAKDOWN              */}
      {/* ===================================================================== */}
      <section id="why-ae" className="py-14 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#070707]">
        <div className="max-w-[1500px] mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left: Editorial Narrative on Why Account Executive */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="section-label mb-2">
                  <span>Persoonlijke Motivatie & Match</span>
                </div>
                <h3 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#f0ece4] uppercase">
                  {RS01_WHY_TEXT.heading}
                </h3>
              </div>

              <div className="space-y-4 text-base text-[#8a8a8a] leading-relaxed font-light">
                <p className="text-[#f0ece4] text-lg sm:text-xl font-normal leading-relaxed">
                  {RS01_WHY_TEXT.leadParagraph}
                </p>
                <p>
                  {RS01_WHY_TEXT.bodyParagraph1}
                </p>
                <p>
                  {RS01_WHY_TEXT.bodyParagraph2}
                </p>
              </div>

              {/* Match Highlights */}
              <div className="p-6 bg-[#0a0a0a] border border-white/[0.06] rounded-[2px] space-y-3">
                <span className="text-[11px] font-mono tracking-widest text-[#b8860b] uppercase font-bold block">
                  WAAROM COMMERCIËLE ECONOMIE + ACCOUNT EXECUTIVE?
                </span>
                <p className="text-xs text-[#8a8a8a] leading-relaxed">
                  Tijdens mijn studie Commerciële Economie heb ik geleerd om marktmechanismen te analyseren, koopprocessen te modelleren en commerciële strategieën op te zetten. Als Account Executive breng ik deze theorie direct in de praktijk door deals te structureren, waarde te creëren en meetbare resultaten te boeken.
                </p>
              </div>
            </div>

            {/* Right: Editorial Visual Portrait / Modern Dealmaking */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] rounded-[3px] overflow-hidden border border-white/[0.1] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                  alt="High-Stakes Commercial Negotiation Meeting"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-serif-editorial italic text-base sm:text-lg text-[#f0ece4] block">
                    "Sales draait niet om forceren, maar om het diagnosticeren van behoeften en leveren van meetbare waarde."
                  </span>
                  <span className="text-[10px] font-mono text-[#b8860b] tracking-wider uppercase block mt-1">
                    Tycho Somers // Visie op B2B Verkoop
                  </span>
                </div>
              </div>

              {/* Quick Profile Summary Pills */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#0a0a0a] border border-white/[0.06] rounded">
                  <span className="text-xs font-bold text-[#f0ece4] block">B2B SaaS & Tech</span>
                  <span className="text-[9px] font-mono text-[#8a8a8a] uppercase">Sector</span>
                </div>
                <div className="p-3 bg-[#0a0a0a] border border-white/[0.06] rounded">
                  <span className="text-xs font-bold text-[#b8860b] block">Consultative</span>
                  <span className="text-[9px] font-mono text-[#8a8a8a] uppercase">Methodiek</span>
                </div>
                <div className="p-3 bg-[#0a0a0a] border border-white/[0.06] rounded">
                  <span className="text-xs font-bold text-[#f0ece4] block">Quota Driven</span>
                  <span className="text-[9px] font-mono text-[#8a8a8a] uppercase">Focus</span>
                </div>
              </div>
            </div>

          </div>

          {/* Deep-Dive: 3 Core Pillars (Werkzaamheden, Vaardigheden, Verantwoordelijkheden) */}
          <div className="pt-8 space-y-6">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
                BEROEPSPROFIEL IN KAART (ACADEMISCH CRITERIUM AC01)
              </span>
              <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f0ece4] uppercase mt-1">
                {JOB_PROFILE_BREAKDOWN.title}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {JOB_PROFILE_BREAKDOWN.categories.map((cat, idx) => (
                <FadeInCard
                  key={cat.title}
                  delayMs={idx * 120}
                  className="p-6 bg-[#0a0a0a] border border-white/[0.08] rounded-[3px] space-y-4"
                >
                  <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
                    <span className="font-editorial text-xl font-bold text-[#b8860b]">0{idx + 1}</span>
                    <h5 className="font-editorial text-base font-bold text-[#f0ece4]">
                      {cat.title}
                    </h5>
                  </div>

                  <ul className="space-y-3.5">
                    {cat.points.map((p) => (
                      <li key={p.label} className="space-y-1">
                        <span className="text-xs font-bold text-[#f0ece4] block">
                          • {p.label}
                        </span>
                        <p className="text-xs text-[#8a8a8a] leading-relaxed font-light pl-2.5">
                          {p.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </FadeInCard>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. RS02 — AI & THE FUTURE OF SALES                                    */}
      {/* ===================================================================== */}
      <section id="rs02-future-sales" className="py-14 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] relative">
        <div className="max-w-[1500px] mx-auto space-y-12">
          
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-[#b8860b]/15 text-[#b8860b] font-mono text-xs font-bold border border-[#b8860b]/30">
                02 — RESEARCH STORY
              </span>
              <span className="font-mono text-xs text-[#8a8a8a] tracking-widest uppercase">
                FORMAL RESEARCH // RS02
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0ece4] uppercase">
              AI & THE FUTURE OF SALES
            </h2>
            <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a]">
              De impact van kunstmatige intelligentie op de beroepspraktijk van de Account Executive.
            </p>
          </div>

          {/* Official Story Definition Block */}
          <div className="p-6 sm:p-8 bg-[#0a0a0a] border-l-4 border-[#b8860b] border-y border-r border-white/[0.06] rounded-r-[3px] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIËLE RESEARCH STORY DEFINITIE</span>
            </div>
            <blockquote className="font-serif-editorial text-xl sm:text-2xl text-[#f0ece4] italic leading-relaxed">
              "{RS02_DATA.storyDefinition}"
            </blockquote>
          </div>

          {/* 3 Concrete Cases of AI Impact in Sales */}
          <div className="space-y-6">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
                AC01 — 3 CONCRETE CASUSSEN VAN AI IN DE SALES BEROEPSPRAKTIJK
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f0ece4] uppercase mt-1">
                Hoe AI de Dagelijkse Salescyclus Herdefinieert
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {AI_SALES_CASES.map((cs, idx) => (
                <FadeInCard
                  key={cs.number}
                  delayMs={idx * 120}
                  className="p-6 sm:p-8 bg-[#0a0a0a] border border-white/[0.08] rounded-[3px] space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <span className="font-editorial text-2xl font-bold text-[#b8860b]">{cs.number}</span>
                      <span className="text-[10px] font-mono text-[#8a8a8a] bg-black/60 px-2 py-0.5 rounded border border-white/5">
                        {cs.tooling}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-bold text-[#f0ece4] leading-snug">
                      {cs.title}
                    </h4>

                    <div className="space-y-2 text-xs leading-relaxed">
                      <div>
                        <strong className="text-[#8a8a8a] uppercase tracking-wider font-mono text-[10px] block">
                          Traditioneel Pijnpunt:
                        </strong>
                        <p className="text-[#a09c94] font-light">{cs.problem}</p>
                      </div>

                      <div className="pt-2">
                        <strong className="text-[#b8860b] uppercase tracking-wider font-mono text-[10px] block">
                          AI Oplossing:
                        </strong>
                        <p className="text-[#f0ece4] font-normal">{cs.aiSolution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold mb-1">
                      Commerciële Impact:
                    </span>
                    <p className="text-xs text-[#8a8a8a] font-light">
                      {cs.impact}
                    </p>
                  </div>
                </FadeInCard>
              ))}
            </div>
          </div>

          {/* Pros & Cons Matrix for Sales Professionals */}
          <div className="pt-6 space-y-6">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
                AC02 — VOOR- EN NADELEN MATRIX VOOR HET BEROEP
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f0ece4] uppercase mt-1">
                Kansen versus Risico's in het AI-Tijdperk
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Voordelen */}
              <FadeInCard delayMs={0} className="p-6 sm:p-8 bg-emerald-950/[0.15] border border-emerald-500/20 rounded-[3px] space-y-4">
                <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <h4 className="font-editorial text-lg font-bold text-emerald-400 uppercase">
                    Voordelen & Kansen voor de Account Executive
                  </h4>
                </div>

                <ul className="space-y-4">
                  {PROS_AND_CONS_MATRIX.pros.map((item, idx) => (
                    <li key={item.title} className="space-y-1">
                      <span className="text-xs font-bold text-[#f0ece4] block">
                        + {item.title}
                      </span>
                      <p className="text-xs text-[#a09c94] font-light leading-relaxed pl-3">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </FadeInCard>

              {/* Nadelen / Risico's */}
              <FadeInCard delayMs={150} className="p-6 sm:p-8 bg-amber-950/[0.15] border border-[#b8860b]/30 rounded-[3px] space-y-4">
                <div className="flex items-center gap-2 border-b border-[#b8860b]/30 pb-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4a843]" />
                  <h4 className="font-editorial text-lg font-bold text-[#d4a843] uppercase">
                    Valkuilen & Risico's in de Praktijk
                  </h4>
                </div>

                <ul className="space-y-4">
                  {PROS_AND_CONS_MATRIX.cons.map((item, idx) => (
                    <li key={item.title} className="space-y-1">
                      <span className="text-xs font-bold text-[#f0ece4] block">
                        - {item.title}
                      </span>
                      <p className="text-xs text-[#a09c94] font-light leading-relaxed pl-3">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </FadeInCard>

            </div>
          </div>

          {/* Personal Reflection & Doctrine */}
          <FadeInCard className="p-8 sm:p-10 bg-[#0a0a0a] border border-[#b8860b]/40 rounded-[3px] space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#b8860b] uppercase font-bold">
              <Target className="w-4 h-4" />
              <span>AC03 — {PERSONAL_REFLECTION.title}</span>
            </div>

            <blockquote className="font-editorial text-2xl sm:text-3xl text-[#f0ece4] font-bold leading-snug">
              {PERSONAL_REFLECTION.statement}
            </blockquote>

            <div className="text-sm sm:text-base text-[#8a8a8a] leading-relaxed font-light whitespace-pre-line space-y-4">
              {PERSONAL_REFLECTION.bodyText}
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#8a8a8a]">
              <span>Tycho Somers // Minor Futureproof met AI</span>
              <span className="text-[#b8860b]">Commerciële Economie 2026</span>
            </div>
          </FadeInCard>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. PROMPTS, SOURCES & LLM ONDERBOUWING (QUALITY CRITERIA)             */}
      {/* ===================================================================== */}
      <section id="prompts-sources" className="py-14 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#070707]">
        <div className="max-w-[1500px] mx-auto space-y-12">
          
          <div className="border-b border-white/[0.08] pb-4 space-y-2">
            <div className="section-label mb-1">
              <span>Methodologische Kwaliteitscriteria</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#f0ece4] uppercase">
              PROMPTS, BRONNEN & LLM KEUZE
            </h2>
            <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a]">
              Verantwoording van prompt-architectuur (QC01), betrouwbare bronnen (QC02) en modelselectie (QC03 & QC04).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Vastgelegde Prompt Structuur */}
            <FadeInCard delayMs={0} className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#b8860b]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#f0ece4] font-bold">
                    VASTGELEGDE PROMPT-STRUCTUUR (QC01)
                  </span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="px-3 py-1 bg-[#141414] hover:bg-[#b8860b] text-[#f0ece4] hover:text-[#050505] border border-white/10 rounded text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPrompt ? 'Gekopieerd!' : 'Kopieer Prompt'}</span>
                </button>
              </div>

              {/* Code/Prompt Box */}
              <div className="p-5 bg-[#0a0a0a] border border-white/[0.08] rounded-[3px] font-mono text-xs space-y-4 overflow-x-auto text-[#c0b8ac]">
                <div>
                  <span className="text-[#b8860b] font-bold block mb-1">// SYSTEM PROMPT:</span>
                  <p className="text-[#8a8a8a] whitespace-pre-wrap leading-relaxed">
                    {PROMPT_STRUCTURE_DOSSIER.systemPrompt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[#b8860b] font-bold block mb-1">// USER PROMPT:</span>
                  <p className="text-[#f0ece4] whitespace-pre-wrap leading-relaxed">
                    {PROMPT_STRUCTURE_DOSSIER.userPrompt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[11px] text-[#8a8a8a]">
                  <div><span className="text-[#f0ece4]">Model:</span> {PROMPT_STRUCTURE_DOSSIER.parameters.model}</div>
                  <div><span className="text-[#f0ece4]">Temperature:</span> {PROMPT_STRUCTURE_DOSSIER.parameters.temperature}</div>
                  <div><span className="text-[#f0ece4]">Max Tokens:</span> {PROMPT_STRUCTURE_DOSSIER.parameters.maxTokens}</div>
                  <div><span className="text-[#f0ece4]">Output:</span> {PROMPT_STRUCTURE_DOSSIER.parameters.outputFormat}</div>
                </div>
              </div>

              {/* LLM Choice Justification */}
              <div className="p-5 bg-[#0a0a0a] border border-white/[0.06] rounded-[2px] space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-[#d4a843] uppercase font-bold block">
                  ONDERBOUWING LLM-KEUZE (QC03)
                </span>
                <p className="text-xs text-[#8a8a8a] leading-relaxed">
                  {PROMPT_STRUCTURE_DOSSIER.llmRationale}
                </p>
              </div>
            </FadeInCard>

            {/* Right: Validated Academic & Industry Sources */}
            <FadeInCard delayMs={150} className="lg:col-span-5 space-y-5">
              <div className="border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#f0ece4] font-bold flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#b8860b]" />
                  <span>BETROUWBARE BRONNEN (QC02)</span>
                </span>
              </div>

              <div className="space-y-3.5">
                {PROMPT_STRUCTURE_DOSSIER.sources.map((src) => (
                  <div
                    key={src.name}
                    className="p-4 bg-[#0a0a0a] border border-white/[0.06] rounded-[2px] space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[#b8860b] font-bold">{src.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#8a8a8a]" />
                    </div>
                    <span className="text-xs font-semibold text-[#f0ece4] block">
                      {src.title}
                    </span>
                    <p className="text-xs text-[#8a8a8a] font-light leading-relaxed">
                      {src.takeaway}
                    </p>
                  </div>
                ))}
              </div>

              {/* Triangulation Box */}
              <div className="p-4 bg-[#0a0a0a] border-l-2 border-emerald-400 border-y border-r border-white/[0.06] rounded-r-[2px] space-y-1.5">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold block">
                  TRIANGULATIE & ONDERBOUWING (QC04)
                </span>
                <p className="text-xs text-[#8a8a8a] font-light leading-relaxed">
                  De theorie is getoetst door secundaire literatuur van McKinsey te combineren met actuele salestech data van Gartner en actuele Nederlandse vacatures voor B2B Account Executives (SaaS, FinTech en Digital Solutions).
                </p>
              </div>
            </FadeInCard>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. BOTTOM ACTION & RETURN                                             */}
      {/* ===================================================================== */}
      <section className="pt-16 pb-8 px-6 sm:px-12 lg:px-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs font-mono tracking-[0.2em] text-[#b8860b] uppercase font-bold">
            EINDE VAN ONDERZOEKSDOSSIER
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#f0ece4] uppercase">
            Terugkeren naar het Portfolio
          </h3>
          <p className="text-xs sm:text-sm text-[#8a8a8a] font-light">
            Bekijk de algemene visie, over mij pagina of neem contact op via het colofon.
          </p>
          <div className="pt-2">
            <button
              onClick={onBackToPortfolio}
              className="px-8 py-3.5 bg-[#b8860b] hover:bg-[#d4a843] text-[#050505] font-bold text-xs uppercase tracking-[0.16em] rounded-[2px] transition-all inline-flex items-center gap-2 cursor-pointer shadow-xl shadow-[#b8860b]/20"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Terug naar Hoofdportfolio</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
