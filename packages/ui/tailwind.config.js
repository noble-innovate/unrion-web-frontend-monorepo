const sharedConfig = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [sharedConfig],
};
