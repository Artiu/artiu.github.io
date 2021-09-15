import styled from "styled-components"

export const FullScreenContainer = styled.div`
    position: relative;
    max-width: 100%;
    height: 100vh;
    background-color: ${props => props.background};
    scroll-snap-align: start;
`