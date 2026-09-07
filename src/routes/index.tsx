import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/level-up/Hero";
import { Pillars } from "@/components/level-up/Pillars";
import { Portfolio } from "@/components/level-up/Portfolio";
import { Business } from "@/components/level-up/Business";
import { DayInLife } from "@/components/level-up/DayInLife";
import { Faq } from "@/components/level-up/Faq";
import { Workspace } from "@/components/level-up/Workspace";
import { Testimonials } from "@/components/level-up/Testimonials";
import { ContactSection } from "@/components/level-up/ContactSection";
import { Footer } from "@/components/level-up/Footer";
import { WhatsAppFloat } from "@/components/level-up/WhatsAppFloat";

const title = "Level Up | Empreendedorismo em beleza e perfumaria com Sara Pereira";
const description =
  "Junta-te à equipa Level Up: um projeto de empreendedorismo flexível em cosmética, beleza e perfumaria, com acompanhamento próximo e sem experiência necessária.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main className="bg-background text-foreground">
        <Hero />
        <Pillars />
        <Workspace />
        <Testimonials />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}

