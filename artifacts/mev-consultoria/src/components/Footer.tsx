import { MessageCircle, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import mevLogo from '@assets/LogoMev01_1790362981951.jpg';
import { SITE_INFO, getWhatsAppLink } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#121214] px-5 pb-12 pt-16 sm:px-8 text-zinc-400">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-2">
            <a
              href="#inicio"
              className="group inline-flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
              data-testid="link-footer-logo"
            >
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-zinc-700 bg-white">
                <img src={mevLogo} alt="Logo MEV" className="h-full w-full object-cover" />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                MEV<span className="text-[#805AD5]">.</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Eliminamos as travas burocráticas para motoristas, entregadores e autônomos resolverem
              pendências de veículos e MEI em minutos, 100% online.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da MEV"
                data-testid="link-instagram"
                className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-[#805AD5] hover:text-[#805AD5]"
              >
                <Instagram size={17} />
              </a>
              <a
                href={SITE_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da MEV"
                data-testid="link-facebook"
                className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-[#805AD5] hover:text-[#805AD5]"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="hover:text-[#805AD5] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#805AD5] transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#805AD5] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#805AD5] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="/atendimento" className="hover:text-[#805AD5] transition-colors">
                  Triagem de Atendimento
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={getWhatsAppLink('Olá! Vim pelo site da MEV.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Oficial</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#805AD5]" />
                <span className="text-zinc-300">{SITE_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-zinc-500" />
                <span className="text-xs text-zinc-400">{SITE_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/80 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© {currentYear} MEV Consultoria Digital. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito para deixar a burocracia humana e sem complicação.
          </p>
        </div>
      </div>
    </footer>
  );
}
