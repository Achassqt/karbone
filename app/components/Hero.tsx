// app/components/Hero.js
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video autoPlay muted loop playsInline>
          <source src="/BOUCLE_KARBONE_SITE_1.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
    </header>
  );
}