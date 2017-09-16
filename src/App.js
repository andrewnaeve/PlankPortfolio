import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import styled from 'styled-components';
import Title from './components/Navigation/Title';
import Navbar from './components/Navigation/Navbar';
import MobileNav from './components/Navigation/MobileNav';
import Portfolio from './components/Portfolio/Portfolio';
import Landing from './components/Landing/LandingContainer';
import Footer from './components/Navigation/Footer';
import Biography from './components/Bio/BioContainer';
import CVWrapper from './components/CV/CVContainer';
import Contact from './components/Contact/Contact';

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
