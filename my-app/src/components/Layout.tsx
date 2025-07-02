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
                initial={{ y: '-100%', backgroundPosition: '0% 0%' }}
                animate={{ y: 0, backgroundPosition: '100% 0%' }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="fixed inset-0 z-50 pointer-events-none"
                style={{
                  backgroundImage: "url('/water.svg')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'repeat-x',
                }}
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
