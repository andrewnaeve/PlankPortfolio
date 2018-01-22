import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Basket } from './Basket';

export class BasketProvider extends Component {
	static contextName = '__basket__';
	static Renderer = class extends Component {
		static childContextTypes = {
			[BasketProvider.contextName]: PropTypes.object.isRequired
		};
		getChildContext() {
			return {
				[BasketProvider.contextName]: this.props.items
			};
		}
		render() {
			return this.props.children;
		}
	};
	render() {
		const { children, ...remainingProps } = this.props;
		return (
			<Basket
				{...remainingProps}
				render={items => <BasketProvider.Renderer items={items} children={children} />}
			/>
		);
	}
}
