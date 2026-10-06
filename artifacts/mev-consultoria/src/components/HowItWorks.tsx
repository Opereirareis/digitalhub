import { motion } from 'framer-motion';
import { Send, Search, CheckCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export function HowItWorks() {
  const passos = [
    {
      numero: '01',
      icon: <Send className="h-6 w-6 text-[#805AD5]" />,
      titulo: 'Você envia a pendência',
      descricao: 'Manda uma mensagem com os dados básicos do veículo ou CNPJ direto pelo WhatsApp.',
    },
    {
      numero: '02',
      icon: <Search className="h-6 w-6 text-[#805AD5]" />,
      titulo: 'A gente faz o diagnóstico',
      descricao: 'Identificamos os travamentos e te passamos a rota exata com clareza e transparência.',
    },
    {
      numero: '03',
      icon: <CheckCheck className="h-6 w-6 text-[#25D366]" />,
      titulo: 'Resolução rápida',
      descricao: 'Cuidamos do trâmite para você receber seu documento regularizado em formato digital.',
    },
  ];

  return (
    <section id="como-funciona" className="relative bg-[#18181B] px-5 py-24 sm:px-8 lg:py-32 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase">
            Passo a Passo
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Como <span className="text-[#805AD5]">Funciona</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Linha do tempo em 3 passos simples para você sair da dúvida e receber tudo pronto sem complicação.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connector line for desktop */}
          <div className="pointer-events-none absolute left-[15%] right-[15%] top-1/2 hidden -translate-y-6 border-t-2 border-dashed border-zinc-800 md:block" />

          {passos.map((passo, index) => (
            <motion.div
              key={passo.numero}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 text-center transition-all duration-300 hover:border-[#805AD5]/50 hover:bg-zinc-900"
            >
              {/* Step counter badge */}
              <div className="mb-4 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-[#A78BFA] bg-[#805AD5]/20 border border-[#805AD5]/30 px-3 py-1 rounded-full">
                  PASSO {passo.numero}
                </span>
              </div>

              {/* Icon circle */}
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-zinc-700 bg-zinc-800/80 shadow-md">
                {passo.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {passo.titulo}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {passo.descricao}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Link below steps */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppLink('Olá! Gostaria de enviar uma pendência para diagnóstico.')}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-how-it-works-whatsapp"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all hover:border-[#805AD5] hover:text-white"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>Enviar dados pelo WhatsApp</span>
            <ArrowRight className="h-4 w-4 text-[#805AD5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
