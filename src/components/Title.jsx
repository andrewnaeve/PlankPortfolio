import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nancy = styled(Link)`
	color: #000;
	display: flex;
	justify-content: center;
	font-size: 7rem;
	font-family: 'Abel', sans-serif;
	font-weight: 500;
`;

const Title = () => <Nancy to="/">Nancy Plank</Nancy>;

export default Title;
