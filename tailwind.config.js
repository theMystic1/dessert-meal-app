/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redHat: ["redHat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px", // You can override the default 'sm' breakpoint if needed
        md: "768px", // You can override the default 'md' breakpoint if needed
        lg: "1024px", // You can override the default 'lg' breakpoint if needed
        xl: "1280px", // You can override the default 'xl' breakpoint if needed
        "2xl": "1536px", // You can override the default '2xl' breakpoint if needed
        "custom-lg": "1100px",
        "custom-xl": "1400px",
      },
      colors: {
        redColor: "#c73b0f",
        green: "#1ea575",
        white: "#ffffff",
        black: "#000000",
        rose: {
          50: "#fcf8f6",
          100: "#f5eeec",
          300: "#caafa7",
          400: "#ad8a85",
          500: "#87635a",
          900: "#260f08",
        },
      },
    },
  },
  plugins: [],
};
