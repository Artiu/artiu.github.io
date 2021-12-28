import { useEffect, useState } from "react";

export default function useIntersectionObserver(ref) {
    const [isOnScreen, setIsOnScreen] = useState(false);
    useEffect(() => {
        if (ref?.current) {
            const observer = new IntersectionObserver(
                (item) => {
                    if (item[0].isIntersecting) {
                        setIsOnScreen(true);
                    } else {
                        setIsOnScreen(false);
                    }
                },
                { threshold: 0.8 }
            );
            observer.observe(ref.current);
        }
    }, [ref]);
    return isOnScreen;
}
