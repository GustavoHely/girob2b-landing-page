const Footer = () => {
  return (
    <footer id="contact" className="border-t border-emerald-100 bg-[#edf6ef] pt-24 pb-12">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/giro-b2b-logo.svg"
                alt="GiroB2B"
                className="w-10 h-10 rounded bg-white object-contain p-0.5 shadow-sm"
              />
              <span className="text-xl font-black tracking-tighter text-slate-950">Giro<span className="text-brand-accent">B2B</span></span>
            </div>
            <p className="leading-relaxed text-slate-600">
              Liderando a transformação digital no mercado B2B com tecnologia de ponta e foco em resultados.
            </p>
          </div>

          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-widest text-slate-900">Plataforma</h5>
            <ul className="space-y-4">
              <li><a href="/#como-funciona" className="text-slate-600 hover:text-brand-accent transition-colors">Como Funciona</a></li>
              <li><a href="/#funcionalidades" className="text-slate-600 hover:text-brand-accent transition-colors">Funcionalidades</a></li>
              <li><a href="/#sobre" className="text-slate-600 hover:text-brand-accent transition-colors">Proposta da Plataforma</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-widest text-slate-900">Empresa</h5>
            <ul className="space-y-4">
              <li><a href="/#sobre" className="text-slate-600 hover:text-brand-accent transition-colors">Sobre Nós</a></li>
              <li><a href="/#credibilidade" className="text-slate-600 hover:text-brand-accent transition-colors">Empresa Registrada</a></li>
              <li><a href="/#faq" className="text-slate-600 hover:text-brand-accent transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-widest text-slate-900">Contato</h5>
            <ul className="space-y-4">
              <li><a href="mailto:comercial@girob2b.com.br" className="text-slate-600 hover:text-brand-accent transition-colors">comercial@girob2b.com.br</a></li>
              <li><a href="/#contato" className="text-slate-600 hover:text-brand-accent transition-colors">Falar com o Time</a></li>
              <li><a href="/#contato" className="text-slate-600 hover:text-brand-accent transition-colors">Seja um Parceiro</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-emerald-100 pt-12 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} GiroB2B. Todos os direitos reservados.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Política de privacidade e termos em construção
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
