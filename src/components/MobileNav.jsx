import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../style-utils';
import { Motion, spring, presets } from 'react-motion';
import { TiHomeOutline, TiMail, TiSocialInstagram } from 'react-icons/lib/ti';
import { MdHome, MdImage, MdMail, MdPersonOutline } from 'react-icons/lib/md';

class MobileNav extends Component {
	constructor(props) {
		super();
		this.state = {
			open: false
		};
	}

	handleClick = () => {
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		let { open } = this.state;

		const isOpen = {
			x: spring(10, presets.stiff)
		};
		const isClosed = {
			x: spring(80, presets.stiff)
		};

		const dynamicStyle = open ? isOpen : isClosed;

		return (
			<Motion style={dynamicStyle}>
				{interpolatingStyle => (
					<NavWrapper
						style={{
							transform: `translate3d(0, ${interpolatingStyle.x}%, 0)`,
							WebkitTransform: `translate3d(0, ${interpolatingStyle.x}%, 0)`
						}}
					>
						<Hamburger onClick={this.handleClick}>
							<Patty />
							<Patty />
							<Patty />
						</Hamburger>
						<LinkWrapper>
							<QuickLink to="/" onClick={this.handleClick}>
								Home
							</QuickLink>
							<QuickLink
								to="/Selected-Works"
								onClick={this.handleClick}
							>
								Selected Works
							</QuickLink>
							<QuickLink
								to="/Biography"
								onClick={this.handleClick}
							>
								Biography
							</QuickLink>
						</LinkWrapper>
					</NavWrapper>
				)}
			</Motion>
		);
	}
}

export default MobileNav;

const NavWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
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

const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
`;
const QuickLink = styled(Link)`
	font-size: 2rem;
	font-family: 'Abel', sans-serif;
	margin-bottom: 15px;
	color: black;
`;
