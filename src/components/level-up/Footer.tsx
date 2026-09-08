import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { openCookiePreferences } from "@/lib/consent";
import { CATALOG_LINK, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_MOBILE } from "./contact-info";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-5 py-8 pb-24 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-8 sm:pb-8 sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Level Up · Sara Pereira · Coimbra
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          <a href={`tel:+351${PHONE_MOBILE.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-brand">
            {PHONE_MOBILE}
          </a>
          <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-brand">
            {EMAIL}
          </a>
          <a
            href={CATALOG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand hover:underline"
          >
            Catálogo
          </a>
          <Link to="/legal" className="text-muted-foreground hover:text-brand">
            Informação legal
          </Link>
          <button
            type="button"
            onClick={openCookiePreferences}
            className="text-muted-foreground hover:text-brand"
          >
            Preferências de cookies
          </button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram @${INSTAGRAM_HANDLE}`}
            className="text-brand hover:opacity-80"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
