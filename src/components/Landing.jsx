import React from 'react';
import styled from 'styled-components';
import { media } from '../style-utils';
import { LavendarLanding } from '../ImageProperties';
import AnimatedContainer from './AnimatedContainer';

const LandingImage = styled.img`
	display: flex;
	justify-content: center;
	align-self: center;
	max-height: 700px;
	max-height: 700px;
	max-width: 90%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	${media.tablets`
	max-height: 500px;`};
	${media.fourKay`
	max-height: 1500px;`};
`;

const Landing = props =>
	<LandingImage src={props.url} onLoad={props.animate} />;

const AnimatedLanding = () =>
	<AnimatedContainer>
		<Landing url={LavendarLanding} />
	</AnimatedContainer>;

export default AnimatedLanding;
