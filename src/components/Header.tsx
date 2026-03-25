import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const Header = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`${styles.container} ${styles.navbarInner}`}>
        <Link to="/" className={styles.navBrand} onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/giro-b2b-logo.svg"
            alt="Giro B2B"
            className="w-9 h-9 rounded bg-white object-contain p-0.5 shadow-sm shrink-0"
          />
          <div className="text-lg font-black tracking-tight text-slate-900 leading-none">
            Giro <span className="text-brand-accent">B2B</span>
          </div>
        </Link>

        <nav className={styles.navLinks}>
          <Link
            to="/como-funciona"
            className={`${styles.navLink} ${pathname === '/como-funciona' ? styles.navLinkActive : ''}`}
          >
            Como Funciona
          </Link>
          <Link
            to="/funcionalidades"
            className={`${styles.navLink} ${pathname === '/funcionalidades' ? styles.navLinkActive : ''}`}
          >
            Funcionalidades
          </Link>
          <Link
            to="/about"
            className={`${styles.navLink} ${pathname === '/about' ? styles.navLinkActive : ''}`}
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className={`${styles.navLink} ${pathname === '/contato' ? styles.navLinkActive : ''}`}
          >
            Contato
          </Link>
        </nav>

        <div className={styles.navCtas}>
          <Link to="/contato" className={styles.navCtaSecondary}>
            Entre em Contato
          </Link>
          <Link to="/contato" className={styles.navCta}>
            Seja um Parceiro
          </Link>
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
            <Link to="/como-funciona" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Como Funciona
            </Link>
            <Link to="/funcionalidades" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Funcionalidades
            </Link>
            <Link to="/about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Sobre
            </Link>
            <Link to="/contato" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Contato
            </Link>
          </nav>
          <div className={styles.mobileCtas}>
            <Link to="/contato" className={styles.navCtaSecondary} onClick={() => setIsMobileMenuOpen(false)}>
              Entre em Contato
            </Link>
            <Link to="/contato" className={styles.navCta} onClick={() => setIsMobileMenuOpen(false)}>
              Seja um Parceiro
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
