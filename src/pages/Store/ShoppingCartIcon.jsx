import React, { Component } from 'react';
import styled from 'styled-components';
import cart from '../../svg/cart.svg';
import { Motion, spring } from 'react-motion';

export class ShoppingCartIcon extends Component {
	state = { animate: false };
	componentWillReceiveProps(nextProps) {
		if (nextProps.items.length !== this.props.items.length) {
			this._animate();
		}
	}
	componentDidUpdate(nextProps, nextState) {
		if (nextState.animate !== this.state.animate && this.state.animate === true) {
			this.setState({
				animate: false
			});
		}
	}
	render() {
		const { animate } = this.state;
		const { items } = this.props;
		const dynamicStyle = {
			scale: spring(1, { stiffness: 130, damping: 5 })
		};
		return (
			<Container>
				<Motion defaultStyle={{ scale: 1 }} style={animate ? { scale: 0.7 } : dynamicStyle}>
					{interpolatingStyle => (
						<Circle style={{ transform: `scale(${interpolatingStyle.scale})` }}>
							{items.length}
						</Circle>
					)}
				</Motion>
				<CartIcon src={cart} />
			</Container>
		);
	}
	_animate = () => {
		this.setState({
			animate: true
		});
	};
}

const Container = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	height: 85px;
	width: 85px;
	margin: 0 5%;
`;
const Circle = styled.div`
	display: flex;
	position: absolute;
	top: 10px;
	right: -5px;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background: #78d5e3;
	z-index: 1;
	align-items: center;
	justify-content: center;
	font-family: 'Abel', sans-serif;
	font-size: 25px;
	color: black;
`;
const CartIcon = styled.img`
	position: absolute;
	bottom: 0;
	right: 5px;
	height: 50px;
	width: 50px;
`;
