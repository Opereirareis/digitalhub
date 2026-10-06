import { useEffect, useState } from 'react';
import { MessageCircle, Mail, Clock, Instagram, Facebook, ArrowUpRight, Send, Check } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SITE_INFO, getWhatsAppLink } from '@/lib/constants';

export default function ContatoPage() {
  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    document.title = 'Contato | MEV Consultoria Digital';
    window.scrollTo(0, 0);
  }, []);

  function handleEnviarWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const textoFinal = [
      nome.trim() ? `Olá! Meu nome é ${nome.trim()}.` : 'Olá!',
      mensagem.trim() ? `Assunto: ${mensagem.trim()}` : 'Gostaria de falar com um especialista da MEV.',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(getWhatsAppLink(textoFinal), '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="site-shell min-h-[100dvh] bg-[#18181B] text-white">
      <Header />

      <main className="px-5 pt-36 pb-24 sm:px-8 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase mb-4">
              Canais Oficiais
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
              Fale com a <span className="text-[#805AD5]">MEV</span>
            </h1>
            <p className="mt-4 text-base text-zinc-300 sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para atender você de forma rápida, transparente e sem burocracia.
              Escolha o canal que preferir ou envie uma mensagem direta abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Contact Info Cards */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all hover:border-[#25D366]/50">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">WhatsApp Oficial</h2>
                    <p className="text-xs text-zinc-400">Canal prioritário e resposta rápida</p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Envie dados de veículo, tire dúvidas ou solicite seu orçamento com uma pessoa real da nossa equipe.
                </p>
                <a
                  href={getWhatsAppLink('Olá! Gostaria de atendimento.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:underline"
                >
                  <span>Iniciar conversa no WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Email Card */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#805AD5]/15 text-[#805AD5]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">E-mail</h2>
                    <p className="text-xs text-zinc-400">Para dúvidas institucionais ou parcerias</p>
                  </div>
                </div>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="mt-4 block text-sm font-semibold text-zinc-200 hover:text-[#A78BFA] transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </div>

              {/* Hours Card */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-800 text-zinc-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Horário de Atendimento</h2>
                    <p className="text-xs text-zinc-400">{SITE_INFO.hours}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-zinc-400">
                  Mensagens enviadas fora do horário comercial são respondidas logo na abertura do próximo dia útil.
                </p>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs text-zinc-400 font-medium">Redes Sociais:</span>
                <a
                  href={SITE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-[#805AD5] hover:text-[#805AD5] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href={SITE_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-[#805AD5] hover:text-[#805AD5] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={17} />
                </a>
              </div>
            </div>

            {/* Right: Quick Direct WhatsApp Form */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur">
              <h2 className="font-display text-2xl font-bold text-white">Mande sua mensagem</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Preencha para adiantar seu atendimento. O envio abre diretamente no seu aplicativo do WhatsApp.
              </p>

              <form onSubmit={handleEnviarWhatsApp} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-xs font-semibold uppercase text-zinc-300 mb-1.5">
                    Seu Nome (opcional)
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como prefere ser chamado?"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#805AD5]"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-xs font-semibold uppercase text-zinc-300 mb-1.5">
                    O que você precisa resolver?
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Ex: Preciso emitir o CRLV 2024 do meu veículo e conferir se tenho multas em aberto."
                    className="w-full resize-y rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm leading-relaxed text-white outline-none placeholder:text-zinc-600 focus:border-[#805AD5]"
                  />
                </div>

                <button
                  type="submit"
                  className="shine-button flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-zinc-950 shadow-md shadow-[#25D366]/20 transition-all hover:bg-[#22BF5B]"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar pelo WhatsApp</span>
                </button>

                <p className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 pt-2 text-center">
                  <Check size={13} className="text-[#25D366]" /> Seus dados não são salvos no site nem compartilhados.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
