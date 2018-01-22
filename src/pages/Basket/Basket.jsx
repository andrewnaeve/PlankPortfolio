import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Basket extends Component {
	state = {
		items: []
	};

	render() {
		const { items } = this.state;
		console.log('items', items);
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
