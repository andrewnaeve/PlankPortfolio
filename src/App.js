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
import CVWrapper from './pages/CV/CVContainer';
import Contact from './pages/Contact/ContactContainer';

const App = () => (
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
