'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function KontaktPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Treten Sie mit uns in Kontakt
            </h1>
            <p className="text-lg text-muted-foreground">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein konkretes Projekt besprechen?
              Nutzen Sie unser Formular oder rufen Sie uns direkt an.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-border/50">
                <h3 className="text-2xl font-bold text-secondary mb-6">Kontaktdaten</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Adresse</p>
                      <p className="text-muted-foreground mt-1">
                        Cesar Dienstleistungen<br />
                        Doler Platz 3<br />
                        77933 Lahr/Schwarzwald
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Telefon</p>
                      <a href="tel:+4978215020962" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                        +49 (0)7821 / 502 09 62
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Mobil</p>
                      <a href="tel:+491749804514" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                        +49 (0)174 / 980 45 14
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">E-Mail</p>
                      <a href="mailto:mail@cesardienstleistungen.de" className="text-muted-foreground hover:text-primary transition-colors mt-1 block break-all">
                        mail@cesardienstleistungen.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary text-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Geschäftsführung
                </h3>
                <p className="text-white/80">
                  Sezer Ülker<br />
                  Geschäftsführer
                </p>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
