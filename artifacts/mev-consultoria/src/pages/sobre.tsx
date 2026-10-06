import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, ShieldCheck, CheckCircle2, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { getWhatsAppLink } from '@/lib/constants';

export default function SobrePage() {
  useEffect(() => {
    document.title = 'Quem Somos | MEV Consultoria Digital';
    window.scrollTo(0, 0);
  }, []);

  const metodos = [
    {
      icon: <Search className="h-7 w-7 text-[#805AD5]" />,
      titulo: 'Investigação Completa',
      descricao:
        'Se houver um bloqueio (Renainf, administrativo ou gravame), não apenas avisamos: nós identificamos a origem e passamos a rota exata de regularização.',
    },
    {
      icon: <Compass className="h-7 w-7 text-[#805AD5]" />,
      titulo: 'Rota sem Complicação',
      descricao:
        'Eliminamos as voltas desnecessárias do sistema público. Resolvemos tudo o que for possível 100% online e orientamos com precisão.',
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-[#25D366]" />,
      titulo: 'Transparência Radical',
      descricao:
        'Explicamos o que está acontecendo e cada centavo do que precisa ser pago. Preferimos a sua confiança duradoura a qualquer promessa vazia.',
    },
  ];

  const pilares = [
    {
      titulo: 'Zero Burocracia Desnecessária',
      texto: 'O sistema tradicional é lento de propósito; a gente simplifica a rota para você não perder tempo.',
    },
    {
      titulo: 'Linguagem Humana',
      texto: 'Sem termos jurídicos difíceis ou siglas incompreensíveis. Você sabe exatamente o que vai receber.',
    },
    {
      titulo: 'Foco em Quem Trabalha',
      texto: 'Tempo de quem tá na rua vale dinheiro. Nosso compromisso é destravar para você trabalhar com tranquilidade.',
    },
  ];

  return (
    <div className="site-shell min-h-[100dvh] bg-[#18181B] text-white">
      <Header />

      <main className="px-5 pt-36 pb-24 sm:px-8 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase mb-4">
              Nossa História & Propósito
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
              Quem é a <span className="text-[#805AD5]">MEV?</span>
            </h1>
            <p className="mt-4 text-base text-zinc-300 sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A burocracia ficou digital, mas não ficou simples. A MEV nasceu para traduzir as exigências
              do governo e transformar confusão em solução prática.
            </p>
          </div>

          {/* Section: Origin Story */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A78BFA]">
                  POR QUE EXISTIMOS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                  O cliente não quer entender a burocracia, ele quer a solução.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                  Percebemos que as pessoas perdiam horas do dia em filas, sites confusos e guias incompreensíveis.
                  O sistema mudou para o ambiente digital, mas a complexidade continuou a mesma.
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  Entendemos que era preciso mais do que apenas &quot;emitir guias&quot;. Era necessário interpretar
                  o problema, explicar de forma honesta e resolver pelo caminho mais curto e seguro.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-[#18181B] p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#25D366] mt-0.5" />
                  <span className="text-sm text-zinc-300">Diagnóstico real antes de qualquer cobrança.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#25D366] mt-0.5" />
                  <span className="text-sm text-zinc-300">Atendimento 100% humano via WhatsApp oficial.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#25D366] mt-0.5" />
                  <span className="text-sm text-zinc-300">Trâmite executado exclusivamente por canais oficiais.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#25D366] mt-0.5" />
                  <span className="text-sm text-zinc-300">Orientação clara para quem roda no dia a dia.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Metodologia */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A78BFA]">
                NOSSO MÉTODO
              </span>
              <h2 className="font-display text-3xl font-bold text-white mt-2">
                Muito além de entregar papel
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metodos.map((item, index) => (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition-all hover:border-[#805AD5]/50"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-zinc-800">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.titulo}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.descricao}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section: Pilares */}
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-[#18181B] p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Compromisso com quem trabalha
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8">
              A gente sabe o valor do seu tempo. Por isso, simplificar a sua vida documental é o nosso único objetivo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
              {pilares.map((pilar) => (
                <div key={pilar.titulo} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <h4 className="font-display text-sm font-bold text-white mb-1.5">{pilar.titulo}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{pilar.texto}</p>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppLink('Olá! Gostaria de conversar com a equipe da MEV.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#22BF5B]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Falar com a MEV no WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
