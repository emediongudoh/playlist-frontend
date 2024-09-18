/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand_color: '#0284c7',
                brand_color_2: '#0369a1',
                chinese_black: '#131417',
                raisin_black: '#1E1F26',
                charleston_green: '#252830',
                columbia_blue: '#cbd5e1',
                cadet_gray: '#94a3b8',
            },
        },
    },
    plugins: [],
};
