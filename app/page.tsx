import Hero from "@/components/sections/Hero";
import Realisations from "@/components/sections/Realisations";
import QuiSommesNous from "@/components/sections/QuiSommesNous";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Realisations />
      <QuiSommesNous />
      <Contact />

      <ScrollToTop />
    </main>
  );
}