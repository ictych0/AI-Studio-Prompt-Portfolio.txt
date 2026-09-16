import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { InteractivePortraitFrame } from './InteractivePortraitFrame';

interface HeroProps {
  onExploreClick: () => void;
  onOpenCareerPage?: () => void;
  portraitSrc?: string | null;
  onPhotoUpdated?: (dataUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenCareerPage, portraitSrc, onPhotoUpdated }) => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [typedRole, setTypedRole] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const heroRef = useRef<HTMLElement>(null);

  // Scroll parallax transforms for kinetic typography
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const xTycho = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const xSomers = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  const roles = [
    'Commerciële Economie Student',
    'Toekomstig Account Executive',
    'B2B Sales & AI Onderzoeker',
    'Minor Futureproof met AI'
  ];

  // Typewriter effect in Dutch
  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting) {
        setTypedRole(currentRole.substring(0, currentCharIndex + 1));
        currentCharIndex++;

        if (currentCharIndex === currentRole.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2200);
          return;
        }
      } else {
        setTypedRole(currentRole.substring(0, currentCharIndex - 1));
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        }
      }

      timeoutId = setTimeout(type, isDeleting ? 35 : 75);
    };

    timeoutId = setTimeout(type, 700);
    return () => clearTimeout(timeoutId);
  }, []);

  // Live Amsterdam time display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('nl-NL', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Amsterdam'
        }) + ' CET'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move radial glow
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-6 sm:px-12 lg:px-20 bg-[#050505] text-[#f0ece4] overflow-hidden select-none"
    >
      {/* 1. Subtle Background Cursor Glow */}
      <div
        className="pointer-events-none absolute z-0 w-[600px] h-[600px] rounded-full blur-[100px] transition-transform duration-100 ease-out opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(184, 134, 11, 0.22) 0%, rgba(5, 5, 5, 0) 70%)',
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* 2. Top Sub-Header Information Line */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-[0.22em] text-[#8a8a8a] uppercase py-2">
        <div className="flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#b8860b]" />
          <span className="text-[#f0ece4] font-medium">PORTFOLIO 2025 / 2026</span>
          <span className="text-white/20 hidden sm:inline">//</span>
          <span className="text-[#8a8a8a] hidden sm:inline">COMMERCIËLE ECONOMIE</span>
        </div>

        <div className="flex items-center gap-4 text-[10px]">
          <span className="hidden sm:inline text-[#666]">AMSTERDAM</span>
          <span className="flex items-center gap-1.5 text-[#b8860b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b] animate-pulse" />
            <span>{currentTime || '12:00 CET'}</span>
          </span>
        </div>
      </div>

      {/* 4. Giant Monolithic Hero Center with Scroll-Linked Kinetic Typography */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 my-auto py-4 lg:py-8 flex flex-col items-center justify-center max-w-[1500px] mx-auto w-full will-change-transform"
      >
        
        {/* Kinetic Typographic Name Layer */}
        <div className="w-full flex flex-col justify-center relative overflow-hidden">
          
          {/* First Name (Drifts Left on Scroll) */}
          <motion.div
            style={{ x: xTycho }}
            className="font-editorial text-[clamp(4.5rem,13vw,12.5rem)] font-extrabold tracking-[-0.05em] text-[#f0ece4]/15 uppercase leading-[0.85] select-none text-left pl-2 sm:pl-6 will-change-transform"
          >
            TYCHO
          </motion.div>

          {/* Center Portrait Overlay nestled between the colossal names */}
          <motion.div
            style={{ y: yPortrait }}
            className="my-[-2.5rem] sm:my-[-4rem] lg:my-[-5.5rem] z-10 flex justify-center pointer-events-auto will-change-transform"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]">
              <InteractivePortraitFrame
                target="primary"
                imageSrc={portraitSrc}
                label="Tycho Somers"
                subLabel="Sleep 'Afbeelding 1.jpeg' hierheen of klik om te uploaden"
                onPhotoUpdated={onPhotoUpdated}
              />

              {/* Status Badge in Dutch */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050505]/95 backdrop-blur-md border border-[#b8860b]/50 text-[10px] tracking-[0.18em] uppercase text-[#f0ece4] whitespace-nowrap shadow-2xl font-mono pointer-events-none z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                <span>MINOR FUTUREPROOF MET AI</span>
              </div>
            </div>
          </motion.div>

          {/* Last Name (Outlined Stroked Typography, Drifts Right on Scroll) */}
          <motion.div
            style={{ x: xSomers }}
            className="font-editorial text-[clamp(4.5rem,13vw,12.5rem)] font-extrabold tracking-[-0.05em] text-transparent uppercase leading-[0.85] select-none text-right pr-2 sm:pr-6 stroked-text will-change-transform"
          >
            SOMERS
          </motion.div>

        </div>

        {/* 5. Sub-Hero Info Row in Dutch */}
        <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end max-w-5xl">
          
          {/* Left: Role with Animated Typewriter Cursor */}
          <div className="lg:col-span-6 space-y-2">
            <div className="section-label">
              <span>Mijn Rol & Praktijk</span>
            </div>
            <div className="font-editorial text-2xl sm:text-3xl text-[#f0ece4] font-bold min-h-[36px] flex items-center">
              <span>{typedRole}</span>
              <span className="w-0.5 h-6 bg-[#b8860b] ml-1 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-[#8a8a8a] font-light leading-relaxed max-w-md">
              Onderzoek naar de droombaan van Account Executive, de toepassing van salestech & AI, en het belang van menselijke consultative vaardigheden.
            </p>
          </div>

          {/* Right: Dutch CTAs */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-start lg:justify-end gap-4">
            <button
              onClick={onOpenCareerPage || onExploreClick}
              className="px-7 py-3 bg-[#b8860b] hover:bg-[#d4a843] text-[#050505] font-bold text-xs uppercase tracking-[0.16em] rounded-[2px] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#b8860b]/20 cursor-pointer"
            >
              <span>My Future Career (RS01 & RS02)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#about"
              className="px-7 py-3 border border-white/15 hover:border-[#b8860b] text-[#f0ece4] hover:text-white text-xs uppercase tracking-[0.16em] rounded-[2px] transition-all text-center"
            >
              Over Mij
            </a>
          </div>

        </div>

      </motion.div>

      {/* 6. Bottom Scroll Indicator Track */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8a8a8a] tracking-[0.2em] uppercase">
        <span className="hidden sm:inline font-mono text-[10px] text-[#555]">
          ESTHETISCHE REGIE & SYNTHETISCHE KUNST
        </span>

        <button
          onClick={onExploreClick}
          className="mx-auto sm:mx-0 flex flex-col items-center gap-2 text-[#8a8a8a] hover:text-[#b8860b] transition-colors cursor-pointer"
        >
          <div className="scroll-track-anim rounded-full" />
          <span className="font-mono text-[9px]">SCROLL</span>
        </button>

        <span className="hidden sm:inline font-mono text-[10px] text-[#555]">
          ACADEMISCH DOSSIER 2025–2026
        </span>
      </div>

    </section>
  );
};
