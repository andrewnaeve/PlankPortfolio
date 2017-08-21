import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

const AnimatedDiv = styled(Animated.div)`
	display: flex;
	border-radius: 2px;
	justify-content: center;
	width: 100%;
	margin-top: 50px;
`;

// const Wrapper = styled.div`
// 	display: flex;
// 	justify-content: center;
// `;

const Image = styled.img`
	display: flex;
	justify-content: center;
	max-height: 900px;
	max-width: 100%;
	height: auto;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
`;

class PortfolioImage extends Component {
	constructor(props) {
		super(props);

		this.opaqueAnimation = new Animated.Value(0);
		this.slideAnimation = new Animated.Value(0);
	}

	animate = () => {
		this.opaqueAnimation.setValue(0);
		this.slideAnimation.setValue(0);
		Animated.parallel([
			Animated.timing(this.opaqueAnimation, {
				toValue: 1,
				duration: 1000,
				easing: Easing.ease
			}),
			Animated.timing(this.slideAnimation, {
				toValue: -10,
				duration: 900,
				easing: Easing.elastic(1)
			})
		]).start();
	};

	render() {
		const op = this.opaqueAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const sl = this.slideAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});

		return (
			<AnimatedDiv
				style={{
					transform: Animated.template`translateY(${sl}px)`,
					opacity: op
				}}
			>
				<Image src={this.props.url} onLoad={this.animate} />
			</AnimatedDiv>
		);
	}
}

export default PortfolioImage;
