import styled from "styled-components"

export const FullScreenContainer = styled.div`
    position: relative;
    max-width: 100%;
    min-height: 100vh;
    background-color: ${props => props.background};
`