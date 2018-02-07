import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShippingFormStore } from './ShippingFormStore';

export class ShippingFormProvider extends Component {
	static contextName = '__shipping__';
	static Renderer = class extends Component {
		static childContextTypes = {
			[ShippingFormProvider.contextName]: PropTypes.object.isRequired
		};
		getChildContext() {
			return {
				[ShippingFormProvider.contextName]: this.props.items
			};
		}
		render() {
			return this.props.children;
		}
	};
	render() {
		const { children, ...remainingProps } = this.props;
		return (
			<ShippingFormStore
				{...remainingProps}
				render={items => (
					<ShippingFormProvider.Renderer items={items} children={children} />
				)}
			/>
		);
	}
}
