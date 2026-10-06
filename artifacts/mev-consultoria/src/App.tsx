import { useEffect, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Atendimento from '@/pages/atendimento';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Manifesto } from '@/components/Manifesto';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const queryClient = new QueryClient();

function Home() {
  useEffect(() => {
    document.title = 'MEV Consultoria Digital | Documentação de veículos e MEI sem dor de cabeça';
    const description =
      'Eliminamos as travas burocráticas para motoristas, entregadores e autônomos resolverem pendências de CRLV e MEI em minutos.';
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);

    const ogTags = [
      ['og:title', 'MEV Consultoria Digital | Documentação de veículos e MEI sem dor de cabeça'],
      ['og:description', description],
      ['og:type', 'website'],
      ['og:url', 'https://mevconsultoria.com.br/'],
    ];

    ogTags.forEach(([property, content]) => {
      let item = document.querySelector(`meta[property="${property}"]`);
      if (!item) {
        item = document.createElement('meta');
        item.setAttribute('property', property);
        document.head.appendChild(item);
      }
      item.setAttribute('content', content);
    });
  }, []);

  return (
    <div className="site-shell min-h-[100dvh] bg-[#18181B] text-white">
      {/* 1. Header: Logo MEV | Serviços | Manifesto | FAQ | [Contato] */}
      <Header />

      <main>
        {/* 2. Hero: Chamada direta + Promessa anti-burocracia + Botão CTA */}
        <Hero />

        {/* 3. Soluções: Cards modulares de serviços (Documentação & MEI) */}
        <Services />

        {/* 4. #manifesto: Bloco institucional sobre transparência e agilidade */}
        <Manifesto />

        {/* 5. Como Funciona: Linha do tempo em 3 passos simples */}
        <HowItWorks />

        {/* 6. FAQ: Dúvidas frequentes sanadas com Accordion (Radix) */}
        <FAQSection />

        {/* 7. CTA Final: Chamada de fechamento direto pro Zap */}
        <FinalCTA />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/atendimento" component={Atendimento} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;