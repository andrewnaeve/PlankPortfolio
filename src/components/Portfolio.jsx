import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AnimatedContainer from './AnimatedContainer';
import ImageProperties from './ImageProperties';
import ImageCard from './ImageCard';

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Portfolio = () =>
	<OuterContainer>
		{ImageProperties.map((x, i) =>
			<AnimatedContainer key={ImageProperties[i]}>
				<ImageCard url={ImageProperties[i]} />
			</AnimatedContainer>
		)}
	</OuterContainer>;

export default Portfolio;
