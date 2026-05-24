/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#04070d',
          2: '#080d16',
          3: '#0d1421',
          card: '#0c1220',
        },
        brand: {
          blue: '#63b3ed',
          blue2: '#90cdf4',
          cyan: '#00ffff',
          gold: '#f6ad55',
          gold2: '#fbd38d',
        },
      },
      animation: {
        blink: 'blink 2s infinite',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        spin: 'spin 0.8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
