'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export default function HomePage() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Sample Project 1',
      desc: 'Brief description of the project.',
      img: '/next.svg',
      link: 'https://github.com/manfrimjoao',
      badges: ['React', 'Node'],
    },
    {
      title: 'Sample Project 2',
      desc: 'Another cool project example.',
      img: '/vercel.svg',
      link: 'https://github.com/manfrimjoao',
      badges: ['React', 'TypeScript'],
    },
    {
      title: 'Sample Project 3',
      desc: 'Interesting project showcase.',
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
          <h1 className="text-4xl font-bold mb-4">
            Hi, I&apos;m João, a React & Node.js enthusiast
          </h1>
          <button
            onClick={scrollToProjects}
            className="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded mt-4"
          >
            View Projects
          </button>
        </motion.div>
        <Image
          src="/profile.png"
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
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I&apos;m passionate about building full-stack applications using React and
          Node.js. Always learning and looking for new challenges.
        </p>
        <h3 className="font-semibold mb-2">Soft Skills</h3>
        <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Problem Solving</li>
        </ul>
        <h3 className="font-semibold mb-2">Technologies</h3>
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
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
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
                <FaGithub className="w-4 h-4" /> View on GitHub
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
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="grid gap-4 max-w-xl">
          <input
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100"
            type="text"
            placeholder="Name"
            aria-label="Name"
          />
          <input
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
          <textarea
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-gray-900 dark:text-gray-100"
            rows={4}
            placeholder="Message"
            aria-label="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
        <div className="mt-6 flex gap-4">
          <a
            href="mailto:jvmanfrim88@gmail.com"
            className="text-primary dark:text-primary-dark hover:underline flex items-center gap-1"
          >
            <FaEnvelope className="w-4 h-4" /> Email Me
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
