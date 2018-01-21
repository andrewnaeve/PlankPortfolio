import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../utilities/style-utils';
import { withRouter } from 'react-router';
import cart from '../../svg/cart.svg';

const Navbar = props => (
	<NavContainer>
		<Padding />
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
			<Item>
				<StyledLink to="/Store" activeStyle={{ color: '#78D5E3' }}>
					Store
				</StyledLink>
			</Item>
		</NavList>
		<Padding>
			{props.location.pathname === '/Store' && (
				<CartContainer>
					<ShoppingCart src={cart} />
				</CartContainer>
			)}
		</Padding>
	</NavContainer>
);

const NavContainer = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	margin: 0 5% 10px 5%;
	${media.smallPhones`
		display: none;`};
	${media.tablets`
		display: flex;`};
`;
const NavList = styled.ul`
	display: flex;
	flex-grow: 1;
	justify-content: center;
`;
const Padding = styled.div`
	display: flex;
	flex: 1;
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

const CartContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: flex-end;
`;
const ShoppingCart = styled.img`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	height: 40px;
	width: 40px;
`;
export default withRouter(Navbar);
