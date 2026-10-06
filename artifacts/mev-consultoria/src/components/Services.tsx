import { motion } from 'framer-motion';
import { CarFront, ShieldCheck, Building2, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export function Services() {
  const servicos = [
    {
      id: 'crlv',
      icon: <CarFront className="h-8 w-8 text-[#805AD5]" />,
      titulo: 'CRLV e Regularização Veicular',
      descricao: 'Emissão rápida, baixa de débitos, desbloqueio e orientação de transferência.',
      detalhes: [
        'Emissão de CRLV-e atualizado em PDF',
        'Consulta e quitação de multas e IPVA',
        'Desbloqueio de restrições administrativas',
        'Orientação completa para transferência segura',
      ],
      whatsappMsg: 'Olá! Preciso de ajuda com CRLV e regularização do meu veículo.',
      cta: 'Regularizar Veículo',
    },
    {
      id: 'motorista',
      icon: <ShieldCheck className="h-8 w-8 text-[#805AD5]" />,
      titulo: 'Apoio ao Motorista & Entregador',
      descricao: 'Suporte para quem roda no dia a dia e precisa do veículo 100% legalizado para trabalhar.',
      detalhes: [
        'Atendimento ágil para quem não pode perder o dia',
        'Zero dor de cabeça ou risco em fiscalizações e blitz',
        'Apoio específico para motoristas de app e entregadores',
        'Orientações práticas sem jargão burocrático',
      ],
      whatsappMsg: 'Olá! Sou motorista/entregador e preciso regularizar meu meio de trabalho.',
      cta: 'Apoio ao Motorista',
    },
    {
      id: 'mei',
      icon: <Building2 className="h-8 w-8 text-[#805AD5]" />,
      titulo: 'Serviços MEI e CNPJ',
      descricao: 'Abertura, regularização de pendências fiscais, DAS e emissão de notas.',
      detalhes: [
        'Abertura, alteração de dados e baixa de MEI',
        'Regularização e parcelamento de DAS em atraso',
        'Emissão e configuração de notas fiscais (NFS-e)',
        'Certidões negativas e controle fiscal descomplicado',
      ],
      whatsappMsg: 'Olá! Preciso de consultoria para o meu MEI / CNPJ.',
      cta: 'Organizar meu MEI',
    },
  ];

  return (
    <section id="servicos" className="relative bg-[#18181B] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase">
            Soluções MEV
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Nossos <span className="text-[#805AD5]">Serviços</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Cards modulares pensados para quem não pode perder tempo parado em filas ou sistemas travados.
          </p>
        </div>

        {/* 3 Modular Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#805AD5]/60 hover:bg-zinc-900/90 hover:shadow-[0_16px_40px_rgba(128,90,213,0.12)]"
            >
              <div>
                {/* Icon box */}
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[#805AD5]/30 bg-[#805AD5]/10 transition-transform duration-300 group-hover:scale-105">
                  {servico.icon}
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                  {servico.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {servico.descricao}
                </p>

                {/* Feature Bullets */}
                <ul className="mt-6 space-y-2.5 border-t border-zinc-800/80 pt-5">
                  {servico.detalhes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#805AD5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Link */}
              <div className="mt-8 border-t border-zinc-800/80 pt-5">
                <a
                  href={getWhatsAppLink(servico.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-service-${servico.id}`}
                  className="inline-flex w-full items-center justify-between rounded-xl border border-zinc-700/80 bg-zinc-800/40 px-4 py-3 text-sm font-semibold text-white transition-all group-hover:border-[#805AD5]/70 group-hover:bg-[#805AD5]/10 group-hover:text-[#A78BFA]"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    {servico.cta}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
