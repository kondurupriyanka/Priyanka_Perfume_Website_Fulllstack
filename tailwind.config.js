/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF69B4',
        secondary: '#9370DB',
        accent: '#FFD1DC',
        light: '#FFF0F5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF69B4, #9370DB)',
      },
    },
  },
  plugins: [],
};