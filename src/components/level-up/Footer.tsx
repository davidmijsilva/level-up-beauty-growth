import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { CATALOG_LINK, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_MOBILE } from "./contact-info";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <Logo />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram @${INSTAGRAM_HANDLE}`}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-brand transition-colors hover:bg-brand-tint"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
        <div className="text-center sm:text-right">
          <a
            href={CATALOG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand underline underline-offset-4"
          >
            Criar conta e ver catálogo
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Coimbra · {PHONE_MOBILE} · {EMAIL}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 px-5 pb-28 sm:pb-10">
        <Link
          to="/legal"
          className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:border-brand hover:text-brand"
        >
          Informação legal
        </Link>
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Level Up · Sara Pereira
        </p>
      </div>
    </footer>
  );
}

