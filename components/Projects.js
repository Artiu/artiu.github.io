export default function Projects() {
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
    return (
        <div>
            <h2 className="text-2xl">My projects</h2>
            <div>
                {projects.map(({ name, liveLink, projectLink, description, screen }, index) => {
                    return (
                        <div key={index}>
                            <p>{name}</p>
                            <a href={liveLink}>
                                <img src={screen} alt={`${name} screenshot`} />
                            </a>
                            <p>{description}</p>
                            <a href={projectLink}>
                                <img src="/github.png" alt="Github logo" />
                                <p>Github</p>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
