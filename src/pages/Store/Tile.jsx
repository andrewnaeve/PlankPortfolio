import React, { Component } from 'react';
import styled from 'styled-components';
import { BuyButton } from './BuyButton';
import { LoadingMask } from './LoadingMask';

export class Tile extends Component {
	state = {
		loading: true
	};
	render() {
		const { loading } = this.state;
		const { height, width, url, title, price } = this.props;
		return (
			<Container>
				<ImageWrapper height={height} width={width}>
					<LoadingMask loading={loading}>
						<Image src={url} alt={title} onLoad={this._loaded} />
					</LoadingMask>
				</ImageWrapper>
				<Information>
					<Title>{title}</Title>
					<Price>${price}</Price>
					<BuyButton />
				</Information>
			</Container>
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
	height: 500px;
	width: ${props => {
		return `${500 * props.width / props.height}px`;
	}};
`;

const Image = styled.img`
	display: flex;
	background: purple;
	align-items: center;
	margin: 10px;
	height: 100%;
	width: 100%;
`;

const Title = styled.p`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	margin-bottom: 5px;
`;

const Price = styled.i`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	font-style: italic;
`;

const Container = styled.div`
	display: flex;
	margin-right: 15px;
	margin-left: 15px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	border: 2px solid #d0d0d0;
	border-radius: 5px;
	margin-bottom: 20px;
	height: 650px;
	-webkit-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
`;

const Information = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;
`;
