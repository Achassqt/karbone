'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        
        {/* Texte Gauche */}
        <div className={styles.navLeft}>
          <h1>
            Production <br />
            Audiovisuelle <br />
            <div>France-Europe.</div>
          </h1>
        </div>

        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.logoMain}>Karbone</span>
            <span className={styles.logoSub}>Productions</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className={styles.menuDesktop}>
          <a href="#marque" className={styles.btnNeon}>
            <i className="ph ph-arrow-up-right"></i> La Marque
          </a>
          <a href="#realisations" className={styles.btnNeon}>
            <i className="ph ph-arrow-up-right"></i> Réalisations
          </a>
          <a href="#contact" className={styles.btnNeon}>
            <i className="ph ph-arrow-up-right"></i> Contacts
          </a>
        </div>

        {/* Mobile Button */}
        <button 
          className={styles.mobileBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="ph ph-list"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#marque" onClick={() => setMobileMenuOpen(false)}>La Marque</a>
          <a href="#realisations" onClick={() => setMobileMenuOpen(false)}>Réalisations</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contacts</a>
        </div>
      )}
    </nav>
  );
}