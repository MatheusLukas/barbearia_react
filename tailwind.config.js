/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url(/background-home.jpg)",
        img1: "url(/img1.jpg)",
        img2: "url(/img2.jpg)",
        img3: "url(/img3.jpg)",
        img4: "url(/img4.jpg)",
        img5: "url(/img5.jpg)",
        img6: "url(/img6.jpg)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        basic: "#121113",
        basicDark: "#0e0e0f",
        basicLight: "#161518",
      },
    },

    plugins: [],
  },
};
