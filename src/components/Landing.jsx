import React from 'react';
import styled from 'styled-components';
import { LavendarLanding } from './ImageProperties';
import AnimatedContainer from './AnimatedContainer';

const LandingImage = styled.img`
	display: flex;
	justify-content: center;
	max-height: 550px;
	max-width: 100%;
	height: auto;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
`;

const Landing = props =>
	<LandingImage src={props.url} onLoad={props.animate} />;

const AnimatedLanding = () =>
	<AnimatedContainer>
		<Landing url={LavendarLanding} />
	</AnimatedContainer>;

export default AnimatedLanding;
