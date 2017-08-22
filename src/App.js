import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import logo from './logo.svg';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing';
import Footer from './components/Footer';

const Body = styled.div`
	margin: 10px;
	height: 100%;
	flex-direction: column;
`;

const Content = styled(Switch)`
	flex: 1;
`;

// background-color: #f9f9f9;

class App extends Component {
	render() {
		return (
			<Body>
				<Title />
				<Navbar />
				<Content>
					<Route exact path="/" component={Landing} />
					<Route path="/Selected-Works" component={Portfolio} />
				</Content>
				<Footer />
			</Body>
		);
	}
}

export default App;
