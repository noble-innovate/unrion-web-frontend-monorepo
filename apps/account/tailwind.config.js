const sharedConfig = require('tailwind-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [sharedConfig],
};
