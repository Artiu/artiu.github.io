import Project from "./Project";

export default function Projects() {
    const projects = [
        {
            name: "Send your work",
            screen: "/send-your-work.png",
            projectLink: "https://github.com/Elektron-team",
            description:
                "This project was created for Hackheroes competition. Website allows you to send files to teacher's mail without require to login to your mail account, because you can log in with qr code on our website. It was my first bigger project, because this app includes live text chat, file sending, file preview and more interesting functionalities.",
            liveLink: "https://send-your.works",
        },
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
    return (
        <div className="py-5 flex flex-col gap-6">
            <h2 className="text-3xl text-center" id="projects">
                Projects
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, index) => {
                    return <Project key={index} project={project} />;
                })}
            </div>
            <p className="text-center text-xl">
                And more on my{" "}
                <a href="https://github.com/Artiu" className="text-blue-600 hover:text-blue-800">
                    Github
                </a>
                ...
            </p>
        </div>
    );
}
