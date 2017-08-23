import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 16px;
	width: 100%;
`;

const Name = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-start;
	padding-left: 30px;
`;
const Copyright = styled.div`
	flex: 1;
	display: flex;
	text-align: center;
	justify-content: center;
`;

const Instagram = styled.a`
	flex: 1;
	display: flex;
	padding-right: 30px;
	justify-content: flex-end;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<Name>Nancy Plank</Name>
			<Copyright>
				Copyright 2017, Nancy Plank. All Rights Reserved.
			</Copyright>
			<Instagram href={'https://www.instagram.com/nplank/?hl=en'}>
				Instagram
			</Instagram>
		</FooterContainer>
	);
};

export default Footer;
