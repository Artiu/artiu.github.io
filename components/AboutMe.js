import styled, { keyframes } from "styled-components";
import { FullScreenContainer } from "./styled-elements/FullScreenContainer";
import { MediumHeader } from "./styled-elements/MediumHeader";
import { useEffect, useState, useRef } from "react";

const Text = styled.p`
    font-size: 30px;
    text-align:center;
    padding-block: 10px;
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
    animation: ${animationFromLeft} 2.5s ease-in forwards;
`
const TextFromRight = styled(Text)`
    transform: translateX(100%);
    animation: ${animationFromRight} 2.5s 1.5s ease-in forwards;
`
export default function AboutMe({scrollRef}) {
    const [isOnScreen, setIsOnScreen] = useState(false);
    
    const startElRef = useRef();

    const handleScroll = () => {
        if(startElRef.current.getBoundingClientRect().top === 0) {
            setIsOnScreen(true);
            scrollRef.current.removeEventListener('scroll', handleScroll);
        }
    }

    useEffect(() => {
        scrollRef.current.addEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <FullScreenContainer background="#480CA8">
            <MediumHeader ref={startElRef}>About me</MediumHeader>
            {isOnScreen &&
            <>
                <TextFromLeft>17 years old</TextFromLeft>
                <TextFromRight>currently learning in high school</TextFromRight>
                <TextFromLeft></TextFromLeft>
            </>
            }
        </FullScreenContainer>
    )
}