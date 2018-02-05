import React, { Component } from 'react';
import styled from 'styled-components';
import { ShippingTitle } from './ShippingTitle';

export class ShippingContainer extends Component {
	render() {
		return (
			<Container>
				<ViewArea>
					<ShippingTitle />
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
	width: 80%;
	height: 100%;
`;
