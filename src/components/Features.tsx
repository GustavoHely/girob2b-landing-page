import styles from '../styles/LandingPage.module.css';

const features = [
  {
    title: 'Inteligência de Mercado',
    description: 'Dados em tempo real para tomadas de decisão precisas e estratégicas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Automação de Fluxo',
    description: 'Reduza o trabalho manual em até 80% com nossos fluxos automatizados.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Segurança Enterprise',
    description: 'Compliance rigoroso, garantia de auditoria e conformidade total com a LGPD.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },

  {
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
    <section id="features" className="py-32 bg-slate-900">
      <div className={styles.container}>
        <div className="text-center mb-20">
          <h2 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">Por que o Giro B2B?</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Não priorizamos leads, <br /><span className="text-brand-accent">priorizamos receita.</span></h3>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
            Ao investir na plataforma, você não paga apenas por acesso ou 'possibilidade' de compra.
            Você investe em <span className="text-white font-bold">efetividade</span>.
            Nossa tecnologia elimina o ruído e garante que suas cotações e pesquisas se convertam em fechamentos reais com muito mais frequência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={styles.cardPremium}>
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
              <p className="text-slate-200 leading-relaxed font-medium opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
