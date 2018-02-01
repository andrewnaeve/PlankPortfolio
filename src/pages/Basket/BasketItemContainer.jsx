import React, { Component } from 'react';
import styled from 'styled-components';
import { BasketTitle } from './BasketTitle';
import { ConnectedBasket } from './ConnectedBasket';
import { BasketItem } from './BasketItem';

export class BasketItemContainer extends Component {
	render() {
		return (
			<Container>
				<ConnectedBasket
					render={({ items, inventory, removeFromBasket }) => (
						<div>
							{items.map(item => {
								const itemProps = inventory
									.filter(x => x.title === item)
									.reduce((flatList, list) => flatList.concat(list));
								return <BasketItem {...itemProps} key={item} />;
							})}
						</div>
					)}
				/>
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	background: green;
`;

const ViewArea = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 80%;
	height: 100%;
	background: red;
`;
