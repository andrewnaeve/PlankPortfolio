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

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`;

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
					</Switch>
				</BodyContainer>
				<Footer />
				<MobileNav />
			</Wrapper>
		);
	}
}

const BodyContainer = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: center;
`;

export default App;
