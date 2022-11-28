/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'prism-svg' : "url('/svg/subtle-prism.svg')",
                'prism-svg-dark' : "url('/svg/subtle-prism-dark.svg')",
            },
            fontSize: {
                'xs1' : '0.65rem',
                'xs2' : '0.60rem',
            },
        },
    },
  plugins: [],
}
