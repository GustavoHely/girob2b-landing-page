import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const contactReasons = [
  {
    title: 'Quero comprar melhor',
    description:
      'Entenda como a Giro B2B pode ajudar sua equipe a descobrir fornecedores, organizar cotações e comparar opções com mais contexto.',
  },
  {
    title: 'Quero vender melhor',
    description:
      'Veja como transformar catálogo em oportunidade comercial e ganhar mais presença diante de compradores relevantes.',
  },
  {
    title: 'Quero acompanhar a evolução do projeto',
    description:
      'Se sua operação vive essa dor, faz sentido conversar cedo e construir a plataforma com mais aderência ao mercado real.',
  },
];

function Contact() {
  return (
    <div className="min-h-screen bg-[#f7fbf8] pt-24 pb-20">
      <div className={styles.container}>
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">Contato</div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-slate-950 md:text-6xl">
              Vamos conversar sobre como a Giro B2B pode entrar no seu fluxo comercial.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl">
              Esta página agora é uma rota própria para concentrar o próximo passo da jornada. Se você compra,
              vende ou quer acompanhar a evolução do projeto, esse é o melhor ponto para continuar a conversa.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              Como a plataforma ainda está em construção, a proposta aqui é abrir caminho para relacionamento,
              entendimento de cenário e conexão com empresas que vivem esse problema de verdade.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="https://girob2b.com.br" target="_blank" rel="noreferrer" className={styles.btnAccent}>
                Acessar girob2b.com.br
              </a>
              <Link to="/about" className={styles.btnOutline}>
                Ler Sobre a Empresa
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_28px_70px_rgba(18,61,43,0.08)] sm:p-8">
            <div className="inline-flex rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-brand-accent">
              Próximo passo
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
              A melhor conversa agora é entender a sua operação.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Em vez de um formulário genérico, a Giro B2B quer se aproximar de empresas que realmente sentem essa
              dor no dia a dia. Quanto mais contexto você trouxer, mais útil a conversa fica.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-emerald-100 bg-[#f4fbf6] p-5">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">Compra</div>
                <div className="mt-2 text-lg font-black text-slate-950">Cotações com mais visão de mercado</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-[#f4fbf6] p-5">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">Venda</div>
                <div className="mt-2 text-lg font-black text-slate-950">Mais exposição para fornecedores qualificados</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-[#f4fbf6] p-5">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">Produto</div>
                <div className="mt-2 text-lg font-black text-slate-950">Evolução guiada por problema real</div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-20 md:mt-24 xl:mt-28">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">Quem deve falar com a gente</div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Se você vive essa dor, essa rota existe para você.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {contactReasons.map((item) => (
              <article key={item.title} className={`${styles.cardPremium} h-full`}>
                <h3 className="text-xl font-black leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
