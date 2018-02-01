import React, { Component } from 'react';
import styled from 'styled-components';
import { BasketTitle } from './BasketTitle';
import { Thumbnail } from './Thumbnail';

export class BasketItem extends Component {
	render() {
		const { height, width, description, firebaseUrl, price, title } = this.props;
		console.log('tp', this.props);
		return (
			<Container>
				<Thumbnail {...this.props} />
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex: 1;
`;
