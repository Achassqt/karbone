// app/components/Hero.js
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video 
          autoPlay muted loop playsInline 
          poster="https://images.unsplash.com/photo-1598518619679-5847282c58a5?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
    </header>
  );
}