import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SITE_INFO, getWhatsAppLink } from '@/lib/constants';
import { ShieldCheck, MessageCircle, Mail } from 'lucide-react';

export default function PoliticaPage() {
  useEffect(() => {
    document.title = 'Política de Privacidade | MEV Consultoria Digital';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell min-h-[100dvh] bg-[#18181B] text-white">
      <Header />

      <main className="px-5 pt-36 pb-24 sm:px-8 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 border-b border-zinc-800 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase mb-4">
              <ShieldCheck className="h-3.5 w-3.5 text-[#25D366]" />
              LGPD & Transparência
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Política de Privacidade
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Última atualização: Outubro de 2026
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-zinc-300">
            <p>
              Na <strong>MEV Consultoria Digital</strong>, levamos a sua privacidade e a segurança dos seus dados
              com seriedade e transparência absoluta. Esta política explica, de maneira simples e direta,
              como tratamos as informações que você nos confia para realizar seus serviços.
            </p>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white">
                1. Quais informações coletamos?
              </h2>
              <p className="text-zinc-400 text-sm">
                Coletamos exclusivamente as informações estritamente necessárias para a prestação dos serviços contratados:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400 text-sm">
                <li>
                  <strong className="text-zinc-200">Dados de Contato:</strong> Seu nome, número de WhatsApp e e-mail.
                </li>
                <li>
                  <strong className="text-zinc-200">Dados do Veículo:</strong> Placa, Renavam e número de Chassi para checagem em sistemas oficiais.
                </li>
                <li>
                  <strong className="text-zinc-200">Dados de Identificação / CNPJ:</strong> CPF, RG, CNH ou CNPJ apenas quando expressamente exigidos pelo procedimento oficial (como emissão de CRLV, transferência ATPV-e ou regularização de MEI).
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white">
                2. Como usamos seus dados?
              </h2>
              <p className="text-zinc-400 text-sm">
                Seus dados são usados unicamente para:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-400 text-sm">
                <li>Consultar débitos e pendências nos órgãos governamentais responsáveis.</li>
                <li>Emitir orçamentos detalhados e transparentes.</li>
                <li>Executar a regularização e enviar o documento oficial autenticado diretamente para você.</li>
                <li>Informar atualizações sobre o andamento do seu processo.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white">
                3. Compartilhamento Restrito a Órgãos Oficiais
              </h2>
              <p className="text-zinc-400 text-sm">
                Compartilhamos suas informações unicamente com os órgãos públicos competentes necessários para cumprir o serviço
                (ex.: Detran, Secretaria da Fazenda / Sefaz, Receita Federal e Prefeituras).
              </p>
              <p className="text-zinc-300 font-semibold text-sm">
                Nós nunca vendemos, alugamos ou repassamos seus dados a terceiros para marketing ou publicidade.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white">
                4. Segurança e Sigilo
              </h2>
              <p className="text-zinc-400 text-sm">
                Adotamos práticas rigorosas de proteção. A troca de documentos e comunicações ocorre através de canais
                criptografados de ponta a ponta (como o WhatsApp oficial), e os acessos aos sistemas oficiais seguem padrões
                seguros de autenticação.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white">
                5. Seus Direitos (LGPD)
              </h2>
              <p className="text-zinc-400 text-sm">
                De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode a qualquer momento solicitar
                a confirmação, atualização ou exclusão das suas informações em nossos registros após a conclusão dos serviços.
              </p>
            </section>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-base font-bold text-white">Dúvidas sobre seus dados?</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Entre em contato pelo nosso e-mail oficial:
                </p>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#805AD5] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_INFO.email}
                </a>
              </div>

              <a
                href={getWhatsAppLink('Olá! Gostaria de falar sobre privacidade de dados.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-[#22BF5B] transition-colors shrink-0"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Contato via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
