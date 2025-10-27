/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'josefin_slab': ['Josefin Slab', 'serif'],
                'cantarell': ['Cantarell', 'sans-serif'],
            },
            colors: {
                'noble-brown': '#543042',
                'noble-brown-light': '#6a3f52',
                'noble-brown-dark': '#3d232e',
                'logo-maroon': '#543042',
                'noble-yellow': '#F4A50D',
            },
        },
    },
    plugins: [],
}
