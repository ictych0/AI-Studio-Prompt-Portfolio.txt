import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  activePage: 'portfolio' | 'career';
  onNavigatePage: (page: 'portfolio' | 'career') => void;
  onOpenGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigatePage, onOpenGuide }) => {
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

  const portfolioNavItems = [
    { label: 'Over Mij', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const careerNavItems = [
    { label: 'Overzicht', href: '#career-overview' },
    { label: 'RS01 Droombaan', href: '#rs01-dream-job' },
    { label: 'Waarom AE?', href: '#why-ae' },
    { label: 'RS02 AI & Sales', href: '#rs02-future-sales' },
    { label: 'Prompts & Bronnen', href: '#prompts-sources' },
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
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.06] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <div
            onClick={() => onNavigatePage('portfolio')}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-white/15 bg-[#111111] flex items-center justify-center text-xs font-serif-editorial font-bold text-[#b8860b] group-hover:border-[#b8860b] transition-colors">
              TS
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#f0ece4] group-hover:text-white transition-colors">
                {PORTFOLIO_PROFILE.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#8a8a8a] uppercase font-mono -mt-0.5">
                Commerciële Economie // AI Minor
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {activePage === 'portfolio' ? (
              <>
                <button
                  onClick={() => {
                    playChime();
                    handleNavClick('#about');
                  }}
                  className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] hover:text-[#f0ece4] transition-colors duration-200 font-mono relative group py-1 cursor-pointer"
                >
                  <span>Over Mij</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </button>

                {/* Prominent Golden Tab to MY FUTURE CAREER */}
                <button
                  onClick={() => {
                    playChime();
                    onNavigatePage('career');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-1.5 rounded-full border border-[#b8860b]/40 bg-[#b8860b]/10 hover:bg-[#b8860b]/25 text-[#d4a843] hover:text-[#f2ca65] text-xs uppercase tracking-[0.16em] font-mono transition-all flex items-center gap-2 cursor-pointer shadow-sm shadow-[#b8860b]/10"
                >
                  <span className="w-2 h-2 rounded-full bg-[#b8860b] animate-pulse" />
                  <span className="font-bold">MY FUTURE CAREER</span>
                </button>

                <button
                  onClick={() => {
                    playChime();
                    handleNavClick('#contact');
                  }}
                  className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] hover:text-[#f0ece4] transition-colors duration-200 font-mono relative group py-1 cursor-pointer"
                >
                  <span>Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    playChime();
                    onNavigatePage('portfolio');
                  }}
                  className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] hover:text-[#b8860b] transition-colors font-mono cursor-pointer flex items-center gap-1.5"
                >
                  <span>← Portfolio</span>
                </button>

                {careerNavItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a] hover:text-[#f0ece4] transition-colors duration-200 font-mono relative group py-1 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </>
            )}
          </nav>

          {/* Right Action & Audio Controls in Dutch */}
          <div className="hidden sm:flex items-center gap-4">
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

            {activePage === 'portfolio' ? (
              <button
                onClick={() => {
                  onNavigatePage('career');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2 text-xs tracking-[0.16em] uppercase font-bold text-[#050505] bg-[#b8860b] hover:bg-[#d4a843] rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Carrière Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onNavigatePage('portfolio')}
                className="px-5 py-2 text-xs tracking-[0.16em] uppercase font-bold text-[#050505] bg-[#b8860b] hover:bg-[#d4a843] rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
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

          <div className="flex flex-col gap-5 py-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigatePage('career');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 bg-[#b8860b]/15 border border-[#b8860b]/40 rounded text-left flex items-center justify-between text-[#f0ece4] font-bold"
            >
              <span className="font-editorial text-xl text-[#d4a843]"># MY FUTURE CAREER</span>
              <ArrowUpRight className="w-5 h-5 text-[#b8860b]" />
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigatePage('portfolio');
              }}
              className="text-left font-editorial text-xl text-[#f0ece4] border-b border-white/10 pb-3"
            >
              Portfolio Hoofdpagina
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (activePage !== 'portfolio') {
                  onNavigatePage('portfolio');
                }
                setTimeout(() => handleNavClick('#about'), 100);
              }}
              className="text-left font-editorial text-lg text-[#8a8a8a] hover:text-white"
            >
              Over Mij
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 text-xs text-[#8a8a8a]">
            {onOpenGuide && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="text-center text-[#b8860b] underline text-xs font-mono cursor-pointer"
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
