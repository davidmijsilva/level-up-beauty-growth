import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { OPEN_PREFERENCES_EVENT, readConsent, saveConsent } from "@/lib/consent";
import { initTrackingGate } from "@/lib/tracking";

type View = "hidden" | "banner" | "preferences";

export function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const cleanup = initTrackingGate();
    const stored = readConsent();
    if (!stored) {
      setView("banner");
    } else {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    }
    const open = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setView("preferences");
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => {
      cleanup();
      window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
    };
  }, []);

  useEffect(() => {
    if (view !== "banner" || !bannerRef.current) return;
    const measure = () => {
      const height = bannerRef.current?.offsetHeight ?? 0;
      setBannerHeight(height);
      if (height > 0) {
        document.documentElement.style.setProperty("--cookie-banner-height", `${height}px`);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      document.documentElement.style.removeProperty("--cookie-banner-height");
    };
  }, [view]);

  const decide = useCallback((choice: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setAnalytics(choice.analytics);
    setMarketing(choice.marketing);
    setView("hidden");
  }, []);

  if (view === "hidden") return null;

  if (view === "preferences") {
    return (
      <div className="fixed inset-0 z-[70] flex items-end justify-center bg-foreground/40 p-3 backdrop-blur-sm sm:items-center">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-prefs-title"
          className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
        >
          <h2 id="cookie-prefs-title" className="text-xl text-foreground">
            Preferências de cookies
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Escolhe que cookies aceitas. Podes alterar esta decisão a qualquer momento no rodapé da
            página.
          </p>

          <div className="mt-5 space-y-3">
            <CategoryRow
              title="Estritamente necessários"
              description="Garantem o funcionamento básico da página e o envio do formulário de contacto. Não podem ser desativados."
              checked
              disabled
            />
            <CategoryRow
              title="Estatísticas"
              description="Ajudam a perceber como a página é utilizada, de forma agregada."
              checked={analytics}
              onChange={setAnalytics}
            />
            <CategoryRow
              title="Marketing e afiliação"
              description="Permitem medir cliques em links de afiliação e mostrar conteúdos relevantes. Podem envolver cookies de terceiros."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => decide({ analytics, marketing })}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-transform hover:scale-[1.01]"
            >
              Guardar preferências
            </button>
            <button
              type="button"
              onClick={() => decide({ analytics: false, marketing: false })}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Rejeitar não essenciais
            </button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            <Link to="/legal" hash="cookies" className="text-brand underline underline-offset-4">
              Política de privacidade e cookies
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={bannerRef}
        role="dialog"
        aria-live="polite"
        aria-label="Consentimento de cookies"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-border bg-card/95 px-4 py-4 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md sm:bottom-6 sm:left-1/2 sm:right-auto sm:w-[min(100%-3rem,64rem)] sm:-translate-x-1/2"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Usamos cookies estritamente necessários ao funcionamento da página e, com o teu
            consentimento, cookies de estatísticas, marketing e links de afiliação. Nada disso é
            ativado antes de escolheres.{" "}
            <Link to="/legal" hash="cookies" className="text-brand underline underline-offset-4">
              Política de privacidade e cookies
            </Link>
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:items-end">
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => decide({ analytics: true, marketing: true })}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-transform hover:scale-[1.01]"
              >
                Aceitar todos
              </button>
              <button
                type="button"
                onClick={() => decide({ analytics: false, marketing: false })}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                Rejeitar não essenciais
              </button>
            </div>
            <button
              type="button"
              onClick={() => setView("preferences")}
              className="self-start text-xs text-muted-foreground underline underline-offset-4 hover:text-brand sm:self-auto"
            >
              Gerir preferências
            </button>
          </div>
        </div>
      </div>
      {bannerHeight > 0 && (
        <div
          aria-hidden="true"
          style={{ height: bannerHeight + 16 }}
          className="pointer-events-none block"
        />
      )}
    </>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start gap-3 rounded-2xl border border-border p-4 ${
        disabled ? "opacity-70" : "cursor-pointer hover:border-brand"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-4 w-4 accent-[var(--brand,#d98aa8)]"
      />
      <span>
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
          {description}
        </span>
      </span>
    </label>
  );
}
