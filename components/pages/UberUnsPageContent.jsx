'use client';

import { motion } from 'framer-motion';
import { Network, ShieldCheck, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function UberUnsPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-secondary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Wir sind Ihr zentraler Ansprechpartner
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Lernen Sie das Konzept hinter Cesar Dienstleistungen kennen und erfahren Sie, warum wir die ideale Lösung für Ihre Projekte sind.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  Das Prinzip der Komplettlösung
                </h2>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cesar Dienstleistungen verfügt über ein breites Netzwerk an geprüften Branchen-Partnern. Das bedeutet für Sie: Sie beauftragen nur uns – und müssen sich nicht selbst um fünf verschiedene Dienstleister kümmern, um Ihr gewünschtes Ergebnis zu erzielen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir koordinieren alles für Sie – professionell, zuverlässig und aus einer Hand. Egal ob es um die Betreuung von Angehörigen, komplexe Bauprojekte oder die Organisation eines Events geht, wir haben die richtigen Experten in unserem Netzwerk.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1551135049-8a33b5883817"
                    alt="Professionelles Meeting und Planung"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-border/50"
              >
                <Network className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-secondary mb-4">Starkes Netzwerk</h3>
                <p className="text-muted-foreground">
                  Wir arbeiten ausschließlich mit etablierten und von uns geprüften Partnerunternehmen zusammen, um höchste Qualität zu garantieren.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl border border-border/50"
              >
                <Target className="w-12 h-12 text-accent-cyan mb-6" />
                <h3 className="text-xl font-bold text-secondary mb-4">Ein Ansprechpartner</h3>
                <p className="text-muted-foreground">
                  Sie kommunizieren nur mit uns. Wir übernehmen die gesamte Koordination im Hintergrund und halten Sie stets auf dem Laufenden.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-50 p-8 rounded-2xl border border-border/50"
              >
                <ShieldCheck className="w-12 h-12 text-accent-green mb-6" />
                <h3 className="text-xl font-bold text-secondary mb-4">Geprüfte Qualität</h3>
                <p className="text-muted-foreground">
                  Jedes Projekt wird von uns überwacht und abgenommen. Wir stehen mit unserem Namen für das finale Ergebnis ein.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
