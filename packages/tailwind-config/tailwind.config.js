/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        serif: ['"Libre Baskerville"', ...fontFamily.serif],
      },
      fontSize: {
        TitleLG: [
          '8rem',
          {
            lineHeight: '9.375rem',
            letterSpacing: '-0.02em',
          },
        ],
        TitleSM: [
          '6rem',
          {
            lineHeight: '7.5rem',
            letterSpacing: '-0.02em',
          },
        ],
        Heading2XL: [
          '4.5rem',
          {
            lineHeight: '5.625rem',
            letterSpacing: '-0.02em',
          },
        ],
        HeadingXL: [
          '3.75rem',
          {
            lineHeight: '4.5rem',
            letterSpacing: '-0.02em',
          },
        ],
        HeadingLG: [
          '3rem',
          {
            lineHeight: '3.75rem',
            letterSpacing: '-0.02em',
          },
        ],
        HeadingBASE: [
          '2.25rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '-0.02em',
          },
        ],
        HeadingSM: [
          '1.875rem',
          {
            lineHeight: '2.375rem',
            letterSpacing: '0em',
          },
        ],
        HeadingXS: [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0em',
          },
        ],
        BodyXL: [
          '1.25rem',
          {
            lineHeight: '1.875rem',
            letterSpacing: '0em',
          },
        ],
        BodyLG: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0em',
          },
        ],
        BodyBASE: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0em',
          },
        ],
        BodySM: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '0em',
          },
        ],
        BodyXS: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
            letterSpacing: '0em',
          },
        ],
        Body2XS: [
          '0.625rem',
          {
            lineHeight: '1rem',
            letterSpacing: '0em',
          },
        ],
      },
    },
  },
  plugins: [],
};
