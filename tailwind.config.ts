import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* keyframes: {
        pulse: {
          from: { transform: "scale3d(1, 1, 1)" },
          "50%": { transform: "scale3d(1.05, 1.05, 1.05)" },
          to: { transform: "scale3d(1, 1, 1)" },
        },
      },
      animation: {
        pulse: "pulse 2s ease-in infinite",
      }, */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "parallax-about": 'url("/assets/images/bg1.jpg")',
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  daisyui: {
    themes: [
      {
        acid: {
          ...require("daisyui/src/theming/themes")["acid"],
          primary: "#30a33e",
          secondary: "#151e3f",
          accent: "#BDCDC0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
