import React from 'react';
import styled from 'styled-components';
import { LavendarLanding } from '../../ImageProperties';
import AnimatedContainer from '../Animation/AnimatedContainer';
import Landing from './Landing';

const LandingContainer = () => (
	<Container>
		<AnimatedContainer name={LavendarLanding}>
			<Landing name={LavendarLanding} />
		</AnimatedContainer>
	</Container>
);

export default LandingContainer;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-self: start;
	padding-top: 10px;
`;
