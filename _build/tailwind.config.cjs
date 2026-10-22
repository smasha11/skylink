/** Tailwind config for Skylink Global Network.
 *  Colour hex values mirror the --sk-* custom properties in input.css (:root).
 *  If you change a brand colour, change it in BOTH places, then run `npm run build`.
 */
module.exports = {
  content: ['../*.html', '../assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        sk: {
          black: '#0A0A0A',
          charcoal: '#16181D',
          yellow: '#FFD200',
          'yellow-dark': '#E6B800',
          blue: '#1E5FD9',
          sky: '#2EA3F2',
          orange: '#F5A300',
          gold: '#C9A24A',
          whatsapp: '#25D366',
          success: '#22C55E',
          white: '#FFFFFF',
          'grey-100': '#F4F5F7',
          'grey-600': '#5B6170',
          'grey-300': '#B9BEC9', // muted text on dark backgrounds (AA on black & charcoal)
        },
      },
      fontFamily: {
        display: ['Anton', 'Oswald', '"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        sk: '14px',
      },
      boxShadow: {
        sk: '0 10px 30px -12px rgba(10,10,10,.35)',
        'sk-lg': '0 24px 60px -20px rgba(10,10,10,.55)',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};
