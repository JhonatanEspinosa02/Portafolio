/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "blob": "url('/src/img/blob-1-opacity-92.gif')"
      }
    },
  },
  plugins: [],
}

