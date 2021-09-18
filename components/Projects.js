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
            description: "I created countries website for Frontend Mentor challenge. User can search country by name and filter by region.",
            liveLink: "https://artiu.github.io/countries-website"
        },
        {
            name: "Url shortener",
            screen: "/url-shortener.png",
            link: "https://github.com/Artiu/url-shortener",
            description: "fkisfksfsfasjknafksjnfasjkajknm",
            liveLink: "https://artiu.github.io/url-shortener"
        },
        {
            name: "Diarybook",
            screen: "/diarybook.png",
            link: "https://github.com/Artiu/diarybook",
            description: "fkisfksfsfasjknafksjnfasjkajknm",
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