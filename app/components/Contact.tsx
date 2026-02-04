// app/components/Contact.js
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className={styles.title}>
          Un projet ? <br /> <span>Discutons-en.</span>
        </h2>
        <a href="mailto:karboneproductions@gmail.com" className={styles.btn}>
          Nous contacter <i className="ph-bold ph-paper-plane-right"></i>
        </a>
      </div>
    </section>
  );
}