/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        header: 'var(--header-bg)',
        footer: 'var(--footer-bg)',
        surface: 'var(--card-bg)',
        primary: 'var(--button-bg)',
        'primary-foreground': 'var(--button-text)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
};
