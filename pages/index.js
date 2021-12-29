import Head from "next/head";
import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import Contact from "../components/Contact";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Techstack from "../components/Techstack";
import { navbarHeight } from "../contants"

export default function Home() {
    const [onScreen, setOnScreen] = useState("home");
    const home = useRef();
    const techstack = useRef();
    const projects = useRef();
    const contact = useRef();

    const setWhatIsOnScreen = () => {
        const object = { home, techstack, projects, contact };
        const scrollPos = window.scrollY;
        const screen = window.innerHeight;
        if (document.body.clientHeight - 20 < scrollPos + screen) {
            setOnScreen("contact");
            return;
        }
        for (let property in object) {
            const rects = object[property].current.getBoundingClientRect();
            if (rects.top - navbarHeight <= 0 && rects.bottom + navbarHeight > 0) {
                setOnScreen(property);
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", setWhatIsOnScreen);
        return () => {
            window.removeEventListener("scroll", setWhatIsOnScreen);
        };
    }, []);
    const scrollToView = (name) => {
        const scroll = (offset) => {
            scrollTo(0, offset - navbarHeight);
        };
        switch (name) {
            case "home":
                scroll(home.current.offsetTop);
                break;
            case "techstack":
                scroll(techstack.current.offsetTop);
                break;
            case "projects":
                scroll(projects.current.offsetTop);
                break;
            case "contact":
                scroll(contact.current.offsetTop);
                break;
        }
    };
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="React developer and creative person who likes application logic"
                />
                <meta
                    name="keyword"
                    content="Artur Oborski, javascript, react, junior developer, portfolio"
                />
                <meta property="og:title" content="Artur Oborski | Frontend Developer" />
                <meta
                    property="og:description"
                    content="React developer and creative person who likes application logic"
                />
                <meta property="og:url" content="https://artiu.github.io" />
                <meta property="og:type" content="website" />
                <title>Artur Oborski | Frontend developer</title>
            </Head>
            <div ref={home}>
                <HomeComponent scroll={() => scrollToView("techstack")} />
            </div>
            <div>
                <Navbar onScreen={onScreen} scrollToView={scrollToView} />
                <div ref={techstack}>
                    <Techstack />
                </div>
                <div ref={projects}>
                    <Projects />
                </div>
                <div ref={contact}>
                    <Contact />
                </div>
            </div>
        </div>
    );
}
