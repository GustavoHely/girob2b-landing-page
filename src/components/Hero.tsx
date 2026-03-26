himport { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10">
            <h1 className="text-4xl md:text-5xl font-black text-slate-950 leading-[1.1] mb-8">
              Simplifique suas compras e acelere seus resultados com o Giro B2B.
            </h1>h
            <p className="text-xl text-slate-700 mb-6 max-w-xl leading-relaxed">
              Deixe a plataforma cuidar dos detalhes para que você possa se concentrar no que importa. Visualize seu catálogo de forma dinâmica e realize negociações ágeis e seguras. Aumente sua eficiência operacional e alcance suas metas mais rápido.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/como-funciona" className={styles.btnAccent}>
                Ver Como Funciona
              </Link>
              <Link to="/about" className={styles.btnOutline}>
                Conhecer a Plataforma
              </Link>
            </div>
            
            <div className={styles.heroHighlightsGrid}>
              <div className={styles.heroHighlightCard}>
                <div className={`${styles.heroHighlightIcon} text-brand-accent`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={styles.heroHighlightTitle}>Página e Catálogo Próprios</h3>
              </div>

              <div className={styles.heroHighlightCard}>
                <div className={`${styles.heroHighlightIcon} text-brand-accent`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-5.699-2.299C6.602 17.887 6.039 18 5.6 18c-1.4 0-2.321-.92-2.58-2.148A7.98 7.98 0 014 12C4 7.582 7.582 4 12 4s8 3.582 8 8z" />
                  </svg>
                </div>
                <h3 className={styles.heroHighlightTitle}>Negociação Real</h3>
              </div>

              <div className={styles.heroHighlightCard}>
                <div className={`${styles.heroHighlightIcon} text-brand-accent`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className={styles.heroHighlightTitle}>Catálogo Dinâmico</h3>
              </div>
            </div>
          </div>

          <div className="relative hidden xl:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl border border-emerald-100 bg-white/85 p-4 shadow-[0_34px_100px_rgba(18,61,43,0.12)] backdrop-blur-2xl rotate-2">
              <div className={`bg-gradient-to-br from-white via-emerald-50 to-emerald-100/80 rounded-2xl overflow-hidden aspect-video flex items-center justify-center ${styles.handshakeScene}`}>
                <div className={`${styles.handshakePerson} ${styles.handshakePersonLeft}`}>A</div>
                <div className={`${styles.handshakeIcon} ${styles.handshakePulse}`}>
                  <svg className="w-10 h-10 text-emerald-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.121 14.121a3 3 0 01-4.242 0L6.343 10.586A2 2 0 017 7.757l2.879 2.88a1 1 0 001.414 0l2.121-2.121a2 2 0 112.828 2.828l-2.121 2.121z" />
                    <path d="M15.536 5.05a4 4 0 00-5.657 0L7.05 7.879 5.636 6.464a2 2 0 00-2.829 2.828L5.05 11.536a4 4 0 002.829 1.172c.552 0 1.086-.112 1.586-.329l1.293 1.293a4 4 0 005.657 0l2.122-2.121a2 2 0 00-2.829-2.829l-2.121 2.122a1 1 0 01-1.415 0l-.707-.707 3.536-3.536a2 2 0 00-2.829-2.829z" />
                  </svg>
                </div>
                <div className={`${styles.handshakePerson} ${styles.handshakePersonRight}`}>B</div>
                <div className={styles.handshakeCaption}>Fechando negociação</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -bottom-6 right-0 bg-white p-6 rounded-2xl shadow-2xl animate-bounce">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">↑</span>
                </div>
                <div>
                  <div className="text-slate-900 font-black text-xl">B2B</div>
                  <div className="text-slate-500 text-xs font-bold uppercase">Conexão direta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
