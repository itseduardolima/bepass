/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        text: 'var(--text-color)',
        background: 'var(--background-color)',
      },
      fontFamily: {
        sans: ['var(--font-family)'],
      },
      transitionDuration: {
        DEFAULT: 'var(--transition-speed)',
      },
    },
  },
  plugins: [],
}

