import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../style-utils';
import { Motion, spring, presets } from 'react-motion';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';
import { TiHomeOutline, TiMail, TiSocialInstagram } from 'react-icons/lib/ti';
import { MdHome, MdImage, MdMail, MdPersonOutline } from 'react-icons/lib/md';

class MobileNav extends Component {
	constructor(props) {
		super();
		this.state = {
			open: false
		};
		this.openAnimation = new Animated.Value(-40);
		this.closeAnimation = new Animated.Value(-5);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClick = () => {
		this.setState(
			{
				open: !this.state.open
			},
			() => {
				this.state.open ? this.handleOpen() : this.handleClose();
			}
		);
	};

	handleOpen() {
		console.log('alled');
		this.openAnimation.setValue(-40);
		Animated.spring(this.openAnimation, {
			toValue: -5,
			friction: 7
		}).start();
	}

	handleClose() {
		this.openAnimation.setValue(-5);
		Animated.spring(this.openAnimation, {
			toValue: -40,
			friction: 7
		}).start();
	}

	render() {
		const open = this.openAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const close = this.closeAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});

		return (
			<NavWrapper style={{ bottom: Animated.template`${open}%` }}>
				<Hamburger onClick={this.handleClick}>
					<Patty />
					<Patty />
					<Patty />
				</Hamburger>
			</NavWrapper>
		);
	}
}

export default MobileNav;

const NavWrapper = styled(Animated.div)`
	display: flex;
	position: fixed;
	bottom: -40%;
	left: 0;
	width: 100%;
	height: 50%;
	background-color: white;
	border-top: 1px solid #cdcdcd;
	margin-bottom: -1px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	${media.laptop`
	display: none;`};
`;

const Hamburger = styled.div`
	display: flex;
	position: absolute;
	top: 5%;
	left: 5%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 40px;
	height: 32px;
	padding-top: 5px;
`;
const Patty = styled.span`
	width: 33px;
	height: 4px;
	margin-bottom: 5px;
	background: #cdcdcd;
	z-index: 1;
	border-radius: 3px;
`;
