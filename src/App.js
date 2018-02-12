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
import { ConnectedModal } from './pages/Modal/ConnectedModal';
import { StoreModal } from './pages/Modal/StoreModal';
import { BasketContainer } from './pages/Store/Basket/BasketContainer';
import { OrderFormContainer } from './pages/Store/Order/OrderFormContainer';
import { OptionsContainer } from './pages/Store/Options/OptionsContainer';

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
				<Route exact path="/Store" component={Store} />
				<Route exact path="/Store/Basket" component={BasketContainer} />
				<Route exact path="/Store/Basket/Shipping" component={OrderFormContainer} />
				<Route exact path="/Store/Basket/Shipping/Options" component={OptionsContainer} />
				<Redirect from="**" to="/" />
			</Switch>
		</BodyContainer>
		<ConnectedModal render={({ item, show }) => <StoreModal item={item} show={show} />} />
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
