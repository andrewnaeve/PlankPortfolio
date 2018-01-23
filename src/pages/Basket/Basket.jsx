import { Component } from 'react';

export class Basket extends Component {
	state = {
		items: []
	};

	render() {
		const { items } = this.state;
		return this.props.render({
			items: items,
			addToBasket: this._addToBasket
		});
	}

	_addToBasket = item => {
		this.setState(({ items }) => ({
			items: [...items, item]
		}));
	};
}
