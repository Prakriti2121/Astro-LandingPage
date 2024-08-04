/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
      },
      fontFamily: {
        sans: ['Encode Sans', 'sans-serif'],
        serif: ['Vollkorn', 'serif'],
      },
      backgroundImage: {
        'background-img': "url('/assets/backgroundimg.png')",
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.1)', 
        'custom-black': '0 4px 6px rgba(0, 0, 0, 0.25)', 
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
