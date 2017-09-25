import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { loading } from '../../actions/loading';

class AnimatedContainer extends PureComponent {
	constructor(props) {
		super();
		this.state = {
			loaded: false
		};
	}

	componentWillReceiveProps(nextProps) {
		const { loaded } = this.props;
		const { title } = this.props.children.props;

		if (loaded[title] !== nextProps.loaded[title]) {
			nextProps.loaded[title] === true
				? this.setState({
						loaded: true
					})
				: this.setState({
						loaded: false
					});
		}
	}
	componentWillUnmount() {
		const { loading } = this.props;
		const { title } = this.props.children.props;
		loading(title);
	}
	render() {
		const { loaded } = this.state;
		const { children } = this.props;
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
						{children}
					</AnimatedDiv>
				)}
			</Motion>
		);
	}
}

const mapStateToProps = ({ loaded }) => {
	return { loaded };
};

const mapDispatchToProps = dispatch => {
	return {
		loading(title) {
			dispatch(loading(title));
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
