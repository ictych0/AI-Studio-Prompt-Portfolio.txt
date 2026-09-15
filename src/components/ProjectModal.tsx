import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Sparkles, Sliders, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState<'split' | 'ai' | 'human'>('split');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, lightboxImage]);

  if (!project) return null;

  const handleCopyPrompt = (promptText: string, index: number) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptIndex(index);
    setTimeout(() => setCopiedPromptIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
      
      {/* Container simulating a high-end architectural dossier */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#070707] border border-white/10 rounded-[3px] shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-[#f0ece4]">
        
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-40 px-6 sm:px-10 py-5 bg-[#070707]/95 border-b border-white/[0.08] backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#b8860b] font-bold">{project.number}</span>
            <span className="text-white/20">//</span>
            <span className="font-editorial text-base sm:text-lg text-[#f0ece4] font-bold truncate max-w-md">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-[#8a8a8a] hidden sm:inline uppercase tracking-wider">
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 border border-white/10 rounded-full text-[#8a8a8a] hover:text-white hover:border-[#b8860b] transition-colors cursor-pointer"
              aria-label="Sluit case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content (Open Flowing Editorial Layout) */}
        <div className="p-6 sm:p-12 lg:p-14 space-y-16">

          {/* 1. Hero Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-3 text-xs font-mono tracking-widest text-[#8a8a8a] uppercase">
              <span className="text-[#b8860b]">{project.category}</span>
              <span>{project.year}</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl font-bold text-[#f0ece4] tracking-tight leading-tight">
              {project.title}
            </h1>
            
            <p className="font-serif-editorial text-xl sm:text-2xl text-[#c0b8ac] italic max-w-3xl">
              "{project.subtitle}"
            </p>

            {/* AI Tools Tag Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] tracking-widest uppercase text-[#666] font-mono mr-1">STACK:</span>
              {project.aiTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-mono uppercase bg-white/[0.03] text-[#f0ece4] border border-white/10 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Cinematic Hero Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-[3px] shadow-2xl">
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-[10px] text-[#f0ece4] tracking-widest uppercase font-mono bg-[#050505]/80 backdrop-blur-sm px-3 py-1 border border-white/10 rounded-[2px]">
                HERO RENDER // LATENT OUTPUT
              </div>
            </div>
          </div>

          {/* 2. De Opdracht & Mijn Proces (Open 2-Column Spread) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/[0.08] pt-12">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                01 // DE OPDRACHT & CONTEXT
              </span>
              <p className="text-[#c0b8ac] text-sm sm:text-base leading-relaxed font-light">
                {project.assignment}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                02 // HET CREATIEVE PROCES
              </span>
              <p className="text-[#c0b8ac] text-sm sm:text-base leading-relaxed font-light">
                {project.process}
              </p>
            </div>
          </div>

          {/* 3. Prompt Dossier (Clean Rows) */}
          <div className="border-t border-white/[0.08] pt-12 space-y-8">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="text-xs font-mono tracking-[0.2em] text-[#b8860b] uppercase">
                03 // PROMPT DOSSIER & SYNTACTISCHE STRUCTUUR
              </span>
              <span className="text-[10px] text-[#666] font-mono uppercase">VERIFIEERBARE PROMPTS</span>
            </div>

            <div className="space-y-8">
              {project.prompts.map((promptItem, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#f0ece4] uppercase tracking-wider">
                      Tool: <strong className="text-[#b8860b]">{promptItem.tool}</strong>
                    </span>
                    
                    <button
                      onClick={() => handleCopyPrompt(promptItem.promptText, idx)}
                      className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] hover:bg-[#b8860b] hover:text-[#050505] text-[#f0ece4] border border-white/10 rounded text-xs transition-colors cursor-pointer font-mono"
                    >
                      {copiedPromptIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Gekopieerd</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Kopieer</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-mono text-xs sm:text-sm text-[#f0ece4]/90 bg-white/[0.02] p-4 rounded-[3px] border border-white/[0.06] leading-relaxed select-all">
                    {promptItem.promptText}
                  </p>

                  {promptItem.resultNote && (
                    <p className="text-xs text-[#8a8a8a] italic pl-2 border-l border-[#b8860b]/40">
                      <strong className="text-[#b8860b] not-italic font-mono uppercase text-[10px] mr-2">EVALUATIE:</strong>
                      {promptItem.resultNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4. AI Raw vs. Menselijke Curatie */}
          {project.comparison && (
            <div className="border-t border-white/[0.08] pt-12 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-3">
                <div>
                  <span className="text-xs font-mono tracking-[0.2em] text-[#b8860b] uppercase block">
                    04 // DE VERGELIJKING: AI RAW VS. MENSELIJKE FINESSE
                  </span>
                  <p className="text-xs text-[#8a8a8a] mt-1 font-light">
                    Onderzoek naar waar het algoritme te kort schiet en menselijke regie vereist is.
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-white/[0.03] p-1 border border-white/10 rounded text-xs font-mono">
                  <button
                    onClick={() => setComparisonMode('split')}
                    className={`px-3 py-1 rounded transition-colors ${comparisonMode === 'split' ? 'bg-[#b8860b] text-[#050505] font-bold' : 'text-[#8a8a8a]'}`}
                  >
                    Naast Elkaar
                  </button>
                  <button
                    onClick={() => setComparisonMode('ai')}
                    className={`px-3 py-1 rounded transition-colors ${comparisonMode === 'ai' ? 'bg-[#b8860b] text-[#050505] font-bold' : 'text-[#8a8a8a]'}`}
                  >
                    AI Raw
                  </button>
                  <button
                    onClick={() => setComparisonMode('human')}
                    className={`px-3 py-1 rounded transition-colors ${comparisonMode === 'human' ? 'bg-[#b8860b] text-[#050505] font-bold' : 'text-[#8a8a8a]'}`}
                  >
                    Bewerkt
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* AI Raw Side */}
                {(comparisonMode === 'split' || comparisonMode === 'ai') && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs tracking-wider text-[#8a8a8a] font-mono uppercase">
                      <span>{project.comparison.aiRawTitle}</span>
                      <span className="text-[10px] text-[#666]">ONBEWERKT</span>
                    </div>

                    <div className="aspect-[4/3] overflow-hidden rounded-[3px] shadow-xl">
                      <img
                        src={project.comparison.aiRawImage}
                        alt="AI Raw"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter grayscale contrast-125"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed font-light">
                      {project.comparison.aiRawDescription}
                    </p>
                  </div>
                )}

                {/* Human Edited Side */}
                {(comparisonMode === 'split' || comparisonMode === 'human') && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs tracking-wider text-[#b8860b] font-mono uppercase">
                      <span>{project.comparison.humanEditedTitle}</span>
                      <span className="text-[10px] text-[#b8860b]">POST-PRODUCTIE</span>
                    </div>

                    <div className="aspect-[4/3] overflow-hidden rounded-[3px] shadow-xl">
                      <img
                        src={project.comparison.humanEditedImage}
                        alt="Human Edited"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-[#f0ece4] leading-relaxed font-light">
                      {project.comparison.humanEditedDescription}
                    </p>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* 5. Lookbook Galerij (Borderless Grid) */}
          {project.galleryImages.length > 0 && (
            <div className="border-t border-white/[0.08] pt-12 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono tracking-[0.2em] text-[#b8860b] uppercase">
                  05 // EXPOSITIE-GALERIJ ({project.galleryImages.length} BEELDEN)
                </span>
                <span className="text-[10px] text-[#666] font-mono">KLIK VOOR DETAILWEERGAVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(img.url)}
                    className="cursor-pointer group space-y-2"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-[3px] shadow-lg">
                      <img
                        src={img.url}
                        alt={img.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03]"
                      />
                    </div>
                    <p className="text-[10px] text-[#8a8a8a] uppercase tracking-wider font-mono truncate">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Eindresultaat & Reflectie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/[0.08] pt-12">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#f0ece4] uppercase block font-bold">
                HET EINDRESULTAAT
              </span>
              <p className="text-[#8a8a8a] text-sm leading-relaxed font-light">
                {project.finalResult}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#b8860b] uppercase block font-bold">
                KRITISCHE REFLECTIE & LEERWINST
              </span>
              <p className="text-[#c0b8ac] text-sm leading-relaxed font-light">
                {project.reflection}
              </p>
            </div>
          </div>

          {/* Bottom Close Bar */}
          <div className="pt-8 border-t border-white/[0.08] flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#b8860b] hover:bg-[#d4a843] text-[#050505] font-bold text-xs uppercase tracking-[0.16em] rounded-[2px] transition-all cursor-pointer"
            >
              Sluit Dossier
            </button>
          </div>

        </div>

      </div>

      {/* Lightbox for Gallery Images */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img
            src={lightboxImage}
            alt="Enlarged view"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white p-2 border border-white/20 bg-black/80 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
};
