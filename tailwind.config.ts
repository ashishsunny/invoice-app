
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: "#141625",
        color1: "#dfe3fa",
        white: "#fff",
        steelblue: "#7e88c3",
        color2: "#1e2139",
        darkorange: "#ff8f00",
        mediumseagreen: "#33d69f",
        color3: "#7c5dfa",
      },
      spacing: {},
      fontFamily: {
        sans: ['var(--font-spartan)'],
      },
    },
    fontSize: {
      mini: "0.94rem",
      smi: "0.81rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
