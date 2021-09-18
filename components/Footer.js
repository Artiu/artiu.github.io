import styled from "styled-components"

const Div = styled.div`
    scroll-snap-align: start;
    background-color: lightblue;
    img {
        width: 50px;
    }
`

export default function Footer() {
    return (
        <Div>
            <a href="https://github.com/Artiu">
                <img src="/github.png" alt="github logo"/>
            </a>
            <a href="mailto:oborskiartur123@gmail.com">
                Email
            </a>
        </Div>
    )
}