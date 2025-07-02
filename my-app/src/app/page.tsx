'use client';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import {
  FaGithub
} from 'react-icons/fa';
import {
  SiFramer,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import DownloadCVButton from '../components/DownloadCVButton';
import { useTypewriter } from '../components/useTypewriter';
import { useLang } from '../context/LangContext';
import { text } from '../lib/text';

export default function HomePage() {
  const { lang } = useLang();
  const t = text[lang];

  const { text: heroTyped, cursorVisible } = useTypewriter({ text: t.hero });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: t.project1Title,
      desc: t.project1Desc,
      img: '/next.svg',
      link: 'https://github.com/manfrimjoao',
      badges: ['React', 'Node'],
    },
    {
      title: t.project2Title,
      desc: t.project2Desc,
      img: '/vercel.svg',
      link: 'https://github.com/manfrimjoao',
      badges: ['React', 'TypeScript'],
    },
    {
      title: t.project3Title,
      desc: t.project3Desc,
      img: '/next.svg',
      link: 'https://github.com/manfrimjoao',
      badges: ['Next.js', 'Framer'],
    },
  ];

  const techIcons: Record<string, IconType> = {
    React: SiReact,
    Node: SiNodedotjs,
    'Node.js': SiNodedotjs,
    TypeScript: SiTypescript,
    'Next.js': SiNextdotjs,
    Framer: SiFramer,
  };

  const aboutTechs = [
    { name: 'React', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Framer', icon: SiFramer },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Python', icon: SiPython },
  ];

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError('');
    const form = e.currentTarget;
    const formData = {
      from_name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      from_email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
    };
    try {
      await emailjs.send(
        'portfolio_email',
        'template_kzot2be',
        formData,
        'iiN0EGdIOoJsaNlwr'
      );
      setSent(true);
      form.reset();
    } catch {
      setError('Erro ao enviar. Tente novamente.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-4"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-4 relative">
            <span className="opacity-0 pointer-events-none absolute inset-0 select-none whitespace-nowrap">
              {text.pt.hero.length > text.en.hero.length ? text.pt.hero : text.en.hero}
            </span>
            {heroTyped}
            <span
              className="inline-block w-[1ch] align-baseline animate-none"
              style={{
                opacity: cursorVisible ? 1 : 0,
                transition: 'opacity 0.1s',
                fontWeight: 'bold',
                color: 'inherit',
                fontSize: '1em',
                userSelect: 'none',
              }}
            >
              |
            </span>
          </h1>
          <div className="flex gap-2 justify-center md:justify-start">
            <button
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground px-4 py-2 rounded mt-4 font-semibold border border-border transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              {t.viewProjects}
            </button>
            <div className="mt-4 font-semibold">
              <DownloadCVButton className="border border-border transition-all duration-300 hover:bg-primary-foreground hover:text-primary" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Image
            src="/profile.jpg"
            alt="João Manfrim"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-5xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">{t.aboutMe}</h2>
        <p className="mb-8 text-lg text-foreground/80 max-w-3xl mx-auto text-center">{t.aboutParagraph}</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Card Tecnologias */}
          <div className="flex-1 bg-surface border border-border rounded-2xl shadow-md p-6 flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-xl text-primary">{t.technologies}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {aboutTechs.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center justify-center bg-background border border-border rounded-xl shadow-sm h-20 w-20 transition-colors"
                >
                  <t.icon className="w-10 h-10 text-primary" />
                </div>
              ))}
            </div>
          </div>
          {/* Card Soft Skills */}
          <div className="flex-1 bg-surface border border-border rounded-2xl shadow-md p-6 flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-xl text-primary">{t.softSkills}</h3>
            <ul className="grid grid-cols-1 gap-2 w-full max-w-xs mx-auto">
              <li className="bg-background border border-border rounded-lg px-4 py-2 text-center text-foreground/90 font-medium">{t.teamwork}</li>
              <li className="bg-background border border-border rounded-lg px-4 py-2 text-center text-foreground/90 font-medium">{t.communication}</li>
              <li className="bg-background border border-border rounded-lg px-4 py-2 text-center text-foreground/90 font-medium">{t.problemSolving}</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-5xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-8">{t.projectsTitle}</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-4 rounded shadow flex flex-col border border-border"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={300}
                height={200}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm mb-2 flex-1">{p.desc}</p>
              <div className="flex gap-2 mb-2 flex-wrap">
                {p.badges.map((b) => {
                  const Icon = techIcons[b];
                  return (
                    <span
                      key={b}
                      className="bg-header px-2 py-1 text-xs rounded flex items-center gap-1"
                    >
                      {Icon && <Icon className="w-4 h-4" />} {b}
                    </span>
                  );
                })}
              </div>
              <a
                href={p.link}
                className="flex items-center gap-2 border border-border rounded px-3 py-1 text-primary text-sm font-semibold transition-all hover:bg-primary-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-4 h-4" /> {t.viewOnGitHub}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-5xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">{t.contactTitle}</h2>
        <form className="grid gap-4 max-w-xl mx-auto text-center" onSubmit={handleSendEmail}>
          <input
            name="name"
            className="border border-border bg-surface p-2 rounded text-foreground placeholder:text-foreground/60"
            type="text"
            placeholder={t.name}
            aria-label={t.name}
            required
          />
          <input
            name="email"
            className="border border-border bg-surface p-2 rounded text-foreground placeholder:text-foreground/60"
            type="email"
            placeholder={t.email}
            aria-label={t.email}
            required
          />
          <textarea
            name="message"
            className="border border-border bg-surface p-2 rounded text-foreground placeholder:text-foreground/60"
            rows={4}
            placeholder={t.message}
            aria-label={t.message}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 rounded border border-border transition-all duration-300 hover:bg-primary-foreground hover:text-primary font-semibold disabled:opacity-60"
            disabled={sending}
          >
            {sending ? 'Enviando...' : t.send}
          </button>
          {sent && <p className="text-green-600 text-sm mt-2">Mensagem enviada com sucesso!</p>}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
        <div className="mt-6 flex gap-4">
        </div>
      </motion.section>
    </div>
  );
}
