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
        primary: '#515153',
        blue: '#7CDFEA',
        green: '#7CEA8D',
        yellow: '#E8EA7C',
        red: '#EA7C96',
        orange: '#EAB17C',
      },
      fontSize: {
        clamp1: 'clamp(1rem, 5vw, 2.5rem)',
      },
    },
  },
  plugins: [],
};
