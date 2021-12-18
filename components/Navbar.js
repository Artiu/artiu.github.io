export default function Navbar() {
    return (
        <nav className="py-4 px-6 flex justify-end gap-2">
            <a href="#home" className="py-1 px-3">
                Home
            </a>
            <a href="#techstack" className="py-1 px-3">
                Tech Stack
            </a>
            <a href="#projects" className="py-1 px-3">
                Projects
            </a>
            <a href="#contact" className="py-1 px-3">
                Contact
            </a>
        </nav>
    );
}
