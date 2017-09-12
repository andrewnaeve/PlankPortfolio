import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import Title from './components/Navigation/Title';
import Navbar from './components/Navigation/Navbar';
import MobileNav from './components/Navigation/MobileNav';
import Portfolio from './components/Portfolio/Portfolio';
import Landing from './components/Landing/LandingContainer';
import Footer from './components/Footer';
import Biography from './components/Bio/BioContainer';
import CVWrapper from './components/CV/CVContainer';
import Contact from './components/Contact/Contact';
// import 'font-awesome/css/font-awesome.min.css';

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
						<Route path="/Contact" component={Contact} />
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
