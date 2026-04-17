import styles from '../styles/LandingPage.module.css';

const features = [
  {
    id: 'descoberta',
    title: 'Descoberta de fornecedores por categoria',
    description:
      'Busca direta por segmento, região e tipo de produto, com fornecedores apresentados em contexto para facilitar comparação e decisão.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 'catalogo',
    title: 'Catálogo vivo para quem vende',
    description:
      'Fornecedores publicam portfólio, capacidade e diferenciais em uma vitrine digital pensada para gerar oportunidades comerciais reais.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 'comparacao',
    title: 'Comparação com contexto',
    description:
      'Avaliação de opções com filtros, referências e histórico de atividade, mantendo o processo organizado em um só ambiente.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M7 12h10m-7 6h4" />
      </svg>
    ),
  },
  {
    id: 'conformidade',
    title: 'Conformidade com a LGPD',
    description:
      'Dados cadastrais tratados conforme a Lei Geral de Proteção de Dados, com políticas claras de uso e compartilhamento.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="border-y border-emerald-100/80 bg-[#eef7f1] py-20 md:py-24 xl:py-28">
      <div className={styles.container}>
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">Funcionalidades</h2>
          <h3 className="mb-5 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            Uma base comercial clara para quem compra e para quem vende B2B.
          </h3>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            A GiroB2B organiza as etapas que hoje vivem soltas entre catálogos desatualizados,
            grupos de mensagem e buscas genéricas, para que a conexão entre fornecedor e comprador fique mais clara.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.id} className={`${styles.cardPremium} h-full`}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent md:mb-7 md:h-16 md:w-16">
                {feature.icon}
              </div>
              <h4 className="mb-3 text-lg font-bold text-slate-950 md:mb-4 md:text-xl">{feature.title}</h4>
              <p className="text-sm font-medium leading-relaxed text-slate-600 md:text-[0.95rem]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
