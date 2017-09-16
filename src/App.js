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
import { injectGlobal } from 'styled-components';
import Abel from './fonts/Abel-Regular.ttf';
import FontAwesome from './fonts/fontawesome-webfont.woff2?v=4.7.0';

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

injectGlobal`
	@font-face {
		font-family: 'Abel';
		src: url('${Abel}');
		format('ttf');
	}
	@font-face {
		font-family: 'FontAwesome';
		src: url('${FontAwesome}');
		format('woff2');
	}
	.fa {
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		font-size: inherit;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.fa-instagram:before {
		content: '\f16d';
	}
	.fa-envelope-o:before {
		content: '\f003';
	}
`;
