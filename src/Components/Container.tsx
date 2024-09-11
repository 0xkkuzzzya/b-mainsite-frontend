import styled from 'styled-components';
import SunBTCLogo from '../assets/MainLogo.webp';
import TelegramIcon from '../assets/TgBlack.webp';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`

const NameBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`

const SunBTCNameBlock = styled.img`
    width: 250px;
    height: 250px;
    @media (max-width: 800px) {
        width: 200px;
        height: 200px;
    }
`

const FirstBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    text-align: center;
    @media (max-width: 800px) {
        margin-top: 50px;
    }
`

const MainText = styled.a`
    color: #fff;
    font-size: 90px;
    font-weight: 600;
    @media (max-width: 700px) {
        font-size: 50px;
    }
`

const OrangeText = styled.a`
    color: #f7931a;
    font-size: 90px;
    font-weight: 600;
    @media (max-width: 700px) {
        font-size: 50px;
    }
`

const FirstBlockDescription = styled.a`
    max-width: 600px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 2.1rem;
    @media (max-width: 800px) {
        font-size: 14px;
        line-height: 1.5rem;
        margin-top: -5px;
    }
`

const GradientText = styled.a`
    background: linear-gradient(90deg,#7bc1fe,#2b99fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`

const ButtonBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 20px;
`

const GradientButton = styled.button`
    width: 180px;
    height: 45px;
    background: linear-gradient(90deg,#7bc1fe,#2b99fd);
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    border-radius: 12px;
    @media (max-width: 800px) {
        width: 140px;
        height: 40px;
        font-size: 15px;
    }
`

const WhiteButton = styled.button`
    width: 180px;
    height: 45px;
    background: #fff;
    color: #000;
    font-size: 17px;
    font-weight: 500;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        width: 140px;
        height: 40px;
        font-size: 15px;
    }
`

const TelegramLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-top: -2px;
`


export const MainContainer = () => {
    return (
        <Container>
            <div>
                <NameBlock>
                    <SunBTCNameBlock src={SunBTCLogo} />
                </NameBlock>
                <FirstBlock>
                    <MainText>
                        <OrangeText>Bitcoin</OrangeText>, but <br />
                        <GradientText>TON</GradientText> version.
                    </MainText>
                    <FirstBlockDescription>
                        Bytecoin is a token on the TON that emulates the economic model of Bitcoin,
                        incorporating features such as NFT GPUs mining, virtual electricity consumption, and periodic halvings.
                    </FirstBlockDescription>
                    <ButtonBlock>
                        <GradientButton>Open App</GradientButton>
                        <WhiteButton> <TelegramLogo src={TelegramIcon} /> Channel</WhiteButton>
                    </ButtonBlock>
                </FirstBlock>
            </div>
        </Container>
    )
} 