'use client';

import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { leistungenData } from '@/data/leistungenData';

const homepageImages = [
  "https://images.unsplash.com/photo-1600236034719-9d79b0758716",
  "https://images.unsplash.com/photo-1672172633490-0e4280e54ab3",
  "https://images.unsplash.com/photo-1566501146550-45ff79dad920",
  "https://images.unsplash.com/photo-1702948545240-b44e3c1b86f4",
  "https://images.unsplash.com/photo-1677981316539-d2464643b1c8",
  "https://images.unsplash.com/photo-1670541830073-88e321d507a3",
];

export default function HomePageContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-100">
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <motion.div initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-[15%] left-[10%] md:left-[20%] text-3xl md:text-5xl font-bold text-accent-green opacity-80 rotate-[-5deg]">
              Fürsorge
            </motion.div>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="absolute top-[20%] right-[15%] md:right-[25%] text-4xl md:text-6xl font-bold text-accent-cyan opacity-60 rotate-[8deg]">
              Familie
            </motion.div>
            <motion.div initial={{ x: 50 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.6 }} className="absolute bottom-[25%] right-[10%] md:right-[20%] text-3xl md:text-5xl font-bold text-accent-green opacity-70 rotate-[-3deg]">
              Begleitung
            </motion.div>
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="absolute bottom-[20%] left-[15%] md:left-[25%] text-5xl md:text-7xl font-bold text-accent-cyan opacity-90 rotate-[5deg]">
              Bau
            </motion.div>
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 1 }} className="absolute top-[45%] left-[5%] md:left-[10%] text-2xl md:text-4xl font-bold text-primary/30 rotate-[-15deg]">
              Event
            </motion.div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="w-24 h-24 bg-white rounded-full shadow-soft flex items-center justify-center mb-8 border border-primary/10">
              <Users className="w-12 h-12 text-primary" />
            </motion.div>

            <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-secondary mb-6 max-w-4xl leading-tight">
              Rund um das <span className="text-primary">Haus</span>,<br />
              rund um die <span className="text-primary">Person</span>
            </motion.h1>

            <motion.div initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8">
              <p className="text-xl md:text-2xl font-medium text-muted-foreground italic">
                "Cesar Dienstleistungen, die komplett Lösung"
              </p>
            </motion.div>
          </div>
        </section>

        {/* Über uns Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2" alt="Professionelles Team bei der Arbeit" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  Alles aus einer Hand
                </h2>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cesar Dienstleistungen verfügt über ein breites Netzwerk an geprüften Branchen-Partnern. Das bedeutet für Sie: Sie beauftragen nur uns – und müssen sich nicht selbst um fünf verschiedene Dienstleister kümmern, um Ihr gewünschtes Ergebnis zu erzielen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Wir koordinieren alles für Sie – professionell, zuverlässig und aus einer Hand.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Unsere Leistungen
              </h2>
              <p className="text-lg text-muted-foreground">
                Entdecken Sie unser vielfältiges Angebot. Wir bieten Ihnen maßgeschneiderte Lösungen für jede Lebenslage und jedes Projekt.
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
                >
                  <Link
                    href={`/leistungen/${category.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 border border-border/50"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={homepageImages[index]}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center text-primary font-medium mt-auto">
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent-cyan/10 rounded-r-full blur-3xl -z-10 -translate-x-1/2"></div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Lassen Sie uns Ihr Anliegen besprechen
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wählen Sie den gewünschte Service aus und hinterlassen Sie uns eine Nachricht. Wir melden uns umgehend mit einem passenden Lösungsvorschlag.
              </p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
