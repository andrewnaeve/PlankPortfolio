import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';

class ImageCard extends Component {
	shouldComponentUpdate() {
		return false;
	}
	handleLoad = () => {
		this.props.ready(this.props.name);
	};
	render() {
		return (
			<Wrapper>
				<Image src={this.props.name} onLoad={this.handleLoad} />
			</Wrapper>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		ready(name) {
			dispatch(ready(name));
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
