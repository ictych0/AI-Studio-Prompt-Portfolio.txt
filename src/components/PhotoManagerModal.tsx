import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle2, RotateCcw, Image as ImageIcon, Save, ExternalLink } from 'lucide-react';
import {
  getStoredPrimaryPhoto,
  getStoredSecondaryPhoto,
  savePrimaryPhoto,
  saveSecondaryPhoto,
  resetPhotos,
  syncAllPhotosToServer
} from '../utils/photoStorage';

interface PhotoManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdatePhotos: (primary: string, secondary: string) => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerProps> = ({
  isOpen,
  onClose,
  onUpdatePhotos,
}) => {
  const [primaryUrl, setPrimaryUrl] = useState<string | null>(() => getStoredPrimaryPhoto());
  const [secondaryUrl, setSecondaryUrl] = useState<string | null>(() => getStoredSecondaryPhoto());
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [isSavingPermanent, setIsSavingPermanent] = useState(false);
  const [permanentSuccess, setPermanentSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPrimaryUrl(getStoredPrimaryPhoto());
      setSecondaryUrl(getStoredSecondaryPhoto());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, target: 'primary' | 'secondary') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const result = event.target?.result as string;
      if (result) {
        if (target === 'primary') {
          setPrimaryUrl(result);
          savePrimaryPhoto(result);
          onUpdatePhotos(result, secondaryUrl || '');
        } else {
          setSecondaryUrl(result);
          saveSecondaryPhoto(result);
          onUpdatePhotos(primaryUrl || '', result);
        }
        setStatusMsg(`✓ Foto succesvol ingeladen en opgeslagen!`);
        setTimeout(() => setStatusMsg(''), 4000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSavePermanently = async () => {
    setIsSavingPermanent(true);
    const res = await syncAllPhotosToServer();
    setIsSavingPermanent(false);
    setPermanentSuccess(true);
    setStatusMsg(`✓ Succes! Beide foto's zijn nu als vaste bestanden in /public/images/ opgeslagen voor Vercel & productie!`);
    setTimeout(() => setStatusMsg(''), 7000);
  };

  const handleClear = () => {
    resetPhotos();
    setPrimaryUrl(null);
    setSecondaryUrl(null);
    onUpdatePhotos('', '');
    setStatusMsg('Foto selectie gewist');
    setTimeout(() => setStatusMsg(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-lg p-6 sm:p-8 shadow-2xl text-[#f0ece4] max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#b8860b] block mb-1">
              Directe Foto Inlader // Geen AI Generatie
            </span>
            <h2 className="font-editorial text-2xl font-bold text-white">
              Plaats Jouw Originele Foto's
            </h2>
            <p className="text-xs text-[#8a8a8a] mt-1 max-w-lg">
              Kies hier direct jouw originele bestanden (<strong>Afbeelding 1.jpeg</strong> en <strong>Afbeelding.jpeg</strong>). De foto's worden <strong>100% onbewerkt en in volle resolutie</strong> op de site geplaatst.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8a8a8a] hover:text-white border border-white/10 rounded bg-[#111] hover:bg-[#1a1a1a] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {statusMsg && (
          <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-500/40 rounded flex items-center gap-2 text-xs text-emerald-300 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{statusMsg}</span>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Primary Photo Slot (Hero) */}
          <div className="p-4 rounded border border-white/[0.08] bg-[#111] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#b8860b] font-bold">
                  1. Hoofdfoto (Hero)
                </span>
                <span className="text-[10px] text-[#666] font-mono">Afbeelding 1.jpeg</span>
              </div>
              <p className="text-[11px] text-[#8a8a8a] mb-3">
                Tycho in linnen pak bij de entree ('Sales Builds Freedom').
              </p>

              <div className="relative aspect-[3/4] w-full rounded overflow-hidden border border-white/10 mb-4 bg-black flex items-center justify-center">
                {primaryUrl ? (
                  <img
                    src={primaryUrl}
                    alt="Hoofdfoto Tycho"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <ImageIcon className="w-8 h-8 text-white/20 mx-auto mb-2" />
                    <span className="text-[10px] font-mono text-[#666] block">Nog geen foto geselecteerd</span>
                  </div>
                )}
              </div>
            </div>

            <label className="w-full py-2.5 px-4 rounded bg-[#b8860b] hover:bg-[#d4a843] text-black text-xs font-bold font-mono uppercase tracking-wider text-center cursor-pointer flex items-center justify-center gap-2 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Selecteer Afbeelding 1.jpeg</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 'primary')}
              />
            </label>
          </div>

          {/* Secondary Photo Slot (About & Career) */}
          <div className="p-4 rounded border border-white/[0.08] bg-[#111] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#b8860b] font-bold">
                  2. Tweede Foto (Over Mij)
                </span>
                <span className="text-[10px] text-[#666] font-mono">Afbeelding.jpeg</span>
              </div>
              <p className="text-[11px] text-[#8a8a8a] mb-3">
                Tycho bij 'L'Amour Paris' met donkere trui.
              </p>

              <div className="relative aspect-[3/4] w-full rounded overflow-hidden border border-white/10 mb-4 bg-black flex items-center justify-center">
                {secondaryUrl ? (
                  <img
                    src={secondaryUrl}
                    alt="Tweede foto Tycho"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <ImageIcon className="w-8 h-8 text-white/20 mx-auto mb-2" />
                    <span className="text-[10px] font-mono text-[#666] block">Nog geen foto geselecteerd</span>
                  </div>
                )}
              </div>
            </div>

            <label className="w-full py-2.5 px-4 rounded bg-[#b8860b] hover:bg-[#d4a843] text-black text-xs font-bold font-mono uppercase tracking-wider text-center cursor-pointer flex items-center justify-center gap-2 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Selecteer Afbeelding.jpeg</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 'secondary')}
              />
            </label>
          </div>
        </div>

        {/* Vercel & Deployment Permanent Export Section */}
        <div className="mt-6 p-4 rounded bg-[#141414] border border-[#b8860b]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#f0ece4] flex items-center gap-1.5 font-mono">
              <Save className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>Vercel / Permanente Export</span>
            </span>
            <p className="text-[11px] text-[#8a8a8a] mt-0.5 max-w-md">
              Klik hieronder om de geüploade foto's direct als fysieke bestanden in <code className="text-[#b8860b]">/public/images/</code> op te slaan. Zodra je daarna naar Vercel deployt, blijven de foto's altijd permanent zichtbaar voor iedereen.
            </p>
          </div>

          <button
            onClick={handleSavePermanently}
            disabled={isSavingPermanent || (!primaryUrl && !secondaryUrl)}
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 disabled:pointer-events-none text-white text-xs font-bold font-mono uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg whitespace-nowrap"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{isSavingPermanent ? 'Opslaan...' : 'Vastleggen voor Vercel'}</span>
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <button
            onClick={handleClear}
            className="text-[#8a8a8a] hover:text-white flex items-center gap-1.5 font-mono cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Foto's wissen</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Klaar
          </button>
        </div>
      </div>
    </div>
  );
};
