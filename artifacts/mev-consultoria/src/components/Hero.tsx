import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Zap, Sparkles, FileText, Check } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export function Hero() {
  const trustPoints = ['Sem filas ou semanas de espera', 'Atendimento 100% online', 'Diagnóstico transparente'];

  return (
    <section
      id="inicio"
      className="grid-paper relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:min-h-[760px] lg:pb-28 lg:pt-48"
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute -right-36 top-24 h-96 w-96 rounded-full bg-[#7342BB]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-36 top-96 h-96 w-96 rounded-full bg-[#805AD5]/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Copy & CTAs */}
        <div className="max-w-2xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#A78BFA]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#805AD5]" />
            <span>Consultoria rápida, sem complicação e direto ao ponto.</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Documentação de veículos e apoio MEI{' '}
            <span className="bg-gradient-to-r from-[#805AD5] to-[#A78BFA] bg-clip-text text-transparent">
              sem dor de cabeça.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl"
          >
            Eliminamos as travas burocráticas para motoristas, entregadores e autônomos resolverem
            pendências em minutos.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <a
              href={getWhatsAppLink('Olá! Gostaria de falar com um especialista para resolver uma pendência.')}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-hero-whatsapp"
              className="shine-button inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-center text-base font-bold text-zinc-950 shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-1 hover:bg-[#22BF5B] hover:shadow-xl hover:shadow-[#25D366]/35"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Falar com um Especialista</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>

            <a
              href="#como-funciona"
              data-testid="link-hero-how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-7 py-4 text-center text-base font-medium text-zinc-200 backdrop-blur transition-all hover:border-[#805AD5]/60 hover:text-white"
            >
              <span>Ver como funciona</span>
              <ArrowRight className="h-4 w-4 text-[#805AD5]" />
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-medium text-zinc-400"
          >
            {trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#25D366]" />
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Visual Mockup Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[440px] lg:ml-auto"
        >
          <div className="float-slow relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* Card header */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#805AD5]/20 text-[#A78BFA]">
                  <Zap className="h-5 w-5 text-[#805AD5]" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">Diagnóstico MEV</p>
                  <p className="text-[11px] text-zinc-400">Varredura digital completa</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </span>
            </div>

            {/* Diagnostic Items */}
            <div className="mt-4 space-y-2.5">
              <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#18181B]/80 px-4 py-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-[#805AD5]" />
                  <span className="text-sm font-medium text-zinc-200">Emissão CRLV-e</span>
                </div>
                <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                  Liberado em PDF
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#18181B]/80 px-4 py-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-[#805AD5]" />
                  <span className="text-sm font-medium text-zinc-200">Débitos & IPVA</span>
                </div>
                <span className="rounded-md bg-[#805AD5]/15 px-2 py-0.5 text-[11px] font-semibold text-[#A78BFA]">
                  Rota Identificada
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-[#18181B]/80 px-4 py-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#805AD5]" />
                  <span className="text-sm font-medium text-zinc-200">Regularização MEI</span>
                </div>
                <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                  Pronto p/ rodar
                </span>
              </div>
            </div>

            {/* Micro-callout inside card */}
            <div className="mt-4 rounded-xl border border-[#805AD5]/25 bg-[#805AD5]/10 p-3.5 text-xs leading-relaxed text-zinc-300">
              <p className="font-semibold text-white">Direto no WhatsApp em minutos:</p>
              <p className="mt-1 text-zinc-400">
                Você envia os dados, a gente cuida da burocracia e manda o documento pronto.
              </p>
            </div>

            {/* Floating WhatsApp pill */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 shadow-xl">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-zinc-950 font-bold">
                <MessageCircle size={16} />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-400">Suporte Dedicado</p>
                <p className="text-xs font-bold text-white">Humano e transparente</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
