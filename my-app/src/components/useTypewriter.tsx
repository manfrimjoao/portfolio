import { useEffect, useState } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number; // ms por caractere
  loop?: boolean;
}

export function useTypewriter({ text, speed = 80, loop = false }: UseTypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [cursor, setCursor] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayed('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayed('');
        setIndex(0);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, loop]);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return { text: displayed, cursorVisible: cursor };
} 