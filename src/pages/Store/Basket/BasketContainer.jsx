import React, { Component } from 'react';
import styled from 'styled-components';
import { BasketTitle } from './BasketTitle';
import { BasketItemRow } from './BasketItemRow';
import { SubTotal } from './SubTotal';
import { ConnectedBasket } from './ConnectedBasket';
import ProceedToShipping from './ProceedToShipping';

export class BasketContainer extends Component {
	render() {
		return (
			<Container>
				<ViewArea>
					<BasketTitle />
					<ConnectedBasket
						render={({ items }) => (
							<div>
								{items.length > 0 ? (
									<div>
										<BasketItemRow />
										<SubTotal />
										<ProceedToShipping />
									</div>
								) : (
									<EmptyBasket>Your basket is empty.</EmptyBasket>
								)}
							</div>
						)}
					/>
				</ViewArea>
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
`;

const ViewArea = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 80%;
	height: 100%;
	flex-direction: column;
`;

const EmptyBasket = styled.div`
	font-family: 'Abel';
	font-size: 2rem;
	margin-top: 25px;
`;
