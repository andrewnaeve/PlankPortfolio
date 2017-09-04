import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nancy from '../img/Nancy.jpg';
import AnimatedContainer from './AnimatedContainer';
import YouTube from './YouTube';

class Biography extends Component {
	constructor(props) {
		super();
	}
	shouldComponentUpdate() {
		return false;
	}
	loaded = () => {
		console.log('loaded');
	};
	render() {
		return (
			<Container>
				<YouTube />
			</Container>
		);
	}
}

export default Biography;

// const NancyPlank = props => <ProfilePic src={Nancy} onLoad={props.animate} />;

// <AnimatedContainer>
// 	<NancyPlank />
// </AnimatedContainer>
const Container = styled.div`
	display: flex;

	margin-top: 20px;
	justify-content: center;
	max-width: 60%;
`;
