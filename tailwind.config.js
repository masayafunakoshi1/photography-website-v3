/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                'primary-black': '#000000',
                'primary-white': '#FFFBF3',
            }
        },
    },
    plugins: [require("daisyui")],
}
