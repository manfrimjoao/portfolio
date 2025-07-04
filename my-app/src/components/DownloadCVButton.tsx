'use client';
import { useLang } from '../context/LangContext';
import { downloadResume } from '../lib/resume';
import { text } from '../lib/text';

export default function DownloadCVButton({ className = '' }: { className?: string }) {
  const { lang } = useLang();
  return (
    <button
      onClick={downloadResume}
      className={`bg-primary text-primary-foreground px-4 py-2 rounded ${className}`}
    >
      {text[lang].downloadCV}
    </button>
  );
}
