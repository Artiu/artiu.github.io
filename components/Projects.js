import styled from 'styled-components';
import Project from './Project';
import {FullScreenContainer} from './styled-elements/FullScreenContainer'
import {MediumHeader} from './styled-elements/MediumHeader'

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 30px;
    row-gap: 20px;
`
export default function Projects() {
    const projects = [
        {
            name: "Anime quotes",
            screen: "/animequotes.png",
            link: "https://github.com/Artiu/anime-quotes-website",
            description: "Anime Quotes is website which I created for learning purpose. I wanted to practice Tailwind. I used Anime-chan API for anime quotes and Jikan - Unofficial MyAnimeList.net REST API for characters photo.",
            liveLink: "https://artiu.github.io/anime-quotes-website"
        },
        {
            name: "Countries website",
            screen: "/countries-website.png",
            link: "https://github.com/Artiu/countries-website",
            description: "I created countries website for Frontend Mentor challenge. User can search country by name and filter by region. It was probably my first project with using external API.",
            liveLink: "https://artiu.github.io/countries-website"
        },
        {
            name: "Url shortener",
            screen: "/url-shortener.png",
            link: "https://github.com/Artiu/url-shortener",
            description: "Long links are big problem. On my website you can shorten these kind of links. In this project I used shrtco.de api.",
            liveLink: "https://artiu.github.io/url-shortener"
        },
        {
            name: "Diarybook",
            screen: "/diarybook.png",
            link: "https://github.com/Artiu/diarybook",
            description: "I created diarybook mainly for learning redux, but I think it might be useful. I used local storage for saving posts from user.",
            liveLink: "https://artiu.github.io/diarybook"
        }
    ];
    return (
        <FullScreenContainer background="#4895ef">
            <MediumHeader>My projects</MediumHeader>
            <Div>
            {projects.map((project, index) => {
                return <Project 
                            key={index}
                            name={project.name}
                            screen={project.screen}
                            link={project.link}
                            liveLink={project.liveLink}
                            description={project.description}
                        />
            })}
            </Div>
        </FullScreenContainer>
    )
}