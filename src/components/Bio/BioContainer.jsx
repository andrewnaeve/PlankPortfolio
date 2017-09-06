import React from 'react';
import styled from 'styled-components';
import YouTube from './YouTube';
import About from './About';
import { media } from '../../style-utils';

const Biography = () => (
	<Container>
		<YouTube />
		<About />
	</Container>
);

export default Biography;

const Container = styled.div`
	display: flex;
	margin-top: 20px;
	justify-content: center;
	flex-direction: column;
	max-width: 90%;
	${media.laptop`
	max-width: 60%;
	`};
`;
