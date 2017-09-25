import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';
import ReactDOM from 'react-dom';
import { media } from '../../utilities/style-utils';
import Image from './Image';

class ImageCard extends Component {
	constructor(props) {
		super();
		this.state = {
			show: false
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.show || this.state.show === nextState.show) {
			return false;
		}
		return true;
	}

	componentWillReceiveProps(prevProps) {
		if (!this.state.show) {
			this.updateImagePosition();
		}
	}

	updateImagePosition() {
		const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

		if (
			rect.bottom >= 0 &&
			rect.right >= 0 &&
			rect.top <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.left <=
				(window.innerWidth || document.documentElement.clientWidth)
		) {
			this.setState({
				show: true
			});
		}
	}

	handleImageLoad = () => {
		this.props.ready(this.props.title);
	};

	render() {
		const { url, title, description, width, height } = this.props;
		const { show } = this.state;
		return (
			<Wrapper>
				<Image
					url={url}
					handleLoad={this.handleImageLoad}
					height={height}
					width={width}
					show={show}
				/>
				<TextContainer>
					<Title> {title} </Title>
					<Description> {description} </Description>
				</TextContainer>
			</Wrapper>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		ready(title) {
			dispatch(ready(title));
		}
	};
};

export default connect(null, mapDispatchToProps)(ImageCard);

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
`;

const TextContainer = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	width: 100%;
	justify-content: center;
	color: black;
	flex-direction: column;
	margin-bottom: 20px;
	margin-top: 20px;
`;

const Title = styled.div`
	font-size: 1.5rem;
	display: flex;
	text-align: center;
	width: 100%;
	justify-content: center;
	font-style: italic;
	${media.tablets`
		font-size: 2rem`};
`;

const Description = styled.div`
	font-size: 1.2rem;
	display: flex;
	text-align: center;
	width: 100%;
	justify-content: center;
	${media.tablets`
		font-size: 1.5rem`};
`;
