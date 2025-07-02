'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { text } from '../lib/text';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ? stored === 'dark' : prefersDark;
    setDark(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };
  const links = [
    { href: '#home', key: 'home' },
    { href: '#about', key: 'about' },
    { href: '#projects', key: 'projects' },
    { href: '#contact', key: 'contact' },
  ] as const;
  return (
    <header className="fixed w-full top-0 left-0 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700 z-10 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="font-bold text-lg text-gray-900 dark:text-gray-100">
          João
        </Link>
        <nav className="hidden md:flex gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary dark:hover:text-primary-dark">
              {text[lang][l.key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            animate={{ rotate: dark ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {dark ? '🌙' : '☀️'}
          </motion.button>
          <button
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            aria-label="Toggle language"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-xs font-semibold"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100"></span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {text[lang][l.key]}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
