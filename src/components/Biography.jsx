import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import YouTube from './YouTube';
import { media } from '../style-utils';

class Biography extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<Container>
				<YouTube />
			</Container>
		);
	}
}

export default Biography;

const Container = styled.div`
	display: flex;
	margin-top: 20px;
	justify-content: center;
	max-width: 90%;
	${media.laptop`
	max-width: 60%;
	`};
`;
