'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import {
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { useLang } from '../context/LangContext';
import { text } from '../lib/text';

export default function HomePage() {
  const { lang } = useLang();
  const t = text[lang];

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
  ];

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
          <h1 className="text-4xl font-bold mb-4">{t.hero}</h1>
          <button
            onClick={scrollToProjects}
            className="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded mt-4"
          >
            {t.viewProjects}
          </button>
        </motion.div>
        <Image
          src="/profile.jpg"
          alt="João Manfrim"
          width={300}
          height={300}
          className="rounded-full"
        />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-4">{t.aboutMe}</h2>
        <p className="mb-4">{t.aboutParagraph}</p>
        <h3 className="font-semibold mb-2">{t.softSkills}</h3>
        <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <li>{t.teamwork}</li>
          <li>{t.communication}</li>
          <li>{t.problemSolving}</li>
        </ul>
        <h3 className="font-semibold mb-2">{t.technologies}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {aboutTechs.map((t) => (
            <div key={t.name} className="flex items-center gap-2">
              <t.icon className="w-5 h-5 text-primary dark:text-primary-dark" />
              <span className="text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
              className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col"
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
                      className="bg-gray-200 dark:bg-gray-700 px-2 py-1 text-xs rounded flex items-center gap-1"
                    >
                      {Icon && <Icon className="w-4 h-4" />} {b}
                    </span>
                  );
                })}
              </div>
              <a
                href={p.link}
                className="text-primary dark:text-primary-dark text-sm hover:underline flex items-center gap-1"
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
        viewport={{ once: true }}
        className="max-w-5xl mx-auto py-20 px-4"
      >
        <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
        <form className="grid gap-4 max-w-xl">
          <input
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100"
            type="text"
            placeholder={t.name}
            aria-label={t.name}
          />
          <input
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100"
            type="email"
            placeholder={t.email}
            aria-label={t.email}
          />
          <textarea
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100"
            rows={4}
            placeholder={t.message}
            aria-label={t.message}
          ></textarea>
          <button
            type="submit"
            className="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded"
          >
            {t.send}
          </button>
        </form>
        <div className="mt-6 flex gap-4">
          <a
            href="mailto:jvmanfrim88@gmail.com"
            className="text-primary dark:text-primary-dark hover:underline flex items-center gap-1"
          >
            <FaEnvelope className="w-4 h-4" /> {t.emailMe}
          </a>
          <a
            href="https://linkedin.com/in/manfrimjoao"
            className="text-primary dark:text-primary-dark hover:underline flex items-center gap-1"
          >
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </motion.section>
    </div>
  );
}
