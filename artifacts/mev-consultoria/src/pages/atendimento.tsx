import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, CircleHelp, MessageCircle, ShieldCheck } from 'lucide-react';
import mevLogo from '@assets/LogoMev01_1790362981951.jpg';

const WHATSAPP = 'https://wa.me/message/ESJRV63FECTAD1';

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
    const title = 'Atendimento Mev | Consultoria veicular e empresarial';
    const description = 'Atendimento digital da Mev para regularizar veículos, transferências, CNH e MEI. Faça uma triagem rápida e fale com nossa equipe pelo WhatsApp.';
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

  const options = useMemo(() => area ? issues[area] : [], [area]);

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
      'Olá, Mev! Quero entender como resolver uma questão.',
      `Área: ${selectedArea}.`,
      `Assunto: ${issue}.`,
      note.trim() ? `Contexto: ${note.trim()}` : '',
    ].filter(Boolean).join('\n');
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="site-shell intake-shell min-h-[100dvh] overflow-hidden text-[#f2f0e8]">
      <header className="relative z-10 border-b border-white/[.08]">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Mev Consultoria Digital - início" data-testid="link-intake-logo" className="group flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-[13px] border border-white/10 bg-white">
              <img src={mevLogo} alt="Símbolo Mev" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-xl font-bold tracking-[-.05em]">mev<span className="text-[#6ee8d7]">.</span></span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#aaa1b5] transition-colors hover:text-[#6ee8d7]" data-testid="link-back-home">
            <ArrowLeft size={16} /> Voltar ao site
          </Link>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
        <div className="pointer-events-none absolute -right-48 top-8 h-[30rem] w-[30rem] rounded-full border-[1px] border-[#7051c9]/20" />
        <div className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-[#7051c9]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.74fr_1.26fr] lg:gap-16">
          <aside className="intake-intro self-start lg:sticky lg:top-12">
            <p className="font-mono-ui text-[11px] font-bold uppercase tracking-[.2em] text-[#6ee8d7]">atendimento / triagem rápida</p>
            <h1 className="mt-5 max-w-xl font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[.91] tracking-[-.075em]">
              Vamos por<br />partes<span className="text-[#d88fb8]">.</span>
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[#bcb5c8] sm:text-lg">
              Conte só por onde começar. A conversa de verdade acontece com uma pessoa da Mev, no WhatsApp.
            </p>
            <div className="mt-9 flex max-w-sm items-start gap-3 border-t border-white/10 pt-5">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#6ee8d7]" />
               <p className="text-xs leading-relaxed text-[#8f8798]">Não pedimos dados pessoais nem salvamos suas escolhas no site. Elas só seguem para o WhatsApp quando você continuar.</p>
            </div>
            <div className="mt-10 hidden items-center gap-3 text-xs text-[#70677d] lg:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[#6ee8d7]/30 text-[#6ee8d7]">1</span>
              <span>Escolha o assunto</span><span className="h-px w-8 bg-white/10" />
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10">2</span>
              <span>Converse com a Mev</span>
            </div>
          </aside>

          <section aria-labelledby="step-area" className="intake-panel rounded-[1.8rem] border border-white/10 bg-[#211438]/90 p-5 shadow-[0_30px_90px_rgba(7,3,20,.34)] sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[#8f8798]">passo 01 / 02</p>
                <h2 id="step-area" className="mt-2 font-display text-2xl font-bold tracking-[-.04em] sm:text-3xl">Qual é o assunto?</h2>
                <p className="mt-2 text-sm text-[#aaa1b5]">Escolha uma opção. Você pode mudar depois.</p>
              </div>
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#6ee8d7]/10 text-[#6ee8d7]"><MessageCircle size={20} /></span>
            </div>

            <div role="radiogroup" aria-label="Área de atendimento" className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {areas.map((item) => {
                const selected = area === item.id;
                return <button
                  type="button"
                  key={item.id}
                  role="radio"
                  aria-checked={selected}
                  data-area-choice
                  data-testid={`button-area-${item.id}`}
                  onClick={() => chooseArea(item.id)}
                  onKeyDown={(event) => {
                    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
                    event.preventDefault();
                    const choices = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-area-choice]'));
                    const current = choices.indexOf(event.currentTarget);
                    const step = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
                    choices[(current + step + choices.length) % choices.length]?.click();
                    choices[(current + step + choices.length) % choices.length]?.focus();
                  }}
                  className={`group flex min-h-[78px] items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6ee8d7] ${selected ? 'border-[#6ee8d7]/70 bg-[#6ee8d7]/[.09]' : 'border-white/[.09] bg-white/[.025] hover:border-white/25 hover:bg-white/[.05]'}`}
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono-ui text-xs ${selected ? 'bg-[#6ee8d7] text-[#211438]' : 'bg-[#7051c9]/20 text-[#cbb9ef]'}`}>{item.mark}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-bold ${selected ? 'text-[#6ee8d7]' : 'text-[#f2f0e8]'}`}>{item.label}</span>
                    <span className="mt-1 block text-[11px] leading-snug text-[#8f8798]">{item.detail}</span>
                  </span>
                  <span aria-hidden="true" className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${selected ? 'border-[#6ee8d7] bg-[#6ee8d7] text-[#211438]' : 'border-white/20 text-transparent'}`}><Check size={12} /></span>
                </button>;
              })}
            </div>

            <div className="mt-8 border-t border-white/[.08] pt-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono-ui text-[10px] font-bold uppercase tracking-[.18em] text-[#8f8798]">passo 02 / 02</p>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-[-.04em]">O que aconteceu?</h2>
                </div>
                {area && <span className="rounded-full border border-[#d88fb8]/25 bg-[#d88fb8]/[.08] px-3 py-1 text-[11px] font-semibold text-[#e7a9ca]">{areas.find((item) => item.id === area)?.label}</span>}
              </div>
              <p className="mt-2 text-sm text-[#aaa1b5]">Marque o tema que mais se aproxima.</p>

              {area ? <div role="radiogroup" aria-label="Assunto específico" className="mt-5 flex flex-wrap gap-2">
                {options.map((option) => {
                  const selected = issue === option;
                  return <button type="button" key={option} role="radio" aria-checked={selected} data-issue-choice data-testid={`button-issue-${options.indexOf(option)}`}
                    onClick={() => { setIssue(option); setError(''); }}
                    onKeyDown={(event) => {
                      if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
                      event.preventDefault();
                      const choices = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-issue-choice]'));
                      const current = choices.indexOf(event.currentTarget);
                      const step = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
                      choices[(current + step + choices.length) % choices.length]?.click();
                      choices[(current + step + choices.length) % choices.length]?.focus();
                    }}
                    className={`rounded-full border px-4 py-2.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6ee8d7] ${selected ? 'border-[#6ee8d7] bg-[#6ee8d7] font-bold text-[#211438]' : 'border-white/10 bg-white/[.025] text-[#d0c9d4] hover:border-[#6ee8d7]/50 hover:text-[#6ee8d7]'}`}>
                    {option}
                  </button>;
                })}
              </div> : <div className="mt-5 flex items-center gap-3 rounded-xl border border-dashed border-white/10 px-4 py-4 text-sm text-[#70677d]">
                <CircleHelp size={17} className="shrink-0" /> Primeiro escolha uma área para ver os assuntos.
              </div>}

              <label htmlFor="intake-note" className="mt-7 block text-sm font-bold text-[#e9e5ed]">
                Quer deixar um contexto? <span className="font-normal text-[#8f8798]">(opcional)</span>
              </label>
              <textarea id="intake-note" data-testid="input-intake-note" value={note} onChange={(event) => setNote(event.target.value.slice(0, 240))}
                maxLength={240} rows={3} placeholder="Uma frase já ajuda. Não inclua dados pessoais."
                className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-[#170d28]/70 px-4 py-3 text-sm leading-relaxed text-[#f2f0e8] outline-none placeholder:text-[#70677d] focus:border-[#6ee8d7]/60 focus:ring-2 focus:ring-[#6ee8d7]/15" />
              <div className="mt-1 flex justify-between text-[11px] text-[#70677d]"><span>Sem nome, CPF, placa ou telefone.</span><span>{note.length}/240</span></div>

              {error && <p role="alert" data-testid="text-intake-error" className="mt-4 rounded-xl border border-[#e69bc3]/30 bg-[#e69bc3]/[.08] px-4 py-3 text-sm text-[#f0b5d1]">{error}</p>}

              <div className="mt-7 flex flex-col-reverse gap-3 border-t border-white/[.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-[#8f8798]">Você confere tudo antes de abrir o WhatsApp.</p>
                <button type="button" onClick={sendToWhatsApp} data-testid="button-open-whatsapp" className="shine-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6ee8d7] px-6 py-3 text-sm font-bold text-[#211438] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0e8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#211438]">
                  Continuar no WhatsApp <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] text-[#70677d]"><Check size={13} className="text-[#6ee8d7]" /> Sem compromisso. A conversa começa no seu tempo.</p>
          </section>
        </div>
        <div className="relative mx-auto mt-8 flex max-w-6xl justify-between border-t border-white/[.07] pt-5 text-[11px] text-[#6f667b]">
          <span>MEV CONSULTORIA DIGITAL</span>
          <span className="inline-flex items-center gap-1">Clareza antes da ação <ChevronRight size={13} /></span>
        </div>
      </div>
    </main>
  );
}
