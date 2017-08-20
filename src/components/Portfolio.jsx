import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PortfolioImage from './PortfolioImage';
const caturls = [
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
	'http://placekitten.com/g/700/700',
];

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 60px;
`;

const Portfolio = () =>
	<OuterContainer>
		{caturls.map((x, i) => <PortfolioImage key={i} url={caturls[i]} />)}
	</OuterContainer>;

export default Portfolio;
