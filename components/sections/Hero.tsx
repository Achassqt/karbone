import Link from "next/link";
import Header from "../layout/Header"; // On importe le Header ici !

export default function Hero() {
  return (
    // Le conteneur fait 100% de la hauteur de l'écran (h-screen)
    // Et il empile les éléments verticalement (flex-col)
    <section id="accueil" className="h-screen w-full flex flex-col bg-gray-900">
      
      {/* 1. Le Header est en haut */}
      <Header />

      {/* 2. Le Reste du contenu prend TOUT l'espace restant (flex-1) */}
      <div className="relative flex-1 flex items-center justify-center text-white overflow-hidden">
        
        {/* Vidéo Background (confinée dans cette div) */}
        {/* <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover opacity-50">
          <source src="/ma-video.mp4" type="video/mp4" />
        </video> */}

        {/* Texte par-dessus la vidéo */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Bienvenue</h1>
          <p className="text-xl md:text-2xl mb-8">Une expérience digitale unique.</p>
          <Link 
            href="#realisations" 
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Voir mes travaux
          </Link>
        </div>
      </div>

    </section>
  );
}