import styled from "styled-components";
import BytecoinLogo from './assets/MainLogo.webp'
import TgBlack from './assets/TgBlack.webp'
import TgBlue from './assets/TgWhite.webp'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Logo = styled.img`
    width: 280px;
    height: 280px;
    margin-top: 50px;
`

const WhiteText = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
`

const MainTextBlock = styled.div`
    width: 700px;
    margin-top: 30px;
    text-align: center;
`

const MainText = styled.a`
    color: #fff;
    font-size: 90px;
    font-weight: 600;
`

const OrangeText = styled.a`
    color: #f7931a;
    font-size: 90px;
    font-weight: 600;
`

const GradientText = styled.a`
    background: linear-gradient(90deg,#7bc1fe,#2b99fd);
    font-weight: 600;
    font-size: 90px;
    -webkit-background-clip: text;
    color: #0000;
`

const NavigateBlock = styled.div`
    width: 350px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LinkTelegramButtonBlue = styled.div`
    width: 150px;
    height: 40px;
    background: #0792ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LinkTelegramButtonWhite = styled.button`
    width: 150px;
    height: 40px;
    background: #fff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextInButtonBlue = styled.a`
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    padding-right: 25px;
    text-decoration: none;
`

const TextInButtonWhite = styled.a`
    color: #000;
    font-size: 17px;
    font-weight: 500;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    padding-right: 25px;
    text-decoration: none;
`

const TgLogo = styled.img`
    width: 20px;
    height: 20px;
`


export const MainBlock = () => {
    return (
        <Container>
            <Logo src={BytecoinLogo} />
            <WhiteText style={{marginTop: "50px"}}>Welcome to Bytecoin</WhiteText>
            <MainTextBlock>
                <MainText>
                    <OrangeText>Bitcoin</OrangeText>, but <br />
                    <GradientText>TON</GradientText> version.
                </MainText>
            </MainTextBlock>
            <WhiteText>
                Bytecoin is a Jetton on TON Blockchain issues <br />
                trough NFT mining. It fully copies Bitcoin economy <br />
                trough mining, electricity and halbings.
            </WhiteText>
            <NavigateBlock>
                <LinkTelegramButtonBlue>
                    <TextInButtonBlue href="https://t.me/bytecoindev_bot">
                        <TgLogo src={TgBlue} style={{ marginBottom: "1px", marginRight: "7px" }} />
                        Mini App
                    </TextInButtonBlue>
                </LinkTelegramButtonBlue>
                <LinkTelegramButtonWhite>
                    <TextInButtonWhite>
                        <TgLogo src={TgBlack} style={{ width: "24px", height: "24px", marginRight: "5px" }} />
                        Channel
                    </TextInButtonWhite>
                </LinkTelegramButtonWhite>
            </NavigateBlock>
        </Container>
    )
}