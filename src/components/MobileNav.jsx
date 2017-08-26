import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../style-utils';
import { TiHomeOutline, TiMail, TiSocialInstagram } from 'react-icons/lib/ti';
import { MdHome, MdImage, MdMail, MdPersonOutline } from 'react-icons/lib/md';

class MobileNav extends Component {
	render() {
		return (
			<NavWrapper>
				<MdHome size={50} color="rgba(0, 0, 0, 0.3)" />
				<MdImage size={50} color="rgba(0, 0, 0, 0.3)" />
				<MdMail size={50} color="rgba(0, 0, 0, 0.3)" />
				<TiSocialInstagram size={50} color="rgba(0, 0, 0, 0.3)" />
			</NavWrapper>
		);
	}
}

export default MobileNav;

const NavWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	justify-content: space-around;
	width: 100%;
	background-color: white;
	border-top: 1px solid rgba(0,0,0, 0.4)
	height: 9%;
	margin-bottom: -1px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	${media.tablets`
		display: none;`};
`;
