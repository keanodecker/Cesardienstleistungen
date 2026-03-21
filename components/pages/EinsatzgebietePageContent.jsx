'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { leistungenData } from '@/data/leistungenData';

export default function EinsatzgebietePageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <AnnouncementBar />
      <Header />

      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Unsere Einsatzgebiete
            </h1>
            <p className="text-lg text-muted-foreground">
              Wir sind flexibel und passen uns Ihren Bedürfnissen an. Hier finden Sie eine Übersicht der typischen Anwendungsbereiche für unsere verschiedenen Dienstleistungskategorien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leistungenData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft border border-border/50"
              >
                <h2 className="text-2xl font-bold text-secondary mb-6 pb-4 border-b border-border/50">
                  {category.name}
                </h2>
                <ul className="space-y-4">
                  {category.applicationAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
