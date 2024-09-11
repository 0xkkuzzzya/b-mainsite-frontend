import styled from "styled-components";
import TgLogoBlack from '../assets/TgBlack.webp';
import TgLogoWhite from '../assets/TgWhite.webp';

const FooterContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #000;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const LinkBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 15px;
`

const LinkText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    display: flex;
    align-items: center;
`

const TgLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`

const Signature = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <LinkBlock>
                <LinkText><TgLogo src={TgLogoWhite} /> Telegram Announcements (ENG)</LinkText>
                <LinkText><TgLogo src={TgLogoWhite} /> Новости в Telegram (RU)</LinkText>
                <LinkText>Twitter</LinkText>
            </LinkBlock>
            <Signature>Bytecoin Foundation ©️ 2025</Signature>
        </FooterContainer>
    )
}