import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 15px;
	width: 100%;
	min-height: auto;
	align-items: center;
	margin-top: 10px;
	padding-bottom: 15px;
	margin-bottom: 15px;
	flex-direction: column;
`;

const Copyright = styled.div`
	display: flex;
	text-align: center;
`;

const Instagram = styled.a`
	display: flex;
	text-align: center;
	margin-bottom: 10px;
`;

const Footer = () => {
	return (
		<FooterContainer className="footer">
			<Instagram href={'https://www.instagram.com/nplank/?hl=en'}>
				Instagram
			</Instagram>
			<Copyright className="footer">
				&copy;2017, Nancy Plank. All rights reserved.
			</Copyright>
		</FooterContainer>
	);
};

export default Footer;
