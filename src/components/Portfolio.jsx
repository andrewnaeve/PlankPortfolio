import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AnimatedContainer from './AnimatedContainer';
import ImageProperties from '../ImageProperties';
import ImageCard from './ImageCard';

const OuterContainer = styled.div`
	flex: 1;
	max-width: 90%;
	margin-top: 30px;
	justify-content: center;
`;

const Portfolio = () => (
	<OuterContainer>
		{ImageProperties.map((x, i) => (
			<AnimatedContainer key={ImageProperties[i]}>
				<ImageCard url={ImageProperties[i]} />
			</AnimatedContainer>
		))}
	</OuterContainer>
);

export default Portfolio;
