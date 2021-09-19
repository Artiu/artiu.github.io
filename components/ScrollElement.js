import styled, {keyframes} from "styled-components"

const bounce = keyframes`
    0% {
        transform: translate(-50%, 0);
    }
    50% {
        transform: translate(-50%, -50%);
    }
    100% {
        transform: translate(-50%, 0);
    }
`

export const Scroll = styled.a`
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
    z-index: 5;
    ::after, ::before {
        content: '';
        position: absolute;
        right: 0;
        top:0;
        background-color: white;
        width: 3px;
        height: 135%;
        transform: rotate(45deg);
    }
    ::before{
        right: auto;
        left: 0;
        transform: rotate(-45deg);
    }
    :hover {
        cursor: pointer;
    }
    animation: ${bounce} 2s linear infinite;
`