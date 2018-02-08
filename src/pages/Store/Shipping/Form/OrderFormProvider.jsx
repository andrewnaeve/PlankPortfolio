import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OrderFormStore } from './OrderFormStore';

export class OrderFormProvider extends Component {
	static contextName = '__shipping__';
	static Renderer = class extends Component {
		static childContextTypes = {
			[OrderFormProvider.contextName]: PropTypes.object.isRequired
		};
		getChildContext() {
			return {
				[OrderFormProvider.contextName]: this.props.items
			};
		}
		render() {
			return this.props.children;
		}
	};
	render() {
		const { children, ...remainingProps } = this.props;
		return (
			<OrderFormStore
				{...remainingProps}
				render={items => <OrderFormProvider.Renderer items={items} children={children} />}
			/>
		);
	}
}
