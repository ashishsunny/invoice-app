
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
        dimblue:"#888EB0",
        steelblue: "#7e88c3",
        color3: "#1e2139",
        darkorange: "#ff8f00",
        success: "#33d69f",
        color4: "#7c5dfa",
        darkblue:"#252945",
        verydarkblue:"#0C0E16",
        rose:"#EC5757"
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
