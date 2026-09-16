import React, { useState, useRef, useEffect } from 'react';
import { Upload, Camera, Check } from 'lucide-react';
import { savePrimaryPhoto, saveSecondaryPhoto } from '../utils/photoStorage';

interface InteractivePortraitFrameProps {
  imageSrc?: string | null;
  target: 'primary' | 'secondary';
  label: string;
  subLabel?: string;
  aspectRatioClass?: string;
  className?: string;
  onPhotoUpdated?: (dataUrl: string) => void;
}

export const InteractivePortraitFrame: React.FC<InteractivePortraitFrameProps> = ({
  imageSrc,
  target,
  label,
  subLabel = "Klik of sleep je bestand hierheen",
  aspectRatioClass = "aspect-[3/4]",
  className = "",
  onPhotoUpdated,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImgError(false);
  }, [imageSrc]);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        if (target === 'primary') {
          savePrimaryPhoto(dataUrl);
        } else {
          saveSecondaryPhoto(dataUrl);
        }
        setImgError(false);
        setJustUploaded(true);
        onPhotoUpdated?.(dataUrl);
        setTimeout(() => setJustUploaded(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const hasValidImage = !!imageSrc && !imgError;

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`relative ${aspectRatioClass} w-full rounded-[3px] overflow-hidden cursor-pointer transition-all duration-300 group select-none ${
        isDragging
          ? 'border-2 border-[#b8860b] shadow-[0_0_30px_rgba(184,134,11,0.4)] scale-[1.01]'
          : 'border border-white/[0.12] hover:border-[#b8860b]/70 shadow-2xl'
      } ${className}`}
      title="Klik om jouw originele foto te uploaden of te wijzigen"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {hasValidImage ? (
        <>
          {/* Exact, unfiltered original photo */}
          <img
            src={imageSrc}
            alt={label}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Subtle bottom vignette to protect typography/badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Hover Edit Overlay */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <div className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#b8860b]/50 rounded text-[10px] font-mono text-[#f0ece4] flex items-center gap-1.5 shadow-lg">
              <Camera className="w-3 h-3 text-[#b8860b]" />
              <span>Foto wijzigen</span>
            </div>
          </div>
        </>
      ) : (
        /* Stylish Editorial Empty / Upload State */
        <div className="w-full h-full bg-[#0c0c0c] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-white/10 group-hover:border-[#b8860b]/50 transition-colors">
          <div className="w-14 h-14 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#b8860b] group-hover:scale-110 transition-all">
            <Upload className="w-6 h-6 text-[#b8860b]" />
          </div>

          <span className="font-editorial text-lg text-[#f0ece4] font-bold block mb-1">
            {label}
          </span>
          <span className="text-[11px] font-mono text-[#8a8a8a] max-w-[200px] leading-relaxed block mb-4">
            {subLabel}
          </span>

          <div className="px-4 py-2 bg-[#b8860b] hover:bg-[#d4a843] text-black text-[11px] font-mono font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5" />
            <span>Selecteer Foto</span>
          </div>
        </div>
      )}

      {/* Success indicator on upload */}
      {justUploaded && (
        <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="px-4 py-2 bg-emerald-950/90 border border-emerald-500 rounded text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Jouw originele foto geplaatst!</span>
          </div>
        </div>
      )}
    </div>
  );
};
