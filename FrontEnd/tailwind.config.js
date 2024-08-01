/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'wiggle 10s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': {transform: 'translateX(30%) rotate(18deg)'},
          '50%': { transform: 'translateX(-30%) rotate(5deg)'},
          '100%': {transform: 'translateX(30%) rotate(18deg)'}
        }
      },
      backgroundImage : {
        'tothemoon' : "url('./10.webp')"
      }
    },
  },
  plugins: [],
}

