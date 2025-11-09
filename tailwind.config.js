/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b1f3a',
        teal: '#0ea5a4',
        softgray: '#f3f5f8',
        midnight: '#061225',
        gold: '#d4a056',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        elevated: '0 18px 45px -20px rgba(6, 18, 37, 0.6)',
        card: '0 24px 50px -25px rgba(13, 31, 58, 0.45)',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(145deg, rgba(6,18,37,0.92), rgba(11,31,58,0.6))',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -6px, 0) scale(1.01)' },
        },
        'progress-grow': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 40px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'kenburns': {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.08) translate3d(0, -8px, 0)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'progress-grow': 'progress-grow 1.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'kenburns-slow': 'kenburns 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

