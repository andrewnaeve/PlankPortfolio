import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RenderModal } from './RenderModal';

export class ModalProvider extends Component {
	static contextName = '__modal__';
	static Renderer = class extends Component {
		static childContextTypes = {
			[ModalProvider.contextName]: PropTypes.object.isRequired
		};
		getChildContext() {
			return {
				[ModalProvider.contextName]: this.props.items
			};
		}
		render() {
			return this.props.children;
		}
	};
	render() {
		const { children, ...remainingProps } = this.props;
		return (
			<RenderModal
				{...remainingProps}
				render={items => <ModalProvider.Renderer items={items} children={children} />}
			/>
		);
	}
}
