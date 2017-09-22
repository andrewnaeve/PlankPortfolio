import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';
import ReactDOM from 'react-dom';

class ImageCard extends Component {
	constructor(props) {
		super();
		this.state = {
			show: false
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.show) {
			return false;
		}
		return true;
	}

	componentWillReceiveProps(prevProps) {
		if (!this.state.show) {
			this.updateImagePosition();
		}
	}

	updateImagePosition() {
		const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
		console.log('rt', rect.top);
		console.log('iH', window.innerHeight);
		if (
			rect.bottom >= 0 &&
			rect.right >= 0 &&
			rect.top <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.left <=
				(window.innerWidth || document.documentElement.clientWidth)
		) {
			this.setState({
				show: true
			});
		}
	}

	handleLoad = () => {
		this.props.ready(this.props.title);
	};

	render() {
		console.log(this.state.show);
		const url = this.state.show ? this.props.url : null;
		return (
			<Wrapper>
				<Image src={url} onLoad={this.handleLoad} />
			</Wrapper>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		ready(title) {
			dispatch(ready(title));
		}
	};
};

export default connect(null, mapDispatchToProps)(ImageCard);

const Image = styled.img`
	display: flex;
	justify-content: center;
	align-self: center;
	max-height: 1000px;
	max-width: 100%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;
