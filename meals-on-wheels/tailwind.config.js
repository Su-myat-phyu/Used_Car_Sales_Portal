import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        "./resources/**/*.jsx",
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                  50: "#faf7fd",
                  100: "#f2edfa",
                  200: "#e8ddf7",
                  300: "#dc8827", // Primary color
                  400: "#dc8827",
                  500: "#dc8827",
                  600: "#dc8827",
                  700: "#7644ac",
                  800: "#463c8d",
                  900: "#361952",
                },
                secondary: {
                  50: "#fcf4f6",
                  100: "#f9eaed",
                  200: "#f2d9de",
                  300: "#e8b9c2",
                  400: "#d88d9d",
                  500: "#a6eb84", // Secondary color
                  600: "#a6eb84",
                  700: "#a6eb84",
                  800: "#473d4d",
                  900: "#3b1623",
                },
                accent: {
                  50: "#fcfcf4",
                  100: "#f8ece8",
                  200: "#f3dcf5",
                  300: "#eac3b7",
                  400: "#dc8827", // Accent color
                  500: "#52e35e", 
                  600: "#52e35e",
                  700: "#52e35e",
                  800: "#52e35e",
                  900: "#474f35",
                },
              },
        },
    },
    plugins: [],
};
