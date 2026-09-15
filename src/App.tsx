import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialMarquee } from './components/EditorialMarquee';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { MyFutureCareerPage } from './components/MyFutureCareerPage';
import { StudentGuideModal } from './components/StudentGuideModal';
import { FadeInCard } from './components/FadeInCard';
import { Sparkles, ArrowRight, Target, Briefcase } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'career' | 'portfolio'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#portfolio') {
      return 'portfolio';
    }
    return 'career';
  });
  const [isGuideOpen, setIsGuideOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ece4] selection:bg-[#b8860b] selection:text-[#050505] relative overflow-x-hidden font-sans-body">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Minimalist Navbar with Page Switcher */}
      <Navbar
        activePage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      <main className="pt-16">
        {currentPage === 'career' ? (
          /* ========================================================= */
          /* 1. MY FUTURE CAREER (MAIN FOCUS OF USER REQUEST)          */
          /* ========================================================= */
          <MyFutureCareerPage
            onBackToPortfolio={() => handleNavigatePage('portfolio')}
            onOpenGuide={() => setIsGuideOpen(true)}
          />
        ) : (
          /* ========================================================= */
          /* 2. GENERAL PORTFOLIO (CLEANED UP & PURPOSEFUL)            */
          /* ========================================================= */
          <>
            {/* Full-Screen Minimalist Architectural Hero */}
            <Hero
              onExploreClick={handleExploreClick}
              onOpenCareerPage={() => handleNavigatePage('career')}
            />

            {/* Running Divider Marquee */}
            <EditorialMarquee />

            {/* Over Mij & Visie (Tycho Somers, Commerciële Economie) */}
            <AboutSection />

            {/* Featured High-Fashion Highlight for MY FUTURE CAREER */}
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
                      <Briefcase className="w-5 h-5 text-[#8a8a8a]" />
                    </div>
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#f0ece4]">
                      MY DREAM JOB: ACCOUNT EXECUTIVE
                    </h3>
                    <p className="text-xs text-[#8a8a8a] leading-relaxed font-light">
                      Onderzoek naar de werkzaamheden, vaardigheden, verantwoordelijkheden en persoonlijke match van een Account Executive in B2B sales.
                    </p>
                    <span className="text-[11px] font-mono text-[#b8860b] block">
                      Bekijk dossier & criteria →
                    </span>
                  </FadeInCard>

                  <FadeInCard
                    delayMs={150}
                    onClick={() => handleNavigatePage('career')}
                    className="p-6 sm:p-8 bg-[#0a0a0a] hover:bg-[#111111] border border-white/[0.08] hover:border-[#b8860b]/60 rounded-[3px] transition-all cursor-pointer space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-2xl font-bold text-[#b8860b]">RS02</span>
                      <Target className="w-5 h-5 text-[#8a8a8a]" />
                    </div>
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#f0ece4]">
                      AI & THE FUTURE OF SALES
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

      {/* Floating Student Helper Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsGuideOpen(true)}
          className="group px-3.5 py-1.5 bg-[#0e0e0e]/90 hover:bg-[#b8860b] text-[#8a8a8a] hover:text-[#050505] border border-white/10 hover:border-[#b8860b] rounded-full backdrop-blur-md transition-all flex items-center gap-2 text-[11px] uppercase tracking-wider font-mono cursor-pointer shadow-xl"
          title="Klik hier voor de handleiding over hoe je teksten en foto's aanpast in code"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#b8860b] group-hover:text-[#050505]" />
          <span>Aanpas Gids</span>
        </button>
      </div>

      {/* Student Guide Modal */}
      <StudentGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
