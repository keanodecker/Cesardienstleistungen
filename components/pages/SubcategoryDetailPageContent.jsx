'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function SubcategoryDetailPageContent({ category, subcategory }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-50 border-b border-border/50">
          <div className="container mx-auto px-4">
            <Link
              href={`/leistungen/${category.slug}`}
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zu {category.name}
            </Link>

            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight"
              >
                {subcategory.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                {subcategory.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              >
                <Image
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-secondary">
                  Professionelle Umsetzung für Ihr Anliegen
                </h2>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mit unserer Expertise im Bereich <strong>{subcategory.name}</strong> bieten wir Ihnen maßgeschneiderte Lösungen. Wir verstehen, dass jedes Projekt individuell ist und erfordert eine persönliche Herangehensweise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unser Netzwerk aus qualifizierten Fachkräften stellt sicher, dass alle Arbeiten nach höchsten Qualitätsstandards ausgeführt werden. Sie haben dabei stets nur einen Ansprechpartner: Uns.
                </p>

                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                    <span className="text-secondary font-medium">Individuelle Beratung vor Ort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                    <span className="text-secondary font-medium">Transparente Kostenkalkulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                    <span className="text-secondary font-medium">Zuverlässige und termingerechte Ausführung</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Interesse an dieser Leistung?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kontaktieren Sie uns unverbindlich. Wir beraten Sie gerne zu den Möglichkeiten im Bereich {subcategory.name}.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
