import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import logo from './logo.svg';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing';
import Footer from './components/Footer';

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	margin: 0 10px 0 10px;
`;

const Content = styled(Switch)`
	display: flex;	
	flex: 1;
`;

class App extends Component {
	render() {
		return (
			<Wrapper>
				<Title />
				<Navbar />
				<Content>
					<Route exact path="/" component={Landing} />
					<Route path="/Selected-Works" component={Portfolio} />
				</Content>
				<Footer />
			</Wrapper>
		);
	}
}

export default App;
