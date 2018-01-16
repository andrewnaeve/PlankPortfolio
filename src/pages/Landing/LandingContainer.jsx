import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import Landing from './Landing';
import { LavendarLanding } from '../../ImageProperties';

const LandingContainer = () => (
	<Container>
		<AnimatedContainer
			render={({ handleLoad, renderAnimation }) =>
				renderAnimation(
					<Landing
						title={LavendarLanding.title}
						url={LavendarLanding.url}
						handleLoad={handleLoad}
					/>
				)
			}
		/>
	</Container>
);

export default LandingContainer;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-self: start;
`;
