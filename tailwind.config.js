/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // adjust if needed
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
};
