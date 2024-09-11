import React from 'react';
import { MainContainer } from './Components/Container';
import { styled } from 'styled-components';
import { Header } from './Header';
import { SecondBlock } from './Components/SecondBlock';
import { ThirdBlock } from './Components/ThirdBlock';
import { FourthBlock } from './Components/FourthBlock';
import { FifthBlock } from './Components/FifthBlock';
import { Scheme } from './Components/Scheme';
import { Footer } from './Components/Footer';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Content = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	margin: auto;
	position: relative;
	@media (max-width: 800px) {
		width: 80%;
	}
`

function App() {
	return (
		<Container>
			<Content>
				<Header />
				<MainContainer />
				<SecondBlock />
				<ThirdBlock />
				<FourthBlock />
				<FifthBlock />
				<Scheme />
			</Content>
			<Footer />
		</Container>
	);
}

export default App;
