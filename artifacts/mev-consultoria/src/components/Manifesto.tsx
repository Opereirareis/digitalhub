import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export function Manifesto() {
  const pilares = [
    {
      icon: <Zap className="w-8 h-8 text-[#805AD5]" />,
      titulo: 'Zero Burocracia Desnecessária',
      desc: 'O sistema tradicional é lento e confuso de propósito; a gente simplifica a rota. Velocidade real sem filas ou semanas de espera.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#805AD5]" />,
      titulo: 'Linguagem Humana',
      desc: 'Sem falar difícil ou usar termos jurídicos enrolados. Você sabe exatamente o que está pagando e cada etapa do que vai receber.',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#805AD5]" />,
      titulo: 'Foco em Quem Trabalha',
      desc: 'Tempo de quem tá na rua vale dinheiro. Nosso compromisso é resolver os travamentos para você rodar com tranquilidade.',
    },
  ];

  return (
    <section id="manifesto" className="bg-[#18181B] text-white py-24 px-6 border-t border-zinc-850">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#805AD5]/30 bg-[#805AD5]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#A78BFA] uppercase mb-4">
          O Propósito da MEV
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
          Por que a MEV <span className="text-[#805AD5]">existe?</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Acreditamos que regularizar seu meio de trabalho não deveria ser uma dor de cabeça.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pilares.map((pilar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#805AD5]/50 hover:bg-zinc-900/80 transition-all duration-300"
          >
            <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-[#805AD5]/10">
              {pilar.icon}
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-white">{pilar.titulo}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{pilar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
