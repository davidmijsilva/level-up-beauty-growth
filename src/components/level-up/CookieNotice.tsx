import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "levelup-cookies-ok";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignorar
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-sm">
      <div className="rounded-2xl border border-border bg-card p-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Esta página usa apenas o estritamente necessário ao seu funcionamento — sem cookies de
          publicidade ou seguimento.{" "}
          <Link to="/legal" hash="cookies" className="text-brand underline underline-offset-4">
            Saber mais
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-transform hover:scale-[1.01]"
        >
          Compreendi
        </button>
      </div>
    </div>
  );
}
