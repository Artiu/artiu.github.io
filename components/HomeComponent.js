import { useEffect, useRef } from "react";
import AppearingText from "./AppearingText";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function HomeComponent({ setOnScreen }) {
    const homeRef = useRef();
    const isOnScreen = useIntersectionObserver(homeRef);

    useEffect(() => {
        if (isOnScreen) {
            setOnScreen("home");
        }
    }, [isOnScreen]);

    return (
        <div id="home" ref={homeRef}>
            <h1 className="text-3xl">
                <AppearingText>{"Hi! I'm Artur Oborski and I'm frontend developer"}</AppearingText>
            </h1>
        </div>
    );
}
