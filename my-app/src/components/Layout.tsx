'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLangTransitioning } = useLang();
  return (
      <div className="flex flex-col min-h-screen relative" id="home">
        <Header />
        <main className="flex-1 pt-16">
          <AnimatePresence>
            {isLangTransitioning && (
              <motion.div
                key="lang-transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-50 bg-foreground"
                style={{ mixBlendMode: 'difference' }}
              />
            )}
          </AnimatePresence>
          <div className={isLangTransitioning ? 'pointer-events-none select-none' : ''}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
  );
}
