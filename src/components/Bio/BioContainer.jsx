import React from 'react';
import styled from 'styled-components';
import YouTubePlayer from './YouTubePlayer';
import About from './About';
import { media } from '../../style-utils';
import AnimatedContainer from '../Animation/AnimatedContainer';

const Biography = () => (
	<Container>
		<AnimatedContainer name={'YouTubeFrame'}>
			<YouTubePlayer name={'YouTubeFrame'} />
		</AnimatedContainer>
		<AnimatedContainer name={'AboutContainer'}>
			<About name={'AboutContainer'} />
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
