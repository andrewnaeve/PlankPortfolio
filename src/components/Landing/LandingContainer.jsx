import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import Landing from './Landing';
import { LavendarLanding } from '../../ImageProperties';

const LandingContainer = () => (
	<Container>
		<AnimatedContainer>
			<Landing title={LavendarLanding.title} url={LavendarLanding.url} />
		</AnimatedContainer>
	</Container>
);

export default LandingContainer;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-self: start;
`;
