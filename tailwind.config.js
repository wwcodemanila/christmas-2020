const colors = require("tailwindcss/colors")

module.exports = {
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: {
        light: "#A2C5EF",
        DEFAULT: "#5172A6",
        dark: "#102551",
      },
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundRepeat: "no-repeat",
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
}
