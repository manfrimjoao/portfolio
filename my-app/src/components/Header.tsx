'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useLang } from '../context/LangContext';
import { text } from '../lib/text';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { lang, setLang, triggerLangTransition } = useLang();

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

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-header/90 backdrop-blur border-b border-border z-10 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="font-bold text-lg text-foreground">
         manfrimjoao.dev
        </Link>
        <nav className="hidden md:flex gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary" onClick={handleNavClick(l.href)}>
              {text[lang][l.key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Alternar tema"
            className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-300 focus:outline-none border border-border shadow-sm
              ${dark ? 'bg-primary' : 'bg-header'}`}
          >
            <span
              className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center border border-border
                ${dark ? 'bg-header text-primary-foreground' : 'bg-primary text-primary-foreground'}
                ${dark ? 'translate-x-6' : 'translate-x-0'}`}
            >
              {dark ? (
                <FaMoon className="w-4 h-4 text-primary" />
              ) : (
                <FaSun className="w-4 h-4 text-yellow-400" />
              )}
            </span>
          </button>
          <button
            onClick={() => {
              triggerLangTransition();
              // Change the language when the animation is halfway through
              setTimeout(() => setLang(lang === 'en' ? 'pt' : 'en'), 300);
            }}
            aria-label="Toggle language"
            className="p-2 rounded hover:bg-surface text-xs font-semibold"
          >
            {lang === 'en' ? 'EN' : 'PT-BR'}
          </button>
          <button
            className="md:hidden bg-header rounded p-2 z-20 border border-border" onClick={() => setOpen(!open)} aria-label="Menu">
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
                onClick={handleNavClick(l.href)}
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
