import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';
import mevLogo from '@assets/LogoMev01_1790362981951.jpg';

export default function NotFound() {
  return (
    <div className="site-shell min-h-[100dvh] flex flex-col items-center justify-center bg-[#18181B] px-6 text-white text-center">
      <div className="max-w-md mx-auto">
        <span className="inline-grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-zinc-700 bg-white shadow-md mb-6">
          <img src={mevLogo} alt="Logo MEV" className="h-full w-full object-cover" />
        </span>

        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#805AD5] mb-2">
          ERRO 404
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Página não encontrada
        </h1>
        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
          O endereço que você tentou acessar não existe, foi alterado ou está temporariamente indisponível.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="shine-button inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-zinc-950 shadow-md shadow-[#25D366]/20 transition-all hover:bg-[#22BF5B]"
          >
            <Home size={16} />
            <span>Voltar ao Início</span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Página anterior</span>
          </button>
        </div>
      </div>
    </div>
  );
}
