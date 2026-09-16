// Central photo management for Tycho Somers' portfolio

export const PHOTO_KEYS = {
  PRIMARY: 'tycho_primary_portrait',
  SECONDARY: 'tycho_secondary_portrait',
};

export function getStoredPrimaryPhoto(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(PHOTO_KEYS.PRIMARY);
}

export function getStoredSecondaryPhoto(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(PHOTO_KEYS.SECONDARY);
}

export function savePrimaryPhoto(dataUrl: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PHOTO_KEYS.PRIMARY, dataUrl);
  window.dispatchEvent(new CustomEvent('tycho_photos_updated', {
    detail: { type: 'primary', dataUrl }
  }));
}

export function saveSecondaryPhoto(dataUrl: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PHOTO_KEYS.SECONDARY, dataUrl);
  window.dispatchEvent(new CustomEvent('tycho_photos_updated', {
    detail: { type: 'secondary', dataUrl }
  }));
}

export function resetPhotos(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(PHOTO_KEYS.PRIMARY);
  localStorage.removeItem(PHOTO_KEYS.SECONDARY);
  window.dispatchEvent(new CustomEvent('tycho_photos_updated', {
    detail: { type: 'reset' }
  }));
}
