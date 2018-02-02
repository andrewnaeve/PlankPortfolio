import React, { Component } from 'react';
import styled from 'styled-components';
import { ConnectedBasket } from './ConnectedBasket';
import { BasketItem } from './BasketItem';

export class BasketItemRow extends Component {
	render() {
		return (
			<ConnectedBasket
				render={({ items, inventory, removeFromBasket }) => (
					<Container>
						{items.map(item => {
							const itemProps = inventory
								.filter(x => x.title === item)
								.reduce((flatList, list) => flatList.concat(list));
							return (
								<Row>
									<Column>
										<BasketItem {...itemProps} key={item} />
									</Column>
									<Column>
										<Descriptor>{itemProps.title}</Descriptor>
									</Column>
									<Column>
										<Descriptor>{itemProps.description}</Descriptor>
									</Column>
									<PriceColumn>
										<Descriptor>${itemProps.price}</Descriptor>
									</PriceColumn>
								</Row>
							);
						})}
					</Container>
				)}
			/>
		);
	}
}

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	flex-direction: column;
	margin-top: 25px;
`;
const Row = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	width: 100%;
	border-bottom: 1px solid black;
	padding-bottom: 10px;
	margin-bottom: 30px;
`;

const Column = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-start;
`;

const Descriptor = styled.div`
	display: flex;
	align-items: flex-end;
	font-family: 'Abel';
	font-size: 1.5rem;
`;

const PriceColumn = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;
