/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'font-roboto': ["Roboto", "Arial"]
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.135em',
        },
        extend: {
            colors:{
                'primary-black': '#000000',
                'primary-white': '#FFFBF3',
            }
        },
    },
    daisyui: {
        themes: [], //no themes or random colors
      },
    plugins: [require("daisyui")],
}
