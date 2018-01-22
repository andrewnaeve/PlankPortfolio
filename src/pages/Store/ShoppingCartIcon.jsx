import React, { Component } from 'react';
import styled from 'styled-components';
import cart from '../../svg/cart.svg';
import { ConnectedBasket } from '../Basket/ConnectedBasket';
export class ShoppingCartIcon extends Component {
	render() {
		return (
			<ConnectedBasket
				render={({ items }) => (
					<Container>
						<Circle>{items.length}</Circle>
						<CartIcon src={cart} />
					</Container>
				)}
			/>
		);
	}
}

const Container = styled.div`
	position: relative;
	height: 65px;
	width: 65px;
`;
const Circle = styled.div`
	display: flex;
	position: absolute;
	top: 8px;
	right: 0;
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background: #78d5e3;
	z-index: 1;
	align-items: center;
	justify-content: center;
	font-family: 'Abel', sans-serif;
	font-size: 20px;
`;
const CartIcon = styled.img`
	position: absolute;
	bottom: 0;
	right: 5px;
	height: 40px;
	width: 40px;
`;
