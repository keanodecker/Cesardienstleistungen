import './globals.css';
import Providers from '@/components/Providers';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'Cesar Dienstleistungen - Die Komplettlösung',
  description: 'Rund um das Haus, rund um die Person. Cesar Dienstleistungen ist Ihr rundum Sorglos-Paket in Lahr/Schwarzwald.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
