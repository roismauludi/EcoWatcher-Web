const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./example/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tambahkan warna yang sering error di Windmill
        purple: colors.purple,
        // lightBlue: colors.lightBlue, // jika error lightBlue
        // coolGray: colors.coolGray,   // jika error coolGray
      },
    },
  },
  plugins: [],
});
