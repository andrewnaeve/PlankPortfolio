import React, { Component } from 'react';
import styled from 'styled-components';
import { BasketTitle } from './BasketTitle';

export class BasketContainer extends Component {
	render() {
		return (
			<Container>
				<ViewArea>
					<BasketTitle />
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
`;
