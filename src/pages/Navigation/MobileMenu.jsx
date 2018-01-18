import React from 'react';
import styled from 'styled-components';
import { MobileMenu } from './MobileMenu';
import { NavLink } from 'react-router-dom';
import { media } from '../../utilities/style-utils';

export const Menu = props => (
	<NavWrapper
		style={{
			transform: `translate3d(0, ${props.interpolatingStyle.x}px, 0)`
		}}
	>
		<Hamburger onClick={props.toggleDrawer}>
			<Patty />
			<Patty />
			<Patty />
		</Hamburger>

		<LinkWrapper
			style={{
				opacity: props.interpolatingStyle.y
			}}
		>
			<QuickLink to="/" exact onClick={props.toggleDrawer} activeStyle={{ color: '#78D5E3' }}>
				Home
			</QuickLink>
			<QuickLink to="/Selected-Works" onClick={props.toggleDrawer} activeStyle={{ color: '#78D5E3' }}>
				Selected Works
			</QuickLink>
			<QuickLink to="/Biography" onClick={props.toggleDrawer} activeStyle={{ color: '#78D5E3' }}>
				Biography
			</QuickLink>
			<QuickLink to="/CV" onClick={props.toggleDrawer} activeStyle={{ color: '#78D5E3' }}>
				CV
			</QuickLink>
			<QuickLink to="/Contact" onClick={props.toggleDrawer} activeStyle={{ color: '#78D5E3' }}>
				Contact
			</QuickLink>
		</LinkWrapper>
	</NavWrapper>
);

const NavWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 350px;
	background-color: white;
	border-top: 1px solid #cdcdcd;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	${media.tablets`
		display: none;`};
`;

const Hamburger = styled.div`
	display: flex;
	position: absolute;
	top: 10px;
	left: 20px;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	flex-direction: column;
	padding-top: 4px;
	margin-bottom: 10px;
	z-index: 1;
`;

const Patty = styled.div`
	width: 35px;
	height: 4px;
	margin-bottom: 4px;
	background: #cdcdcd;
	z-index: 1;
	border-radius: 3px;
`;

const LinkWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 40px;
`;

const QuickLink = styled(NavLink)`
	display: flex;
	font-size: 2rem;
	font-family: 'Abel', sans-serif;
	margin-bottom: 15px;
	color: black;
`;
