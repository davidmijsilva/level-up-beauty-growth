import { ExternalLink, MessageCircle } from "lucide-react";
import { CATALOG_LINK, WHATSAPP_LINK } from "./contact-info";

export function CatalogCta() {
  return (
    <section className="bg-brand-tint/60">
      <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <p className="label-caps text-[0.65rem] text-brand">Sem compromisso</p>
        <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
          Queres espreitar antes de decidir?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Cria a tua conta de cliente totalmente sem compromisso e conhece o nosso catálogo
          completo.
        </p>
        <a
          href={CATALOG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-brand px-8 text-base font-medium text-brand-foreground shadow-[0_12px_30px_-12px_var(--brand)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
        >
          Criar Conta e Ver Catálogo
          <ExternalLink className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </a>
        <p className="mt-5 text-sm text-muted-foreground">
          Gratuito, sem compromisso e com as melhores condições de compra desde o primeiro dia.
        </p>
        <p className="mt-6 text-base text-foreground">
          Já sabes que queres mais do que comprar?{" "}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-brand underline underline-offset-4"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            Quero fazer parte da equipa
          </a>
        </p>
      </div>
    </section>
  );
}
