import React, { Component } from 'react';
import styled from 'styled-components';
import { LoadingMask } from '../Common/LoadingMask';

export class ModalImage extends Component {
	state = {
		loading: true
	};
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.loading !== nextState.loading || this.props.title !== nextProps.title) {
			return true;
		}
		return false;
	}
	render() {
		const { height, width, url, title, description } = this.props;
		const { loading } = this.state;
		return (
			<ImageWrapper height={height} width={width}>
				<LoadingMask loading={loading}>
					<Image src={url} alt={title} onLoad={this._loaded} />
				</LoadingMask>
			</ImageWrapper>
		);
	}
	_loaded = () => {
		this.setState({
			loading: false
		});
	};
}

const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh * 0.75);
	width: ${props => {
		return `calc(100vh * 0.75 * ${props.width / props.height})`;
	}};
`;

const Image = styled.img`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
`;
