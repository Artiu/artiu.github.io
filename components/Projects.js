import { useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Project from "./Project";

export default function Projects({ setOnScreen }) {
    const projects = [
        {
            name: "Anime quotes",
            screen: "/animequotes.png",
            projectLink: "https://github.com/Artiu/anime-quotes-website",
            description:
                "Anime Quotes is website which I created for learning purpose. I wanted to practice Tailwind. I used Anime-chan API for anime quotes and Jikan - Unofficial MyAnimeList.net REST API for characters photo.",
            liveLink: "https://artiu.github.io/anime-quotes-website",
        },
        {
            name: "Countries website",
            screen: "/countries-website.png",
            projectLink: "https://github.com/Artiu/countries-website",
            description:
                "I created countries website for Frontend Mentor challenge. User can search country by name and filter by region. It was probably my first project with using external API.",
            liveLink: "https://artiu.github.io/countries-website",
        },
        {
            name: "Url shortener",
            screen: "/url-shortener.png",
            projectLink: "https://github.com/Artiu/url-shortener",
            description:
                "Long links are big problem. On my website you can shorten these kind of links. In this project I used shrtco.de api.",
            liveLink: "https://artiu.github.io/url-shortener",
        },
        {
            name: "Diarybook",
            screen: "/diarybook.png",
            projectLink: "https://github.com/Artiu/diarybook",
            description:
                "I created diarybook mainly for learning redux, but I think it might be useful. I used local storage for saving posts from user.",
            liveLink: "https://artiu.github.io/diarybook",
        },
    ];
    const projectsRef = useRef();
    const isOnScreen = useIntersectionObserver(projectsRef);

    useEffect(() => {
        if (isOnScreen) {
            setOnScreen("projects");
        }
    }, [isOnScreen]);
    return (
        <div className="py-3" ref={projectsRef}>
            <h2 className="text-3xl text-center mb-6" id="projects">
                My projects
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, index) => {
                    return <Project key={index} project={project} />;
                })}
            </div>
        </div>
    );
}
