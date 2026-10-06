import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CarFront, ShieldCheck, Building2, Handshake, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { getWhatsAppLink } from '@/lib/constants';

export default function ServicosPage() {
  useEffect(() => {
    document.title = 'Serviços | MEV Consultoria Digital';
    window.scrollTo(0, 0);
  }, []);

  const areas = [
    {
      id: 'veiculo',
      icon: <CarFront className="h-8 w-8 text-[#805AD5]" />,
      titulo: 'Para seu Veículo',
      subtitulo: 'Do licenciamento vencido a débitos acumulados, resolvemos direto na fonte.',
      pontos: [
        {
          rotulo: 'O que resolvemos:',
          texto: 'Emissão de CRLV-e anual, quitação e parcelamento de IPVA, multas e taxas em atraso.',
        },
        {
          rotulo: 'Por que resolver:',
          texto: 'Evite apreensão em fiscalizações de blitz, juros abusivos acumulados e bloqueios administrativos.',
        },
        {
          rotulo: 'Como a MEV faz:',
          texto: 'Consultamos os sistemas oficiais, identificamos as pendências exatas e entregamos o documento digital em PDF.',
        },
      ],
      whatsappMsg: 'Olá! Preciso de ajuda com a regularização do meu veículo.',
      cta: 'Regularizar meu Veículo',
    },
    {
      id: 'compra-venda',
      icon: <Handshake className="h-8 w-8 text-[#805AD5]" />,
      titulo: 'Compra & Venda Segura',
      subtitulo: 'Mais tranquilidade e proteção documental para ambas as partes.',
      pontos: [
        {
          rotulo: 'O que resolvemos:',
          texto: 'Transferência digital (ATPV-e), comunicado de venda obrigatório e baixa de gravame financeiro.',
        },
        {
          rotulo: 'Por que resolver:',
          texto: 'Vender sem comunicar gera multas no seu nome. Comprar com gravame ou restrição impede a transferência.',
        },
        {
          rotulo: 'Como a MEV faz:',
          texto: 'Blindamos a transação para que o vendedor fique livre de responsabilidades e o comprador receba o carro legalizado.',
        },
      ],
      whatsappMsg: 'Olá! Quero apoio para comprar ou transferir um veículo com segurança.',
      cta: 'Comprar ou Vender com Segurança',
    },
    {
      id: 'motorista',
      icon: <ShieldCheck className="h-8 w-8 text-[#805AD5]" />,
      titulo: 'Apoio ao Motorista & Entregador',
      subtitulo: 'Suporte dedicado para quem roda o dia todo e não pode perder trabalho.',
      pontos: [
        {
          rotulo: 'O que resolvemos:',
          texto: 'Desbloqueio urgente de CRLV, regularização rápida de débitos e orientação sobre CNH e pontos.',
        },
        {
          rotulo: 'Por que resolver:',
          texto: 'Tempo na rua vale dinheiro. Ficar com veículo irregular é risco diário de multa pesada e guincho.',
        },
        {
          rotulo: 'Como a MEV faz:',
          texto: 'Atendimento ágil pelo WhatsApp com rota desobstruída para você voltar a rodar no mesmo dia.',
        },
      ],
      whatsappMsg: 'Olá! Sou motorista/entregador e preciso regularizar meu meio de trabalho com urgência.',
      cta: 'Falar com Especialista',
    },
    {
      id: 'mei',
      icon: <Building2 className="h-8 w-8 text-[#805AD5]" />,
      titulo: 'Serviços MEI e CNPJ',
      subtitulo: 'A gestão e regularização fiscal do seu negócio sem complicação burocrática.',
      pontos: [
        {
          rotulo: 'O que resolvemos:',
          texto: 'Abertura, alteração de dados, parcelamento de guias DAS atrasadas e configuração de notas fiscais.',
        },
        {
          rotulo: 'Por que resolver:',
          texto: 'Débitos de DAS podem cancelar seu CNPJ, suspender benefícios do INSS e travar emissão de notas para clientes.',
        },
        {
          rotulo: 'Como a MEV faz:',
          texto: 'Organizamos todas as pendências com a Receita Federal e deixamos seu MEI 100% ativo e regularizado.',
        },
      ],
      whatsappMsg: 'Olá! Preciso de ajuda para regularizar meu MEI / CNPJ.',
      cta: 'Organizar meu MEI',
    },
  ];

  return (
    <div className="site-shell min-h-[100dvh] bg-[#18181B] text-white">
      <Header />

      <main className="px-5 pt-36 pb-24 sm:px-8 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-6xl">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase mb-4">
              Catálogo de Soluções
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
              Nossos <span className="text-[#805AD5]">Serviços</span>
            </h1>
            <p className="mt-4 text-base text-zinc-300 sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Organização é a chave. Dividimos tudo em áreas claras para que você encontre a solução exata
              sem perder tempo ou paciência.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 transition-all hover:border-[#805AD5]/60 hover:bg-zinc-900/90 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#805AD5]/15 border border-[#805AD5]/30">
                      {area.icon}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-white">{area.titulo}</h2>
                      <p className="text-xs text-zinc-400 mt-1">{area.subtitulo}</p>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-zinc-800/80 pt-6">
                    {area.pontos.map((ponto) => (
                      <div key={ponto.rotulo} className="text-sm">
                        <strong className="block text-zinc-200 font-semibold mb-0.5">{ponto.rotulo}</strong>
                        <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">{ponto.texto}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-zinc-800/80 pt-6">
                  <a
                    href={getWhatsAppLink(area.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-button flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-zinc-950 shadow-md shadow-[#25D366]/20 transition-all hover:bg-[#22BF5B]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{area.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Consultation Banner */}
          <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Não encontrou sua dúvida específica?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
              Cada caso burocrático tem particularidades. Mande uma mensagem contando o que aconteceu
              e analisamos gratuitamente os primeiros passos.
            </p>
            <a
              href={getWhatsAppLink('Olá! Tenho uma pendência específica e gostaria de uma orientação.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-[#805AD5] hover:text-[#A78BFA]"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>Conversar com a MEV no WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
