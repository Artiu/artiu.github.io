import { useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Contact({ setOnScreen }) {
    const contactRef = useRef();
    const isOnScreen = useIntersectionObserver(contactRef);

    useEffect(() => {
        if (isOnScreen) {
            setOnScreen("contact");
        }
    }, [isOnScreen]);
    return (
        <footer
            id="contact"
            className="flex flex-col gap-1 items-center py-3 mt-3 border-t border-black"
            ref={contactRef}
        >
            <h2 className="text-2xl">Contact me</h2>
            <a href="mailto:oborskiartur123@gmail.com">Email: oborskiartur123@gmail.com</a>
            <a href="https://github.com/Artiu">
                <img src="/github.png" alt="github logo" className="w-10" />
            </a>
        </footer>
    );
}
