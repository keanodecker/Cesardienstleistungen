'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type ConsentCategories = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'cookieConsent';

const defaultCategories: ConsentCategories = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 ${
        checked ? 'bg-primary' : 'bg-gray-200'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [categories, setCategories] = useState<ConsentCategories>(defaultCategories);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }

    const handleReopen = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setCategories({ ...defaultCategories, ...parsed });
        } catch {}
      }
      setVisible(true);
      setConfigOpen(true);
    };

    window.addEventListener('openCookieSettings', handleReopen);
    return () => window.removeEventListener('openCookieSettings', handleReopen);
  }, []);

  const saveConsent = (cats: ConsentCategories) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...cats, timestamp: Date.now() }));
    setVisible(false);
    setConfigOpen(false);
  };

  const acceptAll = () =>
    saveConsent({ necessary: true, functional: true, analytics: true, marketing: true });
  const rejectAll = () =>
    saveConsent({ necessary: true, functional: false, analytics: false, marketing: false });
  const saveCustom = () => saveConsent(categories);

  if (!visible) return null;

  return (
    <>
      {configOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998] backdrop-blur-sm"
          onClick={() => setConfigOpen(false)}
        />
      )}

      {configOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-border/50 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-2">Cookie-Einstellungen</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hier können Sie Ihre Cookie-Präferenzen verwalten. Notwendige Cookies sind für
                  die Funktion der Website erforderlich und können nicht deaktiviert werden.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4 p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-secondary text-sm">Notwendige Cookies</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Für den Betrieb der Website unbedingt erforderlich (z.B. Cookie-Einwilligung
                      speichern). Können nicht deaktiviert werden.
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded-full whitespace-nowrap">
                    Immer aktiv
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-secondary text-sm">Funktionale Cookies</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Ermöglichen erweiterte Funktionen und Personalisierungen der Website.
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-0.5">
                    <Toggle
                      checked={categories.functional}
                      onChange={(v) => setCategories((c) => ({ ...c, functional: v }))}
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-secondary text-sm">Analyse-Cookies</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Helfen uns zu verstehen, wie Besucher die Website nutzen.{' '}
                      <span className="italic">Aktuell nicht im Einsatz.</span>
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-0.5">
                    <Toggle
                      checked={categories.analytics}
                      onChange={(v) => setCategories((c) => ({ ...c, analytics: v }))}
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-secondary text-sm">Marketing-Cookies</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Werden für personalisierte Werbung eingesetzt.{' '}
                      <span className="italic">Aktuell nicht im Einsatz.</span>
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-0.5">
                    <Toggle
                      checked={categories.marketing}
                      onChange={(v) => setCategories((c) => ({ ...c, marketing: v }))}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={saveCustom}
                  className="flex-1 bg-primary text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-secondary text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Accept all
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 border border-border text-foreground text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Reject all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!configOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[997] p-3 md:p-5">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-border/50 p-4 md:p-5">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-secondary text-sm mb-1">
                    Wir verwenden Cookies
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Diese Website verwendet technisch notwendige Cookies. Mit Ihrer Zustimmung
                    können wir weitere Cookies einsetzen. Mehr dazu in unserer{' '}
                    <Link href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-row gap-2 flex-shrink-0">
                  <button
                    onClick={() => setConfigOpen(true)}
                    className="px-3 py-2 rounded-lg border border-border text-foreground text-xs font-medium hover:bg-slate-50 transition-colors whitespace-nowrap"
                  >
                    Configure
                  </button>
                  <button
                    onClick={rejectAll}
                    className="px-3 py-2 rounded-lg border border-primary text-primary text-xs font-medium hover:bg-primary/5 transition-colors whitespace-nowrap"
                  >
                    Reject all
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-3 py-2 rounded-lg bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
