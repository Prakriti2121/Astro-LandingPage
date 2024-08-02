/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Encode Sans', 'sans-serif'],
        serif: ['Vollkorn', 'serif'],
      },
      backgroundImage: {
        'background-img': "url('/assets/backgroundimg.png')",
      },
      fontSize: {
        '5xl': '3rem',
        sm: ['14px', {
          lineHeight: '20px',
        }],
      },
      colors: {
        primary: '#39b54a',
        aboutusBg: '#c1e1bd',
      },
    },
  },
  plugins: [],
};
