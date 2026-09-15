import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, ExternalLink, Sparkles, BookOpen, Layers, Target, Compass, Scale, Terminal } from 'lucide-react';
import { ResearchStory } from '../types/portfolio';

interface ResearchStoryCardProps {
  story: ResearchStory;
}

export const ResearchStoryCard: React.FC<ResearchStoryCardProps> = ({ story }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2200);
  };

  const isRS1 = story.id === 'rs-01';

  const tabs = isRS1
    ? [
        { label: 'Onderzoek & Definitie', icon: Compass },
        { label: '3 Impact-Casussen (AC 1)', icon: Layers },
        { label: 'Voor- & Nadelen (AC 2)', icon: Scale },
        { label: 'Aanpak & Reflectie (AC 3)', icon: Target },
        { label: 'Kwaliteitscriteria (QC 1-4)', icon: BookOpen },
      ]
    : [
        { label: 'Onderzoek & Definitie', icon: Compass },
        { label: 'Droombaan Profiel (AC 1)', icon: Sparkles },
        { label: 'AI Invloed op de Rol (AC 2)', icon: Layers },
        { label: 'Persoonlijke Motivatie (AC 3)', icon: Target },
        { label: 'Kwaliteitscriteria (QC 1-4)', icon: BookOpen },
      ];

  return (
    <article className="border border-white/[0.08] bg-[#070707] rounded-[3px] p-5 sm:p-7 space-y-5 relative overflow-hidden transition-all duration-300 hover:border-white/20">
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#b8860b]/15 text-[#b8860b] font-mono text-xs font-bold tracking-wider border border-[#b8860b]/30">
            {story.code}
          </span>
          <span className="font-mono text-[11px] text-[#8a8a8a] tracking-widest uppercase">
            RESEARCH STORY // MINOR FUTUREPROOF MET AI
          </span>
        </div>

        {/* Audit Status Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Acceptatiecriteria: 3/3 Voldaan</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-[#b8860b]/40 text-[#d4a843] text-[10px] font-mono">
            <CheckCircle2 className="w-3 h-3 text-[#d4a843]" />
            <span>Kwaliteitscriteria: 4/4 Voldaan</span>
          </span>
        </div>
      </div>

      {/* Story Title & Subtitle */}
      <div>
        <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f0ece4] leading-tight">
          {story.title}
        </h3>
        <p className="font-serif-editorial italic text-sm sm:text-base text-[#8a8a8a] mt-1.5">
          {story.subtitle}
        </p>
      </div>

      {/* Formal Story Definition Block in Dutch */}
      <div className="p-4 sm:p-5 bg-white/[0.02] border-l-2 border-[#b8860b] rounded-r-[2px] space-y-1.5">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase font-bold">
          <Compass className="w-3.5 h-3.5" />
          <span>STORY DEFINITIE</span>
        </div>
        <blockquote className="font-serif-editorial text-base sm:text-lg text-[#f0ece4] italic leading-relaxed">
          "{story.storyDefinition}"
        </blockquote>
        <p className="text-xs text-[#8a8a8a] font-light pt-0.5">
          {story.summary}
        </p>
      </div>

      {/* Interactive Dossier Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-3">
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-[2px] transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-[#b8860b] text-[#050505] font-bold shadow-lg shadow-[#b8860b]/20'
                  : 'bg-white/[0.02] text-[#8a8a8a] hover:text-[#f0ece4] hover:bg-white/[0.05] border border-white/[0.06]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="pt-2">
        
        {/* ========================================================================= */}
        {/* TAB 0: Overzicht & Criteria Matrix                                         */}
        {/* ========================================================================= */}
        {activeTab === 0 && (
          <div className="space-y-4 animate-fadeIn">
            {/* Criteria Matrix: Acceptance vs Quality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Acceptatiecriteria */}
              <div className="space-y-3 p-4 bg-white/[0.02] border border-white/[0.06] rounded-[2px]">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono tracking-wider text-[#f0ece4] uppercase font-bold">
                      Acceptatiecriteria
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8a8a8a] italic">Doen we de juiste dingen?</span>
                </div>

                <div className="space-y-2">
                  {story.acceptanceCriteria.map((ac) => (
                    <div key={ac.id} className="p-2.5 bg-black/40 border border-white/[0.04] rounded-[2px] space-y-0.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[#b8860b] font-bold">{ac.number}</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
                          {ac.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#f0ece4] font-medium">{ac.label}</p>
                      <p className="text-[11px] text-[#8a8a8a] leading-relaxed">{ac.fulfillment}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kwaliteitscriteria */}
              <div className="space-y-3 p-4 bg-white/[0.02] border border-white/[0.06] rounded-[2px]">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#b8860b]" />
                    <span className="text-xs font-mono tracking-wider text-[#f0ece4] uppercase font-bold">
                      Kwaliteitscriteria
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8a8a8a] italic">Doen we de dingen juist?</span>
                </div>

                <div className="space-y-2">
                  {story.qualityCriteria.map((qc) => (
                    <div key={qc.id} className="p-2.5 bg-black/40 border border-white/[0.04] rounded-[2px] space-y-0.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[#b8860b] font-bold">{qc.number}</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-950 text-[#d4a843] font-mono text-[10px] border border-[#b8860b]/30">
                          {qc.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#f0ece4] font-medium">{qc.label}</p>
                      <p className="text-[11px] text-[#8a8a8a] leading-relaxed">{qc.fulfillment}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Quick-Jump CTA */}
            <div className="p-4 border border-white/[0.06] bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#8a8a8a] font-mono">
                Bekijk de volledige onderzoeksresultaten en academische bronnen via de bovenstaande tabs.
              </span>
              <button
                onClick={() => setActiveTab(1)}
                className="px-4 py-2 bg-white/[0.06] hover:bg-[#b8860b] hover:text-black text-[#f0ece4] text-xs font-mono uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
              >
                Start Verkenning →
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 1 (RS 01): 3 Casussen van AI-Impact                                   */}
        {/* ========================================================================= */}
        {isRS1 && activeTab === 1 && story.examples && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                ACCEPTATIECRITERIUM 01 // MINIMAAL 3 CONCRETE VOORBEELDEN
              </span>
              <h4 className="font-editorial text-2xl text-[#f0ece4] font-bold">
                Transformatie van de Creatieve Praktijk in Drie Dimensies
              </h4>
            </div>

            <div className="space-y-8">
              {story.examples.map((example, i) => (
                <div
                  key={example.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-white/[0.015] border border-white/[0.06] rounded-[2px] items-start"
                >
                  {/* Left: Image or Visual */}
                  {example.image && (
                    <div className="lg:col-span-4 aspect-[4/3] rounded-[2px] overflow-hidden relative border border-white/10">
                      <img
                        src={example.image}
                        alt={example.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 text-[10px] font-mono text-[#b8860b]">
                        CASUS 0{i + 1} // PRAKTIJKSTUDIE
                      </div>
                    </div>
                  )}

                  {/* Right: Content */}
                  <div className={`${example.image ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-3`}>
                    <span className="text-xs font-mono text-[#b8860b] tracking-wider uppercase block">
                      {example.tag}
                    </span>
                    <h5 className="font-editorial text-2xl text-[#f0ece4] font-bold">
                      {example.title}
                    </h5>
                    <p className="text-sm text-[#c0b8ac] leading-relaxed font-light">
                      {example.description}
                    </p>
                    <div className="p-3 bg-black/60 border border-white/[0.06] rounded-[2px] space-y-1">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                        AANTOONBARE IMPACT OP DE BEROEPSPRAKTIJK:
                      </span>
                      <p className="text-xs text-[#f0ece4] font-light">
                        {example.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2 (RS 01): Voor- & Nadelen Matrix                                      */}
        {/* ========================================================================= */}
        {isRS1 && activeTab === 2 && story.prosAndCons && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                ACCEPTATIECRITERIUM 02 // KRITISCH OVERZICHT
              </span>
              <h4 className="font-editorial text-2xl text-[#f0ece4] font-bold">
                Kansen versus Bedreigingen voor het Vormgeversberoep
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Voordelen */}
              <div className="space-y-4 p-6 bg-white/[0.02] border-t-2 border-emerald-500 rounded-[2px]">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase font-bold pb-2 border-b border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>VOORDELEN VOOR DE BEROEPSPRAKTIJK</span>
                </div>

                <div className="space-y-4">
                  {story.prosAndCons.pros.map((item, idx) => (
                    <div key={item.title} className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-emerald-400 font-bold">0{idx + 1}.</span>
                        <h5 className="text-sm font-semibold text-[#f0ece4]">{item.title}</h5>
                      </div>
                      <p className="text-xs text-[#8a8a8a] pl-5 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nadelen */}
              <div className="space-y-4 p-6 bg-white/[0.02] border-t-2 border-amber-600 rounded-[2px]">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs tracking-wider uppercase font-bold pb-2 border-b border-white/[0.06]">
                  <Scale className="w-4 h-4" />
                  <span>VALKUILEN, RISICO'S & NADELEN</span>
                </div>

                <div className="space-y-4">
                  {story.prosAndCons.cons.map((item, idx) => (
                    <div key={item.title} className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-amber-400 font-bold">0{idx + 1}.</span>
                        <h5 className="text-sm font-semibold text-[#f0ece4]">{item.title}</h5>
                      </div>
                      <p className="text-xs text-[#8a8a8a] pl-5 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3 (RS 01): Aanpak, Conclusie & Eigen AI-Gebruik                       */}
        {/* ========================================================================= */}
        {isRS1 && activeTab === 3 && story.approachAndReflection && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                ACCEPTATIECRITERIUM 03 // VISIE & PERSOONLIJKE POSITIONERING
              </span>
              <h4 className="font-editorial text-2xl text-[#f0ece4] font-bold">
                Onderbouwde Aanpak en Conclusie over Eigen AI-Gebruik
              </h4>
            </div>

            <div className="space-y-6">
              
              {/* De Aanpak */}
              <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-[2px] space-y-3">
                <span className="text-xs font-mono text-[#b8860b] tracking-wider uppercase block font-bold">
                  — {story.approachAndReflection.approachTitle}
                </span>
                <p className="text-sm sm:text-base text-[#c0b8ac] leading-relaxed font-light">
                  {story.approachAndReflection.approach}
                </p>
              </div>

              {/* Conclusie voor klanten */}
              <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-[2px] space-y-3">
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase block font-bold">
                  — {story.approachAndReflection.conclusionTitle}
                </span>
                <p className="text-sm sm:text-base text-[#f0ece4] leading-relaxed font-light">
                  {story.approachAndReflection.conclusion}
                </p>
              </div>

              {/* Persoonlijke Reflectie */}
              <div className="p-6 bg-white/[0.03] border-l-2 border-[#b8860b] rounded-r-[2px] space-y-2">
                <span className="text-[10px] font-mono text-[#b8860b] tracking-widest uppercase block font-bold">
                  PERSOONLIJKE REFLECTIE // TYCHO SOMERS
                </span>
                <blockquote className="font-serif-editorial italic text-lg sm:text-xl text-[#f0ece4] leading-relaxed">
                  "{story.approachAndReflection.reflection}"
                </blockquote>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 1 (RS 02): Droombaan Profiel (Werkzaamheden, Skills, Responsibilities) */}
        {/* ========================================================================= */}
        {!isRS1 && activeTab === 1 && story.dreamJob && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                ACCEPTATIECRITERIUM 01 // GEKOZEN DROOMBAAN & PROFIEL
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
                <h4 className="font-editorial text-3xl text-[#f0ece4] font-bold">
                  {story.dreamJob.roleName}
                </h4>
              </div>
              <span className="text-xs font-mono text-[#b8860b] block mt-1">
                SECTOR: {story.dreamJob.field}
              </span>
            </div>

            {/* 3 Pillar Columns: Werkzaamheden, Vaardigheden, Verantwoordelijkheden */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Werkzaamheden */}
              <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-[2px] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#f0ece4] uppercase tracking-wider font-bold border-b border-white/[0.06] pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                  <span>Werkzaamheden</span>
                </div>
                <ul className="space-y-2 text-xs text-[#8a8a8a] font-light leading-relaxed">
                  {story.dreamJob.workActivities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#b8860b] shrink-0 font-mono">›</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vaardigheden */}
              <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-[2px] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#f0ece4] uppercase tracking-wider font-bold border-b border-white/[0.06] pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                  <span>Vaardigheden & Tools</span>
                </div>
                <ul className="space-y-2 text-xs text-[#8a8a8a] font-light leading-relaxed">
                  {story.dreamJob.skillsAndCompetencies.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#b8860b] shrink-0 font-mono">›</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verantwoordelijkheden */}
              <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-[2px] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#f0ece4] uppercase tracking-wider font-bold border-b border-white/[0.06] pb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                  <span>Verantwoordelijkheden</span>
                </div>
                <ul className="space-y-2 text-xs text-[#8a8a8a] font-light leading-relaxed">
                  {story.dreamJob.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#b8860b] shrink-0 font-mono">›</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2 (RS 02): Hoe AI invloed heeft op de droombaan                        */}
        {/* ========================================================================= */}
        {!isRS1 && activeTab === 2 && story.dreamJob && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                ACCEPTATIECRITERIUM 02 // AI IMPACT OP DE DROOMBAAN
              </span>
              <h4 className="font-editorial text-2xl text-[#f0ece4] font-bold">
                Hoe AI de Rol van Art Director Fundamenteel Herdefinieert
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {story.dreamJob.aiInfluenceOverview.map((item, idx) => {
                const [title, ...rest] = item.split(':');
                return (
                  <div key={idx} className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-[2px] space-y-2">
                    <span className="font-mono text-xs text-[#b8860b] font-bold block">
                      TRANSFORMATIE FACTOR 0{idx + 1}
                    </span>
                    <h5 className="font-editorial text-xl text-[#f0ece4] font-bold">{title}</h5>
                    <p className="text-xs sm:text-sm text-[#8a8a8a] font-light leading-relaxed">
                      {rest.join(':')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3 (RS 02): Persoonlijke Motivatie                                      */}
        {/* ========================================================================= */}
        {!isRS1 && activeTab === 3 && story.dreamJob && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                ACCEPTATIECRITERIUM 03 // ONDERBOUWDE PERSOONLIJKE MOTIVATIE
              </span>
              <h4 className="font-editorial text-2xl text-[#f0ece4] font-bold">
                Waarom Deze Baan Naadloos Aansluit op Mijn Visie & Talent
              </h4>
            </div>

            <div className="p-8 bg-white/[0.03] border-l-2 border-[#b8860b] rounded-r-[2px] space-y-4">
              <span className="text-xs font-mono text-[#b8860b] tracking-wider uppercase block font-bold">
                HET CREATIEVE MOTIEF // TYCHO SOMERS
              </span>
              <p className="font-serif-editorial italic text-lg sm:text-2xl text-[#f0ece4] leading-relaxed">
                "{story.dreamJob.personalMotivation}"
              </p>
              <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[#8a8a8a]">
                <div>
                  <span className="text-white block font-bold">ESTHETISCH PROFIEL</span>
                  <span>Haute couture & Barok</span>
                </div>
                <div>
                  <span className="text-white block font-bold">AI ROL</span>
                  <span>Synthetische Regie & Curatie</span>
                </div>
                <div>
                  <span className="text-white block font-bold">AMBITIE</span>
                  <span>Lead Art Direction bij luxe merken</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KWALITEITSCRITERIA (QC 1-4)                                         */}
        {/* Prompt-structuur, Bronnen, LLM-Onderbouwing, Triangulatie                  */}
        {/* ========================================================================= */}
        {activeTab === 4 && (
          <div className="space-y-10 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                KWALITEITSCRITERIA // DOEN WE DE DINGEN JUIST?
              </span>
              <h4 className="font-editorial text-2xl text-[#f0ece4] font-bold">
                Methodologische Verantwoording, Bronnen & Triangulatie
              </h4>
            </div>

            {/* QC 01: Prompt-structuur is vastgelegd */}
            <div className="space-y-4 p-6 bg-white/[0.02] border border-white/[0.08] rounded-[2px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#b8860b]/20 text-[#b8860b] font-mono text-xs font-bold">
                    QC 01
                  </span>
                  <span className="text-sm font-semibold text-[#f0ece4]">
                    Vastgelegde Prompt-Architectuur & Parameters
                  </span>
                </div>
                <button
                  onClick={() => handleCopyPrompt(story.qualityExecution.promptArchitecture.userPrompt)}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#b8860b] hover:text-white transition-colors cursor-pointer"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Prompt Gekopieerd!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopieer Research Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-1">
                    SYSTEM PROMPT // ROLTOEWIJZING
                  </span>
                  <div className="p-3 bg-black/70 border border-white/[0.06] text-[#c0b8ac] rounded-[2px] select-all leading-relaxed">
                    {story.qualityExecution.promptArchitecture.systemPrompt}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-1">
                    USER PROMPT // TAAKOMSCHRIJVING & STRUCTUURKADER
                  </span>
                  <div className="p-3 bg-black/70 border border-white/[0.06] text-[#f0ece4] rounded-[2px] select-all leading-relaxed">
                    {story.qualityExecution.promptArchitecture.userPrompt}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div>
                    <span className="text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-1">
                      PARAMETERS & INSTELLINGEN
                    </span>
                    <div className="p-2.5 bg-black/50 border border-white/[0.04] text-[#b8860b] rounded-[2px]">
                      {story.qualityExecution.promptArchitecture.parametersAndVariables}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-1">
                      PROMPT-LOGICA & ONDERBOUWING
                    </span>
                    <div className="p-2.5 bg-black/50 border border-white/[0.04] text-[#8a8a8a] rounded-[2px]">
                      {story.qualityExecution.promptArchitecture.rationale}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QC 02: Betrouwbare & Relevante Bronnen */}
            <div className="space-y-4 p-6 bg-white/[0.02] border border-white/[0.08] rounded-[2px]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
                <span className="px-2 py-0.5 rounded bg-[#b8860b]/20 text-[#b8860b] font-mono text-xs font-bold">
                  QC 02
                </span>
                <span className="text-sm font-semibold text-[#f0ece4]">
                  Geraadpleegde Literatuur & Betrouwbare Vakbronnen
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {story.qualityExecution.reliableSources.map((source) => (
                  <div key={source.title} className="p-4 bg-black/50 border border-white/[0.06] rounded-[2px] space-y-2">
                    <div className="flex items-baseline justify-between text-xs font-mono">
                      <span className="text-[#b8860b] font-bold">{source.authorOrOrg}</span>
                      <span className="text-[#666]">{source.year} · {source.type}</span>
                    </div>
                    <h5 className="text-sm font-semibold text-[#f0ece4] leading-snug">{source.title}</h5>
                    <p className="text-xs text-[#8a8a8a] font-light leading-relaxed">{source.insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* QC 03: LLM-Keuze is Onderbouwd */}
            <div className="space-y-3 p-6 bg-white/[0.02] border border-white/[0.08] rounded-[2px]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
                <span className="px-2 py-0.5 rounded bg-[#b8860b]/20 text-[#b8860b] font-mono text-xs font-bold">
                  QC 03
                </span>
                <span className="text-sm font-semibold text-[#f0ece4]">
                  Onderbouwing van LLM-Selectie
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {story.qualityExecution.llmJustification.modelsUsed.map((m) => (
                  <span key={m} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#f0ece4]">
                    {m}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#8a8a8a] font-light leading-relaxed pt-2">
                {story.qualityExecution.llmJustification.justification}
              </p>
            </div>

            {/* QC 04: Triangulatie & Realistische Onderbouwing */}
            <div className="space-y-4 p-6 bg-white/[0.02] border border-white/[0.08] rounded-[2px]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3">
                <span className="px-2 py-0.5 rounded bg-[#b8860b]/20 text-[#b8860b] font-mono text-xs font-bold">
                  QC 04
                </span>
                <span className="text-sm font-semibold text-[#f0ece4]">
                  {isRS1 ? "Triangulatie via Meerdere LLM's & Onderzoeksmethoden" : "Duidelijke, Overzichtelijke & Realistische Onderbouwing"}
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-black/60 border border-white/[0.06] rounded-[2px] space-y-1">
                  <span className="text-[10px] font-mono text-[#b8860b] tracking-wider uppercase block font-bold">
                    METHODOLOGIE // {story.qualityExecution.triangulationOrGrounding.methodology}
                  </span>
                  <p className="text-xs sm:text-sm text-[#c0b8ac] font-light leading-relaxed">
                    {story.qualityExecution.triangulationOrGrounding.comparativeAnalysis}
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border-l-2 border-emerald-500 rounded-r-[2px] space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase block font-bold">
                    EINDCONCLUSIE VAN DE VALIDATIE:
                  </span>
                  <p className="text-xs sm:text-sm text-[#f0ece4] font-light leading-relaxed">
                    {story.qualityExecution.triangulationOrGrounding.conclusions}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </article>
  );
};
