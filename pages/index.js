import Head from "next/head";
import { useState } from "react/cjs/react.development";
import Contact from "../components/Contact";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Techstack from "../components/Techstack";

export default function Home() {
    const [onScreen, setOnScreen] = useState("home");

    const scrollToView = (id) => {
        const top = document.getElementById(id).offsetTop - 66;
        window.scrollTo(0, top);
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
            <HomeComponent setOnScreen={setOnScreen} scroll={() => scrollToView("techstack")} />
            <div>
                <Navbar onScreen={onScreen} scrollToView={scrollToView} />
                <Techstack setOnScreen={setOnScreen} />
                <Projects setOnScreen={setOnScreen} />
                <Contact setOnScreen={setOnScreen} />
            </div>
        </div>
    );
}
