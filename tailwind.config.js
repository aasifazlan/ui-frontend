// tailwind.config.js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    typography, // ✅ Use the imported plugin directly
  ],
  corePlugins: {
    preflight: true,
  },
};
