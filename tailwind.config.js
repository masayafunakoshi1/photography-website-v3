/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.18em',
        },
        extend: {
            colors:{
                'primary-black': '#000000',
                'primary-white': '#FFFBF3',
            }
        },
    },
    plugins: [require("daisyui")],
}
