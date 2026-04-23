import { useState } from 'react';
import styles from '../styles/LandingPage.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`${styles.container} ${styles.navbarInner}`}>
        <a href="/" className={styles.navBrand} onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/logo-v3-g-isolated.png"
            alt="GiroB2B"
            className="w-9 h-9 object-contain shrink-0"
          />
          <div className="text-lg font-black tracking-tight text-slate-900 leading-none">
            Giro<span className="text-brand-accent">B2B</span>
          </div>
        </a>

        <nav className={styles.navLinks}>
          <a href="#como-funciona" className={styles.navLink}>
            Como Funciona
          </a>
          <a href="#pricing" className={styles.navLink}>
            Planos
          </a>
          <a href="#diferenciais" className={styles.navLink}>
            Diferenciais
          </a>
          <a href="#apoiado-por" className={styles.navLink}>
            Sobre
          </a>
          <a href="#faq" className={styles.navLink}>
            FAQ
          </a>
        </nav>

        <div className={styles.navCtas}>
          <a href="mailto:comercial@girob2b.com.br" className={styles.navCta}>
            Falar com o Time
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
            <a href="#como-funciona" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Como Funciona
            </a>
            <a href="#pricing" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Planos
            </a>
            <a href="#diferenciais" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Diferenciais
            </a>
            <a href="#apoiado-por" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              Sobre
            </a>
            <a href="#faq" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </a>
          </nav>
          <div className={styles.mobileCtas}>
            <a href="mailto:comercial@girob2b.com.br" className={styles.navCta} onClick={() => setIsMobileMenuOpen(false)}>
              Falar com o Time
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
