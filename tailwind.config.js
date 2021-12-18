module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "15": "repeat(15, 1fr)"
            },
            gridTemplateRows: {
                "20": "repeat(20, 1fr)"
            },
            width: {
                "40": "150px"
            },
            height: {
                "50": "200px"
            },
        },
    },
    plugins: [],
};
