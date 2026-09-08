export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = ConsentCategories & {
  version: number;
  date: string;
};

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "levelup-consent";
export const CONSENT_CHANGED_EVENT = "levelup:consent-changed";
export const OPEN_PREFERENCES_EVENT = "levelup:open-cookie-preferences";

export const DENIED: ConsentCategories = { necessary: true, analytics: false, marketing: false };

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed?.version !== CONSENT_VERSION) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      version: CONSENT_VERSION,
      date: parsed.date,
    };
  } catch {
    return null;
  }
}

export function saveConsent(choice: Omit<ConsentCategories, "necessary">): StoredConsent {
  const value: StoredConsent = {
    necessary: true,
    analytics: Boolean(choice.analytics),
    marketing: Boolean(choice.marketing),
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // armazenamento indisponível — a escolha vale só para esta visita
  }
  window.dispatchEvent(new CustomEvent<StoredConsent>(CONSENT_CHANGED_EVENT, { detail: value }));
  return value;
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
