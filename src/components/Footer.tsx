import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-emerald-100 bg-[#edf6ef] pt-24 pb-12">
      <div className={styles.container}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/giro-b2b-logo.svg"
                alt="Giro B2B"
                className="w-10 h-10 rounded bg-white object-contain p-0.5 shadow-sm"
              />
              <span className="text-xl font-black tracking-tighter text-slate-950">Giro <span className="text-brand-accent">B2B</span></span>
            </div>
            <p className="leading-relaxed text-slate-600">
              Liderando a transformação digital no mercado B2B com tecnologia de ponta e foco em resultados.
            </p>
          </div>
          
          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-widest text-slate-900">Plataforma</h5>
            <ul className="space-y-4">
              <li><Link to="/como-funciona" className="text-slate-600 hover:text-brand-accent transition-colors">Como Funciona</Link></li>
              <li><Link to="/funcionalidades" className="text-slate-600 hover:text-brand-accent transition-colors">Funcionalidades</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-brand-accent transition-colors">Proposta da Plataforma</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-widest text-slate-900">Empresa</h5>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 hover:text-brand-accent transition-colors">Sobre Nós</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-brand-accent transition-colors">Nossa Origem</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-brand-accent transition-colors">Escopo do Produto</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-widest text-slate-900">Contato</h5>
            <ul className="space-y-4">
              <li><Link to="/contato" className="text-slate-600 hover:text-brand-accent transition-colors">Falar com o Time</Link></li>
              <li><Link to="/contato" className="text-slate-600 hover:text-brand-accent transition-colors">Seja um Parceiro</Link></li>
              <li><a href="https://girob2b.com.br" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-brand-accent transition-colors">girob2b.com.br</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-emerald-100 pt-12 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Giro B2B. Todos os direitos reservados.
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
