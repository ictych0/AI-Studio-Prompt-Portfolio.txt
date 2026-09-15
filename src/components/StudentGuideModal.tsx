import React, { useState } from 'react';
import { X, Code, FileText, Image as ImageIcon, PlusCircle, Check, Copy } from 'lucide-react';

interface StudentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentGuideModal: React.FC<StudentGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  const timelineTemplate = `{
  id: "track-05",
  title: "[NIEUWE FASE] Jouw Nieuwe Leerfase",
  phase: "FASE 05 // REFLECTIE",
  period: "Februari 2026",
  badge: "Vervolgstappen",
  attempted: "Beschrijf wat je in deze week hebt geprobeerd.",
  wentWrong: "Wat werkte er niet direct of wat was een struikelblok?",
  breakthrough: "Hoe heb je dit opgelost of wat was je doorbraak?",
  humanRole: "Wat was jouw esthetische of regisserende rol hierin?"
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#080808] border border-white/15 rounded-[4px] shadow-2xl text-[#f0ece4] p-6 sm:p-10">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#b8860b] uppercase block">
              HANDLEIDING // DOCUMENTATIE
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#f0ece4] font-bold">
              Jouw Portfolio Aanpassen in VS Code
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-white/10 rounded-full text-[#8a8a8a] hover:text-white hover:border-[#b8860b] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm font-sans">
          
          <div className="p-4 bg-[#0e0e0e] border border-white/[0.08] rounded text-[#f0ece4]">
            <p className="font-semibold text-[#b8860b] mb-1">
              👋 Welkom! Je hoeft GEEN ingewikkelde code te kennen om teksten en afbeeldingen te wijzigen.
            </p>
            <p className="text-xs text-[#8a8a8a]">
              Alle teksten, projecten, onderzoeken en afbeeldingen staan netjes verzameld in één enkel bestand: <code className="bg-[#141414] px-2 py-0.5 text-[#f0ece4] font-mono border border-white/10 rounded">src/data/portfolioData.ts</code>.
            </p>
          </div>

          {/* Stap 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-[#f0ece4]">
              <FileText className="w-4 h-4 text-[#b8860b]" />
              <span>1. Waar pas ik mijn naam en over mij teksten aan?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed">
              Open in Visual Studio Code het bestand: <code className="text-[#b8860b] font-mono">src/data/portfolioData.ts</code>.
              Helemaal bovenaan vind je <code className="text-[#b8860b] font-mono">PORTFOLIO_PROFILE</code>. Daar kun je <code className="text-white bg-[#141414] px-1.5 py-0.5 rounded border border-white/10">[MIJN NAAM]</code> vervangen door jouw eigen naam (bijv. "Tycho Somers").
            </p>
          </div>

          {/* Stap 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-[#f0ece4]">
              <ImageIcon className="w-4 h-4 text-[#b8860b]" />
              <span>2. Hoe vervang ik de foto's en afbeeldingen?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed">
              Je kunt elke afbeeldings-URL in <code className="text-[#b8860b] font-mono">portfolioData.ts</code> vervangen.
              Je hebt twee mogelijkheden:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5 text-[#8a8a8a]">
              <li><strong>Online link:</strong> Plak een directe afbeeldingslink (bijvoorbeeld van Unsplash of Imgur).</li>
              <li><strong>Eigen bestanden:</strong> Plaats jouw foto's in de map <code className="text-[#b8860b] font-mono">/public/</code> en schrijf in het databestand simpelweg: <code className="text-[#b8860b] font-mono">portraitImage: "/mijn-portret.jpg"</code>.</li>
            </ul>
          </div>

          {/* Stap 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-[#f0ece4]">
              <PlusCircle className="w-4 h-4 text-[#b8860b]" />
              <span>3. Waar pas ik mijn Leerproces & AI Protocollen aan?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed">
              In <code className="text-[#b8860b] font-mono">portfolioData.ts</code> vind je <code className="text-[#b8860b] font-mono">LEARNING_TIMELINE</code> (voor jouw wekelijkse reflecties) en <code className="text-[#b8860b] font-mono">AI_TRANSPARENCY_DATA</code> (voor jouw gebruikte AI tools en prompts). Kopieer onderstaand voorbeeld om een nieuwe leerfase toe te voegen:
            </p>

            <div className="relative">
              <pre className="p-4 bg-[#050505] border border-white/10 text-[#8a8a8a] text-xs font-mono overflow-x-auto max-h-48 rounded">
                {timelineTemplate}
              </pre>
              <button
                onClick={() => handleCopy(timelineTemplate, 'timeline')}
                className="absolute top-3 right-3 px-2.5 py-1 bg-[#141414] text-[#f0ece4] border border-white/10 rounded text-xs flex items-center gap-1 hover:bg-[#b8860b] hover:text-[#050505] transition-colors cursor-pointer"
              >
                {copiedSnippet === 'timeline' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSnippet === 'timeline' ? 'Gekopieerd!' : 'Kopieer Template'}</span>
              </button>
            </div>
          </div>

          {/* Stap 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-[#f0ece4]">
              <FileText className="w-4 h-4 text-[#b8860b]" />
              <span>4. Waar pas ik mijn Onderzoeksverhalen (RS 01 & RS 02) aan?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed">
              Jouw formele minor Research Stories over de <strong className="text-[#f0ece4]">Impact van AI op de Beroepspraktijk</strong> (RS // 01) en je <strong className="text-[#f0ece4]">Droombaan in het AI-Tijdperk</strong> (RS // 02) met bijbehorende acceptatiecriteria en kwaliteitscriteria staan in:
              <br />
              <code className="text-[#b8860b] font-mono bg-[#141414] px-2 py-0.5 rounded border border-white/10 mt-1 inline-block">src/data/researchStoriesData.ts</code>
              <br />
              Hier kun je de bronnen, voor- en nadelen, casussen, prompts en persoonlijke motivatie direct aanpassen.
            </p>
          </div>

          {/* Stap 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-[#f0ece4]">
              <Code className="w-4 h-4 text-[#b8860b]" />
              <span>5. Hoe pas ik de kleuren en stijl aan?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed">
              De esthetiek en kleuren zijn gedefinieerd in <code className="text-[#b8860b] font-mono">src/index.css</code> onder <code className="text-[#b8860b] font-mono">:root</code>. Daar kun je kleurvariabelen zoals <code className="text-[#b8860b] font-mono">--color-accent: #b8860b;</code> aanpassen.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#b8860b] hover:bg-[#d4a843] text-[#050505] font-bold text-xs tracking-wider uppercase rounded-[2px] transition-colors cursor-pointer"
          >
            Begrepen, Sluit Handleiding
          </button>
        </div>

      </div>
    </div>
  );
};
