'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

/* ─────────────────────────────────────────────
   LAYOUT: SENSITIVE
   Kein Hero-Bild. Atmosphärischer Farbhintergrund.
   Callout gross zentriert. Highlights als horizontale Karten.
   2×2 Bildgalerie am Ende.
   Einsatz: Trauerfall, sensible Familienthemen
───────────────────────────────────────────── */
function SensitiveLayout({ category, subcategory }) {
  return (
    <>
      {/* Atmospheric Header – kein Bild */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 border-b border-border/30 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href={`/leistungen/${category.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu {category.name}
          </Link>
          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              {category.name}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              {subcategory.name}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-xl text-muted-foreground leading-relaxed">
              {subcategory.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Callout Quote */}
      {subcategory.callout && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center border-l-4 border-primary pl-8"
            >
              <p className="text-2xl md:text-3xl font-light text-secondary leading-relaxed italic">
                „{subcategory.callout}"
              </p>
            </motion.blockquote>
          </div>
        </section>
      )}

      {/* Highlights – horizontale Karten */}
      {subcategory.highlights?.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {subcategory.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border/50 shadow-soft"
                >
                  <h3 className="font-bold text-secondary mb-2 text-lg">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2×2 Bildgalerie */}
      {subcategory.extraImages?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className={`grid gap-4 max-w-4xl mx-auto ${
              subcategory.extraImages.length === 4
                ? 'grid-cols-2'
                : subcategory.extraImages.length === 3
                ? 'grid-cols-2 md:grid-cols-3'
                : 'grid-cols-2'
            }`}>
              {subcategory.extraImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft"
                >
                  <Image src={src} alt={subcategory.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   LAYOUT: EMOTIONAL
   Hero-Bild links. Callout-Box rechts als Pull-Quote.
   Highlights als 2-spaltige Cards mit farbigem Akzent-Streifen.
   Extrabilder in unregelmäßigem Raster.
   Einsatz: Fürsorge, Familienbesuche, barrierefreies Wohnen
───────────────────────────────────────────── */
function EmotionalLayout({ category, subcategory }) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-slate-50 border-b border-border/50">
        <div className="container mx-auto px-4">
          <Link href={`/leistungen/${category.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu {category.name}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {subcategory.image && (
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image src={subcategory.image} alt={subcategory.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              </motion.div>
            )}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">{category.name}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">{subcategory.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{subcategory.description}</p>
              {subcategory.callout && (
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5">
                  <p className="text-secondary font-medium leading-relaxed italic">„{subcategory.callout}"</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights – Cards mit Akzent */}
      {subcategory.highlights?.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-10 text-center">Was wir für Sie tun</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {subcategory.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-border/40"
                >
                  <div className="w-1 flex-shrink-0 bg-primary rounded-full" />
                  <div>
                    <h3 className="font-bold text-secondary mb-1">{h.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Extrabilder – sauberes Raster */}
      {subcategory.extraImages?.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {subcategory.extraImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft ${
                    subcategory.extraImages.length % 2 !== 0 && i === 0 ? 'col-span-2 md:col-span-1' : ''
                  }`}
                >
                  <Image src={src} alt={subcategory.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   LAYOUT: PRACTICAL
   Bild oben rechts mit Text links (klassisch, aber aufgewertet).
   Highlights als nummerierte Schritte (01, 02 …) in einer Zeile.
   Extrabilder als 2-spaltige kompakte Galerie.
   Einsatz: Baudienstleistungen, Fahrservice, Erbschaft
───────────────────────────────────────────── */
function PracticalLayout({ category, subcategory }) {
  return (
    <>
      {/* Hero mit Bild rechts */}
      <section className="relative py-20 bg-white border-b border-border/50">
        <div className="container mx-auto px-4">
          <Link href={`/leistungen/${category.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu {category.name}
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 order-2 lg:order-1">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">{category.name}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">{subcategory.name}</h1>
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">{subcategory.description}</p>
              {subcategory.callout && (
                <p className="text-xl font-semibold text-primary">{subcategory.callout}</p>
              )}
            </motion.div>
            {subcategory.image && (
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] order-1 lg:order-2">
                <Image src={subcategory.image} alt={subcategory.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Nummerierte Schritte */}
      {subcategory.highlights?.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-12 text-center">So läuft es ab</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {subcategory.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border/50 shadow-soft relative overflow-hidden"
                >
                  <span className="text-5xl font-black text-primary/10 absolute top-3 right-4 leading-none select-none">
                    {h.number || String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-primary text-sm font-bold">{h.number || String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-bold text-secondary mt-2 mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Kompakte Galerie */}
      {subcategory.extraImages?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {subcategory.extraImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-soft"
                >
                  <Image src={src} alt={subcategory.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   LAYOUT: ACTIVE
   Großes Hero-Bild mit Overlay-Text.
   Callout als große zentrierte Aussage.
   Highlights als 4 Icon-freie Feature-Cards nebeneinander.
   Extrabilder horizontal.
   Einsatz: Begleitservice, Event
───────────────────────────────────────────── */
function ActiveLayout({ category, subcategory }) {
  return (
    <>
      {/* Heller Hero: zentrierter Text + breites Bild im Card */}
      <section className="relative pt-16 pb-0 bg-slate-50 border-b border-border/30">
        <div className="container mx-auto px-4">
          <Link href={`/leistungen/${category.slug}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu {category.name}
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
              {category.name}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              {subcategory.name}
            </motion.h1>
            {/* dünner blauer Akzent-Balken */}
            <div className="w-16 h-1 bg-primary rounded-full mx-auto my-6" />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-lg text-muted-foreground leading-relaxed">
              {subcategory.description}
            </motion.p>
          </div>
        </div>
        {/* breites Hero-Bild, halb über den Abschnitt hinausragend */}
        {subcategory.image && (
          <div className="container mx-auto px-4 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-5xl mx-auto aspect-[16/7] rounded-2xl overflow-hidden shadow-2xl translate-y-12"
            >
              <Image src={subcategory.image} alt={subcategory.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
            </motion.div>
          </div>
        )}
      </section>

      {/* Callout – heller Akzent statt Vollfläche */}
      {subcategory.callout && (
        <section className="pt-28 pb-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-secondary max-w-3xl mx-auto leading-relaxed">
              {subcategory.callout}
            </p>
          </div>
        </section>
      )}

      {/* Feature Cards */}
      {subcategory.highlights?.length > 0 && (
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {subcategory.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-1 bg-primary rounded-full mb-4" />
                  <h3 className="font-bold text-secondary mb-2 text-base">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bildgalerie – sauberes Raster, kein Swipe */}
      {subcategory.extraImages?.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {subcategory.extraImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft ${
                    subcategory.extraImages.length % 2 !== 0 && i === 0 ? 'col-span-2 md:col-span-1' : ''
                  }`}
                >
                  <Image src={src} alt={subcategory.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function SubcategoryDetailPageContent({ category, subcategory }) {
  const layout = subcategory.layoutType || 'emotional';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {layout === 'sensitive' && <SensitiveLayout category={category} subcategory={subcategory} />}
        {layout === 'emotional' && <EmotionalLayout category={category} subcategory={subcategory} />}
        {layout === 'practical' && <PracticalLayout category={category} subcategory={subcategory} />}
        {layout === 'active'    && <ActiveLayout    category={category} subcategory={subcategory} />}

        {/* Kontakt – immer gleich */}
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
