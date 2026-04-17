import styles from '../../styles/LandingPage.module.css';

const contactReasons = [
  {
    title: 'Quero comprar melhor',
    description:
      'Entenda como a GiroB2B pode ajudar sua equipe a descobrir fornecedores, organizar pesquisas e comparar opções com mais contexto.',
  },
  {
    title: 'Quero vender melhor',
    description:
      'Veja como transformar catálogo em oportunidade comercial e ganhar mais presença diante de compradores relevantes.',
  },
  {
    title: 'Quero acompanhar o projeto',
    description:
      'Se sua operação vive essa dor, faz sentido conversar cedo e construir a plataforma com mais aderência ao mercado real.',
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="bg-white py-20 md:py-24 xl:py-28">
      <div className={styles.container}>
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">Contato</div>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.1] text-slate-950 md:text-5xl">
              Vamos conversar sobre como a GiroB2B pode entrar no seu fluxo comercial.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              Como a plataforma ainda está em construção, a proposta agora é abrir caminho para relacionamento,
              entendimento de cenário e conexão com empresas que vivem esse problema de verdade.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-[#f4fbf6] px-6 py-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Agenda</div>
                  <a href="https://cal.com/gustavo-hely/conversa-inicial" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-slate-950 hover:text-brand-accent transition-colors">
                    Agendar 30 min com o CEO
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-[#f4fbf6] px-6 py-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">E-mail</div>
                  <a href="mailto:comercial@girob2b.com.br" className="text-lg font-black text-slate-950 hover:text-brand-accent transition-colors">
                    comercial@girob2b.com.br
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://cal.com/gustavo-hely/conversa-inicial" target="_blank" rel="noopener noreferrer" className={styles.btnAccent}>
                Agendar conversa
              </a>
              <a href="mailto:comercial@girob2b.com.br" className={styles.btnOutline}>
                Enviar e-mail
              </a>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-emerald-100 bg-[#f4fbf6] p-6 shadow-[0_28px_70px_rgba(18,61,43,0.08)] sm:p-8">
            <div className="inline-flex rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-brand-accent">
              Quem deve falar com a gente
            </div>
            <div className="mt-6 space-y-4">
              {contactReasons.map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-emerald-100 bg-white p-5">
                  <div className="text-base font-black text-slate-950">{reason.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
