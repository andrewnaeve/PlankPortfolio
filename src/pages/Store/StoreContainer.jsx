import React, { Component } from 'react';
import styled from 'styled-components';
import { ConnectedTile } from './Tile';
import { StaggeredMotion, spring, presets } from 'react-motion';
import { db } from '../../firebaseConfig';

class StoreContainer extends Component {
	state = {
		inventory: [],
		loaded: false
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
			)
			.then(() => this.setState({ loaded: true }));
	}
	render() {
		const { inventory, loaded } = this.state;
		return (
			<Container>
				{loaded && (
					<StaggeredMotion
						defaultStyles={inventory.map(x => {
							return {
								x: 20
							};
						})}
						styles={prevInterpolatedStyles =>
							prevInterpolatedStyles.map((_, i) => {
								return i === 0
									? { x: spring(0, presets.wobbly) }
									: { x: spring(prevInterpolatedStyles[i - 1].x) };
							})
						}
					>
						{items => (
							<Row>
								{items.map((style, i) => (
									<div
										style={{ transform: `translate3d(0, ${style.x}px, 0)` }}
										key={inventory[i].title}
									>
										<ConnectedTile
											title={inventory[i].title}
											price={inventory[i].price}
											url={inventory[i].firebaseUrl}
											height={inventory[i].height}
											width={inventory[i].width}
											description={inventory[i].description}
										/>
									</div>
								))}
							</Row>
						)}
					</StaggeredMotion>
				)}
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex: 1;
	margin: 0px 5% 0 5%;
	padding-top: 30px;
	overflow: scroll;
`;

const Row = styled.div`
	display: flex;
`;

export default StoreContainer;
