import './globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Cesar Dienstleistungen - Die Komplettlösung',
  description: 'Rund um das Haus, rund um die Person. Cesar Dienstleistungen ist Ihr rundum Sorglos-Paket in Lahr/Schwarzwald.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}
