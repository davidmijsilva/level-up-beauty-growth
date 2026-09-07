import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./contact-info";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} aria-hidden="true" />
    </a>
  );
}
