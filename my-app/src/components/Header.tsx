'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur z-10 shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="font-bold text-lg">
          João
        </Link>
        <nav className="hidden md:flex gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-blue-500">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white border-t"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
