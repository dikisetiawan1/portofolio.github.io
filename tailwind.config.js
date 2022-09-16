/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
center:true,
padding:"16",
    },
    extend: {
      colors:{
        primary: '#ef4444',
        second:'#64748b',
      },
      screens:{
        '2xl':'1320px',
      },
      
    },
  },

  plugins: [],
};
