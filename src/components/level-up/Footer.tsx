import { Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_MOBILE } from "./contact-info";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-8">
        <Logo />
        <p className="text-sm text-muted-foreground">
          Coimbra · {PHONE_MOBILE} · {EMAIL}
        </p>
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
      <p className="pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Level Up · Sara Pereira
      </p>
    </footer>
  );
}

