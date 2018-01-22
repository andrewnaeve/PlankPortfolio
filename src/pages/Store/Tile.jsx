import React, { Component } from 'react';
import styled from 'styled-components';
import { BuyButton } from './BuyButton';
import { StoreModal } from './StoreModal';
import { StoreImage } from './StoreImage';
import { ConnectedBasket } from '../Basket/ConnectedBasket';

export class Tile extends Component {
	state = {
		loading: true,
		show: false
	};

	render() {
		const { loading } = this.state;
		const { height, width, url, title, price } = this.props;
		return (
			<ConnectedBasket
				render={({ items, addToBasket }) => (
					<Container>
						<StoreImage
							height={height}
							width={width}
							url={url}
							title={title}
							loaded={this._loaded}
							loading={loading}
							showModal={this._showModal}
							heightFactor={500}
						/>
						<Information>
							<Title>{title}</Title>
							<Price>${price}</Price>
							<BuyButton handleClick={() => addToBasket(title)} />
						</Information>
						<StoreModal
							{...this.state}
							{...this.props}
							loaded={this._loaded}
							closeModal={this._clodeModal}
						/>
					</Container>
				)}
			/>
		);
	}
	_loaded = () => {
		this.setState({
			loading: false
		});
	};
	_showModal = () => {
		this.setState({
			show: true
		});
	};
	_clodeModal = () => {
		this.setState({
			show: false
		});
	};
}

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
