'use client';

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // --- NOUVELLE FONCTION ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // 1. On empêche le navigateur de faire son comportement par défaut (saut brutal)
    e.preventDefault();

    // 2. On récupère l'ID (on enlève le #)
    const targetId = href.replace("#", "");
    
    // 3. On cherche l'élément dans le DOM
    const elem = document.getElementById(targetId);
    
    // 4. On scrolle vers l'élément
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // 5. On ferme le menu mobile
    setIsOpen(false);
  };

  // Petite liste pour éviter de répéter le code des liens
  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Réalisations", href: "#realisations" },
    { name: "Qui sommes-nous", href: "#quisommesnous" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-black text-white relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        <div className="text-xl font-bold z-50">MonProjet</div>

        {/* --- MENU DESKTOP --- */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)} // On attache la fonction ici
                  className="hover:text-gray-300 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- BOUTON BURGER --- */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-10 md:hidden border-t border-gray-800 animate-fadeIn">
          <ul className="flex flex-col space-y-6 text-center text-xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)} // On l'attache ici aussi
                  className="hover:text-gray-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}