import React from 'react';
import styled from 'styled-components';
import ImageProperties from '../../ImageProperties';
import AnimatedContainer from '../Animation/AnimatedContainer';
import Landing from './Landing';

const LandingContainer = () => (
	<Container>
		<AnimatedContainer>
			<Landing
				title={ImageProperties[1].title}
				url={ImageProperties[1].url}
			/>
		</AnimatedContainer>
	</Container>
);

export default LandingContainer;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-self: start;
`;
