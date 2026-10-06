import { ArrowUpRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#18181B] px-5 py-24 text-center sm:px-8 lg:py-32 border-t border-zinc-800">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7342BB]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase mb-6">
          <Zap className="h-3.5 w-3.5 text-[#805AD5]" />
          Atendimento Direto & Sem Fila
        </div>

        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Pronto para resolver suas pendências{' '}
          <span className="bg-gradient-to-r from-[#805AD5] to-[#A78BFA] bg-clip-text text-transparent">
            sem dor de cabeça?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base text-zinc-300 sm:text-lg leading-relaxed">
          Elimine as travas burocráticas hoje. Fale com um especialista da MEV e regularize seu veículo
          ou CNPJ em minutos pelo WhatsApp.
        </p>

        {/* Big Conversion WhatsApp Button */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={getWhatsAppLink('Olá! Gostaria de falar com um especialista da MEV para regularizar uma pendência.')}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-final-whatsapp"
            className="shine-button inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-base font-bold text-zinc-950 shadow-xl shadow-[#25D366]/25 transition-all hover:-translate-y-1 hover:bg-[#22BF5B] hover:shadow-2xl hover:shadow-[#25D366]/40"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Falar com um Especialista no WhatsApp</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        {/* Micro guarantees */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#805AD5]" />
            Processo 100% legal e transparente
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            Sem robôs: atendimento humano
          </span>
        </div>
      </div>
    </section>
  );
}
