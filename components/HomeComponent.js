import { useEffect, useRef } from "react";
import AppearingText from "./AppearingText";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function HomeComponent({ setOnScreen, scroll }) {
    const homeRef = useRef();
    const isOnScreen = useIntersectionObserver(homeRef);

    useEffect(() => {
        if (isOnScreen) {
            setOnScreen("home");
        }
    }, [isOnScreen]);

    return (
        <div
            id="home"
            className="w-full min-h-screen flex flex-col items-center justify-center gap-5 bg-black/90 text-white"
            ref={homeRef}
        >
            <h1 className="text-3xl text-center px-2">
                <AppearingText>{"Hi!\nI'm Artur Oborski and I'm frontend developer"}</AppearingText>
            </h1>
            <button
                className="py-2 px-6 bg-gradient-to-r from-indigo-500 to-purple-700 rounded-lg hover:from-indigo-600 hover:to-purple-800"
                onClick={scroll}
            >
                Get started
            </button>
        </div>
    );
}
