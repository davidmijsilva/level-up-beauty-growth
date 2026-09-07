import { WHATSAPP_LINK } from "./contact-info";

export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const isLarge = size === "large";
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-w-0 items-center gap-3"
      aria-label="Falar com Sara Pereira no WhatsApp"
    >
      <div className="min-w-0 leading-tight">
        <p
          className={`truncate font-display text-foreground transition-colors group-hover:text-brand ${isLarge ? "text-[1.5rem]" : "text-base"}`}
        >
          Sara Pereira
        </p>
        <p
          className={`label-caps truncate text-brand ${isLarge ? "text-[0.9rem]" : "text-[0.6rem]"}`}
        >
          Level Up
        </p>
      </div>
    </a>
  );
}
