import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

class AnimatedContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			loaded: false
		};
		this._handleLoad = this._handleLoad.bind(this);
	}

	render() {
		return this.props.render({
			handleLoad: this._handleLoad,
			renderAnimation: this._renderAnimation
		});
	}

	_renderAnimation = component => {
		const { loaded } = this.state;

		const dynamicStyle = {
			opacity: spring(loaded ? 1.0 : 0.0, {
				stiffness: 30,
				damping: 10
			}),
			position: spring(loaded ? -10 : 0, { stiffness: 75, damping: 10 })
		};

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
						{component}
					</AnimatedDiv>
				)}
			</Motion>
		);
	};

	_handleLoad() {
		this.setState({
			loaded: true
		});
	}
}

export default AnimatedContainer;

const AnimatedDiv = styled.div`
	display: flex;
	border-radius: 2px;
	width: 100%;
	justify-content: center;
`;
