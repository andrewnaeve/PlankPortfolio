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
	flex: 1;
	margin-top: 20px;
	justify-content: center;
`;

const ProfilePic = styled.img`
	padding-top: 10px;
	align-self: flex-start;
	max-height: 300px;
	max-width: 50%;
	width: auto;
	border-radius: 3px;
`;
