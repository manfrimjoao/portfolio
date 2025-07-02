'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
    <header className="fixed w-full top-0 left-0 bg-header/90 backdrop-blur border-b border-border z-10 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="font-bold text-lg text-foreground">
          João
        </Link>
        <nav className="hidden md:flex gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary">
              {text[lang][l.key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="p-2 rounded hover:bg-surface"
          >
            {dark ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            aria-label="Toggle language"
            className="p-2 rounded hover:bg-surface text-xs font-semibold"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
            <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-header border-t border-border"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-surface"
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
