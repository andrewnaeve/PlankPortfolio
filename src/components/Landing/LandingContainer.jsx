import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';
import { LavendarLanding } from '../../ImageProperties';
import AnimatedContainer from '../AnimatedContainer';
import Landing from './Landing';

const LandingContainer = () => (
	<Container>
		<AnimatedContainer url={LavendarLanding}>
			<Landing url={LavendarLanding} />
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
