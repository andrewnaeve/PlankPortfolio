import React, { Component } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { imagesLoading } from '../actions/imagesLoading';

class AnimatedContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			loaded: false
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		const { url, imagesLoaded } = this.props;
		if (imagesLoaded[url] !== nextProps.imagesLoaded[url]) {
			return true;
		}
		return false;
	}
	componentWillReceiveProps(nextProps) {
		const { url } = this.props;

		nextProps.imagesLoaded[url] === true
			? this.setState({
					loaded: true
				})
			: this.setState({
					loaded: false
				});
	}
	componentWillUnmount() {
		const { imagesLoading } = this.props;
		imagesLoading(this.props.url);
	}
	render() {
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
						{this.props.children}
					</AnimatedDiv>
				)}
			</Motion>
		);
	}
}

const mapStateToProps = ({ imagesLoaded }) => {
	return { imagesLoaded };
};

const mapDispatchToProps = dispatch => {
	return {
		imagesLoading(url) {
			dispatch(imagesLoading(url));
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
