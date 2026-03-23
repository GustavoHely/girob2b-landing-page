import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={`${styles.container} ${styles.navbarInner}`}>
        <Link to="/" className={styles.navBrand} onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/giro-b2b-logo-light.svg"
            alt="Giro B2B"
            className="w-9 h-9 rounded bg-white object-contain p-0.5 shrink-0"
          />
          <div className="text-lg font-black tracking-tight text-white leading-none">
            Giro <span className="text-brand-accent">B2B</span>
          </div>
        </Link>

        <nav className={styles.navLinks}>
          <a href="/#features" onClick={(e) => scrollToSection(e, 'features')} className={styles.navLink}>
            Funcionalidades
          </a>
          <a href="/#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className={styles.navLink}>
            Investimento
          </a>
          <Link
            to="/about"
            className={`${styles.navLink} ${pathname === '/about' ? styles.navLinkActive : ''}`}
          >
            Sobre
          </Link>
          <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.navLink}>
            Contato
          </a>
        </nav>

        <div className={styles.navCtas}>
          <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.navCtaSecondary}>
            Entre em Contato
          </a>
          <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.navCta}>
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
            <a href="/#features" onClick={(e) => scrollToSection(e, 'features')} className={styles.mobileNavLink}>
              Funcionalidades
            </a>
            <a href="/#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className={styles.mobileNavLink}>
              Investimento
            </a>
            <Link to="/about" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Sobre
            </Link>
            <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.mobileNavLink}>
              Contato
            </a>
          </nav>
          <div className={styles.mobileCtas}>
            <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.navCtaSecondary}>
              Entre em Contato
            </a>
            <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.navCta}>
              Seja um Parceiro
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
