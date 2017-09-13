import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../style-utils';

const Title = () => (
	<Wrapper>
		<Nancy to="/" className="title">
			Nancy Plank
		</Nancy>
	</Wrapper>
);

export default Title;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 10px;
	${media.tablets`
		margin-bottom: 20px;`};
`;

const Nancy = styled(Link)`
	color: #000;
	display: flex;
	font-family: 'Abel', sans-serif;
	font-weight: 500;
	margin-top: 10px;
	text-align: center;
	${media.smallPhones`
		font-size: 4rem`};
	${media.largePhones`
		font-size: 5rem`};
	${media.tablets`
		font-size: 6rem;`};
	${media.fourKay`
		font-size: 12rem`};
`;
