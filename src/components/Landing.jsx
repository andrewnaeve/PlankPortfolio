import React from 'react';
import styled from 'styled-components';
import { media } from '../style-utils';
import { LavendarLanding } from '../ImageProperties';
import AnimatedContainer from './AnimatedContainer';

const LandingImage = styled.img`
	display: flex;
	align-self: center;
	max-height: 600px;
	max-width: 90%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	${media.smallPhones`
	margin-top: 40px;`};
	${media.tablets`
	max-height: 600px;`};
	${media.laptop`
	margin-top: 20px;
	max-height: 600px;`};
	${media.fourKay`
	max-height: 1500px;`};
`;

const Landing = props =>
	<LandingImage src={props.url} onLoad={props.animate} />;

const AnimatedLanding = () =>
	<Wrapper>
		<AnimatedContainer>
			<Landing url={LavendarLanding} />
		</AnimatedContainer>
	</Wrapper>;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-self: flex-start;
	align-items: center;
	padding-top: 10px;
`;

export default AnimatedLanding;