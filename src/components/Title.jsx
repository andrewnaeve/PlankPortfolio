import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = () => <Nancy to="/">Nancy Plank</Nancy>;

export default Title;

const Nancy = styled(Link)`
	color: #000;
	display: flex;
	justify-content: center;
	font-size: 7rem;
	font-family: 'Abel', sans-serif;
	font-weight: 500;
	margin-top: 10px;
	margin-bottom: 20px;

    @media only screen and (min-width : 320px) {
		font-size: 4rem;
    }
	
    @media only screen and (min-width : 414px) {
		font-size: 5rem;
	}
	
    @media only screen and (min-width : 768px) {
		font-size: 6rem;
    }
	
    @media only screen and (min-width : 992px) {

    }

    @media only screen and (min-width : 1200px) {
		font-size: 7rem;
	}
	
    @media only screen and (min-width : 2000px) {
		font-size: 12rem;
    }
`;
