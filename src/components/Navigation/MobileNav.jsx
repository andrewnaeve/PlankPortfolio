import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../style-utils';
import { Motion, spring, presets } from 'react-motion';

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
			x: spring(10, presets.stiff),
			y: spring(1)
		};
		const isClosed = {
			x: spring(80, presets.stiff),
			y: spring(0)
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
						<LinkWrapper
							style={{
								opacity: interpolatingStyle.y
							}}
						>
							<QuickLink
								to="/"
								exact
								onClick={this.handleClick}
								activeStyle={{ color: 'red' }}
							>
								Home
							</QuickLink>
							<QuickLink
								to="/Selected-Works"
								onClick={this.handleClick}
								activeStyle={{ color: 'red' }}
							>
								Selected Works
							</QuickLink>
							<QuickLink
								to="/Biography"
								onClick={this.handleClick}
								activeStyle={{ color: 'red' }}
							>
								Biography
							</QuickLink>
							<QuickLink
								to="/CV"
								onClick={this.handleClick}
								activeStyle={{ color: 'red' }}
							>
								CV
							</QuickLink>
							<QuickLink
								to="/Contact"
								onClick={this.handleClick}
								activeStyle={{ color: 'red' }}
							>
								Contact
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
	height: 60%;
	background-color: white;
	border-top: 1px solid #cdcdcd;
	margin-bottom: -1px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	${media.tablets`
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
	padding-top: 4px;
`;
const Patty = styled.span`
	width: 35px;
	height: 4px;
	margin-bottom: 4px;
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
const QuickLink = styled(NavLink)`
	font-size: 2rem;
	font-family: 'Abel', sans-serif;
	margin-bottom: 15px;
	color: black;
`;