import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1280, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // AudioContext unavailable
    }
  };

  const navItems = [
    { label: 'Over Mij', href: '#about' },
    { label: 'Onderzoek (RS)', href: '#explore' },
    { label: 'Leerproces', href: '#learn' },
    { label: 'AI Ethiek & Transparantie', href: '#ai-process' },
  ];

  const handleNavClick = (href: string) => {
    playChime();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.06] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full border border-white/15 bg-[#111111] flex items-center justify-center text-xs font-serif-editorial font-bold text-[#b8860b] group-hover:border-[#b8860b] transition-colors">
              TS
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#f0ece4] group-hover:text-white transition-colors">
                {PORTFOLIO_PROFILE.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#8a8a8a] uppercase font-mono -mt-0.5">
                Futureproof met AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links in Dutch */}
          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] hover:text-[#f0ece4] transition-colors duration-200 font-mono relative group py-1 cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action & Audio Controls in Dutch */}
          <div className="hidden sm:flex items-center gap-5">
            {onOpenGuide && (
              <button
                onClick={onOpenGuide}
                className="text-[11px] tracking-wider uppercase text-[#8a8a8a] hover:text-[#b8860b] transition-colors flex items-center gap-1.5 font-mono cursor-pointer"
                title="Handleiding om zelf teksten en foto's aan te passen"
              >
                <Sparkles className="w-3 h-3 text-[#b8860b]" />
                <span>Handleiding</span>
              </button>
            )}

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1.5 rounded-full border border-white/[0.08] text-[#8a8a8a] hover:text-[#f0ece4] hover:border-[#b8860b]/40 transition-colors cursor-pointer"
              title={soundEnabled ? 'Geluidseffecten ingeschakeld' : 'Geluidseffecten uitgeschakeld'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#b8860b]" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-bold text-[#050505] bg-[#b8860b] hover:bg-[#d4a843] rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#f0ece4] border border-white/10 rounded-md bg-[#0a0a0a] transition-colors cursor-pointer"
              aria-label="Navigatiemenu openen"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#050505]/95 backdrop-blur-xl flex flex-col justify-between p-8 border-b border-white/10">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <p className="font-editorial text-xl text-white font-bold">{PORTFOLIO_PROFILE.name}</p>
              <p className="text-[10px] tracking-widest text-[#b8860b] uppercase font-mono">Futureproof met AI</p>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 border border-white/10 rounded text-[#8a8a8a] hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-10">
            {navItems.map((item, idx) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left flex items-baseline justify-between border-b border-white/[0.06] pb-3 group cursor-pointer"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-[#b8860b] font-mono">0{idx + 1}</span>
                  <span className="font-editorial text-2xl text-[#f0ece4] group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8a8a8a] group-hover:text-[#b8860b]" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 text-xs text-[#8a8a8a]">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-3.5 text-center text-xs tracking-widest uppercase font-bold text-[#050505] bg-[#b8860b] rounded cursor-pointer"
            >
              Contact Opnemen
            </button>

            {onOpenGuide && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="text-center text-[#b8860b] underline text-xs pt-2 font-mono cursor-pointer"
              >
                Open Handleiding
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
