import React from 'react';
import styled from 'styled-components';
import emailIcon from '../../svg/emailIcon.svg';

const Email = () => (
	<SocialLink href="mailto:nplank@me.com">
		NPlank@me.com
		<Icons src={emailIcon} />
	</SocialLink>
);

export default Email;

const SocialLink = styled.a`
	display: flex;
	font-size: 2rem;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: #747d7d;
	margin-left: 10px;
	margin-right: 10px;
`;

const Icons = styled.img`
	display: flex;
	height: 80px;
	width: 80px;
	justify-content: center;
	align-items: start;
	margin-top: 10px;
	margin-bottom: 20px;
`;
