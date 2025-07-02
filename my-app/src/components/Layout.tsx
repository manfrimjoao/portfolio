'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLangTransitioning } = useLang();
  return (
      <div
        className="flex flex-col min-h-screen relative transition-[filter] duration-500"
        id="home"
        style={{ filter: isLangTransitioning ? 'url(#ripple-effect) blur(6px)' : 'none' }}
      >
        {isLangTransitioning && (
          <svg className="absolute w-0 h-0">
            <filter id="ripple-effect">
              <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" result="T" />
              <feDisplacementMap in="SourceGraphic" in2="T" scale="0">
                <animate attributeName="scale" values="0;40;0" dur="0.6s" />
              </feDisplacementMap>
            </filter>
          </svg>
        )}
        <Header />
        <main className="flex-1 pt-16">
          <AnimatePresence>
            {isLangTransitioning && (
              <motion.div
                key="lang-transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="fixed inset-0 z-50 pointer-events-none bg-background/40 backdrop-blur-sm"
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
