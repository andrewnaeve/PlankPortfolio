import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../style-utils';

const Navbar = () =>
	<NavContainer>
		<NavList>
			<Item>
				<StyledLink to="/Selected-Works" activeStyle={{ color: 'red' }}>
					Selected Works
				</StyledLink>
			</Item>
			<Item>
				<StyledLink to="/Biography" activeStyle={{ color: 'red' }}>
					Biography
				</StyledLink>
			</Item>
		</NavList>
	</NavContainer>;

const NavContainer = styled.nav`
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
`;
const NavList = styled.ul`display: flex;`;

const Item = styled.li`display: flex;`;

const StyledLink = styled(NavLink)`
	font-family: 'Abel', sans-serif;	
	font-size: 20px;
	margin: 0px 15px 0px 15px;
	color: #A9A9A9;
	text-decoration: none;
	&:hover{
		color: #747D7D
	}
	${media.smallPhones`
	display: none;`};
	${media.laptop`
	display: flex;`};
    @media only screen and (min-width : 320px) {
		font-size: 18px;
    }
	
    @media only screen and (min-width : 414px) {
		font-size: 20px;
    }
	
    @media only screen and (min-width : 768px) {
		font-size: 25px;
    }
	
    @media only screen and (min-width : 992px) {

    }
	
    @media only screen and (min-width : 1200px) {

	}
	
    @media only screen and (min-width : 2000px) {
		font-size: 45px;
    }
`;

export default Navbar;
