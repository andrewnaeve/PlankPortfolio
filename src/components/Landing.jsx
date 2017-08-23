import React from 'react';
import styled from 'styled-components';
import { LavendarLanding } from './ImageProperties';
import AnimatedContainer from './AnimatedContainer';

const LandingImage = styled.img`
	display: flex;
	justify-content: center;
	align-self: start;
	max-height: 600px;
	max-width: 90%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
`;
const Wrapper = styled.div`
	display: flex;
	flex: 1;
	margin-bottom: 20px;
`;

const Landing = props =>
	<LandingImage src={props.url} onLoad={props.animate} />;

const AnimatedLanding = () =>
	<Wrapper>
		<AnimatedContainer>
			<Landing url={LavendarLanding} />
		</AnimatedContainer>
	</Wrapper>;

export default AnimatedLanding;
