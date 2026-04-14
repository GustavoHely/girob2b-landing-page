import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const steps = [
  {
    step: '01',
    title: 'Estruture sua presença na rede',
    description:
      'Cadastre sua empresa, publique ou importe o catálogo e apresente sua oferta com contexto para compradores e fornecedores.',
  },
  {
    step: '02',
    title: 'Pesquise, compare e qualifique',
    description:
      'Centralize a descoberta de parceiros, acompanhe propostas e compare cenários antes de avançar para a negociação.',
  },
  {
    step: '03',
    title: 'Negocie com visão operacional',
    description:
      'Leve a conversa para um fluxo organizado, com histórico, catálogo vivo e mais clareza para fechar melhores acordos.',
  },
];

const flowHighlights = [
  'Onboarding de empresas em um ecossistema B2B',
  'Catálogo ativo para produtos e serviços',
  'Pesquisa com comparação de opções',
  'Negociação centralizada com mais contexto',
];

const valuePillars = [
  {
    eyebrow: 'Compras',
    title: 'Mais velocidade para encontrar o parceiro certo',
    description:
      'A operação deixa de depender de troca dispersa de mensagens e ganha um fluxo mais claro para pesquisa, avaliação e negociação.',
    bullets: ['Busca orientada a fornecedores qualificados', 'Comparação com menos ruído operacional'],
  },
  {
    eyebrow: 'Vendas',
    title: 'Mais previsibilidade para transformar catálogo em demanda',
    description:
      'Fornecedores deixam de atuar apenas por indicação e passam a aparecer em uma vitrine preparada para relacionamento comercial contínuo.',
    bullets: ['Catálogo exposto de forma mais estratégica', 'Canal recorrente para novas conversas comerciais'],
  },
  {
    eyebrow: 'Gestão',
    title: 'Mais visibilidade para acompanhar o ciclo inteiro',
    description:
      'A liderança passa a enxergar o andamento da operação em um só ambiente, reduzindo gargalos entre descoberta, proposta e fechamento.',
    bullets: ['Histórico mais organizado das negociações', 'Leitura melhor dos gargalos da operação'],
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-white py-20 md:py-24 xl:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="absolute -top-24 right-[-6rem] h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl md:h-72 md:w-72" />

      <div className={styles.container}>
        <div className="max-w-3xl">
          <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">Como funciona</h2>
          <h3 className="mb-5 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl">
            Uma jornada única para pesquisar, vender e negociar no B2B.
          </h3>
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">
            Em vez de operar compras e vendas em canais separados, o Giro B2B organiza a jornada em um ambiente
            único. Isso reduz ruído, melhora o contexto das negociações e dá mais consistência para transformar
            catálogo em relacionamento comercial real.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-14 xl:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.95fr)] xl:items-start">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <article key={step.step} className={`${styles.cardPremium} h-full`}>
                <div className="inline-flex rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-xs font-black tracking-[0.25em] text-brand-accent">
                  {step.step}
                </div>
                <h4 className="mt-5 text-xl font-bold leading-tight text-slate-950 lg:text-[1.35rem]">{step.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">{step.description}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-[1.5rem] border border-emerald-100 bg-[#f4fbf6] p-5 shadow-[0_30px_80px_rgba(18,61,43,0.08)] sm:p-6 lg:p-7">
            <div className="inline-flex rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
              O que entra no fluxo
            </div>
            <h4 className="mt-5 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
              Menos improviso operacional, mais clareza comercial.
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              A plataforma junta os blocos que normalmente ficam espalhados entre planilhas, catálogos soltos,
              conversas e múltiplos canais.
            </p>

            <ul className="mt-6 space-y-3 md:mt-8">
              {flowHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-800">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8">
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Compra</div>
                <div className="mt-2 text-lg font-black text-slate-950 md:text-xl">Pesquisa com contexto</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Venda</div>
                <div className="mt-2 text-lg font-black text-slate-950 md:text-xl">Catálogo mais ativo</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Negociação</div>
                <div className="mt-2 text-lg font-black text-slate-950 md:text-xl">Histórico centralizado</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Operação</div>
                <div className="mt-2 text-lg font-black text-slate-950 md:text-xl">Mais previsibilidade</div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 md:mt-20 xl:mt-24">
          <div className="mb-10 max-w-2xl md:mb-12">
            <h4 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl md:text-4xl">
              Valor percebido por quem compra, por quem vende e por quem gerencia a operação.
            </h4>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:gap-8 xl:grid-cols-3">
            {valuePillars.map((pillar) => (
              <article key={pillar.eyebrow} className={`${styles.cardPremium} h-full`}>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">{pillar.eyebrow}</div>
                <h5 className="mt-4 text-xl font-bold leading-tight text-slate-950 lg:text-2xl">{pillar.title}</h5>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">{pillar.description}</p>
                <ul className="mt-5 space-y-3">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[1.5rem] border border-emerald-100 bg-gradient-to-r from-[#eef8f1] via-white to-[#f2fbf5] p-6 shadow-[0_26px_70px_rgba(18,61,43,0.08)] md:mt-20 md:p-8 lg:mt-24 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">Próximo passo</div>
              <h4 className="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl md:text-4xl">
                Quer enxergar o Giro B2B aplicado ao seu fluxo comercial?
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Conheça melhor a proposta da plataforma e use a landing como ponto de entrada para levar o time
                comercial à conversa certa.
              </p>
            </div>

            <div className="flex flex-col gap-4 self-start sm:flex-row lg:shrink-0 lg:self-center">
              <Link to="/about" className={styles.btnAccent}>
                Conhecer a Plataforma
              </Link>
              <Link to="/contato" className={styles.btnOutline}>
                Falar com o Time
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
