import { useState, type FormEvent } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_MOBILE,
  WHATSAPP_LINK,
  whatsappLinkWithMessage,
} from "./contact-info";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Olá Sara! Sou ${String(data.get("nome") ?? "")}.`,
      String(data.get("mensagem") ?? ""),
      `Email: ${String(data.get("email") ?? "")}`,
      `Telemóvel: ${String(data.get("telemovel") ?? "")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLinkWithMessage(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand";

  return (
    <section id="contacto" className="bg-brand-tint/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="text-3xl text-foreground sm:text-4xl">
            Queres saber como fazer parte da equipa? Fala comigo.
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-brand px-7 text-base font-medium text-brand-foreground shadow-[0_12px_30px_-12px_var(--brand)] transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            Falar com a Sara pelo WhatsApp
          </a>

          <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
              Zona de atuação: Coimbra
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
              <a className="hover:text-brand" href={`tel:+351${PHONE_MOBILE.replace(/\s/g, "")}`}>
                {PHONE_MOBILE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
              <a className="break-all hover:text-brand" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
              <a className="hover:text-brand" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-foreground sm:col-span-2">
              Nome
              <input name="nome" required placeholder="O teu nome" className={field} />
            </label>
            <label className="block text-sm text-foreground">
              Email
              <input type="email" name="email" required placeholder="email@exemplo.pt" className={field} />
            </label>
            <label className="block text-sm text-foreground">
              Telemóvel
              <input type="tel" name="telemovel" required placeholder="9xx xxx xxx" className={field} />
            </label>
            <label className="block text-sm text-foreground sm:col-span-2">
              Mensagem
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Conta-me um pouco sobre ti"
                className={`${field} resize-none`}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-foreground px-7 text-base font-medium text-background transition-transform hover:scale-[1.01]"
          >
            Enviar mensagem
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {sent
              ? "Mensagem preparada no WhatsApp — falta só carregares em enviar."
               : "Irás ser contactada por mim em menos de 24h."}
          </p>
        </form>
      </div>
    </section>
  );
}
