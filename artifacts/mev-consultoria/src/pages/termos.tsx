import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { getWhatsAppLink } from '@/lib/constants';
import { FileText, MessageCircle } from 'lucide-react';

export default function TermosPage() {
  useEffect(() => {
    document.title = 'Termos de Uso | MEV Consultoria Digital';
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
              <FileText className="h-3.5 w-3.5" />
              Documento Legal
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Termos de Uso
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Última atualização: Outubro de 2026
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-zinc-300">
            <p>
              Estes Termos de Uso estabelecem as condições e regras gerais para navegação e utilização
              dos serviços de consultoria e assessoria documental prestados pela <strong>MEV Consultoria Digital</strong>.
              Ao navegar em nosso site ou contratar nossos serviços, você concorda expressamente com os termos abaixo.
            </p>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white text-balance">
                1. Natureza dos Serviços
              </h2>
              <p className="text-zinc-400 text-sm">
                A MEV atua como consultoria e assessoria especializada em procedimentos documentais veiculares
                e tributários de MEI junto a órgãos oficiais (Detran, Sefaz, Receita Federal, Prefeituras).
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-400 text-sm">
                <li>
                  <strong className="text-zinc-200">Orçamentos e Consultas:</strong> Valores preliminares são estimados com base nas informações fornecidas. O valor final é confirmado após a consulta de débitos nos sistemas oficiais.
                </li>
                <li>
                  <strong className="text-zinc-200">Prazos Oficiais:</strong> A MEV atua com agilidade para protocolar e executar as demandas, mas prazos de emissão final de documentos (como CRLV ou ATPV-e) dependem do processamento dos órgãos públicos competentes.
                </li>
                <li>
                  <strong className="text-zinc-200">Execução:</strong> O trâmite inicia-se após a confirmação do pagamento acordado de forma transparente e combinada diretamente pelo WhatsApp.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white text-balance">
                2. Propriedade Intelectual e Uso do Conteúdo
              </h2>
              <p className="text-zinc-400 text-sm">
                Todo o conteúdo deste site (textos, ilustrações, marcas, logotipos e layout) pertence à MEV Consultoria Digital.
                O uso é restrito para consulta pessoal e informativa, sendo vedada a reprodução ou cópia comercial sem autorização prévia.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white text-balance">
                3. Responsabilidades do Usuário
              </h2>
              <p className="text-zinc-400 text-sm">
                Ao solicitar serviços, o usuário compromete-se a fornecer informações verídicas, exatas e de sua legítima titularidade
                ou representação legal, não utilizando os canais para fins ilícitos, fraudulentos ou de má-fé.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white text-balance">
                4. Isenção e Limites de Responsabilidade
              </h2>
              <p className="text-zinc-400 text-sm">
                Nosso trabalho segue estritamente a legislação de trânsito e normas fazendárias vigentes. A MEV não promete resultados
                que firam a lei e atua apenas por meios oficiais, transparentes e auditáveis.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-3">
              <h2 className="font-display text-xl font-bold text-white text-balance">
                5. Alterações nestes Termos
              </h2>
              <p className="text-zinc-400 text-sm">
                Estes termos podem ser periodicamente atualizados para refletir melhorias em nossos serviços ou exigências legais.
                A data da última revisão sempre constará no início desta página.
              </p>
            </section>

            <div className="rounded-2xl border border-[#805AD5]/30 bg-[#805AD5]/10 p-6 sm:p-8 text-center mt-12">
              <h3 className="font-display text-lg font-bold text-white">
                Ficou com alguma dúvida sobre nossos termos?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-zinc-300">
                Nossa equipe está disponível para esclarecer qualquer ponto antes de você fechar seu serviço.
              </p>
              <a
                href={getWhatsAppLink('Olá! Gostaria de tirar uma dúvida sobre os Termos de Uso.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-[#22BF5B] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Conversar no WhatsApp</span>
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
