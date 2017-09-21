import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';

class ImageCard extends Component {
	constructor(props) {
		super();
		this.state = {
			show: false
		};
	}
	shouldComponentUpdate() {
		return false;
	}
	componentDidUpdate(prevProps) {
		if (!this.props.showImages && prevProps.viewport) {
			this.updatePosition();
		}
	}

	updatePosition() {
		var el = this.getDOMNode();
		this.props.updateImagePosition(el.offsetTop, el.offsetHeight);
	}

	updateImagePosition(top, height) {
		// image is already displayed, no need to check anything
		if (this.state.showImage) {
		  return;
		}
	
		// update showImage state if component element is in the viewport
		var min = this.props.viewport.top;
		var max = this.props.viewport.top + this.props.viewport.height;
	
		if ((min <= (top + height) && top <= (max - 300))) {
		  this.setShowImage(true);
		}
	  },
	handleLoad = () => {
		this.props.ready(this.props.title);
	};
	render() {
		return (
			<Wrapper>
				<Image src={this.props.url} onLoad={this.handleLoad} />
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
