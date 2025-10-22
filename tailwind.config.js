/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'josefin': ['Josefin Slab', 'serif'],
                'cantarell': ['Cantarell', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
