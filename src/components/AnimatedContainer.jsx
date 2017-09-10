import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { imageLoading } from '../actions/imageLoading';

class AnimatedContainer extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const { url, imagesReady } = this.props;
		if (imagesReady[url] !== nextProps.imagesReady[url]) {
			return true;
		}
		return false;
	}
	componentWillUnmount() {
		imageLoading(this.props.url);
	}

	render() {
		const { url } = this.props;
		const { imagesReady } = this.props;
		const loaded = imagesReady[url];

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
						{this.props.children}
					</AnimatedDiv>
				)}
			</Motion>
		);
	}
}

const mapStateToProps = ({ imagesReady }) => {
	return { imagesReady };
};

const mapDispatchToProps = dispatch => {
	return {
		imageLoading(url) {
			dispatch(imageLoading(url));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedContainer);

const AnimatedDiv = styled.div`
	display: flex;
	border-radius: 2px;
	width: 100%;
	justify-content: center;
`;
