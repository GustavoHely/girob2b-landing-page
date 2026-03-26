import styles from '../styles/LandingPage.module.css';

const features = [
  {
    id: 'market-intelligence',
    title: 'Inteligência de Mercado',
    description: 'Dados em tempo real para tomadas de decisão precisas e estratégicas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'workflow-automation',
    title: 'Automação de Fluxo',
    description: 'Menos etapas manuais entre a cotação e o fechamento, com fluxos organizados e diretos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'enterprise-security',
    title: 'Segurança Enterprise',
    description: 'Compliance rigoroso, garantia de auditoria e conformidade total com a LGPD.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },

  {
    id: 'national-scale',
    title: 'Escalabilidade Nacional',
    description: 'Infraestrutura robusta para atender operações em todo o território brasileiro.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="border-y border-emerald-100/80 bg-[#eef7f1] py-20 md:py-24 xl:py-28">
      <div className={styles.container}>
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">Por que o Giro B2B?</h2>
          <h3 className="mb-5 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl">
            Nós transformamos leads em <br /><span className="text-brand-accent">receitas verdadeiras.</span>
          </h3>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            Com a Giro B2B, sua empresa ganha mais oportunidades de transformar leads em receita.
            Nossa plataforma automatiza etapas de compra, cotação e orçamento entre diferentes materiais e
            fornecedores, reduzindo atritos operacionais e criando conexões mais fortes, estratégicas e lucrativas
            com o mercado.
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
