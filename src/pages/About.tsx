import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const painPoints = [
  {
    title: 'A compra acaba presa nos mesmos contatos',
    description:
      'Muita cotação corporativa ainda começa com os mesmos três fornecedores de sempre. Não por excelência, mas por falta de tempo e visibilidade de alternativas.',
  },
  {
    title: 'Descobrir fornecedor novo no Brasil dá trabalho',
    description:
      'Google ruim, site desatualizado, telefone que não atende e indicação informal tornam a busca cansativa e pouco confiável.',
  },
  {
    title: 'Falta referência real de preço e opção',
    description:
      'Quando a empresa não compara com contexto, ela perde a chance de entender se está pagando o valor justo ou ignorando parceiros melhores.',
  },
  {
    title: 'Fornecedor bom também sofre para aparecer',
    description:
      'Quem vende bem muitas vezes depende de lead caro, relacionamento antigo ou de uma presença digital que a equipe comercial não consegue manter.',
  },
  {
    title: 'O mercado é enorme, mas fragmentado',
    description:
      'De parafusos a geradores, de insumos agrícolas a máquinas industriais, a oferta existe. O problema é conectar a demanda certa com a empresa certa.',
  },
  {
    title: 'A negociação fica espalhada demais',
    description:
      'Mensagens, propostas, catálogos e orçamentos vivem em canais separados, o que reduz clareza comercial e aumenta atrito operacional.',
  },
];

const platformPillars = [
  {
    eyebrow: 'Compra',
    title: 'Descoberta melhor de fornecedores',
    description:
      'Ajudamos compradores a sair do ciclo de comodismo e encontrar novas opções com mais contexto, filtro e confiança.',
  },
  {
    eyebrow: 'Cotação',
    title: 'Comparação real entre propostas',
    description:
      'A cotação deixa de ser uma troca dispersa de mensagens e passa a acontecer com histórico, organização e visibilidade.',
  },
  {
    eyebrow: 'Venda',
    title: 'Catálogo que gera oportunidade',
    description:
      'Fornecedores ganham uma vitrine mais viva para transformar portfólio em demanda comercial recorrente.',
  },
  {
    eyebrow: 'Mercado',
    title: 'Conexão mais direta entre oferta e demanda',
    description:
      'Estamos construindo uma camada de relacionamento B2B para aproximar empresas que já poderiam estar negociando hoje.',
  },
];

const scopeSuggestions = [
  {
    phase: 'Prioridade 1',
    title: 'Perfis robustos de fornecedores',
    description:
      'Cadastro com categorias, região atendida, capacidade, portfólio e dados comerciais para reduzir a incerteza na descoberta.',
  },
  {
    phase: 'Prioridade 1',
    title: 'Busca por categoria, aplicação e localização',
    description:
      'Quem compra precisa chegar rápido a fornecedores relevantes sem depender de busca genérica e indicação informal.',
  },
  {
    phase: 'Prioridade 1',
    title: 'Solicitação de cotação para vários fornecedores',
    description:
      'O núcleo da dor está aqui: enviar uma demanda, comparar respostas e enxergar opções sem repetir o processo do zero toda vez.',
  },
  {
    phase: 'Prioridade 2',
    title: 'Inbox comercial com histórico de negociação',
    description:
      'Mensagens, anexos, proposta e status da conversa no mesmo lugar ajudam compras e vendas a trabalharem com mais clareza.',
  },
  {
    phase: 'Prioridade 2',
    title: 'Qualificação e confiança',
    description:
      'Selos, documentos, reviews e sinais de atividade ajudam a separar fornecedor real de presença digital vazia.',
  },
  {
    phase: 'Prioridade 3',
    title: 'Inteligência de mercado e resposta',
    description:
      'Depois da operação básica funcionar, faz sentido evoluir para insights de preço, tempo médio de resposta e categorias com mais demanda.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#f7fbf8] pt-24 pb-20">
      <div className={styles.container}>
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
          <div id="plataforma">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">Sobre nós</div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-slate-950 md:text-6xl">
              A Giro B2B nasceu de uma dor simples: encontrar fornecedor ainda dá trabalho demais.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 md:text-xl">
              Na empresa onde tudo isso começou, cotar material quase sempre significava falar com os mesmos três
              fornecedores. Não porque eles fossem os melhores, mas porque buscar novas opções confiáveis no Brasil
              era um processo lento, cansativo e pouco transparente.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              Do outro lado, também existe o fornecedor com produto bom, operação séria e baixa visibilidade
              digital. Ele depende de lead caro, relação antiga ou de um site que nunca acompanha o ritmo da equipe
              comercial. A Giro B2B nasceu exatamente nesse encontro entre uma demanda real e uma oferta que não se
              conecta bem.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contato" className={styles.btnAccent}>
                Falar com o Time
              </Link>
              <a href="https://girob2b.com.br" target="_blank" rel="noreferrer" className={styles.btnOutline}>
                girob2b.com.br
              </a>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_28px_70px_rgba(18,61,43,0.08)] sm:p-8">
            <div className="inline-flex rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-brand-accent">
              Nossa origem
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950">
              Empresa nova, time pequeno, problema real.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Estamos construindo o lugar onde quem compra encontra quem vende, com mais contexto, menos atrito e
              mais chance de gerar negócio de verdade.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-emerald-100 bg-[#f4fbf6] p-5">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">Quem compra</div>
                <div className="mt-2 text-lg font-black text-slate-950">Menos dependência dos contatos antigos</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-[#f4fbf6] p-5">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">Quem vende</div>
                <div className="mt-2 text-lg font-black text-slate-950">Mais oportunidade sem lead caríssimo</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-[#f4fbf6] p-5">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">Mercado</div>
                <div className="mt-2 text-lg font-black text-slate-950">Conexão melhor entre oferta real e demanda real</div>
              </div>
            </div>
          </aside>
        </section>

        <section id="origem" className="mt-20 md:mt-24 xl:mt-28">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">Pontos centrais</div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              O problema não é falta de fornecedor. É falta de conexão eficiente.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Seu texto deixa clara uma tese forte de mercado: compras B2B ainda rodam no improviso e vendas B2B
              ainda dependem demais de canais caros ou mal estruturados. Esses são os pontos que a Giro B2B pode
              assumir como bandeira.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((item) => (
              <article key={item.title} className={`${styles.cardPremium} h-full`}>
                <h3 className="text-xl font-black leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:mt-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">O que estamos construindo</div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Um ponto de encontro comercial para compras e vendas industriais.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              A Giro B2B não precisa nascer tentando resolver tudo. O texto aponta com clareza que a força do
              produto está em organizar descoberta, cotação, catálogo e relacionamento comercial em um fluxo único.
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Se a plataforma resolver bem essa base, ela já entrega valor real para quem compra e abre um novo
              canal de crescimento para quem vende.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {platformPillars.map((pillar) => (
              <article key={pillar.title} className={`${styles.cardPremium} h-full`}>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">{pillar.eyebrow}</div>
                <h3 className="mt-3 text-xl font-black leading-tight text-slate-950">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="escopo" className="mt-20 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_26px_80px_rgba(18,61,43,0.07)] md:mt-24 md:p-8 xl:p-10">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-brand-accent">Sugestões de escopo</div>
            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              O escopo mais coerente com a ideia da empresa começa aqui.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Olhando para a dor original, a recomendação é priorizar funcionalidades que reduzam o trabalho de
              descobrir, comparar e confiar. Automações mais profundas e inteligência avançada fazem mais sentido
              depois que a base do fluxo estiver viva.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {scopeSuggestions.map((item) => (
              <article key={item.title} className="rounded-3xl border border-emerald-100 bg-[#f4fbf6] p-6">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">{item.phase}</div>
                <h3 className="mt-3 text-xl font-black leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[0.95rem]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
