import { FullScreenContainer } from "./styled-elements/FullScreenContainer"
import AppearingText from "./AppearingText"
import styled from "styled-components"

const TextContainer = styled.div`
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    width: 90%;
`
export default function Intro() {
    return (
        <FullScreenContainer background="#3a0ca3">
            <TextContainer>
                <AppearingText>{"Hi! I'm Artur Oborski and I'm frontend developer."}</AppearingText>
            </TextContainer>
        </FullScreenContainer>
    )
}