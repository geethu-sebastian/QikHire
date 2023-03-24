/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis:{
        '1/18':'5.56%',
        '17/18':'94.48%',
        '3/8':'5%',
         '1/20':'5%'
        
      },
    borderRadius:{
      'myrad':'0.9rem',
    }
    },
  },
  theme:{
    backgroundColor: theme =>({
      ...theme('colors'),
      'black' : '#2D2D2D',
      'white' : '#ffffff',
      'blue':'#BFBDF4',
      'pink': '#FED0AB',
      'grey' : '#D9D9D9',    
      
    })
  },
  plugins: [
    require('tailwind-scrollbar-hide')],
}
