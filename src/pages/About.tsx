import styles from '../styles/LandingPage.module.css';

const About = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20">
      <div className={styles.container}>
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Sobre a <span className="text-brand-accent">Giro B2B</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Somos um <strong>SaaS B2B Connector</strong>. Nossa plataforma conecta empresas em um ecossistema inteligente, 
            otimizando a pesquisa de compras corporativas e gerando novas receitas para fornecedores através de seus catálogos de produtos.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {/* Missão */}
          <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-accent/30 transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black text-white select-none -translate-y-8 translate-x-8">M</div>
             <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Nossa Missão</h3>
             <p className="text-slate-300 leading-relaxed relative z-10">
               Democratizar o acesso a um mercado B2B eficiente, onde compradores encontram os melhores parceiros e vendedores expandem seu alcance com um catálogo digital ativo.
             </p>
          </div>

          {/* Visão */}
          <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-accent/30 transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black text-white select-none -translate-y-8 translate-x-8">V</div>
             <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Nossa Visão</h3>
             <p className="text-slate-300 leading-relaxed relative z-10">
               Ser a infraestrutura padrão para conexões B2B na América Latina, onde cada transação é sinônimo de segurança, transparência e crescimento mútuo.
             </p>
          </div>

          {/* Valores */}
          <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-accent/30 transition-all">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black text-white select-none -translate-y-8 translate-x-8">V</div>
             <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Nossos Valores</h3>
             <ul className="text-slate-300 space-y-3 relative z-10">
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                 Conexão Real
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                 Foco no Cliente (Parceiro)
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                 Eficiência em Compras
               </li>
                <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                 Receita Recorrente
               </li>
             </ul>
          </div>
        </div>

        {/* Como Trabalhamos Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
               <h2 className="text-brand-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Metodologia</h2>
               <h3 className="text-3xl md:text-5xl font-black text-white mb-8">Nossa Plataforma</h3>
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-black shrink-0">1</div>
                   <div>
                     <h4 className="text-xl font-bold text-white mb-2">Conectamos Empresas</h4>
                     <p className="text-slate-400">Não desenvolvemos software sob medida. Entregamos uma plataforma SaaS pronta onde sua empresa se conecta instantaneamente a uma rede qualificada de parceiros.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-black shrink-0">2</div>
                   <div>
                     <h4 className="text-xl font-bold text-white mb-2">Otimizamos Compras</h4>
                     <p className="text-slate-400">Facilitamos a pesquisa e cotação. Compradores acessam um mercado auditado para encontrar as melhores ofertas com rapidez e compliance.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-black shrink-0">3</div>
                   <div>
                     <h4 className="text-xl font-bold text-white mb-2">Geramos Receita</h4>
                     <p className="text-slate-400">Vendedores expõem seus catálogos de forma dinâmica para toda a rede, transformando a plataforma em um canal de vendas ativo e escalável.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-accent/20 rounded-full blur-3xl"></div>
                <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl relative">
                   <div className="text-center">
                     <p className="text-slate-300 text-lg italic mb-6">"A Giro B2B mudou nossa visão de procurement. Deixou de ser operacional para ser estratégico."</p>
                     <div className="flex items-center justify-center gap-3">
                       <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
                       <div className="text-left">
                         <div className="text-white font-bold text-sm">Diretor de Operações</div>
                         <div className="text-brand-accent text-xs uppercase font-bold">Parceiro Enterprise</div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
