import {
  CONSENT_CHANGED_EVENT,
  DENIED,
  readConsent,
  type ConsentCategories,
  type StoredConsent,
} from "./consent";

/**
 * Scripts de rastreio / marketing / afiliação.
 * Só são injetados DEPOIS de consentimento explícito na categoria correspondente.
 * Enquanto a lista estiver vazia, nada é carregado.
 */
export type TrackingScript = {
  id: string;
  category: "analytics" | "marketing";
  src?: string;
  inline?: string;
  attributes?: Record<string, string>;
};

export const TRACKING_SCRIPTS: TrackingScript[] = [];

function currentConsent(): ConsentCategories {
  return readConsent() ?? DENIED;
}

function injectScript(script: TrackingScript) {
  if (document.getElementById(script.id)) return;
  const el = document.createElement("script");
  el.id = script.id;
  el.async = true;
  if (script.src) el.src = script.src;
  if (script.inline) el.textContent = script.inline;
  for (const [key, value] of Object.entries(script.attributes ?? {})) {
    el.setAttribute(key, value);
  }
  document.head.appendChild(el);
}

function removeScript(script: TrackingScript) {
  document.getElementById(script.id)?.remove();
}

export function applyConsentToScripts(consent: ConsentCategories = currentConsent()) {
  if (typeof document === "undefined") return;
  for (const script of TRACKING_SCRIPTS) {
    if (consent[script.category]) injectScript(script);
    else removeScript(script);
  }
}

/** Liga o carregamento de scripts ao consentimento guardado. Devolve a função de limpeza. */
export function initTrackingGate() {
  if (typeof window === "undefined") return () => {};
  applyConsentToScripts();
  const handler = (event: Event) => {
    const detail = (event as CustomEvent<StoredConsent>).detail;
    applyConsentToScripts(detail ?? currentConsent());
  };
  window.addEventListener(CONSENT_CHANGED_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handler);
}
