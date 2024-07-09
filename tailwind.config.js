/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", './src/components/**/*.{js,jsx,ts,tsx}', './src/views/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      

      typography: (theme) => ({
        DEFAULT: {
          css: {
            'font-family': 'Quicksand',
            'font-optical-sizing': 'auto',
            'font-weight': '600',
            'font-style': 'normal',
          },
        },
      }),

    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
}

