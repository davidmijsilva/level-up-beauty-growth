import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_MOBILE,
  WHATSAPP_LINK,
} from "./contact-info";

const WEB3FORMS_KEY = "ef3b2a12-37f6-4420-b1d3-e6dcbde0d3e4";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "Novo contacto — Level Up");

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = (await response.json()) as { success?: boolean };
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand";

  return (
    <section id="contacto" className="bg-brand-tint/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <p className="label-caps text-[0.65rem] text-brand">O próximo passo</p>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
            Vamos conversar sobre o teu lugar na equipa
          </h2>
          <ol className="mt-6 space-y-3 text-base text-muted-foreground">
            <li>1. Falamos e conto-te como funciona, sem compromisso.</li>
            <li>2. Vês o catálogo e experimentas os produtos.</li>
            <li>3. Decides o teu ritmo — e começo a acompanhar-te.</li>
          </ol>
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

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center sm:py-14">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Sparkles className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-medium text-foreground sm:text-3xl">
                O teu primeiro passo está dado
              </h3>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                O 1º passo para o teu futuro já está garantido. Vou entrar em contacto contigo assim que possível para percebermos juntas o melhor caminho para ti.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-brand px-8 text-base font-medium text-brand-foreground shadow-[0_10px_24px_-10px_var(--brand)] transition-transform hover:scale-[1.02]"
              >
                Falar com a Sara
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
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
                disabled={status === "sending"}
                className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-foreground px-7 text-base font-medium text-background transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "sending" ? "A enviar…" : "Enviar mensagem"}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {status === "error"
                  ? "Algo correu mal. Tenta novamente ou fala comigo pelo WhatsApp."
                  : "Irás ser contactada por mim em menos de 24h."}
              </p>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Ao enviar, aceitas a{" "}
                <Link to="/legal" hash="privacidade" className="underline underline-offset-4 hover:text-brand">
                  política de privacidade
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
