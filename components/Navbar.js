import { useState } from "react";

function ViewsButtons({ onScreen, scrollToView }) {
    const viewsNames = ["Home", "Techstack", "Projects", "Contact"];
    return viewsNames.map((item, index) => {
        const lowerCasedName = item.toLowerCase();
        return (
            <button
                key={index}
                onClick={() => scrollToView(lowerCasedName)}
                className={`py-1 px-3 hover:bg-neutral-200 ${
                    onScreen === lowerCasedName && "border-b-2 border-blue-500 w-fit"
                }`}
            >
                {item}
            </button>
        );
    });
}

export default function Navbar({ onScreen, scrollToView }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuOpen = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <nav className="py-4 px-6 flex justify-end gap-2 sticky left-0 top-0 bg-background z-40 border-b border-black">
            <button onClick={toggleMenuOpen} className="md:hidden">
                <img src="/hamburger.svg" alt="hamburger" />
            </button>
            <div className="hidden md:block">
                <ViewsButtons onScreen={onScreen} scrollToView={scrollToView} />
            </div>
            {isMenuOpen && (
                <div
                    className="fixed left-0 top-0 w-screen h-screen bg-white flex flex-col items-center gap-2 pt-14 md:hidden"
                    onClick={toggleMenuOpen}
                >
                    <button className="absolute top-4 right-4 rounded-full text-xl w-10 h-10 flex items-center justify-center shadow-2xl bg-neutral-300 hover:bg-neutral-400">
                        x
                    </button>
                    <ViewsButtons onScreen={onScreen} scrollToView={scrollToView} />
                </div>
            )}
        </nav>
    );
}
