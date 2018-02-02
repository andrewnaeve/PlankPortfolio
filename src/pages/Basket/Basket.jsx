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
	componentDidUpdate() {
		console.log(this.state.items);
	}

	render() {
		const { items, inventory } = this.state;

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

	_removeFromBasket = title => {
		const { items } = this.state;
		const itemIndex = items.indexOf(title);
		console.log('it', items, title, items.indexOf(title));
		this.setState(({ items }) => ({
			items: [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)]
		}));
	};
}
