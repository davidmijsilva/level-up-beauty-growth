import { WHATSAPP_LINK } from "./contact-info";

export function Logo() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-w-0 items-center gap-3"
      aria-label="Falar com Sara Pereira no WhatsApp"
    >
      <div className="min-w-0 leading-tight">
        <p className="truncate font-display text-[1.5rem] text-foreground transition-colors group-hover:text-brand">
          Sara Pereira
        </p>
        <p className="label-caps truncate text-[0.9rem] text-brand">Level Up</p>
      </div>
    </a>
  );
}
