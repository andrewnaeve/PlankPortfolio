import React from 'react';
import styled from 'styled-components';
import YouTubePlayer from './YouTubePlayer';
import About from './About';
import { media } from '../../Utilities/style-utils';
import AnimatedContainer from '../Animation/AnimatedContainer';

const Biography = () => (
	<Container>
		<AnimatedContainer title={'YouTubeFrame'}>
			<YouTubePlayer title={'YouTubeFrame'} />
		</AnimatedContainer>
		<AnimatedContainer title={'AboutContainer'}>
			<About title={'AboutContainer'} />
		</AnimatedContainer>
	</Container>
);

export default Biography;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	max-width: 90%;
	margin-top: 30px;
	${media.tablets`
		max-width: 70%;
		margin-top: 20px;
	`};
`;
