import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#42A236',
        'brand-deep': '#29971D',
        'brand-dark': '#253B1F',
        'brand-mint': '#E3F2E2',
        'brand-brown': '#735C35',
        'brand-offwhite': '#FAFAF7',
        'brand-cream': '#F8F3EB',
      },
    },
  },
  plugins: [],
};
export default config;
