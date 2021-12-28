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
        <div
            id="home"
            className="w-full min-h-home bg-[url('/background2.jpg')] bg-cover bg-bottom"
            ref={homeRef}
        >
            <div className="h-full bg-white/20">
                <h1 className="text-3xl text-center pt-3">
                    <AppearingText>
                        {"Hi! I'm Artur Oborski and I'm frontend developer"}
                    </AppearingText>
                </h1>
            </div>
        </div>
    );
}
