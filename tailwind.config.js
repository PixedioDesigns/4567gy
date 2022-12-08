/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                xs: "11.26px",
                base: "12px",
                sm: "14px",
                "2sm": "15px",
                md: "16px",
                "2md": "17px",
                lg: "18px",
                xl: "20px",
                "2xl": "22px",
                "3xl": "25px",
                "4xl": "30px",
                "5xl": "35px",
                "6xl": "45px",
                "7xl": "50px",
                "8xl": "56px",
                "9xl": "60px",
                xxl: "65px",
                "2xxl": "75px",
            },
            colors: {
                darkBlack: "#101828",
            },
            screens: {
                sm: "640px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1536px",
                // => @media (min-width: 1536px) { ... }

                "3xl": "1700px",
                // => @media (min-width: 1700px) { ... }
            },
        },
    },
    plugins: [],
};
