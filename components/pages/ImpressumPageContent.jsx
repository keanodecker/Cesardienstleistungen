'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ImpressumPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-10">
              Impressum
            </h1>

            <div className="bg-white rounded-2xl shadow-soft border border-border/50 p-8 md:p-12 space-y-10">

              {/* Angaben gem. § 5 TMG */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-secondary">Cesar Dienstleistungen</p>
                  <p>Sezer Ülker</p>
                  <p>Doler Platz 3</p>
                  <p>77933 Lahr/Schwarzwald</p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">Kontakt</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <span className="font-medium text-secondary">Telefon: </span>
                    <a href="tel:+4978215020962" className="hover:text-primary transition-colors">
                      +49 (0)7821 / 502 09 62
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-secondary">Mobil: </span>
                    <a href="tel:+491749804514" className="hover:text-primary transition-colors">
                      +49 (0)174 / 980 45 14
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-secondary">E-Mail: </span>
                    <a href="mailto:mail@cesardienstleistungen.de" className="hover:text-primary transition-colors">
                      mail@cesardienstleistungen.de
                    </a>
                  </p>
                </div>
              </section>

              {/* Unternehmensangaben */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">Unternehmensangaben</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <span className="font-medium text-secondary">Geschäftsführer: </span>
                    Sezer Ülker
                  </p>
                  <p>
                    <span className="font-medium text-secondary">Registergericht: </span>
                    Amtsgericht Freiburg
                  </p>
                  <p>
                    <span className="font-medium text-secondary">Registernummer: </span>
                    HRB 715071
                  </p>
                  <p>
                    <span className="font-medium text-secondary">Umsatzsteuer-ID gemäß § 27a UStG: </span>
                    1005605229
                  </p>
                </div>
              </section>

              {/* Verantwortlich */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Sezer Ülker</p>
                  <p>Doler Platz 3</p>
                  <p>77933 Lahr/Schwarzwald</p>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">Haftungsausschluss</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Haftung für Inhalte</h3>
                    <p className="leading-relaxed">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Haftung für Links</h3>
                    <p className="leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Urheberrecht</h3>
                    <p className="leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Streitschlichtung */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">Streitschlichtung</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
