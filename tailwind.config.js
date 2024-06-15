/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all JS/TS/JSX/TSX files in src folder are included
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/wave-haikei.svg')",
        'custom-gradient': 'linear-gradient(to right, #87ceeb, #4682b4)',
        
      },
    },
  },
  plugins: [],
}
