import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PortfolioImage from './PortfolioImage';
import ImageProperties from './ImageProperties';

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Portfolio = () =>
	<OuterContainer>
		{ImageProperties.map((x, i) =>
			<PortfolioImage key={i} url={ImageProperties[i]} />
		)}
	</OuterContainer>;

export default Portfolio;
