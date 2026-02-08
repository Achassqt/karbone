import './globals.css';
import { Inter, Oswald, Geom } from 'next/font/google';
import ColorPicker from './components/ColorPicker';
import { Analytics } from "@vercel/analytics/next"

const inter = Geom({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const geom = Geom({ subsets: ['latin'], variable: '--font-geom' });

export const metadata = {
  title: 'Karbone Productions',
  description: 'Production audiovisuelle France-Europe',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Chargement des icônes via CDN pour faire simple, ou npm install @phosphor-icons/react */}
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body suppressHydrationWarning>
        {children}
        <ColorPicker />
      </body>
      <Analytics />
    </html>
  );
}