export default function Avatar() {
    /* prettier-ignore */
    const data = [
        ["", "", "", "", "", "", "hair", "hair", "hair", "", "", "", "", "", ""],
        ["", "", "", "", "", "hair", "hair", "hair", "hair", "hair", "", "", "", "", ""],
        ["", "", "", "", "hair", "hair", "hair", "hair", "hair", "hair", "hair", "", "", "", ""],
        ["", "", "hair", "hair", "hair", "hair", "hair", "hair", "hair", "hair", "hair", "hair", "hair", "", ""],
        ["hair", "hair", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "hair", "hair",],
        ["", "", "skin", "skin", "eye-border", "eye-border", "eye-border", "skin", "eye-border", "eye-border", "eye-border", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "eye-border", "eye", "eye-border", "skin", "eye-border", "eye", "eye-border", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "eye-border", "eye-border", "eye-border", "skin", "eye-border", "eye-border",  "eye-border", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin",  "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin",  "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
        ["", "", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "skin", "", "",],
    ];

    const classes = {
        skin: "bg-skin",
        eye: "bg-eye",
        "eye-border": "bg-eye-border",
        hair: "bg-hair",
    };

    return (
        <div className="border-1 grid grid-cols-15 grid-rows-20 w-40 h-50">
            {data.map((row) => {
                return row.map((item, index) => {
                    return <div className={item ? classes[item] : ""} key={index}></div>;
                });
            })}
        </div>
    );
}
