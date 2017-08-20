import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

const ImageCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
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
				duration: 900,
				easing: Easing.ease,
			}),
			Animated.timing(this.slideAnimation, {
				toValue: -25,
				duration: 900,
				easing: Easing.elastic(1),
			}),
		]).start();
	};

	render() {
		const op = this.opaqueAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
		});
		const sl = this.slideAnimation.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
		});

		return (
			<ImageCard>
				<Animated.div
					style={{
						transform: Animated.template`translateY(${sl}px)`,
						opacity: op,
					}}
				>
					<img src={this.props.url} onLoad={this.animate} />
				</Animated.div>
			</ImageCard>
		);
	}
}

export default PortfolioImage;
