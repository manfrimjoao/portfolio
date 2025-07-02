'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socials = [
    { href: 'https://github.com/manfrimjoao', label: 'GitHub', icon: FaGithub },
    { href: 'https://linkedin.com/in/manfrimjoao', label: 'LinkedIn', icon: FaLinkedin },
    { href: 'mailto:jvmanfrim88@gmail.com', label: 'Email', icon: FaEnvelope },
  ];
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
        <div className="flex gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.href}
              whileHover={{ scale: 1.1 }}
              href={s.href}
              className="text-primary dark:text-primary-dark"
            >
              <s.icon className="w-5 h-5" />
              <span className="sr-only">{s.label}</span>
            </motion.a>
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} João Manfrim</p>
      </div>
    </footer>
  );
}
