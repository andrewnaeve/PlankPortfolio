import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Animated from 'animated/lib/targets/react-dom';
import { Motion, spring, presets } from 'react-motion';
import Easing from 'animated/lib/Easing';

class AnimatedContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
		this.animate = this.animate.bind(this);
	}

	animate() {
		this.setState({
			loaded: true
		});
	}

	render() {
		let { loaded } = this.state;
		const dynamicStyle = {
			opacity: spring(loaded ? 1.0 : 0.0, {
				stiffness: 30,
				damping: 10
			}),
			position: spring(loaded ? -10 : 0, { stiffness: 75, damping: 10 })
		};
		const children = React.cloneElement(this.props.children, {
			animate: this.animate
		});

		return (
			<Motion style={dynamicStyle}>
				{interpolatingStyle => (
					<AnimatedDiv
						style={{
							transform: `translate3d(0, ${interpolatingStyle.position}px, 0)`,
							WebkitTransform: `translate3d(0, ${interpolatingStyle.position}px, 0)`,
							opacity: `${interpolatingStyle.opacity}`
						}}
					>
						{children}
					</AnimatedDiv>
				)}
			</Motion>
		);
	}
}

export default AnimatedContainer;

const AnimatedDiv = styled.div`
	display: flex;
	border-radius: 2px;
	width: 100%;
	justify-content: center;
`;
