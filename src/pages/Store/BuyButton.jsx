import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ConnectedBasket } from '../Basket/ConnectedBasket';

export const ConnectedBuyButton = props => (
	<ConnectedBasket
		render={({ items, addToBasket }) => (
			<BuyButton {...props} items={items} addToBasket={addToBasket} />
		)}
	/>
);

export class BuyButton extends PureComponent {
	render() {
		const { items, title } = this.props;
		const itemIsInBasket = items.includes(title);
		return (
			<Container>
				<Buy
					onClick={!itemIsInBasket ? this._handleClick : undefined}
					itemIsInBasket={itemIsInBasket}
				>
					{itemIsInBasket ? <h3>Checkout!</h3> : <h3>Add To Cart</h3>}
				</Buy>
			</Container>
		);
	}
	_handleClick = () => {
		const { addToBasket, title } = this.props;

		addToBasket(title);
	};
}

const Container = styled.div`
	display: flex;
	align-items: flex-end;
	margin-bottom: 15px;
	margin-top: 15px;
`;
const Buy = styled.div`
	display: flex;
	width: 175px;
	height: 50px;
	border: 1px solid black;
	background-color: ${props => {
		return props.itemIsInBasket ? '#78D5E3' : 'white';
	}};
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	cursor: pointer;
`;
