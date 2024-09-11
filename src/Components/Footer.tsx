import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #000;
    margin-top: 100px;
    position: absolute;
    bottom: 0;
`

const FooterText = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                Bytecoin
            </FooterText>
        </FooterContainer>
    )
}