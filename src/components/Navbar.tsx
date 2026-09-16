import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  activePage: 'portfolio' | 'career';
  onNavigatePage: (page: 'portfolio' | 'career') => void;
  onOpenGuide?: () => void;
  onOpenPhotoManager?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigatePage, onOpenPhotoManager }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const careerNavItems = [
    { label: 'RS01 Droombaan', href: '#rs01-dream-job' },
    { label: 'Waarom AE?', href: '#why-ae' },
    { label: 'RS02 AI & Sales', href: '#rs02-future-sales' },
    { label: 'Prompts & Bronnen', href: '#prompts-sources' },
  ];

  const handleNavClick = (href: string) => {
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
            ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-[#050505]/60 backdrop-blur-md border-b border-white/[0.04] py-4'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          
          {/* Brand / Name */}
          <button
            onClick={() => onNavigatePage('portfolio')}
            className="group flex items-center gap-3.5 cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-full border border-white/15 bg-[#0f0f0f] flex items-center justify-center text-xs font-serif-editorial font-bold text-[#b8860b] group-hover:border-[#b8860b] transition-colors">
              TS
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-base sm:text-lg font-bold tracking-tight text-[#f0ece4] group-hover:text-white transition-colors">
                {PORTFOLIO_PROFILE.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#8a8a8a] uppercase font-mono -mt-0.5">
                Commerciële Economie // Futureproof AI
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {activePage === 'portfolio' ? (
              <>
                <button
                  onClick={() => handleNavClick('#about')}
                  className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono relative group py-1 cursor-pointer"
                >
                  <span>Over Mij</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </button>

                <button
                  onClick={() => {
                    onNavigatePage('career');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-[#b8860b] transition-colors font-mono relative group py-1 cursor-pointer flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                  <span>My Future Career</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </button>

                <button
                  onClick={() => handleNavClick('#contact')}
                  className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono relative group py-1 cursor-pointer"
                >
                  <span>Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onNavigatePage('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-[#b8860b] transition-colors font-mono cursor-pointer flex items-center gap-1.5"
                >
                  <span>← Portfolio</span>
                </button>

                {careerNavItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-[#f0ece4] transition-colors font-mono relative group py-1 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </>
            )}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenPhotoManager && (
              <button
                onClick={onOpenPhotoManager}
                className="px-3.5 py-2 text-xs tracking-[0.14em] uppercase font-mono text-[#8a8a8a] hover:text-[#f0ece4] border border-white/10 hover:border-[#b8860b] rounded-[3px] transition-all flex items-center gap-2 cursor-pointer bg-[#0c0c0c]"
                title="Eigen foto's uploaden of aanpassen"
              >
                <Camera className="w-3.5 h-3.5 text-[#b8860b]" />
                <span className="hidden lg:inline">Mijn Foto's</span>
              </button>
            )}

            {activePage === 'portfolio' ? (
              <button
                onClick={() => {
                  onNavigatePage('career');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2 text-xs tracking-[0.16em] uppercase font-bold text-[#050505] bg-[#b8860b] hover:bg-[#d4a843] rounded-[3px] transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Carrière Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onNavigatePage('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2 text-xs tracking-[0.16em] uppercase font-bold text-[#050505] bg-[#b8860b] hover:bg-[#d4a843] rounded-[3px] transition-all duration-200 shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Naar Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#f0ece4] border border-white/10 rounded bg-[#0a0a0a] transition-colors cursor-pointer"
              aria-label="Navigatiemenu openen"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-8 border-b border-white/10">
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

          <div className="flex flex-col gap-4 py-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigatePage('career');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 bg-[#b8860b]/15 border border-[#b8860b]/40 rounded text-left flex items-center justify-between text-[#f0ece4] font-bold"
            >
              <span className="font-editorial text-lg text-[#d4a843]">MY FUTURE CAREER</span>
              <ArrowUpRight className="w-5 h-5 text-[#b8860b]" />
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigatePage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-editorial text-lg text-[#f0ece4] border-b border-white/10 pb-3"
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
              className="text-left font-editorial text-base text-[#8a8a8a] hover:text-white"
            >
              Over Mij
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (activePage !== 'portfolio') {
                  onNavigatePage('portfolio');
                }
                setTimeout(() => handleNavClick('#contact'), 100);
              }}
              className="text-left font-editorial text-base text-[#8a8a8a] hover:text-white"
            >
              Contact
            </button>

            {onOpenPhotoManager && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPhotoManager();
                }}
                className="mt-2 p-3 bg-[#111] border border-[#b8860b]/40 rounded text-left flex items-center justify-between text-[#f0ece4] font-mono text-xs uppercase tracking-wider"
              >
                <div className="flex items-center gap-2 text-[#b8860b]">
                  <Camera className="w-4 h-4" />
                  <span>Eigen Foto's Wijzigen</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8a8a8a]" />
              </button>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 text-xs text-[#8a8a8a] font-mono">
            Tycho Somers // Commerciële Economie
          </div>
        </div>
      )}
    </>
  );
};
