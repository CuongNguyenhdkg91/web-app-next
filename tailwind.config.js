// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'purpleBg': '#232d4f',
      'purpleTxt': 'rgb(142, 155, 209)',
      'blue': '#0057FF',
    },

    extend: {
      /* backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, */
    },

    screens: {
      'md': {max:'550px'},
      'tbl': {max:'1000px'}
    }
  },
  plugins: [],
}
