import React, { Component } from 'react';
import { db } from '../../firebaseConfig';

export class Basket extends Component {
	state = {
		items: [],
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
		const { items, inventory } = this.state;
		console.log(inventory);
		return this.props.render({
			items: items,
			inventory: inventory,
			addToBasket: this._addToBasket,
			removeFromBasket: this._removeFromBasket
		});
	}

	_addToBasket = item => {
		this.setState(({ items }) => ({
			items: [...items, item]
		}));
	};
	_removeFromBasket = () => {};
}
