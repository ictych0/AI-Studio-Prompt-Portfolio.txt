import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialMarquee } from './components/EditorialMarquee';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { MyFutureCareerPage } from './components/MyFutureCareerPage';
import { StudentGuideModal } from './components/StudentGuideModal';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { FadeInCard } from './components/FadeInCard';
import { Sparkles, ArrowRight, Camera } from 'lucide-react';
import { PORTFOLIO_PROFILE } from './data/portfolioData';
import { getStoredPrimaryPhoto, getStoredSecondaryPhoto } from './utils/photoStorage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'career' | 'portfolio'>(() => {
    if (typeof window !== 'undefined' && (window.location.hash === '#career' || window.location.hash.startsWith('#rs'))) {
      return 'career';
    }
    return 'portfolio';
  });
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState(false);

  // State for original photos
  const [primaryPhoto, setPrimaryPhoto] = useState<string | null>(() => getStoredPrimaryPhoto());
  const [secondaryPhoto, setSecondaryPhoto] = useState<string | null>(() => getStoredSecondaryPhoto());

  // Listen to photo storage events across components
  useEffect(() => {
    const handlePhotosUpdated = () => {
      setPrimaryPhoto(getStoredPrimaryPhoto());
      setSecondaryPhoto(getStoredSecondaryPhoto());
    };
    window.addEventListener('tycho_photos_updated', handlePhotosUpdated);
    return () => window.removeEventListener('tycho_photos_updated', handlePhotosUpdated);
  }, []);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#portfolio') {
        setCurrentPage('portfolio');
      } else if (window.location.hash === '#career' || window.location.hash.startsWith('#rs')) {
        setCurrentPage('career');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigatePage = (page: 'portfolio' | 'career') => {
    setCurrentPage(page);
    window.location.hash = page === 'career' ? 'career' : 'portfolio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    handleNavigatePage('career');
  };

  const handleUpdatePhotos = (primary: string, secondary: string) => {
    setPrimaryPhoto(primary);
    setSecondaryPhoto(secondary);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ece4] selection:bg-[#b8860b] selection:text-[#050505] relative overflow-x-hidden font-sans-body">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Minimalist Navbar with Page Switcher & Photo Upload */}
      <Navbar
        activePage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
      />

      <main className="pt-16">
        {currentPage === 'career' ? (
          /* ========================================================= */
          /* 1. MY FUTURE CAREER (MAIN FOCUS OF USER REQUEST)          */
          /* ========================================================= */
          <MyFutureCareerPage
            onBackToPortfolio={() => handleNavigatePage('portfolio')}
            onOpenGuide={() => setIsGuideOpen(true)}
            portraitSrc={primaryPhoto}
            onPhotoUpdated={(dataUrl) => setPrimaryPhoto(dataUrl)}
          />
        ) : (
          /* ========================================================= */
          /* 2. GENERAL PORTFOLIO                                      */
          /* ========================================================= */
          <>
            {/* Full-Screen Minimalist Architectural Hero */}
            <Hero
              onExploreClick={handleExploreClick}
              onOpenCareerPage={() => handleNavigatePage('career')}
              portraitSrc={primaryPhoto}
              onPhotoUpdated={(dataUrl) => setPrimaryPhoto(dataUrl)}
            />

            {/* Running Divider Marquee */}
            <EditorialMarquee />

            {/* Over Mij & Visie (Tycho Somers, Commerciële Economie) */}
            <AboutSection
              portraitSrc={secondaryPhoto}
              onPhotoUpdated={(dataUrl) => setSecondaryPhoto(dataUrl)}
            />

            {/* Featured Highlight for MY FUTURE CAREER */}
            <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#080808]">
              <div className="max-w-[1500px] mx-auto space-y-8">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
                  <div>
                    <span className="font-mono text-xs text-[#b8860b] tracking-[0.25em] uppercase font-bold block mb-2">
                      HOOFDONDERZOEK MINOR // 2025 – 2026
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase text-[#f0ece4]">
                      MY FUTURE CAREER
                    </h2>
                    <p className="font-serif-editorial italic text-base sm:text-lg text-[#8a8a8a] mt-1">
                      Onderzoek naar de droombaan van Account Executive en de impact van AI op B2B verkoop.
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigatePage('career')}
                    className="px-6 py-3 bg-[#b8860b] hover:bg-[#d4a843] text-[#050505] font-bold text-xs uppercase tracking-widest rounded-[2px] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#b8860b]/20"
                  >
                    <span>Open Volledig Dossier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FadeInCard
                    delayMs={0}
                    onClick={() => handleNavigatePage('career')}
                    className="p-6 sm:p-8 bg-[#0a0a0a] hover:bg-[#111111] border border-white/[0.08] hover:border-[#b8860b]/60 rounded-[3px] transition-all cursor-pointer space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-2xl font-bold text-[#b8860b]">RS01</span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8a8a] border border-white/10 px-2.5 py-0.5 rounded">
                        Beroepsprofiel
                      </span>
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-[#f0ece4]">
                      Droombaan: Account Executive B2B
                    </h3>
                    <p className="text-xs text-[#8a8a8a] leading-relaxed font-light">
                      Functieprofiel, salarisbenchmarks (€45k - €120k OTE), kerncompetenties en de match met Commerciële Economie.
                    </p>
                    <span className="text-[11px] font-mono text-[#b8860b] block">
                      Bekijk analyse & motivatie →
                    </span>
                  </FadeInCard>

                  <FadeInCard
                    delayMs={150}
                    onClick={() => handleNavigatePage('career')}
                    className="p-6 sm:p-8 bg-[#0a0a0a] hover:bg-[#111111] border border-white/[0.08] hover:border-[#b8860b]/60 rounded-[3px] transition-all cursor-pointer space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-2xl font-bold text-[#b8860b]">RS02</span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8a8a] border border-white/10 px-2.5 py-0.5 rounded">
                        AI & Innovatie
                      </span>
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-[#f0ece4]">
                      De Toekomst van Sales met AI
                    </h3>
                    <p className="text-xs text-[#8a8a8a] leading-relaxed font-light">
                      Casestudies van conversation intelligence, geautomatiseerde prospecting, voordelen/nadelen matrix en prompt-structuur.
                    </p>
                    <span className="text-[11px] font-mono text-[#b8860b] block">
                      Bekijk dossier & criteria →
                    </span>
                  </FadeInCard>
                </div>
              </div>
            </section>

            {/* Contact & Colofon */}
            <ContactSection onOpenGuide={() => setIsGuideOpen(true)} />
          </>
        )}
      </main>

      {/* Floating Buttons in Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setIsPhotoManagerOpen(true)}
          className="px-3.5 py-1.5 bg-[#0e0e0e]/90 hover:bg-[#b8860b] text-[#8a8a8a] hover:text-[#050505] border border-white/10 hover:border-[#b8860b] rounded-full backdrop-blur-md transition-all flex items-center gap-2 text-[11px] uppercase tracking-wider font-mono cursor-pointer shadow-xl"
          title="Klik hier om direct jouw eigen foto's te uploaden of aan te passen"
        >
          <Camera className="w-3.5 h-3.5 text-[#b8860b] hover:text-[#050505]" />
          <span>Mijn Foto's</span>
        </button>

        <button
          onClick={() => setIsGuideOpen(true)}
          className="hidden sm:flex px-3.5 py-1.5 bg-[#0e0e0e]/90 hover:bg-[#b8860b] text-[#8a8a8a] hover:text-[#050505] border border-white/10 hover:border-[#b8860b] rounded-full backdrop-blur-md transition-all items-center gap-2 text-[11px] uppercase tracking-wider font-mono cursor-pointer shadow-xl"
          title="Handleiding voor de minor"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
          <span>Aanpas Gids</span>
        </button>
      </div>

      {/* Direct Photo Manager Modal */}
      <PhotoManagerModal
        isOpen={isPhotoManagerOpen}
        onClose={() => setIsPhotoManagerOpen(false)}
        onUpdatePhotos={handleUpdatePhotos}
      />

      {/* Student Guide Modal */}
      <StudentGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
