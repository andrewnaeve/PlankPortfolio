import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
import { Menu } from './MobileMenu';

class MobileNav extends Component {
	state = {
		open: false
	};
	_toggleDrawer = this._toggleDrawer.bind(this);

	render() {
		let { open } = this.state;

		const isOpen = {
			x: spring(open ? 10 : 290, presets.stiff),
			y: spring(open ? 1 : 0)
		};

		return (
			<Motion style={isOpen}>
				{interpolatingStyle => (
					<Menu interpolatingStyle={interpolatingStyle} toggleDrawer={this._toggleDrawer} />
				)}
			</Motion>
		);
	}
	_toggleDrawer() {
		this.setState(({ open }) => ({
			open: !open
		}));
	}
}

export default MobileNav;
