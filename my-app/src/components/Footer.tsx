'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    { href: 'https://github.com/manfrimjoao', label: 'GitHub' },
    { href: 'https://linkedin.com/in/manfrimjoao', label: 'LinkedIn' },
    { href: 'mailto:jvmanfrim88@gmail.com', label: 'Email' },
  ];
  return (
    <footer className="bg-gray-100 py-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
        <div className="flex gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.href}
              whileHover={{ scale: 1.1 }}
              href={s.href}
              className="text-sm text-blue-600 hover:underline"
            >
              {s.label}
            </motion.a>
          ))}
        </div>
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} João Manfrim</p>
      </div>
    </footer>
  );
}
