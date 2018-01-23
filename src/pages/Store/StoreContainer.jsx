import React, { Component } from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';
import { ImageProperties } from '../../ImageProperties';
import { StaggeredMotion, spring, presets } from 'react-motion';
import { db } from '../../firebaseConfig';
import { range } from 'lodash';

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
			loaded && (
				<StaggeredMotion
					defaultStyles={inventory.map(x => {
						return {
							x: 20
						};
					})}
					styles={prevInterpolatedStyles =>
						prevInterpolatedStyles.map((_, i) => {
							return i === 0
								? { x: spring(0, { stiffness: 100, damping: 10 }) }
								: { x: spring(prevInterpolatedStyles[i - 1].x) };
						})
					}
				>
					{items => (
						<Container>
							{items.map((style, i) => (
								<Tile
									key={inventory[i].title}
									title={inventory[i].title}
									price={inventory[i].price}
									url={inventory[i].firebaseUrl}
									height={inventory[i].height}
									width={inventory[i].width}
									description={inventory[i].description}
									style={{
										transform: `translate3d(0, ${style.x}px, 0)`
									}}
								/>
							))}
						</Container>
					)}
				</StaggeredMotion>
			)
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
