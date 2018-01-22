import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { BuyButton } from './BuyButton';
import { StoreModal } from './StoreModal';
import { StoreImage } from './StoreImage';
import { ConnectedBasket } from '../Basket/ConnectedBasket';
import { Motion, spring } from 'react-motion';

export class Tile extends Component {
	state = {
		loading: true,
		show: false,
		mounted: false
	};
	componentDidMount() {
		this.setState({
			mounted: true
		});
	}
	render() {
		const { loading, mounted } = this.state;
		const { height, width, url, title, price } = this.props;
		const dynamicStyle = {
			opacity: spring(mounted ? 1.0 : 0.0, {
				stiffness: 30,
				damping: 10
			}),
			position: spring(mounted ? -10 : 0, { stiffness: 75, damping: 10 })
		};
		return (
			<Motion style={dynamicStyle}>
				{interpolatingStyle => (
					<ConnectedBasket
						render={({ items, addToBasket }) => (
							<Container
								style={{
									transform: `translate3d(0, ${
										interpolatingStyle.position
									}px, 0)`,
									WebkitTransform: `translate3d(0, ${
										interpolatingStyle.position
									}px, 0)`,
									opacity: `${interpolatingStyle.opacity}`
								}}
							>
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
				)}
			</Motion>
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
	height: 650px;
	opacity: 1;
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
