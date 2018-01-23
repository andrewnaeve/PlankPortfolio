import React, { Component } from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';
import { ImageProperties } from '../../ImageProperties';
import { Motion, spring } from 'react-motion';
import { db } from '../../firebaseConfig';

class StoreContainer extends Component {
	state = {
		inventory: []
	};
	componentDidMount() {
		db
			.collection('inventory')
			.get()
			.then(docs =>
				docs.forEach(doc => {
					const inventoryObj = doc.data();
					this.setState(({ inventory }) => ({
						inventory: [...inventory, inventoryObj]
					}));
				})
			);
	}
	render() {
		const { inventory } = this.state;
		return (
			<Container>
				{inventory.map(image => (
					<Tile
						key={image.title}
						title={image.title}
						price={image.price}
						url={image.firebaseUrl}
						height={image.height}
						width={image.width}
						description={image.description}
					/>
				))}
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex-wrap: no-wrap;
	overflow: scroll;
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	margin: 0px 5% 0 5%;
	padding-top: 30px;
`;

export default StoreContainer;
