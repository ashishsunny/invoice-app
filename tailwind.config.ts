
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#141625",
        color2: "#dfe3fa",
        white: "#fff",
        steelblue: "#7e88c3",
        color3: "#1e2139",
        darkorange: "#ff8f00",
        mediumseagreen: "#33d69f",
        color4: "#7c5dfa",
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
