import styled from 'styled-components'
import {FullScreenContainer} from './styled-elements/FullScreenContainer'
import { MediumHeader } from './styled-elements/MediumHeader'
import Technology from './Technology'

const TechContainer = styled.div`
    margin:0 auto;
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 40px;
    column-gap: 50px;
    @media (max-width: 800px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
    }
`
export default function TechStack() {
    const technologies = ["HTML", "CSS","JS", "SASS", "TailwindCSS", "Styled components", "ReactJS", "Redux", "NextJS", "Jest"];
    return (
        <FullScreenContainer background = "#4361ee" id="technologies">
            <MediumHeader>Tech stack</MediumHeader>
            <TechContainer>
            {technologies.map((technology, index) => {
                return <Technology key={index} name={technology} />
            })}
            </TechContainer>
        </FullScreenContainer> 
    )
}