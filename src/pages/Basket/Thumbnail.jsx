import React, { Component } from 'react';
import styled from 'styled-components';
import { LoadingMask } from '../Common/LoadingMask';

export class Thumbnail extends Component {
	state = {
		loading: true
	};
	render() {
		const { loading } = this.state;
		const { width, height, title, firebaseUrl } = this.props;
		console.log(firebaseUrl);
		return (
			<ImageWrapper width={width} height={height}>
				<LoadingMask loading={loading}>
					<Image src={firebaseUrl} alt={title} onLoad={this._loaded} />
				</LoadingMask>
			</ImageWrapper>
		);
	}
	_loaded = () => {
		this.setState({ loading: false });
	};
}

const ImageWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	height: 300px;
	width: ${props => {
		return `calc(300px * ${props.width / props.height})`;
	}};
	background: blue;
`;

const Image = styled.img`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
`;
