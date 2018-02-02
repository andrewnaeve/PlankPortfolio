import React from 'react';
import styled from 'styled-components';
import { ConnectedBasket } from './ConnectedBasket';

export const SubTotal = () => (
	<ConnectedBasket
		render={({ items, inventory }) => {
			const subTotal =
				items.length === 0
					? 0
					: items
							.map(item => inventory.filter(x => x.title === item)[0].price)
							.reduce((total, price) => total + price);

			return (
				<Container>
					<Amount>Sub-total</Amount>
					<Amount>${subTotal}</Amount>
				</Container>
			);
		}}
	/>
);

const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	align-items: flex-end;
	flex-direction: column;
`;

const Amount = styled.div`
	font-family: 'Abel';
	font-size: 2rem;
`;
