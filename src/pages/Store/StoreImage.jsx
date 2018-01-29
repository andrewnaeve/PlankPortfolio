import React, { Component } from 'react';
import styled from 'styled-components';
import { LoadingMask } from './LoadingMask';
import { ConnectedModal } from '../Modal/ConnectedModal';

export class StoreImage extends Component {
	state = {
		loading: true
	};
	static defaultProps = {
		inModal: false
	};
	render() {
		const { height, width, url, title, heightFactor, description, inModal } = this.props;
		const { loading } = this.state;
		return (
			<ConnectedModal
				render={({ showModal }) => (
					<ImageWrapper
						heightFactor={heightFactor}
						height={height}
						width={width}
						inModal={inModal}
						onClick={() => showModal({ title, url, description, height, width })}
					>
						<LoadingMask loading={loading}>
							<Image src={url} alt={title} onLoad={this._loaded} />
						</LoadingMask>
					</ImageWrapper>
				)}
			/>
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
	height: ${props => {
		return `calc(100vh * ${props.inModal ? '0.75' : '0.5'})`;
	}};
	width: ${props => {
		console.log(props.inModal);
		return `calc(100vh * ${props.inModal ? '0.75' : '0.5'} * ${props.width / props.height})`;
	}};
`;

const Image = styled.img`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
`;
