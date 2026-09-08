import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { OPEN_PREFERENCES_EVENT, readConsent, saveConsent } from "@/lib/consent";
import { initTrackingGate } from "@/lib/tracking";

type View = "hidden" | "banner" | "preferences";

export function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

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

  const decide = useCallback((choice: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setAnalytics(choice.analytics);
    setMarketing(choice.marketing);
    setView("hidden");
  }, []);

  if (view === "hidden") return null;

  if (view === "preferences") {
    return (
      <div className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/40 p-3 backdrop-blur-sm sm:items-center">
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
    <div className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-md">
      <div
        role="dialog"
        aria-live="polite"
        aria-label="Consentimento de cookies"
        className="rounded-2xl border border-border bg-card p-5 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]"
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          Usamos cookies estritamente necessários ao funcionamento da página e, com o teu
          consentimento, cookies de estatísticas, marketing e links de afiliação. Nada disso é
          ativado antes de escolheres.{" "}
          <Link to="/legal" hash="cookies" className="text-brand underline underline-offset-4">
            Política de privacidade e cookies
          </Link>
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide({ analytics: true, marketing: true })}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-transform hover:scale-[1.01]"
          >
            Aceitar todos
          </button>
          <button
            type="button"
            onClick={() => decide({ analytics: false, marketing: false })}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            Rejeitar não essenciais
          </button>
        </div>

        <button
          type="button"
          onClick={() => setView("preferences")}
          className="mt-3 text-xs text-muted-foreground underline underline-offset-4 hover:text-brand"
        >
          Gerir preferências
        </button>
      </div>
    </div>
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
