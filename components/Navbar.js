export default function Navbar({ onScreen }) {
    return (
        <nav className="py-4 px-6 flex justify-end gap-2 sticky top-0 bg-white/60">
            <a
                href="#home"
                className={`py-1 px-3 ${onScreen == "home" && "border-b-2 border-blue-500"}`}
            >
                Home
            </a>
            <a
                href="#techstack"
                className={`py-1 px-3 ${onScreen == "techstack" && "border-b-2 border-blue-500"}`}
            >
                Tech Stack
            </a>
            <a
                href="#projects"
                className={`py-1 px-3 ${onScreen == "projects" && "border-b-2 border-blue-500"}`}
            >
                Projects
            </a>
            <a
                href="#contact"
                className={`py-1 px-3 ${onScreen == "contact" && "border-b-2 border-blue-500"}`}
            >
                Contact
            </a>
        </nav>
    );
}
