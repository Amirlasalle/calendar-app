import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        miroRed: "#f50505",
        miroGray: "#555555",
        miroSilver: "#B7BABD",
        caliPopBlue: "#0475d2",
        caliPopsPink: "#de8db9",
        neonGreen: "#73ff01",
        iceCream: "#F4F4E5",
        airbnb: "#ff385c",
        airbnbDark: "#d50027",
        hoverGray: "#F7F7F7",
        outlineDark: "#484848",
        outlineGray: "#b0b0b0",
        default: "#aeaeae",
        spotifyGreen: "#1ed760",
        spotifyLight: "#23f36b",
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primaryNew: "#0088F2",
        // primary: "#05abf2", // 5, 171, 242
        primaryOrange: "#ff7c17", // 80,230,217
        suedeGrey: "#baaba0",
        Pinku: "#B63E96",
        colombianYellow: "#FFCD00",
        colombianBlue: "#003087",
        colombianRed: "#C8102E",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lgx: { max: "1107px" },
      // => @media (max-width: 1023px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      mdlg: { max: "860px" },
      // => @media (max-width: 860px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
      xxs: { max: "430px" },

      "2xlmin": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      xlmin: { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      lgxmin: { min: "1107px" },

      lgmin: { min: "1023px" },
      // => @media (min-width: 1023px) { ... }
      mdlgmin: { min: "860px" },
      // => @media (min-width: 860px) { ... }
      mdmin: { min: "767px" },
      // => @media (min-width: 767px) { ... }

      smmin: { min: "639px" },
      // => @media (min-width: 639px) { ... }

      xsmin: { min: "479px" },

      xxsmin: { min: "430px" },
      // => @media (min-width: 639px) { ... }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
