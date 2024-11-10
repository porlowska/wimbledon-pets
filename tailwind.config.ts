import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteish: "#fafafa",
        primary: "#114430",
        secondary: "#F04F7A",
      },
      fontWeight: {
        light: "200", // for general text
        semibold: "500", // for h1 headers
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;
