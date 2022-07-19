module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#1e293b",
        primary: "#475569",
        text: "#d4d4d4"
      }
    },
  },
  plugins: [require("daisyui")],
}
