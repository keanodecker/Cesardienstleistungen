'use client';

import Link from 'next/link';
import { Mail, Phone, Smartphone, MapPin } from 'lucide-react';
import CallbackForm from '@/components/CallbackForm';
import { leistungenData } from '@/data/leistungenData';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Kontaktdaten</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-lg">Cesar Dienstleistungen</p>
                <p className="text-white/70">Sezer Ülker, Geschäftsführer</p>
              </div>

              <div className="flex items-start gap-3 text-white/90">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>Doler Platz 3<br />77933 Lahr/Schwarzwald</span>
              </div>

              <div className="flex items-center gap-3 text-white/90">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+4978215020962" className="hover:text-primary transition-colors">
                  +49 (0)7821 / 502 09 62
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/90">
                <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+491749804514" className="hover:text-primary transition-colors">
                  +49 (0)174 / 980 45 14
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/90">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:mail@cesardienstleistungen.de" className="hover:text-primary transition-colors">
                  mail@cesardienstleistungen.de
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Leistungen</h3>
            <ul className="space-y-3">
              {leistungenData.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/leistungen/${category.slug}`}
                    className="text-white/80 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {category.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/einsatzgebiete"
                  className="text-primary font-medium hover:text-white transition-colors flex items-center gap-2"
                >
                  Alle Einsatzgebiete ansehen &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Anfrage Rückruf</h3>
            <p className="text-sm text-white/70 mb-4">
              Hinterlassen Sie uns Ihre Nummer, wir rufen Sie umgehend zurück.
            </p>
            <CallbackForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Cesar Dienstleistungen. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <a
              href="https://cesarsicherheit.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors font-medium"
            >
              Cesar Sicherheit.de &rarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
