import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import Title from './components/Title';
import Navbar from './components/Navbar';

const Body = styled.div`
	position: relative;
	height: 100%;
	background-color: #f9f9f9;
`;

class App extends Component {
	render() {
		return (
			<Body>
				<Title />
				<Navbar />
			</Body>
		);
	}
}

export default App;
