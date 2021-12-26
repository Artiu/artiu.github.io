import Avatar from "./Avatar";

export default function Sidebar() {
    const texts = [
        "Self-taught developer",
        "Currently learning in high school",
        "Creative person who likes application logic",
        "Interested in frontend since 2019",
        "Big fan of JS and React",
    ];
    return (
        <div className="max-w-xs p-3 flex flex-col items-center gap-3">
            <Avatar />
            <ul>
                {texts.map((item, index) => {
                    return <li key={index}>-{item}</li>;
                })}
            </ul>
        </div>
    );
}
