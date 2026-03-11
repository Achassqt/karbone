// app/components/Contact.js
import styles from './Contact.module.css';
import equipeImg from '@/public/equipe.jpeg';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src={equipeImg} alt="Equipe" />
          </div>
          <div className={styles.contactContainer}>
            <h2 className={styles.title}>
              Un projet ? <br /> <span>Discutons-en.</span>
            </h2>
            <a href="mailto:karboneproductions@gmail.com" className={styles.btn}>
              Nous contacter <i className="ph-bold ph-paper-plane-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}