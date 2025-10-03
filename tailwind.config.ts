import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f4',
          100: '#daf0e3',
          200: '#b8e1cc',
          300: '#8cccae',
          400: '#5db08d',
          500: '#3d9373',
          600: '#2d765d',
          700: '#255f4c',
          800: '#1f4c3d',
          900: '#1B4332',
        },
        flame: {
          50: '#fff5f0',
          100: '#ffe8dc',
          200: '#ffd0b9',
          300: '#ffb08a',
          400: '#ff8559',
          500: '#FF6B35',
          600: '#f04f1a',
          700: '#d13d10',
          800: '#a93312',
          900: '#882d12',
        },
        sky: {
          50: '#f0fdfc',
          100: '#ccfbf6',
          200: '#99f6ed',
          300: '#5eeade',
          400: '#4ECDC4',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        warm: {
          50: '#F7F3E9',
          100: '#f5f0e3',
          200: '#ebe4d1',
          300: '#ddd3b8',
          400: '#cbbf9a',
          500: '#bba97d',
          600: '#a89268',
          700: '#8a7655',
          800: '#71604a',
          900: '#5e5040',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;