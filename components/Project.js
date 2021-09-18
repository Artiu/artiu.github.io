import styled from "styled-components"

const Div = styled.div`
    max-width: 720px;
    padding: 10px 20px;
    transition: all 0.3s linear;
    a > img {
        width: 100%;
        margin-top: 10px;
        @media (max-width: 750px) {
            width: 100%;
        }
    }
    a:last-child > img{
        width: 50px;
        height: auto;
        margin-top: 0px;
    }
    :hover {
        transform: scale(1.1);
        @media (max-width: 750px) {
            transform: none;
        }
    }
`
const Header = styled.p`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`
const P = styled.p`
    margin-top: 7px;
    font-size: 18px;
`
const A = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    width: fit-content;
    padding-right: 13px;
    padding-block: 5px;
    background-color: #2968FF;
    font-weight: 700;
    text-transform: uppercase;
    color: #0d2739;
    margin:0px auto;
    margin-top: 15px;
    :hover {
        background-color: #2541FA;
    }
`
export default function Project({name, screen, description, link, liveLink}) {
    return (
        <Div>
            <Header>{name}</Header>
            <a href={liveLink}><img src={screen} alt={`${name} screenshot`}/></a>
            <P>{description}</P>
            <A href={link}><img src="/github.png" alt="Github logo"/><p>Github</p></A>
        </Div>
    )
}