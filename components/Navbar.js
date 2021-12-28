export default function Navbar({ onScreen }) {
    const scrollToView = (id) => {
        const top = document.getElementById(id).offsetTop - 66;
        window.scrollTo(0, top);
    };
    return (
        <nav className="py-4 px-6 flex justify-end gap-2 sticky top-0 bg-background z-40">
            <button
                onClick={() => scrollToView("home")}
                className={`py-1 px-3 ${onScreen == "home" && "border-b-2 border-blue-500"}`}
            >
                Home
            </button>
            <button
                onClick={() => scrollToView("techstack")}
                className={`py-1 px-3 ${onScreen == "techstack" && "border-b-2 border-blue-500"}`}
            >
                Tech Stack
            </button>
            <button
                onClick={() => scrollToView("projects")}
                className={`py-1 px-3 ${onScreen == "projects" && "border-b-2 border-blue-500"}`}
            >
                Projects
            </button>
            <button
                onClick={() => scrollToView("contact")}
                className={`py-1 px-3 ${onScreen == "contact" && "border-b-2 border-blue-500"}`}
            >
                Contact
            </button>
        </nav>
    );
}
