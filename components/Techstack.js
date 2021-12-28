import { useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Techstack({ setOnScreen }) {
    const technologies = [
        "HTML",
        "CSS",
        "JS",
        "TailwindCSS",
        "Styled components",
        "ReactJS",
        "Redux",
        "NextJS",
        "Jest",
    ];
    const techStackRef = useRef();
    const isOnScreen = useIntersectionObserver(techStackRef);
    useEffect(() => {
        if (isOnScreen) {
            setOnScreen("techstack");
        }
    }, [isOnScreen]);
    return (
        <div id="techstack" className="py-5 border-t border-black" ref={techStackRef}>
            <h2 className="text-3xl text-center mb-6">Techstack</h2>
            <div className="flex flex-wrap max-w-3xl mx-auto gap-8 justify-center">
                {technologies.map((name, index) => {
                    const imagePath = "/" + name.toLowerCase().replace(/ /g, "") + ".svg";
                    return (
                        <div key={index}>
                            <img src={imagePath} alt={`${name} logo`} className="w-44" />
                            <p className="text-center mt-3">{name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
