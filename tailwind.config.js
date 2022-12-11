/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteText: '#FFFFFF',
        grayText: '#706F6F',
        yellowText: '#FBBE45',
        background: '#151327',
        primary: {
          100: '#1F1C3A',
          80: '#393370',
          60: '#9890D9',
          40: '#3a346b'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontSize: {
        body: [
          '14px',
          {
            lineHeight: '19px',
            letterSpacing: '0.005em'
          }
        ],
        body2: [
          '11px',
          {
            lineHeight: '19px',
            letterSpacing: '0.005em'
          }
        ],
        hover: [
          '18px',
          {
            lineHeight: '25px',
            letterSpacing: '0.005em'
          }
        ],
        figure: [
          '27px',
          {
            lineHeight: '37px',
            letterSpacing: '0.005em'
          }
        ],
        time: [
          '40px',
          {
            lineHeight: '37px',
            letterSpacing: '0.005em',
            fontWeight: 500
          }
        ],
        time2: [
          '30px',
          {
            lineHeight: '37px',
            letterSpacing: '0.005em',
            fontWeight: 500
          }
        ]
      }
    },
  },
  plugins: [],
}
