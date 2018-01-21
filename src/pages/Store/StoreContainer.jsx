import React, { Component } from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';
import { ImageProperties } from '../../ImageProperties';

class StoreContainer extends Component {
	render() {
		return (
			<Container>
				{ImageProperties.map(image => (
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
	margin: 15px 5% 0 5%;
`;

export default StoreContainer;
