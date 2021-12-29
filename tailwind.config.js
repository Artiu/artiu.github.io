const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            ...colors,
            hair: "#92816d",
            skin: "#e8beac",
            eye: "#85abce",
            background: "#faf8f8",
            "eye-border": "#111111",
        },
        extend: {
            gridTemplateColumns: {
                15: "repeat(15, 1fr)",
            },
            gridTemplateRows: {
                20: "repeat(20, 1fr)",
            },
            width: {
                40: "150px",
            },
            height: {
                50: "200px",
            },
            minHeight: {
                home: "calc(100vh - 66px)",
            },
            keyframes: {
                disappearing: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                },
            },
            animation: {
                disappearing: "disappearing 2s linear infinite",
            },
        },
    },
    plugins: [],
};
