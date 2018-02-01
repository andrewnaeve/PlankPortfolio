import React, { Component } from 'react';
import styled from 'styled-components';
import { BasketTitle } from './BasketTitle';
import { BasketItemContainer } from './BasketItemContainer';

export class BasketContainer extends Component {
	render() {
		return (
			<Container>
				<ViewArea>
					<BasketTitle />
					<BasketItemContainer />
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
