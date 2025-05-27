import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nike brand colors
        'nike-orange': '#ff6900',
        'nike-black': '#111111',
        'nike-gray': '#7e7e7e',
      },
    },
  },
} satisfies Config