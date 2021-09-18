import styled from "styled-components"

const Div = styled.div`
    scroll-snap-align: start;
    background-color: #48cae4;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    color: black;
    gap: 10px;
    a{
        display: flex;
        align-items: center;
    }
    img {
        width: 50px;
    }
`
const Header = styled.h2`
    width: 100%;
    text-align: center;
`
export default function Footer() {
    return (
        <Div>
            <Header>Contact me</Header>
            <a href="mailto:oborskiartur123@gmail.com">
                Email: oborskiartur123@gmail.com
            </a>
            <a href="https://github.com/Artiu">
                <img src="/github.png" alt="github logo"/>
            </a>
        </Div>
    )
}