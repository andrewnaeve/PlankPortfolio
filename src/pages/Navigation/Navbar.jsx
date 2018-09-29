import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { media } from '../../utilities/style-utils';
import { withRouter } from 'react-router';
import { ShoppingCartIcon } from '../Store/ShoppingCartIcon';
import { ConnectedBasket } from '../Store/Basket/ConnectedBasket';

const showShoppingCartIcon = pathname => {
  if (pathname === '/Store' || pathname === '/Store/Basket') {
    return (
      <ConnectedBasket
        render={({ items, addToBasket }) => (
          <Link to="/Store/Basket">
            <ShoppingCartIcon items={items} addToBasket={addToBasket} />
          </Link>
        )}
      />
    );
  } else {
    return null;
  }
};

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
      {/* <Item>
					<StyledLink to="/Store" activeStyle={{ color: '#78D5E3' }}>
						Store
					</StyledLink>
				</Item> */}
    </NavList>
    <Padding>{showShoppingCartIcon(props.location.pathname)}</Padding>
  </NavContainer>
);

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #a9a9a9;
  box-shadow: 0 6px 6px -6px rgba(184, 184, 184, 0.5);
  padding-bottom: 20px;
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
  justify-content: flex-end;
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

export default withRouter(Navbar);
