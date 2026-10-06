export const WHATSAPP_URL = 'https://wa.me/message/ESJRV63FECTAD1';

export function getWhatsAppLink(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const SITE_INFO = {
  name: 'MEV Consultoria Digital',
  email: 'contato@mevconsultoria.com.br',
  hours: 'Segunda a Sexta, das 9h às 18h',
  instagram: 'https://www.instagram.com/mevconsultoriadigital/',
  facebook: 'https://www.facebook.com/mevconsultoriadigital/',
};
