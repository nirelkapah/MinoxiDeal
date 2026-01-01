import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    preflight: true,
  },
};

export default config;
