'use client';
import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'pt';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  isLangTransitioning: boolean;
  triggerLangTransition: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => {},
  isLangTransitioning: false,
  triggerLangTransition: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [isLangTransitioning, setIsLangTransitioning] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'pt') {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  const triggerLangTransition = () => {
    setIsLangTransitioning(true);
    setTimeout(() => setIsLangTransitioning(false), 400);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, isLangTransitioning, triggerLangTransition }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
