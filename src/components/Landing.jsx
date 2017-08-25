import React from 'react';
import styled from 'styled-components';
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

	@media only screen and (min-width: 320px) {
	}

	@media only screen and (min-width: 414px) {
	}

	@media only screen and (min-width: 768px) {
		max-height: 500px;
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	}

	@media only screen and (min-width: 2000px) {
		max-height: 1500px;
	}
`;
const Wrapper = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
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
