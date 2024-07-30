import flowbite from 'flowbite-react/tailwind'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      spacing:{
        '112':'28rem'
      },
      colors:{
        'bg-h':'#f7f4ed', 
        'col1':'#fbeeaf', 
        'col2':'#ffcb05',
        'bg-2':'#242424',
        'col-3':'#fdfdfd'
      },
      fontFamily:{
        serif: ['source-serif-pro', 'Georgia, Cambria', 'Times New Roman', 'Times, serif'],
        serif1:['sohne', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

