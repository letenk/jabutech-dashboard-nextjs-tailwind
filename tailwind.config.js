module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Animasi untuk dropdown
      animation: {
        "dropdown-transition":
          "dropdownTransition 0.4s cubic-bezier(0.73, 0.005, 0.22, 1)",
        accordion: "accordion 2s",
      },
      keyframes: {
        // animasi untuk dropdown pendukung diatas
        accordion: {
          from: {
            maxHeight: "0",
            animationTimingfunction: "linear",
          },
          to: {
            maxHeight: "600px",
            animationTimingfunction: "linear",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
