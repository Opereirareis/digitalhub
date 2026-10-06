# MEV Consultoria Digital - Front-End

Website institucional e landing page moderna da **MEV Consultoria Digital**, focada em regularização de veículos e suporte a MEI/CNPJ com atendimento direto via WhatsApp.

## Operação & Comandos

- `pnpm --filter @workspace/mev-consultoria run dev` — executa o servidor Vite local
- `pnpm --filter @workspace/mev-consultoria run build` — compila o front-end para produção

## Stack Técnica

- **React 19**
- **Vite**
- **Tailwind CSS v4** (com `@theme inline` e utilitários modernos)
- **Radix UI** (Accordion, Tooltip, Dialog e componentes acessíveis)
- **Framer Motion** (animações fluidas de scroll e transição)
- **Lucide React** (ícones modernos e padronizados)
- **Wouter** (roteamento declarativo e leve)

## Identidade Visual

- **Fundo principal:** `#18181B` (Zinc escuro / Dark)
- **Texto base:** `#FFFFFF` com escala de cinzas `zinc-300`/`zinc-400`
- **Destaques & Acentos:** `#7342BB` / `#805AD5` (Roxo / Lilás elegante)
- **Botões de Ação (CTA WhatsApp):** `#25D366` (Verde conversão)
- **Tipografia:** Space Grotesk (títulos) e Inter (leitura)

## Estrutura de Páginas

- `/` — Landing Page principal (Header, Hero, Serviços, Manifesto, Como Funciona, FAQ Radix, CTA Final, Rodapé)
- `/servicos` — Página detalhada com soluções para Veículos, Motoristas/Entregadores e MEI
- `/sobre` — Página institucional com o propósito da MEV, metodologia e princípios
- `/atendimento` — Triagem interativa guiada para direcionar ao WhatsApp
- `/contato` — Canais oficiais de atendimento e suporte
- `/termos` — Termos de Uso
- `/politica` — Política de Privacidade (LGPD)
