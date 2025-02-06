import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          300: '#D1D5DB',
          700: '#374151',
          800: '#1F2937',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
