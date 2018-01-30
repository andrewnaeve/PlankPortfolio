import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { StoreImage } from './StoreImage';
import { ConnectedBasket } from '../Basket/ConnectedBasket';
import { ConnectedBuyButton } from './BuyButton';

export const ConnectedTile = props => (
	<ConnectedBasket render={({ addToBasket }) => <Tile {...props} addToBasket={addToBasket} />} />
);

class Tile extends Component {
	render() {
		const { height, width, url, title, price, description } = this.props;
		return (
			<Container>
				<StoreImage
					height={height}
					width={width}
					url={url}
					title={title}
					description={description}
					loaded={this._loaded}
				/>
				<Information>
					<Title>{title}</Title>
					<Price>${price}</Price>
					<ConnectedBuyButton title={title} handleClick={this._handleClick} />
				</Information>
			</Container>
		);
	}
	_handleClick = () => {
		const { addToBasket, title } = this.props;
		addToBasket(title);
	};
}

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const Title = styled.p`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	margin-bottom: 5px;
	text-align: center;
`;

const Price = styled.i`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	font-style: italic;
`;

const Container = styled.div`
	animation: ${fadeIn} 0.4s linear 1;
	display: flex;
	margin-right: 15px;
	margin-left: 15px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	border: 2px solid #d0d0d0;
	border-radius: 5px;
	margin-bottom: 20px;
	opacity: 1;
	-webkit-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
`;

const Information = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 10px;
`;
