import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: '#eef0fc', // Lighter shades based on #372fd4
                    100: '#dadbf9',
                    200: '#b2b3f1',
                    300: '#8a8ae8',
                    400: '#635fe0',
                    500: '#372fd4', // Base color
                    600: '#2d26b2',
                    700: '#211c84',
                    800: '#161256',
                    900: '#0c0830',
                },
                secondary: {
                    50: '#fdeef1', // Lighter shades based on #e78c9f
                    100: '#f9d6dc',
                    200: '#f3adb9',
                    300: '#ec8596',
                    400: '#e35d73',
                    500: '#e78c9f', // Base color
                    600: '#c5778a',
                    700: '#945b69',
                    800: '#633d46',
                    900: '#311e24',
                },
                accent: {
                    50: '#fef1eb', // Lighter shades based on #dc8956
                    100: '#fcdcca',
                    200: '#f8b98d',
                    300: '#f09560',
                    400: '#ea713a',
                    500: '#dc8956', // Base color
                    600: '#b86e47',
                    700: '#8b5236',
                    800: '#5d3524',
                    900: '#2f1a12',
                },
            },
        },
    },
    plugins: [],
};