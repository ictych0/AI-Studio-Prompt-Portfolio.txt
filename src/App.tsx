import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialMarquee } from './components/EditorialMarquee';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { LearningTimeline } from './components/LearningTimeline';
import { AITransparencySection } from './components/AITransparencySection';
import { ContactSection } from './components/ContactSection';
import { StudentGuideModal } from './components/StudentGuideModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Inertial Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleExploreClick = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo('#explore', { offset: -40, duration: 1.2 });
    } else {
      const exploreSection = document.getElementById('explore');
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ece4] selection:bg-[#b8860b] selection:text-[#050505] relative overflow-x-hidden font-sans-body">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Minimalist Navbar */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      <main>
        {/* Full-Screen Minimalist Architectural Hero */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Running Divider Marquee */}
        <EditorialMarquee />

        {/* Over Mij & Visie (Story Behind the Latent Space) */}
        <AboutSection />

        {/* Onderzoek (RS // 01 & RS // 02 + Lab Experimenten) */}
        <ResearchSection />

        {/* Chronologisch Leerproces */}
        <LearningTimeline />

        {/* AI Ethiek & Transparantie Protocol */}
        <AITransparencySection />

        {/* Contact & Colofon */}
        <ContactSection onOpenGuide={() => setIsGuideOpen(true)} />
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
