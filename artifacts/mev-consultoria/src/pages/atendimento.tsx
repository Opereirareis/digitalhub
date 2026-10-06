import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, CircleHelp, MessageCircle, ShieldCheck } from 'lucide-react';
import mevLogo from '@assets/LogoMev01_1790362981951.jpg';
import { WHATSAPP_URL } from '@/lib/constants';

const areas = [
  { id: 'vehicle', label: 'Veículo', detail: 'Documento, débitos ou restrições', mark: '01' },
  { id: 'buying-selling', label: 'Compra e venda', detail: 'Transferência ou negociação', mark: '02' },
  { id: 'cnh', label: 'CNH e condutor', detail: 'Habilitação, pontos ou processo', mark: '03' },
  { id: 'mei', label: 'MEI e negócio', detail: 'DAS, CNPJ ou certidões', mark: '04' },
  { id: 'unknown', label: 'Ainda não sei', detail: 'A gente ajuda a encontrar o caminho', mark: '↗' },
] as const;

type AreaId = (typeof areas)[number]['id'];

const issues: Record<AreaId, string[]> = {
  vehicle: ['Licenciamento ou CRLV-e', 'Multas, IPVA ou taxas', 'Bloqueio, restrição ou leilão', 'Outro assunto do veículo'],
  'buying-selling': ['Transferência do veículo', 'Comunicação de venda', 'Compra ou venda segura', 'Gravame ou documentação', 'Outro assunto'],
  cnh: ['Renovação ou CNH definitiva', 'Pontos ou infrações', 'Processo no Detran', 'Outro assunto da CNH'],
  mei: ['Regularização do MEI', 'DAS em atraso', 'Certidões ou dívida ativa', 'Organização do CNPJ', 'Outro assunto do negócio'],
  unknown: ['Tenho uma dúvida sobre veículo', 'Preciso de ajuda com a CNH', 'É sobre MEI ou empresa', 'Outro assunto'],
};

export default function Atendimento() {
  const [location, setLocation] = useLocation();
  const [area, setArea] = useState<AreaId | ''>('');
  const [issue, setIssue] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const title = 'Atendimento MEV | Triagem rápida de serviços';
    const description =
      'Atendimento digital da MEV para regularizar veículos, transferências, CNH e MEI. Faça uma triagem rápida e fale com nossa equipe pelo WhatsApp.';
    document.title = title;
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', 'https://mevconsultoria.com.br/atendimento');
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    const params = new URLSearchParams(window.location.search);
    const requestedArea = params.get('area') as AreaId | null;
    const nextArea: AreaId | '' = requestedArea && areas.some((item) => item.id === requestedArea) ? requestedArea : '';
    if (nextArea !== area) {
      setArea(nextArea);
      setIssue('');
    }
  }, [location, area]);

  const options = useMemo(() => (area ? issues[area] : []), [area]);

  function chooseArea(nextArea: AreaId) {
    setArea(nextArea);
    setIssue('');
    setError('');
    const params = new URLSearchParams(window.location.search);
    params.set('area', nextArea);
    setLocation(`/atendimento?${params.toString()}`, { replace: true });
  }

  function sendToWhatsApp() {
    if (!area || !issue) {
      setError('Escolha uma área e o assunto para continuar.');
      return;
    }
    const selectedArea = areas.find((item) => item.id === area)?.label ?? '';
    const message = [
      'Olá, MEV! Quero entender como resolver uma questão.',
      `Área: ${selectedArea}.`,
      `Assunto: ${issue}.`,
      note.trim() ? `Contexto: ${note.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="site-shell intake-shell min-h-[100dvh] overflow-hidden bg-[#18181B] text-white">
      <header className="relative z-10 border-b border-zinc-800 bg-[#18181B]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="MEV Consultoria Digital - Início" data-testid="link-intake-logo" className="group flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-zinc-700 bg-white">
              <img src={mevLogo} alt="Logo MEV" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              MEV<span className="text-[#805AD5]">.</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-[#805AD5]"
            data-testid="link-back-home"
          >
            <ArrowLeft size={16} /> Voltar ao site
          </Link>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
        <div className="pointer-events-none absolute -right-36 top-12 h-96 w-96 rounded-full bg-[#7342BB]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase">
              Triagem Rápida
            </div>
            <h1 className="mt-5 max-w-xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
              Vamos por<br />partes<span className="text-[#805AD5]">.</span>
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-zinc-300 sm:text-lg">
              Conte só por onde começar. A conversa de verdade acontece diretamente com uma pessoa da MEV no WhatsApp.
            </p>
            <div className="mt-9 flex max-w-sm items-start gap-3 border-t border-zinc-800 pt-5">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#805AD5]" />
              <p className="text-xs leading-relaxed text-zinc-400">
                Não pedimos dados sensíveis nem salvamos suas escolhas no site. Elas só seguem para o WhatsApp quando você confirmar.
              </p>
            </div>
            <div className="mt-10 hidden items-center gap-3 text-xs text-zinc-500 lg:flex">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-[#805AD5] text-[#A78BFA] font-bold">1</span>
              <span>Escolha o assunto</span>
              <span className="h-px w-8 bg-zinc-800" />
              <span className="grid h-7 w-7 place-items-center rounded-full border border-zinc-700">2</span>
              <span>Converse no WhatsApp</span>
            </div>
          </aside>

          <section aria-labelledby="step-area" className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">PASSO 01 / 02</p>
                <h2 id="step-area" className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Qual é o assunto?
                </h2>
                <p className="mt-1 text-sm text-zinc-400">Escolha uma opção para direcionar o atendimento.</p>
              </div>
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#805AD5]/15 text-[#805AD5]">
                <MessageCircle size={20} />
              </span>
            </div>

            <div role="radiogroup" aria-label="Área de atendimento" className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {areas.map((item) => {
                const selected = area === item.id;
                return (
                  <button
                    type="button"
                    key={item.id}
                    role="radio"
                    aria-checked={selected}
                    data-area-choice
                    data-testid={`button-area-${item.id}`}
                    onClick={() => chooseArea(item.id)}
                    className={`group flex min-h-[76px] items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805AD5] ${
                      selected
                        ? 'border-[#805AD5] bg-[#805AD5]/15 shadow-md shadow-[#805AD5]/10'
                        : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-800/60'
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${
                        selected ? 'bg-[#805AD5] text-white' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {item.mark}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm font-bold ${selected ? 'text-white' : 'text-zinc-200'}`}>
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] text-zinc-400">{item.detail}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                        selected ? 'border-[#805AD5] bg-[#805AD5] text-white' : 'border-zinc-700 text-transparent'
                      }`}
                    >
                      <Check size={12} />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">PASSO 02 / 02</p>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">O que aconteceu?</h2>
                </div>
                {area && (
                  <span className="rounded-full border border-[#805AD5]/30 bg-[#805AD5]/15 px-3 py-1 text-xs font-semibold text-[#A78BFA]">
                    {areas.find((item) => item.id === area)?.label}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-zinc-400">Marque o tema que mais se aproxima da sua necessidade.</p>

              {area ? (
                <div role="radiogroup" aria-label="Assunto específico" className="mt-5 flex flex-wrap gap-2">
                  {options.map((option) => {
                    const selected = issue === option;
                    return (
                      <button
                        type="button"
                        key={option}
                        role="radio"
                        aria-checked={selected}
                        data-issue-choice
                        data-testid={`button-issue-${options.indexOf(option)}`}
                        onClick={() => {
                          setIssue(option);
                          setError('');
                        }}
                        className={`rounded-full border px-4 py-2.5 text-left text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805AD5] ${
                          selected
                            ? 'border-[#805AD5] bg-[#805AD5] font-bold text-white shadow-md'
                            : 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-[#805AD5]/50 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-dashed border-zinc-800 px-4 py-4 text-sm text-zinc-500">
                  <CircleHelp size={17} className="shrink-0" /> Primeiro escolha uma área para ver os assuntos.
                </div>
              )}

              <label htmlFor="intake-note" className="mt-7 block text-sm font-bold text-zinc-200">
                Quer deixar um contexto adicional? <span className="font-normal text-zinc-400">(opcional)</span>
              </label>
              <textarea
                id="intake-note"
                data-testid="input-intake-note"
                value={note}
                onChange={(event) => setNote(event.target.value.slice(0, 240))}
                maxLength={240}
                rows={3}
                placeholder="Uma frase já ajuda. Não inclua CPF ou dados confidenciais."
                className="mt-2 w-full resize-y rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm leading-relaxed text-white outline-none placeholder:text-zinc-600 focus:border-[#805AD5] focus:ring-1 focus:ring-[#805AD5]"
              />
              <div className="mt-1 flex justify-between text-[11px] text-zinc-500">
                <span>Sem necessidade de placa ou CPF agora.</span>
                <span>{note.length}/240</span>
              </div>

              {error && (
                <p role="alert" data-testid="text-intake-error" className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                  {error}
                </p>
              )}

              <div className="mt-7 flex flex-col-reverse gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-zinc-400">Você confere tudo antes de abrir o WhatsApp.</p>
                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  data-testid="button-open-whatsapp"
                  className="shine-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-zinc-950 shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#22BF5B] hover:shadow-xl hover:shadow-[#25D366]/30"
                >
                  <span>Continuar no WhatsApp</span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-zinc-400">
              <Check size={14} className="text-[#25D366]" /> Sem compromisso. O atendimento começa no seu tempo.
            </p>
          </section>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-6xl justify-between border-t border-zinc-800 pt-5 text-xs text-zinc-500">
          <span>MEV CONSULTORIA DIGITAL</span>
          <span className="inline-flex items-center gap-1">Clareza antes da ação <ChevronRight size={13} /></span>
        </div>
      </div>
    </main>
  );
}
