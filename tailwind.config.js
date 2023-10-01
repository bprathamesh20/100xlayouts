/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{

        //Primary blue
        'twitter-blue': '#1D9BF0',
        //Primary blue hover state
        'twitter-blue-hover': '#1871CA',
        //Primary blue disabled state
        'twitter-blue-disable': '#1E5D87',
        // Blue wash with opacity
        'blue-wash': 'rgba(117, 190, 239, 0.2)',
        // Button stroke
        'button-stroke': '#546A7A',
        // Searchbar fill
        'searchbar-fill': '#212327',
        // Card fill
        'card-fill': '#16181C',
        // Success
        'success': '#00BE74',
        // Error
        'error': '#88141A',

        neutral:{
          50: '#F9F9F9',
          100:'#F4F4F4',
          200: '#E4E4E4',
          300: '#D3D3D3',
          400: '#A2A2A2',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
          1000: '#000000'
        }
    },
    extend: {
      borderRadius: {
        'btn':'4.0625rem',
        'btn-sm':'1.875rem',
        'btn-post':'624.9375rem',
        'inp': '0.25rem',
        'search': '6249.9375rem',
        'pfp': '12.5rem',
      },
      width:{
        'btn-m':'20.875rem',
        'btn-l':'27.625rem',
        'inp': '26.625rem',
        'search': '21.75rem',
        '1.1': '1.1875rem',
        '32': '32rem',
        'tweet': '37.375rem',
        '17': '4.25rem',
      },
      height:{
        'search': '2.4375rem',
        '22': '22.1875rem',
        '1px': '1px',
        '17': '4.25rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans'],
      },
      fontSize:{
        head: '1.935rem',
        '0.9': '0.935rem',
        '0.8': '0.835rem'

      },
      boxShadow: {
        'btn': '0px 8px 16px 0px rgba(0, 0, 0, 0.25);'
      },
      backdropFilter: {
        'btn': 'blur(23.67px)', 
      },
      borderWidth: {
        'sm': '1px', 
        'm': '0.1875rem',
        'l': '4px',
      },
      spacing: {
        '0.12': '0.125rem',
        '0.6': '0.625rem',
        '0.9':'0.9375rem',
        '5.8': '5.8125rem',
        '0.8': '0.9rem',
        '15.4': '15.4375rem',
        '1.9': '1.935rem'
      }

    },
  },
  plugins: [],
}