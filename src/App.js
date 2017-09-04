import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import logo from './logo.svg';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Biography from './components/BioContainer';
import CVWrapper from './components/CV/CVContainer';

class App extends Component {
	render() {
		return (
			<Wrapper>
				<Title />
				<Navbar />
				<BodyContainer>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/Selected-Works" component={Portfolio} />
						<Route path="/Biography" component={Biography} />
						<Route path="/CV" component={CVWrapper} />
					</Switch>
				</BodyContainer>
				<Footer />
				<MobileNav />
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`;

const BodyContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
`;

export default App;
