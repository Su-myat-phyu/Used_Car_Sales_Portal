import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#eef5f1",
                    100: "#dcebe4",
                    200: "#bad7c8",
                    300: "#8cbda4",
                    400: "#6f937f", // Base primary color
                    500: "#5d7a6b",
                    600: "#4a6157",
                    700: "#384743",
                    800: "#252d2f",
                    900: "#12161a",
                },
                secondary: {
                    50: "#f5f7f8",
                    100: "#e5eaed",
                    200: "#c9d2d8",
                    300: "#a8b6c0",
                    400: "#8a9aa8",
                    500: "#71818f", // Base secondary color
                    600: "#5b6775",
                    700: "#454e5b",
                    800: "#303441",
                    900: "#1a1c27",
                },
                accent: {
                    50: "#f3f4f7",
                    100: "#e1e4eb",
                    200: "#c3c6d6",
                    300: "#a1a5bc",
                    400: "#8c90a9", // Base accent color
                    500: "#757790",
                    600: "#5e5e73",
                    700: "#484855",
                    800: "#313138",
                    900: "#1a1a1d",
                },
            },
            fontFamily: {
                sans: ['sans-serif', 'Roboto'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
