import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
	display: flex;
	justify-content: center;
	margin-top: 15px;
`;
const NavList = styled.ul`display: flex;`;

const Item = styled.li`
	display: flex;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
	font-family: 'Abel', sans-serif;	
	font-size: 20px;
	margin: 0px 15px 0px 15px;
	color: #A9A9A9;
	text-decoration: none;
`;

const Navbar = () =>
	<NavContainer>
		<NavList>
			<Item>
				<StyledLink to="/Selected-Works">Selected Works</StyledLink>
			</Item>
			<Item>
				<StyledLink to="/Biography">Biography</StyledLink>
			</Item>
			<Item>
				<StyledLink to="/Curriculum-Vitae">CV</StyledLink>
			</Item>
		</NavList>
	</NavContainer>;

export default Navbar;
