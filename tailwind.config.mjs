/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'mi-white': '#FFFFFF',
        'mi-warm': '#F9F7F4',
        // Accent (beige/nude - very subtle)
        'mi-beige': '#E8DFD0',
        'mi-camel': '#C4A882',
        // Text
        'mi-dark': '#2D2D2D',
        'mi-gray': '#6B6B6B',
        'mi-light': '#9A9A9A',
        // UI
        'mi-border': '#E5E5E5',
        'mi-btn': '#8A8A8A',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '16px',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0,0,0,0.04)',
        'medium': '0 4px 24px rgba(0,0,0,0.06)',
        'strong': '0 8px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
