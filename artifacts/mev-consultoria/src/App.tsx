import { useEffect, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChevronDown, Check, ArrowUpRight, ArrowRight, CarFront, FileCheck2, CreditCard, Building2, Search, MessageCircle, ShieldCheck, Menu, X, Instagram, Facebook, Mail, Clock3, Sparkles, CircleHelp } from 'lucide-react';
import mevLogo from '@assets/LogoMev01_1790362981951.jpg';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Atendimento from '@/pages/atendimento';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const services = [
  { icon: CarFront, index: '01', title: 'Seu veículo', intro: 'Do documento vencido ao detalhe que ninguém te explicou.', items: ['Licenciamento anual e CRLV-e', 'Multas, IPVA e taxas em atraso', 'Raio-X de bloqueios, leilão e restrições'], cta: 'Regularizar meu veículo' },
  { icon: ArrowRight, index: '02', title: 'Compra e venda', intro: 'Mais segurança em cada etapa da negociação.', items: ['Transferência digital (ATPV-e)', 'Comunicado de venda', 'Baixa de gravame e conferência'], cta: 'Comprar ou vender com segurança' },
  { icon: CreditCard, index: '03', title: 'CNH e condutor', intro: 'Clareza para dirigir sem aquela dúvida na cabeça.', items: ['Renovação e CNH definitiva', 'Gestão de pontos e infrações', 'Orientação para processos no Detran'], cta: 'Resolver minha CNH' },
  { icon: Building2, index: '04', title: 'Seu negócio', intro: 'A papelada do MEI e do CNPJ no lugar certo.', items: ['Regularização MEI e DAS atrasado', 'Certidões negativas e dívida ativa', 'Organização para acesso a crédito'], cta: 'Organizar meu CNPJ' },
];

const faqs = [
  ['A Mev é um despachante?', 'A Mev é uma consultoria de gestão burocrática. A gente investiga a situação, traduz os próximos passos e executa o que estiver ao nosso alcance pelos canais oficiais.'],
  ['Como começa o atendimento?', 'Você chama a gente pelo WhatsApp e conta, do seu jeito, o que aconteceu. A primeira conversa serve para entender o caso e indicar o caminho mais seguro.'],
  ['Vocês prometem resolver qualquer problema?', 'Não. Trabalhamos com processos reais, sistemas oficiais e explicações honestas. Se houver algo que não podemos fazer, você fica sabendo antes de tomar qualquer decisão.'],
  ['Preciso ir a um posto do Detran?', 'Na maioria dos casos, conseguimos orientar e acompanhar tudo de forma digital. Quando uma etapa presencial for obrigatória, explicamos exatamente onde, por que e como ir preparado.'],
  ['A Mev atende empresas também?', 'Sim. Cuidamos de pendências de MEI, DAS, certidões, dívida ativa e organização documental para pequenos negócios.'],
];

function useReveal() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const nodes = root.current?.querySelectorAll('.reveal');
    if (!nodes) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return root;
}

function Logo({ dark = false }: { dark?: boolean }) {
  return <a href="#inicio" aria-label="Mev Consultoria Digital - início" data-testid="link-logo" className="group flex items-center gap-2.5">
    <span className={`grid h-10 w-10 place-items-center overflow-hidden rounded-[13px] border ${dark ? 'border-[#211438]/10 bg-[#f0eee5]' : 'border-white/10 bg-white'}`}>
      <img src={mevLogo} alt="Símbolo Mev" className="h-full w-full object-cover" data-testid="img-brand-logo" />
    </span>
    <span className={`font-display text-xl font-bold tracking-[-.05em] ${dark ? 'text-[#211438]' : 'text-[#f2f0e8]'}`}>mev<span className={dark ? 'text-[#7051c9]' : 'text-[#6ee8d7]'}>.</span></span>
  </a>;
}

function WhatsAppLink({ children, className = '', testId, area }: { children: ReactNode; className?: string; testId: string; area?: string }) {
  const serviceArea = area ?? ({
    'link-service-01': 'vehicle',
    'link-service-02': 'buying-selling',
    'link-service-03': 'cnh',
    'link-service-04': 'mei',
  } as Record<string, string>)[testId];
  const href = serviceArea ? `/atendimento?area=${encodeURIComponent(serviceArea)}` : '/atendimento';
  return <Link href={href} data-testid={testId} className={className}>{children}</Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [['manifesto', 'Quem somos'], ['metodologia', 'Como funciona'], ['servicos', 'Serviços'], ['faq', 'Dúvidas']];
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.08] bg-[#211438]/85 backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
      <Logo />
      <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
        {nav.map(([href, label]) => <a key={href} href={`#${href}`} data-testid={`link-nav-${href}`} className="text-[13px] font-medium text-[#c1b9cc] transition-colors hover:text-[#6ee8d7]">{label}</a>)}
        <WhatsAppLink testId="link-header-whatsapp" className="shine-button flex items-center gap-2 rounded-full bg-[#6ee8d7] px-5 py-2.5 text-sm font-bold text-[#211438] transition-transform hover:-translate-y-0.5">Falar com a Mev <ArrowUpRight size={16} /></WhatsAppLink>
      </nav>
      <button type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} data-testid="button-mobile-menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-[#e6e4d8] md:hidden">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </div>
    {open && <nav className="border-t border-white/[.08] bg-[#211438] px-5 py-5 md:hidden" aria-label="Menu móvel">
      <div className="mx-auto flex max-w-7xl flex-col gap-1">
        {nav.map(([href, label]) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)} data-testid={`link-mobile-${href}`} className="rounded-xl px-3 py-3 text-base text-[#e6e4d8] hover:bg-white/5">{label}</a>)}
        <WhatsAppLink testId="link-mobile-whatsapp" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#6ee8d7] px-4 py-3 font-bold text-[#211438]">Abrir WhatsApp <ArrowUpRight size={17} /></WhatsAppLink>
      </div>
    </nav>}
  </header>;
}

function Hero() {
  return <section id="inicio" className="grid-paper relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:min-h-[720px] lg:pb-28 lg:pt-48">
    <div className="absolute -right-32 top-28 h-96 w-96 rounded-full bg-[#7051c9]/20 blur-3xl" />
    <div className="absolute left-[-12rem] top-[24rem] h-72 w-72 rounded-full bg-[#6ee8d7]/10 blur-3xl" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
      <div className="max-w-3xl">
        <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-[#6ee8d7]/25 bg-[#6ee8d7]/[.07] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-[#6ee8d7]"><Sparkles size={13} /> Consultoria 100% digital</div>
        <h1 className="reveal reveal-delay-1 font-display text-[clamp(3.3rem,8vw,7.5rem)] font-extrabold leading-[.91] tracking-[-.075em] text-[#f2f0e8]">Sua vida em<br /><span className="text-[#6ee8d7]">ordem.</span> Do veículo<br />ao seu negócio.</h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-[#bcb5c8] sm:text-xl">A gente traduz a burocracia para você entender o que está acontecendo — e resolve junto, pelo WhatsApp.</p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
          <WhatsAppLink testId="link-hero-whatsapp" className="shine-button inline-flex items-center justify-center gap-2 rounded-full bg-[#6ee8d7] px-7 py-4 text-center font-bold text-[#211438] transition-transform hover:-translate-y-1">Resolver agora <ArrowUpRight size={18} /></WhatsAppLink>
          <a href="#metodologia" data-testid="link-hero-method" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-bold text-[#e6e4d8] transition-colors hover:border-[#6ee8d7]/60 hover:text-[#6ee8d7]">Entender antes de pagar <ArrowRight size={17} /></a>
        </div>
        <div className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#898198]">
          {['Sem fila', 'Sem confusão', 'Sem promessa vazia'].map((text) => <span key={text} className="flex items-center gap-2"><Check size={14} className="text-[#6ee8d7]" />{text}</span>)}
        </div>
      </div>
      <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[430px] lg:ml-auto">
        <div className="float-slow relative rounded-[2rem] border border-white/10 bg-[#2b1e48]/80 p-4 shadow-[0_30px_80px_rgba(7,3,20,.42)] backdrop-blur">
          <div className="rounded-[1.4rem] border border-white/10 bg-[#211438] p-5">
            <div className="flex items-start justify-between">
              <div><p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[#898198]">painel mev / 01</p><p className="mt-3 font-display text-2xl font-bold text-[#f2f0e8]">Diagnóstico claro</p></div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#6ee8d7]/15 text-[#6ee8d7]"><Search size={18} /></span>
            </div>
            <div className="mt-8 space-y-3">
              {['Licenciamento 2024', 'Multas e taxas', 'Restrição administrativa'].map((item, i) => <div key={item} className="flex items-center justify-between rounded-xl border border-white/[.08] bg-white/[.035] px-3.5 py-3"><span className="text-sm text-[#d4ced9]">{item}</span><span className={`font-mono-ui text-[10px] uppercase ${i === 2 ? 'text-[#f39f9b]' : 'text-[#6ee8d7]'}`}>{i === 2 ? 'atenção' : 'em dia'}</span></div>)}
            </div>
            <div className="mt-4 rounded-xl bg-[#7051c9]/20 p-3.5"><p className="text-xs leading-relaxed text-[#d3c5ee]">Você não precisa decifrar isso sozinho. A Mev explica o próximo passo.</p></div>
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-[#6ee8d7]/20 bg-[#2e1f4b] px-4 py-3 shadow-xl"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#6ee8d7] text-[#211438]"><MessageCircle size={18} /></span><div><p className="text-[10px] uppercase tracking-wider text-[#898198]">atendimento</p><p className="text-sm font-bold text-[#f2f0e8]">Humano de verdade</p></div></div>
          <span className="orbital absolute -right-4 -top-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#e69bc3]/30 bg-[#512b55] text-[#e69bc3]"><FileCheck2 size={23} /></span>
        </div>
      </div>
    </div>
    <div className="relative mx-auto mt-20 grid max-w-7xl grid-cols-3 border-y border-white/[.08] py-5 text-center sm:mt-24 sm:flex sm:justify-between sm:text-left">
      {['Veículos', 'CNH', 'Pequenos negócios'].map((label, i) => <div key={label} className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#81788f] sm:justify-start"><span className="font-mono-ui text-[#6ee8d7]">0{i + 1}</span>{label}</div>)}
    </div>
  </section>;
}

function PainSection() {
  const pains = ['Paga multa sem saber exatamente o porquê.', 'Tem medo de blitz ou bloqueio do veículo.', 'Tentou resolver online e se perdeu em siglas.', 'Tem MEI ou CNPJ e não sabe se está tudo certo.'];
  return <section className="bg-[#f0eee5] px-5 py-24 text-[#211438] sm:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div className="reveal"><p className="font-mono-ui text-xs font-bold uppercase tracking-[.2em] text-[#7051c9]">antes de qualquer coisa</p><h2 className="mt-5 max-w-lg font-display text-5xl font-bold leading-[.95] tracking-[-.065em] sm:text-6xl">Se você sente que está sempre correndo atrás…</h2></div><div className="reveal reveal-delay-1"><div className="grid gap-3 sm:grid-cols-2">{pains.map((pain, i) => <div key={pain} className="flex gap-4 rounded-2xl border border-[#211438]/10 bg-white/45 p-5"><span className="font-mono-ui text-sm text-[#d16a9d]">0{i + 1}</span><p className="text-sm font-medium leading-relaxed text-[#51485d]">{pain}</p></div>)}</div><p className="mt-7 text-xl font-bold">O problema não é você.</p><p className="mt-1 text-[#665d6e]">É a burocracia que ninguém parou para explicar.</p></div></div></section>;
}

function Manifesto() {
  return <section id="manifesto" className="px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_.8fr] lg:items-center"><div className="reveal"><p className="font-mono-ui text-xs font-bold uppercase tracking-[.2em] text-[#6ee8d7]">quem é a mev</p><h2 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-[.95] tracking-[-.065em] text-[#f2f0e8] sm:text-7xl">A burocracia ficou digital.<br /><span className="text-[#7051c9]">Mas não ficou simples.</span></h2><div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-[#aaa1b5]"><p>A Mev existe para traduzir o idioma do governo e transformar confusão em solução prática.</p><p>Não somos um portal que joga você de um link para outro. Somos uma consultoria de gestão burocrática, com método e conversa humana.</p></div></div><div className="reveal reveal-delay-2"><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#2b1e48] p-8 sm:p-12"><div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-[#6ee8d7]/10" /><div className="absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-[#7051c9]/20 blur-2xl" /><div className="relative"><span className="font-display text-6xl text-[#6ee8d7]">“</span><p className="mt-2 font-display text-3xl font-bold leading-tight text-[#f2f0e8]">Traduzimos o idioma do governo.</p><div className="mt-10 flex items-center gap-3"><span className="h-px w-10 bg-[#6ee8d7]" /><span className="font-mono-ui text-xs uppercase tracking-wider text-[#b9afc4]">o jeito mev de fazer</span></div></div></div></div></div></section>;
}

function Methodology() {
  const steps = [{ no: '01', title: 'Escaneamos', icon: Search, text: 'Consultamos sistemas oficiais para identificar débitos, bloqueios, restrições e riscos ocultos. Nada no escuro.' }, { no: '02', title: 'Explicamos', icon: MessageCircle, text: 'Mostramos o que está acontecendo, o que é obrigatório e o que pode esperar. Você entende antes de decidir.' }, { no: '03', title: 'Resolvemos', icon: Check, text: 'Cuidamos da burocracia, das guias e do acompanhamento. Você recebe tudo pronto, de forma digital.' }];
  return <section id="metodologia" className="bg-[#2b1e48] px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono-ui text-xs font-bold uppercase tracking-[.2em] text-[#6ee8d7]">um jeito mais leve de resolver</p><h2 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-[.95] tracking-[-.065em] text-[#f2f0e8] sm:text-6xl">Escaneamos.<br />Explicamos. <span className="text-[#6ee8d7]">Resolvemos.</span></h2></div><p className="max-w-xs text-sm leading-relaxed text-[#aaa1b5]">Três movimentos simples para você sair da dúvida e ir para a ação.</p></div><div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-3">{steps.map(({ no, title, icon: Icon, text }, i) => <div key={no} className={`reveal reveal-delay-${i + 1} bg-[#211438] p-7 sm:p-9`}><div className="flex items-start justify-between"><span className="font-mono-ui text-sm text-[#6ee8d7]">{no}</span><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#6ee8d7]/10 text-[#6ee8d7]"><Icon size={21} /></span></div><h3 className="mt-16 font-display text-3xl font-bold text-[#f2f0e8]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-[#aaa1b5]">{text}</p></div>)}</div><div className="reveal mt-9 text-center"><WhatsAppLink testId="link-method-whatsapp" className="inline-flex items-center gap-2 rounded-full border border-[#6ee8d7]/50 px-6 py-3.5 text-sm font-bold text-[#6ee8d7] transition-colors hover:bg-[#6ee8d7] hover:text-[#211438]">Começar uma conversa <ArrowUpRight size={16} /></WhatsAppLink></div></div></section>;
}

function Services() {
  return <section id="servicos" className="px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><div className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono-ui text-xs font-bold uppercase tracking-[.2em] text-[#d88fb8]">onde a gente entra</p><h2 className="mt-4 font-display text-5xl font-bold leading-none tracking-[-.065em] text-[#f2f0e8] sm:text-6xl">O que resolvemos</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#aaa1b5]">Soluções diretas para problemas reais — do documento vencido à empresa desorganizada.</p></div><div className="grid gap-4 md:grid-cols-2">{services.map(({ icon: Icon, index, title, intro, items, cta }, i) => <article key={title} className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#211438] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6ee8d7]/40 sm:p-9`}><div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#7051c9]/10 blur-3xl transition-transform duration-500 group-hover:scale-150" /><div className="relative flex items-start justify-between"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#7051c9]/20 text-[#d7c4ff]"><Icon size={23} /></div><span className="font-mono-ui text-xs text-[#6f667b]">{index}</span></div><h3 className="relative mt-10 font-display text-3xl font-bold text-[#f2f0e8]">{title}</h3><p className="relative mt-2 max-w-sm text-sm leading-relaxed text-[#aaa1b5]">{intro}</p><ul className="relative mt-7 space-y-3 border-t border-white/[.08] pt-5">{items.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm text-[#d0c9d4]"><Check size={16} className="mt-0.5 shrink-0 text-[#6ee8d7]" />{item}</li>)}</ul><WhatsAppLink testId={`link-service-${index}`} className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#6ee8d7] transition-colors hover:text-[#f2f0e8]">{cta} <ArrowRight size={16} /></WhatsAppLink></article>)}</div></div></section>;
}

function EducationAndTrust() {
  return <section className="px-5 pb-24 sm:px-8 lg:pb-32"><div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.15fr_.85fr]"><div className="reveal relative overflow-hidden rounded-[1.75rem] bg-[#6ee8d7] p-8 text-[#211438] sm:p-12"><div className="absolute -right-10 -top-12 h-60 w-60 rounded-full border-[34px] border-[#211438]/[.07]" /><div className="relative"><p className="font-mono-ui text-xs font-bold uppercase tracking-[.18em] text-[#436f6e]">conteúdo que ajuda</p><h2 className="mt-6 max-w-xl font-display text-5xl font-bold leading-[.94] tracking-[-.06em] sm:text-6xl">Você resolve hoje.<br />Aprende para<br />não errar amanhã.</h2><p className="mt-7 max-w-md text-base leading-relaxed text-[#345858]">Explicamos por que a multa existe, para onde vai o pagamento e como evitar novos problemas.</p><a href="#faq" data-testid="link-education-faq" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#211438] px-5 py-3 text-sm font-bold text-[#f2f0e8] transition-transform hover:-translate-y-1">Tirar minhas dúvidas <ArrowRight size={16} /></a></div></div><div className="reveal reveal-delay-1 flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#211438] p-8 sm:p-10"><div><ShieldCheck className="text-[#d88fb8]" size={34} /><h3 className="mt-7 font-display text-3xl font-bold text-[#f2f0e8]">Feito nos canais oficiais.</h3><p className="mt-4 leading-relaxed text-[#aaa1b5]">Sem promessa impossível. Sem atalho ilegal. Só clareza, método e solução.</p></div><div className="mt-10 border-t border-white/[.08] pt-6"><p className="font-mono-ui text-xs uppercase tracking-[.16em] text-[#6f667b]">a nossa régua</p><p className="mt-2 text-lg font-bold text-[#6ee8d7]">Transparência antes da venda.</p></div></div></div></section>;
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <section id="faq" className="bg-[#f0eee5] px-5 py-24 text-[#211438] sm:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]"><div className="reveal"><p className="font-mono-ui text-xs font-bold uppercase tracking-[.2em] text-[#7051c9]">perguntas honestas</p><h2 className="mt-5 font-display text-5xl font-bold leading-[.94] tracking-[-.065em] sm:text-6xl">Antes de chamar, você pode entender.</h2><p className="mt-6 max-w-sm leading-relaxed text-[#665d6e]">E se ainda sobrar alguma dúvida, a conversa com a Mev começa por ela.</p></div><div className="reveal reveal-delay-1 divide-y divide-[#211438]/10 border-y border-[#211438]/10">{faqs.map(([question, answer], i) => <div key={question}><button type="button" aria-expanded={active === i} data-testid={`button-faq-${i}`} onClick={() => setActive(active === i ? null : i)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-bold"><span>{question}</span><ChevronDown size={19} className={`shrink-0 transition-transform ${active === i ? 'rotate-180 text-[#7051c9]' : 'text-[#897f90]'}`} /></button><div className={`grid transition-[grid-template-rows] duration-300 ${active === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p data-testid={`text-faq-answer-${i}`} className="max-w-2xl pb-5 pr-8 text-sm leading-relaxed text-[#665d6e]">{answer}</p></div></div></div>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="relative overflow-hidden px-5 py-28 text-center sm:px-8 lg:py-40"><div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7051c9]/15 blur-3xl" /><div className="relative mx-auto max-w-4xl"><p className="reveal font-mono-ui text-xs font-bold uppercase tracking-[.2em] text-[#6ee8d7]">pronto para respirar mais leve?</p><h2 className="reveal reveal-delay-1 mt-6 font-display text-5xl font-bold leading-[.91] tracking-[-.075em] text-[#f2f0e8] sm:text-7xl">Chega de perder tempo decifrando sigla.</h2><p className="reveal reveal-delay-2 mx-auto mt-7 max-w-xl text-lg text-[#aaa1b5]">Fale com a Mev e organize sua vida — do veículo ao negócio.</p><WhatsAppLink testId="link-final-whatsapp" className="shine-button reveal reveal-delay-3 mt-9 inline-flex items-center gap-2 rounded-full bg-[#6ee8d7] px-8 py-4 font-bold text-[#211438] transition-transform hover:-translate-y-1">Resolver pelo WhatsApp <MessageCircle size={18} /></WhatsAppLink><p className="reveal mt-12 font-display text-xl font-bold text-[#f2f0e8]">Clareza gera confiança. <span className="text-[#d88fb8]">Confiança gera ação.</span></p></div></section>;
}

function Footer() {
  return <footer className="border-t border-white/[.08] bg-[#170d28] px-5 pb-8 pt-16 sm:px-8"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.3fr_.7fr_.9fr]"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-relaxed text-[#8f8798]">Facilitando sua vida veicular e empresarial com diagnóstico, tecnologia e conversa humana.</p><div className="mt-6 flex gap-2"><a href="https://www.instagram.com/mevconsultoriadigital/" target="_blank" rel="noreferrer" aria-label="Instagram da Mev" data-testid="link-instagram" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-[#b4acba] transition-colors hover:border-[#6ee8d7] hover:text-[#6ee8d7]"><Instagram size={17} /></a><a href="https://www.facebook.com/mevconsultoriadigital/" target="_blank" rel="noreferrer" aria-label="Facebook da Mev" data-testid="link-facebook" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-[#b4acba] transition-colors hover:border-[#6ee8d7] hover:text-[#6ee8d7]"><Facebook size={17} /></a></div></div><div><h3 className="font-bold text-[#f2f0e8]">Navegação</h3><div className="mt-5 flex flex-col gap-3 text-sm text-[#8f8798]"><a href="#manifesto" data-testid="link-footer-manifesto" className="hover:text-[#6ee8d7]">Quem somos</a><a href="#metodologia" data-testid="link-footer-method" className="hover:text-[#6ee8d7]">Como funciona</a><a href="#servicos" data-testid="link-footer-services" className="hover:text-[#6ee8d7]">Serviços</a><a href="#faq" data-testid="link-footer-faq" className="hover:text-[#6ee8d7]">Dúvidas</a></div></div><div><h3 className="font-bold text-[#f2f0e8]">Vamos conversar</h3><div className="mt-5 flex flex-col gap-4 text-sm text-[#8f8798]"><WhatsAppLink testId="link-footer-whatsapp" className="flex items-center gap-2 hover:text-[#6ee8d7]"><MessageCircle size={16} /> Atendimento pelo WhatsApp</WhatsAppLink><span className="flex items-center gap-2"><Mail size={16} /> contato@mevconsultoria.com.br</span><span className="flex items-center gap-2"><Clock3 size={16} /> Seg a sex, das 9h às 18h</span></div></div></div><div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/[.08] pt-6 text-xs text-[#6f667b] sm:flex-row sm:items-center sm:justify-between"><span data-testid="text-copyright">© 2025 Mev Consultoria Digital. Todos os direitos reservados.</span><span>Feito para deixar a burocracia mais humana.</span></div></footer>;
}

function FloatingWhatsApp() {
  return <WhatsAppLink testId="link-floating-whatsapp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-[#6ee8d7]/40 bg-[#211438] px-4 py-3 text-sm font-bold text-[#6ee8d7] shadow-[0_12px_35px_rgba(0,0,0,.3)] transition-transform hover:-translate-y-1 sm:bottom-7 sm:right-7"><MessageCircle size={19} /><span className="hidden sm:inline">Falar com a Mev</span></WhatsAppLink>;
}

function Home() {
  const ref = useReveal();
  useEffect(() => {
    document.title = 'Mev Consultoria | Burocracia resolvida com clareza';
    const description = 'Licenciamento, multas, CNH, transferência e MEI. A Mev traduz a burocracia e resolve com você, 100% digital pelo WhatsApp.';
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', 'description'); document.head.appendChild(tag); }
    tag.setAttribute('content', description);
    const og = [['og:title', 'Mev Consultoria | Burocracia resolvida com clareza'], ['og:description', description], ['og:type', 'website'], ['og:url', 'https://mevconsultoria.com.br/']];
    og.forEach(([property, content]) => { let item = document.querySelector(`meta[property="${property}"]`); if (!item) { item = document.createElement('meta'); item.setAttribute('property', property); document.head.appendChild(item); } item.setAttribute('content', content); });
  }, []);
  return <div ref={ref} className="site-shell min-h-[100dvh]"><Header /><main><Hero /><PainSection /><Manifesto /><Methodology /><Services /><EducationAndTrust /><FAQ /><FinalCTA /></main><Footer /><FloatingWhatsApp /></div>;
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route path="/atendimento" component={Atendimento} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;