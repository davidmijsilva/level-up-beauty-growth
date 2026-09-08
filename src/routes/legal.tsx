import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { EMAIL, PHONE_MOBILE } from "@/components/level-up/contact-info";
import { Footer } from "@/components/level-up/Footer";

const title = "Informação legal | Level Up · Sara Pereira";
const description =
  "Política de privacidade, termos e condições e informação sobre cookies da página Level Up de Sara Pereira.";
const url = "https://level-up-beauty-growth.lovable.app/legal";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: LegalPage,
});

const UPDATED = "8 de setembro de 2026";

function Section({
  id,
  eyebrow,
  heading,
  children,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-10">
      <p className="label-caps text-[0.65rem] text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-2xl text-foreground sm:text-3xl">{heading}</h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function LegalPage() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-brand transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          Voltar ao início
        </Link>

        <h1 className="mt-8 text-3xl text-foreground sm:text-4xl">Informação legal</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: {UPDATED}
        </p>

        <nav aria-label="Secções" className="mt-6 flex flex-wrap gap-2">
          {[
            { href: "#privacidade", label: "Privacidade" },
            { href: "#termos", label: "Termos e condições" },
            { href: "#cookies", label: "Cookies" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-12">
          <Section id="privacidade" eyebrow="1" heading="Política de Privacidade">
            <p>
              Esta página é da responsabilidade de Sara Pereira, que trata os dados aqui recolhidos.
              Para qualquer questão sobre os teus dados, podes contactar por{" "}
              <a className="text-brand hover:underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>{" "}
              ou pelo telemóvel {PHONE_MOBILE}.
            </p>
            <p>
              <strong className="text-foreground">Que dados são recolhidos.</strong> Apenas os que
              escreves no formulário de contacto: nome, email, telemóvel e mensagem. Não são
              recolhidos outros dados sobre ti nesta página.
            </p>
            <p>
              <strong className="text-foreground">Para que servem.</strong> Exclusivamente para
              responder ao teu contacto e dar-te a conhecer o projeto. Os dados não são vendidos nem
              cedidos a terceiros para fins comerciais.
            </p>
            <p>
              <strong className="text-foreground">Como são enviados.</strong> O formulário é
              processado por um serviço externo de envio de emails (Web3Forms), que apenas
              reencaminha a mensagem para o email indicado acima.
            </p>
            <p>
              <strong className="text-foreground">Durante quanto tempo.</strong> Os dados são
              conservados apenas o tempo necessário para responder e manter o contacto. Podes pedir
              a eliminação a qualquer momento.
            </p>
            <p>
              <strong className="text-foreground">Os teus direitos.</strong> Nos termos do RGPD,
              tens direito de acesso, correção, eliminação, oposição, limitação e portabilidade dos
              teus dados. Basta pedir por email. Tens também o direito de apresentar reclamação à
              CNPD (Comissão Nacional de Proteção de Dados).
            </p>
          </Section>

          <Section id="termos" eyebrow="2" heading="Termos e Condições">
            <p>
              Esta página tem carácter informativo: apresenta o projeto e permite que manifestes
              interesse em saber mais. Não se vende nada nesta página nem se celebra aqui qualquer
              contrato.
            </p>
            <p>
              Não são feitas promessas de rendimentos. Os resultados de cada pessoa dependem do seu
              próprio trabalho, dedicação e circunstâncias.
            </p>
            <p>
              Os textos, imagens e restantes conteúdos desta página pertencem a Sara Pereira e não
              podem ser copiados ou reutilizados sem autorização.
            </p>
            <p>
              Esta página pode encaminhar para sites de terceiros, que têm regras próprias e estão
              fora do seu controlo. Alguns desses links são links de referência.
            </p>
            <p>
              A esta página aplica-se a lei portuguesa.
            </p>
          </Section>

          <Section id="cookies" eyebrow="3" heading="Cookies">
            <p>
              Esta página não utiliza cookies de estatísticas, de publicidade nem de seguimento.
              São usados apenas os recursos estritamente necessários ao funcionamento do site.
            </p>
            <p>
              Por esse motivo, não é apresentado nenhum pedido de consentimento de cookies. Se algum
              dia forem introduzidas ferramentas de análise ou publicidade, este texto será
              atualizado e o teu consentimento será pedido previamente.
            </p>
          </Section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
