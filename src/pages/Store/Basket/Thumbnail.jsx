import React, { Component } from 'react';
import styled from 'styled-components';
import { LoadingMask } from '../../Common/LoadingMask';

export class Thumbnail extends Component {
	state = {
		loading: true
	};
	render() {
		const { loading } = this.state;
		const { title, firebaseUrl } = this.props;

		return (
			<div>
				<ImageWrapper>
					<LoadingMask loading={loading}>
						<Image src={firebaseUrl} alt={title} onLoad={this._loaded} />
					</LoadingMask>
				</ImageWrapper>
			</div>
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
	height: 150px;
	width: auto;
`;

const Image = styled.img`
	display: flex;
	align-items: center;
	max-height: 150px;
	width: auto;
`;
