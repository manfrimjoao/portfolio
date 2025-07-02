'use client';
import { downloadResume } from '../lib/resume';
import { useLang } from '../context/LangContext';
import { text } from '../lib/text';

export default function DownloadCVButton() {
  const { lang } = useLang();
  return (
    <button
      onClick={downloadResume}
      className="bg-primary text-primary-foreground px-4 py-2 rounded"
    >
      {text[lang].downloadCV}
    </button>
  );
}
