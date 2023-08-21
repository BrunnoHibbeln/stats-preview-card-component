/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(233, 47%, 7%)",
        "desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "very-transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "transparent-white": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        deca: ["var(--font-lexend-deca)"],
      },
      fontSize: {
        body: "0.938rem",
      },
      backgroundImage: {
        desktop: "url('./images/image-header-desktop.jpg')",
        mobile: "url('./images/image-header-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
