import styled from "styled-components"
const Container = styled.div`
`
const Img = styled.img`
    width: 150px;
    height: 150px;
    margin:0 auto;
    @media (max-width: 800px) {
        width: 200px;
        height: auto;
    }
`
const Text = styled.p`
    margin-top: 5px;
    font-weight: 600;
    text-align: center;
`
export default function Technology({name}) {
    const imagePath = `/${name.toLowerCase().replace(/ +/g, "")}.svg`;
    return (
        <Container>
            <Img src={imagePath} alt={`${name} logo`}/>
            <Text>{name}</Text>
        </Container>
    )
}