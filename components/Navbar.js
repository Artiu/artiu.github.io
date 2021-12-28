export default function Navbar({ onScreen, scrollToView }) {
    const viewsNames = ["Home", "Techstack", "Projects", "Contact"];
    return (
        <nav className="py-4 px-6 flex justify-end gap-2 sticky top-0 bg-background z-40 border-b border-black">
            {viewsNames.map((item, index) => {
                const lowerCasedName = item.toLowerCase();
                return (
                    <button
                        key={index}
                        onClick={() => scrollToView(lowerCasedName)}
                        className={`py-1 px-3 ${
                            onScreen === lowerCasedName && "border-b-2 border-blue-500"
                        }`}
                    >
                        {item}
                    </button>
                );
            })}
        </nav>
    );
}
