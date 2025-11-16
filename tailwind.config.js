/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#6366f1',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}


