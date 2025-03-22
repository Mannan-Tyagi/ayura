/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3bf',
          300: '#8ecd97',
          400: '#5fb06a',
          500: '#3c9147',
          600: '#2c7437',
          700: '#255d2e',
          800: '#214a28',
          900: '#1d3d24',
          950: '#0c2112',
        },
        secondary: {
          50: '#f7f7f2',
          100: '#eeeee1',
          200: '#dddcc3',
          300: '#c8c69d',
          400: '#b2ae77',
          500: '#9c975c',
          600: '#7d784a',
          700: '#625e3c',
          800: '#524e35',
          900: '#464231',
          950: '#26241a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-indicator': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1585653621032-a5fec4e6f1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [],
};