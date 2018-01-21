import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import styled from 'styled-components';
import Title from './pages/Navigation/Title';
import Navbar from './pages/Navigation/Navbar';
import MobileNav from './pages/Navigation/MobileNavContainer';
import Portfolio from './pages/Portfolio/PortfolioContainer';
import Landing from './pages/Landing/LandingContainer';
import Footer from './pages/Navigation/Footer';
import Biography from './pages/Bio/BioContainer';
import CV from './pages/CV/CVContainer';
import Contact from './pages/Contact/ContactContainer';
import Store from './pages/Store/StoreContainer';

const App = props => (
	<Wrapper>
		<Title />
		<Navbar />
		<BodyContainer>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/Selected-Works" component={Portfolio} />
				<Route path="/Biography" component={Biography} />
				<Route path="/CV" component={CV} />
				<Route path="/Contact" component={Contact} />
				<Route path="/Store" component={Store} />
				<Redirect from="**" to="/" />
			</Switch>
		</BodyContainer>
		<Footer />
		<MobileNav />
	</Wrapper>
);

export default App;

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
