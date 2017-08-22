import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import logo from './logo.svg';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing';

const Body = styled.div`
	margin: 10px 10px 10px 10px;
	height: 100%;
`;

// background-color: #f9f9f9;

class App extends Component {
	render() {
		return (
			<Body>
				<Title />
				<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/Selected-Works" component={Portfolio} />
					<Route path="/Biography" component={Portfolio} />
					<Route path="/Curriculum-Vitae" component={Portfolio} />
				</Switch>
			</Body>
		);
	}
}

export default App;
