'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { leistungenData } from '@/data/leistungenData';

export default function LeistungenPageContent() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Unsere Leistungen im Überblick
            </h1>
            <p className="text-lg text-muted-foreground">
              Wir bieten Ihnen ein umfassendes Portfolio an Dienstleistungen.
              Dank unseres starken Partnernetzwerks erhalten Sie bei uns alles aus einer Hand –
              professionell koordiniert und zuverlässig ausgeführt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leistungenData.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg mb-2 shadow-lg">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold text-white leading-tight">
                      {category.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {category.description}
                  </p>

                  <Link
                    href={`/leistungen/${category.slug}`}
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-secondary text-white rounded-xl font-medium hover:bg-primary transition-colors group/btn"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
