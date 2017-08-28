import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../style-utils';

const Footer = () => {
	return (
		<FooterContainer className="footer">
			<Copyright className="footer">
				&copy;2017, Nancy Plank. All rights reserved.
			</Copyright>
		</FooterContainer>
	);
};

// <Instagram href={'https://www.instagram.com/nplank/?hl=en'}>
// 	Instagram
// </Instagram>
const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Abel', sans-serif;
	font-size: 15px;
	width: 100%;
	min-height: auto;
	margin-top: 10px;
	margin-bottom: 24%;
	${media.tablets`
		margin-bottom: 2%;`};
`;

const Copyright = styled.div`
	display: flex;
	text-align: center;
	${media.smallPhones`
		font-size: .8rem`};
	${media.largePhones`
		font-size: .9rem`};
	${media.laptop`
		font-size: 1rem`};
	${media.desktop`
		font-size: 1.3rem`};
	${media.fourKay`
		font-size: 2.5rem`};
`;

const Instagram = styled.a`
	display: flex;
	text-align: center;
	margin-bottom: 10px;
	${media.smallPhones`
		font-size: 2.2rem`};
	${media.largePhones`
		font-size: 2.5rem`};
	${media.laptop`
		font-size: 3rem`};
	${media.desktop`
		font-size: 3.5rem`};
	${media.fourKay`
		font-size: 6rem`};
`;

export default Footer;
