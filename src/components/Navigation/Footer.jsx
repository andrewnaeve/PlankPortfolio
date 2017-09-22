import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

const Footer = () => {
	return (
		<FooterContainer className="footer">
			<Copyright className="footer">
				&copy;2017, Nancy Plank. All rights reserved.
			</Copyright>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Abel', sans-serif;
	font-size: 15px;
	width: 100%;
	min-height: auto;
	margin-top: 10px;
	margin-bottom: calc(100vh * 0.13);
	${media.tablets`
		margin-bottom: 0px;`};
`;

const Copyright = styled.div`
	display: flex;
	text-align: center;
	${media.smallPhones`
		font-size: .8rem;`};
	${media.largePhones`
		font-size: .9rem`};
	${media.tablets`
		margin-bottom: 5px;
		font-size: 1rem;`};
	${media.fourKay`
		font-size: 2.5rem`};
`;

export default Footer;
