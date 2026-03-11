import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brand from './components/Brand';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './components/Navbar.module.css';
import logo from '@/public/karbone.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      
      {/* Wrapper Nav + Hero pour le height */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
      </div>

      <Brand />
      <Projects />
      <Contact />

      {/* Footer simple inclus ici ou dans un composant à part */}
      <footer style={{ backgroundColor: '#000', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {/* <div className={styles.logo} style={{ flex: 1 }}>
            <span className={styles.logoMain}>Karbone</span>
            <span className={styles.logoSub}>Productions</span>
          </div> */}
          <div style={{ flex: 1 }}>
            <Image src={logo} alt="Karbone Productions" width={150} /> 
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "center", color: '#666', fontSize: '0.875rem' }}>© 2026 Karbone Productions.</div>
          <div style={{ flex: 1, display: 'flex', justifyContent: "flex-end", color: '#888' }}>
            <div style={{ display: "flex", flexDirection: "column"  }} className='linkContainer'>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                Suivez-nous :
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                {/* <a href=''>
                  <i className="ph-fill ph-facebook-logo"></i>
                </a> */}
                <a href='https://www.instagram.com/karboneproductions/' target="_blank" rel="noopener noreferrer">
                  <i className="ph-fill ph-instagram-logo"></i>
                </a>
                <a href='https://www.linkedin.com/company/karbone-productions' target="_blank" rel="noopener noreferrer">
                  <i className="ph-fill ph-linkedin-logo"></i>
                </a>
                <a href='https://www.youtube.com/@KarboneProductions' target="_blank" rel="noopener noreferrer">
                  <i className="ph-fill ph-youtube-logo"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}