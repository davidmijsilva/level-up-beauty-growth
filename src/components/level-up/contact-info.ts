export const WHATSAPP_NUMBER = "351967871181";
export const PHONE_MOBILE = "967 871 181";
export const EMAIL = "saarap08@gmail.com";
export const INSTAGRAM_HANDLE = "_saarapereira_";
export const INSTAGRAM_URL = "https://instagram.com/_saarapereira_";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Sara! Vi a página da Level Up e gostava de saber mais sobre o projeto.",
)}`;

export function whatsappLinkWithMessage(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
