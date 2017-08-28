import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../style-utils';

const Title = () =>
	<Nancy to="/" className="title">
		Nancy Plank
	</Nancy>;

export default Title;

const Nancy = styled(Link)`
	color: #000;
	display: flex;
	justify-content: center;
	font-size: 6rem;
	font-family: 'Abel', sans-serif;
	font-weight: 500;
	margin-top: 10px;
	${media.smallPhones`
		font-size: 4rem`}
	${media.largePhones`
		font-size: 5rem`}
	${media.tablets`
		font-size: 6rem`}
	${media.laptop`
		margin-bottom: 20px;`};
	${media.desktop`
		font-size: 6rem`}
	${media.fourKay`
		font-size: 12rem`}
`;
