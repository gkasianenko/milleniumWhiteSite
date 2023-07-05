/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, css,js}", "./**/*.{html, js}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1440px",
        xl: "1440px",
        "2xl": "956px",
      },
    },
    colors: {
      primaryColor: "#0047FF",
      secondaryColor: "#E6F536",
      primaryBackground: "#FFFFFF",
      secondaryBackground: "#F6F6F5",
      primaryText: "#1E1B1C",
      secondaryText: "#FFFFFF",
    },
    
    extend: {},
    plugins: [],
  },
};
