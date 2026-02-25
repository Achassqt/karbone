'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

import corporate from '@/public/corpo.png';
import pub from '@/public/pub.jpg';
import event from '@/public/event.jpg';
import clip from '@/public/clip.jpg';

// Interface optionnelle pour la clarté, mais aide TS
interface Project {
  id: string;
  cardId: string;
  title: string;
  carouselTitle: React.ReactNode;
  desc1: string;
  desc2: string;
  img: string | StaticImageData;
  video: string;
}

const projects: Project[] = [
  { 
    id: 'slide-corporate', 
    cardId: 'card-corporate', 
    title: 'Corporate', 
    carouselTitle: <>FILMS <br/> D'ENTREPRISE</>,
    desc1: "Vous accompagner au mieux dans votre image de marque et votre communication.", 
    desc2: "Le film institutionnel donne un visage humain à votre structure. Au-delà des chiffres et des slogans, il met en lumière vos valeurs, vos équipes et votre impact réel.", 
    img: corporate,
    video: "https://github.com/Achassqt/karbone/releases/download/v1.0/FILMTBM7_Master_Web.mp4",
  },
  { 
    id: 'slide-pub', 
    cardId: 'card-pub', 
    title: 'PUB', 
    carouselTitle: <>FILMS <br/> PUBLICITAIRES</>,
    desc1: "Quelques secondes pour capter l’attention. Des images pour rester en tête.", 
    desc2: "Concept fort, réalisation soignée, rythme précis : notre objectif est simple transformer un message en impact.", 
    img: pub,
    video: "https://github.com/Achassqt/karbone/releases/download/v1.0/SALOMON_PUB_V7.mov",
  },
  { 
    id: 'slide-event', 
    cardId: 'card-event', 
    title: 'événementiel', 
    carouselTitle: <>FILMS <br/> ÉVÉNEMENTIELS</>,
    desc1: "Un instant capturé, une mémoire partagée.", 
    desc2: "La magie de l’instant présent, immortalisée. Capturant l’énergie, les émotions et les moments forts pour offrir un souvenir inoubliable à vos participants et à votre audience.", 
    img: event,
    video: "https://github.com/Achassqt/karbone/releases/download/v1.0/Battle.reborn.noir.et.blanc.16-9.mov",
  },
  { 
    id: 'slide-clip', 
    cardId: 'card-clip', 
    title: 'Clip', 
    carouselTitle: "CLIP",
    desc1: "Une chanson s’écoute. Un clip se ressent.", 
    desc2: "Le clip, c’est la rencontre entre le son et l’image, entre le rythme et l’émotion. Nous créons des univers visuels qui prolongent la musique, lui donnent un visage, une texture, une mémoire.", 
    img: clip,
    video: "https://github.com/Achassqt/karbone/releases/download/v1.0/CLIP_4THESUN_COMPRESS.mp4",
  },
];

export default function Projects() {
  const [activeCard, setActiveCard] = useState<string>('card-corporate');

  const [playingStatus, setPlayingStatus] = useState<Record<string, boolean>>({});

  const activeCardRef = useRef(activeCard);
  const isUserInteracting = useRef<boolean>(false);
  const isVideoPlaying = useRef<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const restartTimeout = useRef<NodeJS.Timeout | null>(null);

  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    activeCardRef.current = activeCard;

    projects.forEach(proj => {
      // Si ce projet n'est PAS celui affiché actuellement
      if (proj.cardId !== activeCard) {
        const videoEl = videoRefs.current.get(proj.id);
        // Si la vidéo existe et n'est pas déjà en pause, on la stop
        if (videoEl && !videoEl.paused) {
          videoEl.pause();
          // Note : L'événement 'onPause' sur la balise vidéo se déclenchera 
          // et mettra isVideoPlaying.current à false automatiquement.
        }
      }
    });
  }, [activeCard]);

  const handlePlayVideo = (id: string) => {
    const video = videoRefs.current.get(id);
    if (video) {
      video.play();
    }
  };

  // Fonction pour scroller vers un slide
  const scrollToSlide = (slideId: string, cardId: string) => {
    stopAutoScroll();
    const element = document.getElementById(slideId);
    
    // Vérification que carouselRef.current et element existent
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        // block: 'center', // Aligne le slide au centre vertical de l'écran
        inline: 'center' // Aligne le slide au centre horizontal du carousel
      });
      
      setActiveCard(cardId);
    }
  };

  const startAutoScroll = () => {
    if (autoScrollInterval.current) return;

    autoScrollInterval.current = setInterval(() => {
      if (isUserInteracting.current || isVideoPlaying.current) return;
      
      let currentIndex = projects.findIndex(p => p.cardId === activeCardRef.current);
      if (currentIndex === -1) currentIndex = 0;
      
      const nextIndex = (currentIndex + 1) % projects.length;
      const nextProject = projects[nextIndex];
      const element = document.getElementById(nextProject.id);
      
      if (carouselRef.current && element) {
        // Si on revient au début (nextIndex === 0), on scroll INSTANTANÉMENT ('auto')
        // Sinon on scroll doucement ('smooth')
        const scrollBehavior = nextIndex === 0 ? 'auto' : 'smooth';

        carouselRef.current.scrollTo({
          left: element.offsetLeft,
          behavior: scrollBehavior
        });
      }
    }, 6000);
  };

  const stopAutoScroll = () => {
    isUserInteracting.current = true;
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }

    if (restartTimeout.current) {
      clearTimeout(restartTimeout.current);
      restartTimeout.current = null;
    }
    
    // Redémarrage automatique après 15s d'inactivité
    restartTimeout.current = setTimeout(() => {
      isUserInteracting.current = false;
      // startAutoScroll();
    }, 15000);
  };

  useEffect(() => {
    const currentCarousel = carouselRef.current;
    const options = { root: currentCarousel, threshold: 0.5 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const project = projects.find(p => p.id === entry.target.id);
          if (project) setActiveCard(project.cardId);
        }
      });
    }, options);

    projects.forEach(p => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    // startAutoScroll();

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      if (restartTimeout.current) clearTimeout(restartTimeout.current);
      observer.disconnect();
    };
  }, []); 

  const handleNavigation = (direction: 'prev' | 'next') => {
    const currentIndex = projects.findIndex(p => p.cardId === activeCard);
    // Si l'index n'est pas trouvé, on prend le premier
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (safeIndex + 1) % projects.length;
    } else {
      // Modulo pour gérer le retour en arrière depuis le premier élément
      nextIndex = (safeIndex - 1 + projects.length) % projects.length;
    }

    const targetProject = projects[nextIndex];
    scrollToSlide(targetProject.id, targetProject.cardId);
  };

  return (
    <section id="realisations" className={styles.section}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <h2>RÉALISATIONS<span>.</span></h2>
        </div>

        {/* Navigation Cards */}
        <div className={styles.cardsGrid}>
          {projects.map((proj) => (
            <div 
              key={proj.cardId}
              id={proj.cardId}
              className={`${styles.card} ${activeCard === proj.cardId ? styles.active : ''}`}
              onClick={() => scrollToSlide(proj.id, proj.cardId)}
            >
              <div className={styles.cardImgContainer}>
                 <div className={styles.cardArrow}>
                    <i className="ph ph-arrow-up-right"></i>
                 </div>
                 <Image src={proj.img} alt={proj.title} />
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.desc1}</p>
            </div>
          ))}
        </div>

        <div className={styles.carouselWrapper}>

          <button 
            className={`${styles.navButton} ${styles.navPrev}`} 
            onClick={() => handleNavigation('prev')}
            aria-label="Précédent"
          >
            <i className="ph-bold ph-caret-left"></i>
          </button>

          {/* Carousel */}
          <div 
            id="carousel-container" 
            ref={carouselRef} 
            className={`no-scrollbar ${styles.carousel}`}
            onWheel={stopAutoScroll}
            onTouchStart={stopAutoScroll}
            onMouseDown={stopAutoScroll}
          > 
            {projects.map((proj) => (
              <div key={proj.id} id={proj.id} className={styles.slide}>
                <div className={styles.slideContent}>
                  <div className={styles.textRow}>
                    
                    {/* Colonne Description */}
                    <div className={styles.colDesc}>
                      <p className={styles.tagline}>{proj.desc1}</p>
                      <p className={styles.desc}>{proj.desc2}</p>
                    </div>
                    
                    {/* Colonne Titre */}
                    <div className={styles.colTitle}>
                      <h3>
                        {proj.carouselTitle}
                      </h3>
                    </div>

                  </div>

                  {/* Video Box */}
                  <div className={styles.videoBox}>
                    {!playingStatus[proj.id] && (
                      <button 
                        className={styles.playButtonOverlay} 
                        onClick={() => handlePlayVideo(proj.id)}
                      >
                        <i className="ph-fill ph-play" style={{ marginLeft: "-2px" }}></i>
                      </button>
                    )}

                    <video 
                      ref={(el) => {
                        if (el) videoRefs.current.set(proj.id, el);
                        else videoRefs.current.delete(proj.id);
                      }}
                      controls 
                      onPlay={() => { 
                        isVideoPlaying.current = true;
                        setPlayingStatus(prev => ({ ...prev, [proj.id]: true }));
                      }}
                      onPause={() => { 
                        isVideoPlaying.current = false;
                        setPlayingStatus(prev => ({ ...prev, [proj.id]: false }));
                      }}
                      onEnded={() => { 
                        isVideoPlaying.current = false;
                        setPlayingStatus(prev => ({ ...prev, [proj.id]: false }));
                      }}
                    >
                      <source src={proj.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={`${styles.navButton} ${styles.navNext}`} 
            onClick={() => handleNavigation('next')}
            aria-label="Suivant"
          >
            <i className="ph-bold ph-caret-right"></i>
          </button>

        </div>
      </div>
    </section>
  );
}