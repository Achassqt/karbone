// app/components/Brand.js
import styles from './Brand.module.css';

export default function Brand() {
  return (
    <section id="marque" className={styles.section}>
      <div className="container">
        
        <div className={styles.gridText}>
          <div className={styles.leftCol}>
            <h2>
              LA MARQUE<span>.</span>
            </h2>
            <h3>
              Un film n'est pas un produit. <br />
              C'est une signature.
            </h3>
            <p className={styles.subtitle}>Des films de caractère, uniques.</p>
          </div>
          
          <div className={styles.rightCol}>
            <p>
              <strong>Karbone Productions</strong> est une structure de création audiovisuelle indépendante, spécialisée dans <strong>la vidéo et la photographie.</strong>
            </p>
            <p>
              Nous réalisons des films institutionnels, publicités, clips, documentaires, des captations d'événements ainsi que des shootings photos.
            </p>
            <p>
              Nous aimons raconter des histoires avec <strong>une approche humaine et cinématographique.</strong> De l'écriture à la postproduction, nous mettons en place des moyens de production adaptés à vos besoins.
            </p>
          </div>
        </div>

        <div className={styles.gridImages}>
           <div className={styles.imgWrapper}>
                <img src="/illu_brand_1.jpg" alt="illu_brand_1" />
           </div>
           <div className={styles.imgWrapper}>
                <img src="/illu_brand_2.jpg" alt="illu_brand_2" />
           </div>
           <div className={styles.imgWrapper}>
                <img src="/illu_brand_3.jpg" alt="illu_brand_3" />
           </div>
        </div>

      </div>
    </section>
  );
}