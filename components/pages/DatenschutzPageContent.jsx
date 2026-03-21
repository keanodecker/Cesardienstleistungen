'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DatenschutzPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-10">
              Datenschutzerklärung
            </h1>

            <div className="bg-white rounded-2xl shadow-soft border border-border/50 p-8 md:p-12 space-y-10">

              {/* 1. Datenschutz auf einen Blick */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">1. Datenschutz auf einen Blick</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Allgemeine Hinweise</h3>
                    <p className="leading-relaxed">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Datenerfassung auf dieser Website</h3>
                    <p className="leading-relaxed">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Wie erfassen wir Ihre Daten?</h3>
                    <p className="leading-relaxed">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Wofür nutzen wir Ihre Daten?</h3>
                    <p className="leading-relaxed">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Wenn Sie über die Website eine Anfrage stellen, werden Ihre Daten zur Bearbeitung Ihrer Anfrage und für eventuelle Anschlussfragen verarbeitet.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                    <p className="leading-relaxed">
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Hosting */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">2. Hosting</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Wir hosten die Inhalte unserer Website bei Vercel Inc., 340 Pine Street Suite 701, San Francisco, California 94104, USA. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Vercel:{' '}
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://vercel.com/legal/privacy-policy
                    </a>.
                  </p>
                  <p className="leading-relaxed">
                    Der Einsatz von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                  </p>
                </div>
              </section>

              {/* 3. Verantwortliche Stelle */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">3. Hinweis zur verantwortlichen Stelle</h2>
                <div className="text-muted-foreground space-y-2">
                  <p className="leading-relaxed mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p className="font-semibold text-secondary">Cesar Dienstleistungen</p>
                  <p>Sezer Ülker</p>
                  <p>Doler Platz 3</p>
                  <p>77933 Lahr/Schwarzwald</p>
                  <p>
                    Telefon:{' '}
                    <a href="tel:+4978215020962" className="hover:text-primary transition-colors">
                      +49 (0)7821 / 502 09 62
                    </a>
                  </p>
                  <p>
                    E-Mail:{' '}
                    <a href="mailto:mail@cesardienstleistungen.de" className="hover:text-primary transition-colors">
                      mail@cesardienstleistungen.de
                    </a>
                  </p>
                  <p className="leading-relaxed mt-4">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                  </p>
                </div>
              </section>

              {/* 4. Speicherdauer */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">4. Speicherdauer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
                </p>
              </section>

              {/* 5. Ihre Rechte */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">5. Ihre Rechte</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Auskunft, Berichtigung und Löschung</h3>
                    <p className="leading-relaxed">
                      Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Recht auf Einschränkung der Verarbeitung</h3>
                    <p className="leading-relaxed">
                      Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <p className="leading-relaxed">
                      Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Recht auf Datenübertragbarkeit</h3>
                    <p className="leading-relaxed">
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-2">Widerspruch gegen Werbe-E-Mails</h3>
                    <p className="leading-relaxed">
                      Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Kontaktformular */}
              <section>
                <h2 className="text-2xl font-bold text-secondary mb-4">6. Kontaktformular</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="leading-relaxed">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                  </p>
                  <p className="leading-relaxed">
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
