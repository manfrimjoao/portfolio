'use client';
import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLangTransitioning } = useLang();
  return (
      <div className="flex flex-col min-h-screen relative" id="home">
        <Header />
        <main className="flex-1 pt-16">
          {isLangTransitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 pointer-events-none bg-background/50"
            />
          )}
          <div className={isLangTransitioning ? 'pointer-events-none select-none blur-sm transition-all duration-300' : 'transition-all duration-300'}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
  );
}
