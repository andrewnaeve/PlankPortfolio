import React from 'react';
import styled from 'styled-components';
import YouTube from './YouTube';
import About from './About';
import { media } from '../../style-utils';
import AnimatedContainer from '../AnimatedContainer';

const Biography = () => (
	<Container>
		<AnimatedContainer url={'YouTubeFrame'}>
			<YouTube url={'YouTubeFrame'} />
		</AnimatedContainer>
		<AnimatedContainer url={'AboutContainer'}>
			<About url={'AboutContainer'} />
		</AnimatedContainer>
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
