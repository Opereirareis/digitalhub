import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export function FAQSection() {
  const perguntas = [
    {
      id: 'item-1',
      pergunta: 'Como recebo o meu CRLV atualizado?',
      resposta:
        'O documento digital autenticado é enviado em PDF direto no seu WhatsApp pronto para imprimir ou salvar na carteira digital.',
    },
    {
      id: 'item-2',
      pergunta: 'Preciso comparecer presencialmente em algum lugar?',
      resposta:
        'Na imensa maioria dos casos, não. Resolvemos 100% online através dos canais oficiais e te mantemos informado em cada etapa.',
    },
    {
      id: 'item-3',
      pergunta: 'Quais documentos preciso enviar?',
      resposta:
        'Apenas o comprovante do documento anterior, placa e Renavam para consulta inicial. Sem burocracia ou formulários extensos.',
    },
    {
      id: 'item-4',
      pergunta: 'A MEV também atende regularização de MEI e emissão de notas?',
      resposta:
        'Sim! Apoiamos microempreendedores individuais com declaração anual, regularização de guias DAS em atraso, parcelamentos e configuração para emissão de notas fiscais.',
    },
    {
      id: 'item-5',
      pergunta: 'Como é feito o pagamento dos serviços?',
      resposta:
        'Com transparência absoluta: você recebe o valor exato antes de fechar qualquer procedimento, com opções via Pix ou cartão sem nenhuma taxa escondida.',
    },
  ];

  return (
    <section id="faq" className="relative bg-[#18181B] px-5 py-24 sm:px-8 lg:py-32 border-t border-zinc-800">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase">
            <HelpCircle className="h-3.5 w-3.5 text-[#805AD5]" />
            Dúvidas Comuns
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Perguntas <span className="text-[#805AD5]">Frequentes</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg max-w-2xl mx-auto">
            Dúvidas frequentes sanadas com clareza para você decidir com tranquilidade.
          </p>
        </div>

        {/* Radix Accordion */}
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
          {perguntas.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-1 transition-colors data-[state=open]:border-[#805AD5]/50 data-[state=open]:bg-zinc-900/90"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold text-white hover:text-[#A78BFA] hover:no-underline py-5">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-zinc-300 pb-5 pt-1">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
          <p className="text-sm text-zinc-300">
            Ainda tem alguma dúvida sobre seu veículo ou CNPJ?
          </p>
          <a
            href={getWhatsAppLink('Olá! Tenho uma dúvida sobre os serviços da MEV.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            Tire sua dúvida diretamente com nossa equipe no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
