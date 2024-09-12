import styled from "styled-components";
import SchemeImg from '../assets/SchemeImg.svg'
import { useInView } from "react-intersection-observer";

const Logo = styled.img <{ marginM: string, opacityM: string }>`
    width: 520px;
    height: 450px;
    margin: auto;
    margin-bottom: 60px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all .3s ease-in-out;
    @media (max-width: 700px) {
        width: 320px;
        height: 270px;
    }
`

const BlockText = styled.a`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 2.2rem;
    text-align: center;
`

const BlockDescription = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    font-family: 'Metropolis', sans-serif;
    line-height: 1.8rem;
    margin-top: 20px;
    text-align: center;
    @media (max-width: 800px) {
        font-size: 15px;
        line-height: 1.6rem;
        margin-top: 10px;
    }
`


export const Scheme = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <>
            <Logo src={SchemeImg} ref={ref}
                marginM={inView == true ? '60px' : '80px'}
                opacityM={inView == true ? '1' : '0'} />
            <BlockText>Following Bitcoin's principles</BlockText>
            <BlockDescription>
                Bytecoin mirrors Bitcoin's economic model, but
                instead of electricity costs being paid to power
                companies, these costs are redirected to Bytecoin's
                liquidity pool on a decentralized exchange (DEX).
                This mechanism enhances Bytecoin's liquidity while
                maintaining the core principles of Bitcoin economy.
            </BlockDescription>
        </>
    )
}