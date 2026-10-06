import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import mevLogo from '@assets/LogoMev01_1790362981951.jpg';
import { getWhatsAppLink } from '@/lib/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  const navLinks = [
    { href: isHome ? '#servicos' : '/servicos', label: 'Serviços' },
    { href: isHome ? '#manifesto' : '/sobre', label: 'Manifesto' },
    { href: isHome ? '#como-funciona' : '/#como-funciona', label: 'Como Funciona' },
    { href: isHome ? '#faq' : '/#faq', label: 'FAQ' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-[#18181B]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="MEV Consultoria Digital - Início"
          data-testid="link-logo"
          className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
        >
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-zinc-700 bg-white shadow-sm">
            <img
              src={mevLogo}
              alt="Logo MEV"
              className="h-full w-full object-cover"
              data-testid="img-brand-logo"
            />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            MEV<span className="text-[#805AD5]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#805AD5]"
            >
              {item.label}
            </a>
          ))}

          {/* CTA WhatsApp Button */}
          <a
            href={getWhatsAppLink('Olá! Vim pelo site da MEV e gostaria de atendimento.')}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-header-whatsapp"
            className="shine-button inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-zinc-950 shadow-md shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 hover:bg-[#22BF5B] hover:shadow-lg hover:shadow-[#25D366]/30"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
          data-testid="button-mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-zinc-800 bg-[#18181B] px-5 py-5 shadow-2xl md:hidden"
          aria-label="Menu móvel"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
                className="rounded-xl px-3 py-3 text-base font-medium text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-[#805AD5]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={getWhatsAppLink('Olá! Vim pelo site da MEV e gostaria de atendimento.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-whatsapp"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-base font-bold text-zinc-950 shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#22BF5B]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
