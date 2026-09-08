import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/level-up/Hero";
import { Pillars } from "@/components/level-up/Pillars";
import { Portfolio } from "@/components/level-up/Portfolio";
import { Business } from "@/components/level-up/Business";
import { DayInLife } from "@/components/level-up/DayInLife";
import { Faq } from "@/components/level-up/Faq";
import { Workspace } from "@/components/level-up/Workspace";
import { Community } from "@/components/level-up/Community";
import { CatalogCta } from "@/components/level-up/CatalogCta";
import { Testimonials } from "@/components/level-up/Testimonials";
import { ContactSection } from "@/components/level-up/ContactSection";
import { Footer } from "@/components/level-up/Footer";
import { WhatsAppFloat } from "@/components/level-up/WhatsAppFloat";
import { CookieNotice } from "@/components/level-up/CookieNotice";

const title = "Level Up | Empreendedorismo em beleza e perfumaria com Sara Pereira";
const description =
  "Junta-te à equipa Level Up: um projeto de empreendedorismo flexível em cosmética, beleza e perfumaria, com acompanhamento próximo e sem experiência necessária.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://level-up-beauty-growth.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://level-up-beauty-growth.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main className="bg-background text-foreground">
        <Hero />
        <Pillars />
        <Portfolio />
        <Business />
        <DayInLife />
        <Workspace />
        <Community />
        <Testimonials />
        <Faq />
        <CatalogCta />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppFloat />
      <CookieNotice />
    </>
  );
}

