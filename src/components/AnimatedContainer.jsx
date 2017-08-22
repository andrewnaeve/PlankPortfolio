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

class AnimatedContainer extends Component {
	constructor(props) {
		super(props);
		this.opaqueAnimation = new Animated.Value(0);
		this.slideAnimation = new Animated.Value(0);
		this.animate = this.animate.bind(this);
	}

	animate() {
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
				duration: 1000,
				easing: Easing.elastic(1)
			})
		]).start();
	}

	render() {
		const op = this.opaqueAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const sl = this.slideAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		const children = React.cloneElement(this.props.children, {
			animate: this.animate
		});

		return (
			<AnimatedDiv
				style={{
					transform: Animated.template`translateY(${sl}px)`,
					opacity: op
				}}
			>
				{children}
			</AnimatedDiv>
		);
	}
}

export default AnimatedContainer;
