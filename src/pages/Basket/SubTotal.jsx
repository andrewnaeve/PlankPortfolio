import React, { Component } from 'react';
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

			return <Container>{subTotal}</Container>;
		}}
	/>
);

const Container = styled.div`
	display: flex;
	background: red;
	width: 100%;
	justify-content: flex-end;
	align-items: flex-end;
`;
