'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { leistungenData } from '@/data/leistungenData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-soft py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Cesar Dienstleistungen Logo"
              width={160}
              height={80}
              className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>

            {/* Leistungen Dropdown */}
            <div
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => {
                setActiveDropdown(false);
                setActiveCategory(null);
              }}
            >
              <Link
                href="/leistungen"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  pathname.startsWith('/leistungen') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Leistungen
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown ? 'rotate-180 text-primary' : ''}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 flex items-start z-50"
                  >
                    {/* Main Categories List */}
                    <div className="w-72 bg-white shadow-xl rounded-xl border border-border/50 max-h-[70vh] overflow-y-auto">
                      <div className="py-2">
                        {leistungenData.map((category) => (
                          <div
                            key={category.id}
                            className="relative group/item"
                            onMouseEnter={() => setActiveCategory(category.id)}
                          >
                            <Link
                              href={`/leistungen/${category.slug}`}
                              className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                                activeCategory === category.id
                                  ? 'bg-slate-50 text-primary'
                                  : 'text-foreground hover:bg-slate-50 hover:text-primary'
                              }`}
                            >
                              {category.name}
                              <ChevronRight className={`w-4 h-4 ${activeCategory === category.id ? 'text-primary' : 'text-muted-foreground group-hover/item:text-primary'}`} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Flyout Subcategories */}
                    <AnimatePresence>
                      {activeCategory && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2 w-80 bg-white shadow-xl rounded-xl border border-border/50 max-h-[70vh] overflow-y-auto flex flex-col"
                        >
                          {leistungenData.map((category) =>
                            category.id === activeCategory && (
                              <div key={`sub-${category.id}`} className="flex flex-col h-full">
                                <div className="p-4 bg-slate-50 border-b border-border/50 sticky top-0 z-10">
                                  <p className="font-semibold text-primary">{category.name}</p>
                                </div>
                                <div className="py-2">
                                  {category.subcategories.map((sub) => (
                                    <Link
                                      key={sub.slug}
                                      href={`/leistungen/${category.slug}/${sub.slug}`}
                                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-slate-50 hover:text-primary transition-colors"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/einsatzgebiete"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/einsatzgebiete' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Einsatzgebiete
            </Link>

            <Link
              href="/uber-uns"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/uber-uns' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Über uns
            </Link>

            <Link
              href="/kontakt"
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === '/kontakt' ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 max-h-[75vh] overflow-y-auto">
              <Link href="/" className="text-foreground font-medium py-3 border-b border-border/50">Home</Link>

              <div className="py-3 border-b border-border/50">
                <Link href="/leistungen" className="text-foreground font-medium block mb-2">Leistungen</Link>
                <div className="pl-4 space-y-2 mt-2 border-l-2 border-primary/20">
                  {leistungenData.map((category) => (
                    <div key={category.id} className="py-1">
                      <button
                        onClick={() => setMobileExpandedCategory(mobileExpandedCategory === category.id ? null : category.id)}
                        className="flex items-center justify-between w-full text-left text-sm font-medium text-secondary py-2"
                      >
                        {category.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedCategory === category.id ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {mobileExpandedCategory === category.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 pb-3 space-y-3 pl-2">
                              <Link
                                href={`/leistungen/${category.slug}`}
                                className="block text-sm text-primary font-medium"
                              >
                                Übersicht {category.name}
                              </Link>
                              {category.subcategories.map((sub) => (
                                <Link
                                  key={sub.slug}
                                  href={`/leistungen/${category.slug}/${sub.slug}`}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/einsatzgebiete" className="text-foreground font-medium py-3 border-b border-border/50">Einsatzgebiete</Link>
              <Link href="/uber-uns" className="text-foreground font-medium py-3 border-b border-border/50">Über uns</Link>
              <Link href="/kontakt" className="text-foreground font-medium py-3">Kontakt</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
