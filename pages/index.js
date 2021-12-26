import Head from "next/head";
import { useState } from "react/cjs/react.development";
import Contact from "../components/Contact";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Techstack from "../components/Techstack";

export default function Home() {
    const [onScreen, setOnScreen] = useState("home");
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
            <Navbar onScreen={onScreen} />
            <div className="min-h-screen">
                <div className="flex">
                    <Sidebar />
                    <HomeComponent setOnScreen={setOnScreen} />
                </div>
            </div>
            <Techstack />
            <Projects setOnScreen={setOnScreen} />
            <Contact />
        </div>
    );
}
