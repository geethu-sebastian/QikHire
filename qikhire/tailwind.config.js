/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis:{
        '1/18':'5.56%',
        '17/18':'94.48%',
        '3/8':'5%',
        
      },
    borderRadius:{
      'myrad':'0.9rem',
    }
    },
  },
  plugins: [],
}
