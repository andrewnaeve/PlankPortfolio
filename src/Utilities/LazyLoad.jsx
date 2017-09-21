import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LazyLoad extends Component {
	constructor() {
		super();
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(e) {
		console.log(ReactDOM.findDOMNode(this.refs['Holly and Sebastian']));
	}
	render() {
		return this.props.children;
	}
}

export default LazyLoad;
