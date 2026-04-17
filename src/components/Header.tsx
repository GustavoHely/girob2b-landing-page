import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`${styles.container} ${styles.navbarInner}`}>
        <Link to="/" className={styles.navBrand} onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/giro-b2b-logo.svg"
            alt="GiroB2B"
            className="w-9 h-9 rounded bg-white object-contain p-0.5 shadow-sm shrink-0"
          />
          <div className="text-lg font-black tracking-tight text-slate-900 leading-none">
            Giro<span className="text-brand-accent">B2B</span>
          </div>
        </Link>

        <nav className={styles.navLinks}>
          <a href="/#como-funciona" className={styles.navLink}>
            Como Funciona
          </a>
          <a href="/#funcionalidades" className={styles.navLink}>
            Funcionalidades
          </a>
          <a href="/#sobre" className={styles.navLink}>
            Sobre
          </a>
          <a href="/#contato" className={styles.navLink}>
            Contato
          </a>
        </nav>

        <div className={styles.navCtas}>
          <a href="/#contato" className={styles.navCtaSecondary}>
            Entre em Contato
          </a>
          <a href="/#contato" className={styles.navCta}>
            Seja um Parceiro
          </a>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLine1Open : ''}`} />
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLine2Open : ''}`} />
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLine3Open : ''}`} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <a href="/#como-funciona" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Como Funciona
            </a>
            <a href="/#funcionalidades" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Funcionalidades
            </a>
            <a href="/#sobre" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Sobre
            </a>
            <a href="/#contato" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Contato
            </a>
          </nav>
          <div className={styles.mobileCtas}>
            <a href="/#contato" className={styles.navCtaSecondary} onClick={() => setIsMobileMenuOpen(false)}>
              Entre em Contato
            </a>
            <a href="/#contato" className={styles.navCta} onClick={() => setIsMobileMenuOpen(false)}>
              Seja um Parceiro
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
