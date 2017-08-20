import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

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
				<Portfolio />
			</Body>
		);
	}
}

export default App;
