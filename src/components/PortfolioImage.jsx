import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';
import ImageProperties from './ImageProperties';

const AnimatedDiv = styled(Animated.div)`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 50px;
`;

const Image = styled.img`
	display: flex;
	justify-content: center;
	max-height: 1100px;
	max-width: 100%;
	height: auto;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 5px;
`;

class PortfolioImage extends Component {
	constructor(props) {
		super(props);
		this.animatedOpacity = [];
		ImageProperties.forEach(value => {
			this.animatedOpacity[value] = new Animated.Value(0);
		});
		this.animatedEntry = [];
		ImageProperties.forEach(value => {
			this.animatedEntry[value] = new Animated.Value(0);
		});
	}

	componentDidMount() {
		this.animate();
	}

	animate() {
		const animations = ImageProperties.map(item => {
			return Animated.parallel([
				Animated.timing(this.animatedOpacity[item], {
					toValue: 1,
					duration: 1000
				}),
				Animated.timing(this.animatedEntry[item], {
					toValue: -15,
					duration: 1000,
					easing: Easing.elastic(1)
				})
			]);
		});
		Animated.sequence(animations).start();
	}

	render() {
		const Animation = ImageProperties.map((x, i) => {
			return (
				<AnimatedDiv
					key={ImageProperties[i]}
					style={{
						opacity: this.animatedOpacity[x],
						transform: Animated.template`translateY(${this
							.animatedEntry[x]}px)`
					}}
				>
					<Image src={ImageProperties[i]} />
				</AnimatedDiv>
			);
		});

		return (
			<div>
				{Animation}
			</div>
		);
	}
}

export default PortfolioImage;
