/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        'mi-white': '#FAF8F6',
        'mi-cream': '#FFF5F7',
        'mi-pink': '#E8B4D9',
        'mi-pink-dark': '#D49BC4',
        'mi-gold': '#D4AF37',
        'mi-gold-dark': '#B8962F',
        'mi-text': '#2C2C2C',
        'mi-text-light': '#6B6B6B',
        'mi-dark': '#1A1A1A',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Noto Serif TC"', 'serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(232, 180, 217, 0.15)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'gold': '0 6px 25px rgba(212, 175, 55, 0.35)',
        'line': '0 6px 25px rgba(6, 199, 85, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F0D878 50%, #D4AF37 100%)',
        'hero-gradient': 'linear-gradient(135deg, #FAF8F6 0%, #FFF5F7 50%, #FFF0F5 100%)',
        'cta-gradient': 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in-right': 'fadeInRight 0.8s ease forwards',
        'pulse-line': 'pulseLine 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseLine: {
          '0%, 100%': { boxShadow: '0 6px 25px rgba(6, 199, 85, 0.4)' },
          '50%': { boxShadow: '0 6px 35px rgba(6, 199, 85, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
