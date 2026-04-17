import styles from '../../styles/LandingPage.module.css';

const credibilityItems = [
  {
    label: 'Empresa formalizada',
    value: 'GIROB2B Plataforma de Negócios Digitais',
    sub: 'Regime Inova Simples (I.S.)',
  },
  {
    label: 'CNPJ',
    value: '65.542.877/0001-50',
    sub: 'Ativo desde março de 2026',
  },
  {
    label: 'Sede',
    value: 'Brasil',
    sub: 'Operação 100% nacional',
  },
  {
    label: 'Contato institucional',
    value: 'comercial@girob2b.com.br',
    sub: 'Respondemos em até 2 dias úteis',
  },
  {
    label: 'Mercado endereçável',
    value: '24,2 milhões de empresas',
    sub: 'Base ativa no Brasil (IBGE)',
  },
  {
    label: 'Contexto',
    value: 'Comércio B2B fragmentado',
    sub: 'Majoritariamente off-line, em canais dispersos',
  },
];

export default function CredibilitySection() {
  return (
    <section id="credibilidade" className="bg-[#eef7f1] py-16 md:py-20">
      <div className={styles.container}>
        <div className="mb-10 text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">
            Empresa registrada
          </div>
          <h2 className="text-2xl font-black text-slate-950 sm:text-3xl md:text-4xl">
            Uma startup formal, com registro público e equipe identificada.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credibilityItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">
                {item.label}
              </div>
              <div className="text-base font-black leading-tight text-slate-950 md:text-lg">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-slate-600">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
