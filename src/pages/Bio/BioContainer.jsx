import React from 'react';
import styled from 'styled-components';
import YouTubePlayer from './YouTubePlayer';
import About from './About';
import { media } from '../../utilities/style-utils';
import AnimatedContainer from '../Animation/AnimatedContainer';

const Biography = () => (
	<Container>
		<AnimatedContainer
			render={({ handleLoad, renderAnimation }) =>
				renderAnimation(<YouTubePlayer title={'YouTubeFrame'} handleLoad={handleLoad} />)
			}
		/>
		<AnimatedContainer
			render={({ handleLoad, renderAnimation }) =>
				renderAnimation(<About title={'AboutContainer'} handleLoad={handleLoad} />)
			}
		/>
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
