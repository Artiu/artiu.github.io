import { useState, useEffect } from "react";

export default function AppearingText({ children }) {
    const wholeText = children.split("");
    const [text, setText] = useState({
        text: "",
        lastLetter: "",
    });
    useEffect(() => {
        const interval = setInterval(() => {
            if (wholeText.length === 0) {
                clearInterval(interval);
            } else {
                const letter = wholeText.shift();
                setText((prevText) => ({
                    text: prevText.text + prevText.lastLetter,
                    lastLetter: letter,
                }));
            }
        }, 100);
        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <p>
            {text.text}
            <span className="relative after:h-full after:absolute after:top-0 after:left-6 after:w-1/6 after:bg-black/80 after:animate-disappearing">
                {text.lastLetter}
            </span>
        </p>
    );
}
