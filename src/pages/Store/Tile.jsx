import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { BuyButton } from './BuyButton';
import { StoreImage } from './StoreImage';
import { ConnectedBasket } from '../Basket/ConnectedBasket';

export class Tile extends Component {
	render() {
		const { height, width, url, title, price, style, description } = this.props;
		return (
			<ConnectedBasket
				render={({ items, addToBasket }) => (
					<Container style={style}>
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
							<BuyButton
								items={items}
								title={title}
								handleClick={() => addToBasket(title)}
							/>
						</Information>
					</Container>
				)}
			/>
		);
	}
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
`;
