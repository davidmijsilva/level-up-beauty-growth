import { MessageCircle, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import saraMostruario from "@/assets/sara-mostruario.png.asset.json";
import { WHATSAPP_LINK } from "./contact-info";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-brand-tint blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
        <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Logo />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="label-caps hidden rounded-full border border-brand-soft px-5 py-2.5 text-[0.65rem] text-brand transition-colors hover:bg-brand-tint sm:inline-block"
          >
            Falar comigo
          </a>
        </nav>

        <div className="grid items-center gap-10 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0">
            <p className="label-caps flex items-center gap-2 text-[0.65rem] text-brand">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
              Cosmética · Beleza · Perfumaria
            </p>
            <h1 className="mt-5 text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
              Level Up: o teu próximo nível começa quando decides explorar{" "}
              <span className="text-brand">novas possibilidades.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Junta-te a um projeto de empreendedorismo digital no mundo da cosmética e
              perfumaria. Não precisas de experiência para começar. Cresce ao teu ritmo com o
              apoio de uma comunidade incrível.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-brand px-7 text-[0.95rem] font-medium whitespace-nowrap text-brand-foreground shadow-[0_12px_30px_-12px_var(--brand)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                Quero saber mais pelo WhatsApp
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-border px-7 text-base text-foreground transition-colors hover:bg-brand-tint"
              >
                Deixar mensagem
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-6 bottom-0 top-8 rounded-[2.5rem] bg-brand-tint" aria-hidden="true" />
            <img
              src={saraMostruario.url}
              alt="Sara Pereira a sorrir enquanto mostra um mostruário de perfumes da equipa Level Up"
              className="relative mx-auto w-full max-w-md rounded-[2.5rem] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
