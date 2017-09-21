import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LazyLoad extends Component {
	constructor() {
		super();
		this.state = {
			viewport: {
				top: 0,
				height: 0
			}
		}
		this.updateViewport = this.updateViewport.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.updateViewport, false);
		window.addEventListener('resize', this.updateViewport, false);
		this.updateViewport();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.updateViewport);
		window.removeEventListener('resize', this.updateViewport);
	}
	updateViewport() {
		// TODO: debounce this call
		this.setState({
		  viewport: {
			top: window.pageYOffset,
			height: window.innerHeight
		  }
		});
	  },
	render() {
		return this.props.children;
	}
}

export default LazyLoad;
