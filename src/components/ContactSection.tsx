import React, { useState, useRef } from 'react';
import { Mail, Send, ArrowUp, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenGuide?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenGuide }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Minor Futureproof met AI — Samenwerking',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'Minor Futureproof met AI — Samenwerking', message: '' });
      setIsSubmitted(false);
    }, 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative pt-14 sm:pt-20 pb-12 px-6 sm:px-12 lg:px-20 bg-[#050505] text-[#f0ece4] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto space-y-12">
        
        {/* Section Header with Kinetic Typography */}
        <div>
          <div className="section-label mb-2">
            <span>Contact & Verbinding</span>
          </div>
          
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0ece4] leading-[1.02]">
            Laten We Een
          </h2>
          
          <motion.div
            style={{ x: headingX }}
            className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight stroked-text flex items-center gap-4 sm:gap-6 mt-1 will-change-transform"
          >
            <span className="w-8 sm:w-16 h-[1px] bg-[#b8860b] shrink-0" />
            <span>dialoog starten</span>
          </motion.div>
        </div>

        {/* 2-Column Open Form & Colophon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start border-t border-white/[0.08] pt-8">
          
          {/* Left: Sleek Open Form in Dutch */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
              <span className="text-xs font-mono tracking-[0.2em] text-[#b8860b] uppercase">
                BERICHT VERSTUREN
              </span>
              <span className="text-[10px] font-mono text-[#555] uppercase tracking-wider">
                RESPONS BINNEN 48 UUR
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="font-editorial text-3xl text-[#f0ece4] font-bold">
                  Dank voor je bericht
                </h3>
                <p className="text-sm text-[#8a8a8a] font-light max-w-md mx-auto">
                  Je bericht is succesvol ontvangen. Ik neem spoedig contact met je op voor verdere dialoog.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono tracking-[0.2em] text-[#8a8a8a] uppercase">
                      NAAM *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex van der Meer"
                      className="w-full py-3 bg-transparent border-b border-white/20 focus:border-[#b8860b] text-[#f0ece4] placeholder-white/20 focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono tracking-[0.2em] text-[#8a8a8a] uppercase">
                      E-MAILADRES *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="naam@organisatie.nl"
                      className="w-full py-3 bg-transparent border-b border-white/20 focus:border-[#b8860b] text-[#f0ece4] placeholder-white/20 focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono tracking-[0.2em] text-[#8a8a8a] uppercase">
                    ONDERWERP
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full py-3 bg-transparent border-b border-white/20 focus:border-[#b8860b] text-[#f0ece4] placeholder-white/20 focus:outline-none text-sm transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono tracking-[0.2em] text-[#8a8a8a] uppercase">
                    BERICHT *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Deel je vraag, feedback of voorstel..."
                    className="w-full py-3 bg-transparent border-b border-white/20 focus:border-[#b8860b] text-[#f0ece4] placeholder-white/20 focus:outline-none text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-[#b8860b] hover:bg-[#d4a843] text-[#050505] font-bold text-xs uppercase tracking-[0.2em] rounded-[2px] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[#b8860b]/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Verstuur Bericht</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Open Editorial Colophon & Direct Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-[#b8860b] uppercase block mb-2">
                COLOFON // ACADEMISCH DOSSIER
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#f0ece4] font-bold">
                {PORTFOLIO_PROFILE.name}
              </h3>
              <p className="font-serif-editorial italic text-lg text-[#8a8a8a] mt-1">
                {PORTFOLIO_PROFILE.tagline}
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono border-t border-white/[0.08] pt-6">
              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-[#555] uppercase">Opleiding</span>
                <span className="text-[#f0ece4] text-right">{PORTFOLIO_PROFILE.studyProgramme}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-[#555] uppercase">Minor</span>
                <span className="text-[#f0ece4]">{PORTFOLIO_PROFILE.minorName}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-[#555] uppercase">E-mail</span>
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.contactEmail}`}
                  className="text-[#b8860b] hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3" />
                  <span>{PORTFOLIO_PROFILE.contactEmail}</span>
                </a>
              </div>
            </div>

            {/* Social Pill Buttons */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#555] uppercase block">
                VERBINDING & PLATFORMS
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_PROFILE.socials.linkedin && (
                  <a
                    href={PORTFOLIO_PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white/10 hover:border-[#b8860b] text-[#8a8a8a] hover:text-white font-mono text-xs tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {PORTFOLIO_PROFILE.socials.instagram && (
                  <a
                    href={PORTFOLIO_PROFILE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white/10 hover:border-[#b8860b] text-[#8a8a8a] hover:text-white font-mono text-xs tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {PORTFOLIO_PROFILE.socials.github && (
                  <a
                    href={PORTFOLIO_PROFILE.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white/10 hover:border-[#b8860b] text-[#8a8a8a] hover:text-white font-mono text-xs tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Student Guide Pill */}
            {onOpenGuide && (
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8a8a8a]">
                  Zelf projecten & teksten bewerken:
                </span>
                <button
                  onClick={onOpenGuide}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#b8860b] hover:text-[#050505] text-[#f0ece4] border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Handleiding
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Bottom Bar: Back to Top & Monolithic Watermark */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#555] font-mono">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_PROFILE.name}. Portfolio Minor Futureproof met AI.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#8a8a8a] hover:text-[#b8860b] transition-colors cursor-pointer text-xs uppercase tracking-widest"
          >
            <span>NAAR BOVEN</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
