import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../utilities/style-utils';

const Navbar = () => (
	<NavContainer>
		<NavList>
			<Item>
				<StyledLink to="/Selected-Works" activeStyle={{ color: '#78D5E3' }}>
					Selected Works
				</StyledLink>
			</Item>
			<Item>
				<StyledLink to="/Biography" activeStyle={{ color: '#78D5E3' }}>
					Biography
				</StyledLink>
			</Item>
			<Item>
				<StyledLink to="/CV" activeStyle={{ color: '#78D5E3' }}>
					CV
				</StyledLink>
			</Item>
			<Item>
				<StyledLink to="/Contact" activeStyle={{ color: '#78D5E3' }}>
					Contact
				</StyledLink>
			</Item>
		</NavList>
	</NavContainer>
);

const NavContainer = styled.nav`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
	${media.smallPhones`
		display: none;`};
	${media.tablets`
		display: flex;`};
`;
const NavList = styled.ul`
	display: flex;
`;

const Item = styled.li`
	display: flex;
`;

const StyledLink = styled(NavLink)`
	font-family: 'Abel', sans-serif;
	font-size: 20px;
	margin: 0px 15px 0px 15px;
	color: #a9a9a9;
	text-decoration: none;
	&:hover {
		color: #747d7d;
	}
	${media.smallPhones`
	font-size: 18px;
	`};
	${media.largePhones`
	font-size: 20px;
	`};
	${media.tablets`
	font-size: 35px;
	`};
	${media.fourKay`
	font-size: 45px;
	`};
`;

export default Navbar;
