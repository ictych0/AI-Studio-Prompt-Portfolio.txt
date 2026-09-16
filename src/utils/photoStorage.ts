// Central photo management for Tycho Somers' portfolio
import tychoHeroImg from '../assets/images/tycho-hero.jpg';
import tychoAboutImg from '../assets/images/tycho-about.jpg';

export const PHOTO_KEYS = {
  PRIMARY: 'tycho_primary_portrait',
  SECONDARY: 'tycho_secondary_portrait',
};

export const DEFAULT_PHOTO_PATHS = {
  PRIMARY: tychoHeroImg,
  SECONDARY: tychoAboutImg,
};

export function getStoredPrimaryPhoto(): string | null {
  if (typeof window === 'undefined') return DEFAULT_PHOTO_PATHS.PRIMARY;
  const stored = localStorage.getItem(PHOTO_KEYS.PRIMARY);
  if (stored) return stored;
  return DEFAULT_PHOTO_PATHS.PRIMARY;
}

export function getStoredSecondaryPhoto(): string | null {
  if (typeof window === 'undefined') return DEFAULT_PHOTO_PATHS.SECONDARY;
  const stored = localStorage.getItem(PHOTO_KEYS.SECONDARY);
  if (stored) return stored;
  return DEFAULT_PHOTO_PATHS.SECONDARY;
}

export async function persistPhotoToServer(filename: string, dataUrl: string): Promise<boolean> {
  if (!dataUrl || !dataUrl.startsWith('data:image/')) return false;

  try {
    const res = await fetch('/api/save-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, dataUrl }),
    });
    return res.ok;
  } catch (err) {
    console.warn('[PhotoStorage] Could not persist to server directly:', err);
    return false;
  }
}

export async function syncAllPhotosToServer(): Promise<{ primary: boolean; secondary: boolean }> {
  const primary = typeof window !== 'undefined' ? localStorage.getItem(PHOTO_KEYS.PRIMARY) : null;
  const secondary = typeof window !== 'undefined' ? localStorage.getItem(PHOTO_KEYS.SECONDARY) : null;

  const results = { primary: false, secondary: false };

  if (primary && primary.startsWith('data:image/')) {
    results.primary = await persistPhotoToServer('tycho-hero.jpg', primary);
    // Also save under alternative names
    await persistPhotoToServer('tycho-white-suit.jpg', primary);
    await persistPhotoToServer('Afbeelding 1.jpeg', primary);
  }

  if (secondary && secondary.startsWith('data:image/')) {
    results.secondary = await persistPhotoToServer('tycho-about.jpg', secondary);
    // Also save under alternative names
    await persistPhotoToServer('tycho-lamour-event.jpg', secondary);
    await persistPhotoToServer('Afbeelding.jpeg', secondary);
  }

  return results;
}

export function savePrimaryPhoto(dataUrl: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PHOTO_KEYS.PRIMARY, dataUrl);
  window.dispatchEvent(new CustomEvent('tycho_photos_updated', {
    detail: { type: 'primary', dataUrl }
  }));

  // Auto-persist to server disk in public/images
  if (dataUrl.startsWith('data:image/')) {
    persistPhotoToServer('tycho-hero.jpg', dataUrl);
    persistPhotoToServer('tycho-white-suit.jpg', dataUrl);
    persistPhotoToServer('Afbeelding 1.jpeg', dataUrl);
  }
}

export function saveSecondaryPhoto(dataUrl: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PHOTO_KEYS.SECONDARY, dataUrl);
  window.dispatchEvent(new CustomEvent('tycho_photos_updated', {
    detail: { type: 'secondary', dataUrl }
  }));

  // Auto-persist to server disk in public/images
  if (dataUrl.startsWith('data:image/')) {
    persistPhotoToServer('tycho-about.jpg', dataUrl);
    persistPhotoToServer('tycho-lamour-event.jpg', dataUrl);
    persistPhotoToServer('Afbeelding.jpeg', dataUrl);
  }
}

export function resetPhotos(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(PHOTO_KEYS.PRIMARY);
  localStorage.removeItem(PHOTO_KEYS.SECONDARY);
  window.dispatchEvent(new CustomEvent('tycho_photos_updated', {
    detail: { type: 'reset' }
  }));
}
