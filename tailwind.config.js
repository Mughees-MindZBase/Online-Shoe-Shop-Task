/** @type {import('tailwindcss').Config} */

const { purple } = require("@mui/material/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        normal: "16px",
        navbar: "18px ",
        large: "48px",
      },
      colors: {
        primary: "rgba(255, 255, 255, 1)",
        secondary: "rgba(233, 226, 255, 1)",
        primaryBackground: "rgba(16, 9, 25, 1)",
        gradientStart: "#AF63FB",
        gradientEnd: "#8C20F8",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      screens: {
        xs: "480px",
        sm: "640px", // Small devices (landscape phones, 576px and up)
        md: "768px", // Medium devices (tablets, 768px and up)
        lg: "1024px", // Large devices (desktops, 1024px and up)
        xl: "1280px", // Extra large devices (large desktops, 1280px and up)
      },
      borderRadius: {
        full: "100px",
        feedbackCardRadius: "24px, 24px, 24px, 4px",
      },
      textColor: {
        primary: "rgba(255, 255, 255, 1)",
        secondary: "rgba(233, 226, 255, 1)",
        lightGrey: "rgba(255, 255, 255, 0.48)",
        greyColor: "rgba(255, 255, 255, 0.8)",
        faqAnsColor: "rgba(254, 254, 254, 0.8)",
        purpleColor: "rgba(137, 8, 159, 1)",

        blackColor: "rgba(42, 42, 42, 1)",
        profileNameColor: "rgba(224, 224, 224, 1)",
        profileEmailColor: "rgba(94, 110, 120, 1)",
      },
      backgroundColor: {
        purpleColor: "rgba(137, 8, 159, 1)",
        whiteColor: "rgba(255, 255, 255, 0.2)",
        offWhiteColor: "rgba(241, 241, 241, 1)",
        rightWitheColor: "rgba(255, 255, 255, 1)",
        imageBackground: "rgba(242, 242, 242, 1)",
        cardInputBackground: "rgba(186, 104, 200, 1)",
        glass: "rgb(255, 255, 255, 0.04)",
        lightBackground: "rgba(255, 255, 255, 0.1)",
        lightGreyBackground: "rgba(255, 255, 255, 0.1)",
        almostBlack: "rgba(26, 26, 26, 1)",
        totalBlack: "rgba(19, 19, 19, 1)",
        faqBackground: "rgba(254, 254, 254, 0.07)",
        inputBackGround: "rgba(69, 69, 69, 1)",
        whiteBackground: "rgba(255, 255, 255, 1)",
      },
      borderColor: {
        customGray: "rgba(114, 114, 114, 1)",
        customPurple: "rgba(130, 29, 182, 1)",
        dashboardborderColor: "rgba(161, 161, 161, 0.2)",
        purpleColor: "rgba(137, 8, 159, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
