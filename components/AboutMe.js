import styled, { keyframes } from "styled-components";
import { FullScreenContainer } from "./styled-elements/FullScreenContainer";
import { MediumHeader } from "./styled-elements/MediumHeader";
import { useEffect, useState, useRef } from "react";
import Scroll from "./ScrollElement";

const Text = styled.p`
    font-size: 30px;
    text-align:center;
    padding: 10px 20px;
`
const animationFromLeft = keyframes`
    65%{
        transform: translateX(10%);
    }
    100% {
        transform: translateX(0%);
    }
`
const animationFromRight = keyframes`
    65% {
        transform: translateX(-10%);
    }
    100% {
        transform: translateX(0%);
    }
`
const TextFromLeft = styled(Text)`
    transform: translateX(-100%);
    animation: ${animationFromLeft} 2.5s ${props => props.index * 1.5 + "s"} ease-in forwards;
    @media (max-width: 1100px) {
        animation: ${animationFromLeft} 1.5s ${props => props.index * 1.25 + "s"} ease-in forwards;
    }
`
const TextFromRight = styled(Text)`
    transform: translateX(100%);
    animation: ${animationFromRight} 2.5s ${props => props.index * 1.5 + "s"} ease-in forwards;
    @media (max-width: 1100px) {
        animation: ${animationFromRight} 1.5s ${props => props.index * 1.25 + "s"} ease-in forwards;
    }
`
export default function AboutMe({scrollRef}) {
    const texts = ["Self-taught developer", "Currently learning in high school","Creative person who likes application logic","Interested in frontend since 2019", "Big fan of JS and React"];
    const [isOnScreen, setIsOnScreen] = useState(false);
    
    const startElRef = useRef();
    const handleScroll = () => {
        if(startElRef.current.getBoundingClientRect().top < 300) {
            setIsOnScreen(true);
            scrollRef.current.removeEventListener('scroll', handleScroll);
        }
    }

    useEffect(() => {
        scrollRef.current.addEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <FullScreenContainer background="#480CA8" ref={startElRef}>
            <MediumHeader>About me</MediumHeader>
            {isOnScreen &&
                texts.map((text, index) => {
                    return !(index % 2) ?
                        <TextFromLeft key={index} index={index}>{text}</TextFromLeft>
                        : 
                        <TextFromRight key={index} index={index}>{text}</TextFromRight>
                })
            }
            <Scroll scrollRef={scrollRef} containerRef={startElRef}/>
        </FullScreenContainer>
    )
}