import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink('Olá! Gostaria de falar com um especialista da MEV.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com especialista no WhatsApp"
      data-testid="link-floating-whatsapp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3.5 text-zinc-950 font-bold shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#22BF5B] hover:shadow-[0_12px_36px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#18181B]"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-950 opacity-20" />
        <MessageCircle className="h-5 w-5 fill-zinc-950 text-zinc-950" />
      </span>
      <span className="hidden text-sm font-bold sm:inline">Falar com Especialista</span>
    </a>
  );
}
