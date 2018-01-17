import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { media } from '../../utilities/style-utils';
import Image from './Image';

class ImageCard extends Component {
	state = {
		show: false
	};

	componentWillUpdate(nextProps) {
		const { scrollingActivity } = this.props;
		const nextScrollingActivity = nextProps.scrollingActivity;
		if (scrollingActivity !== nextScrollingActivity) {
			this.updateImagePosition();
		}
	}

	shouldComponentUpdate() {
		const { show } = this.state;
		if (show) {
			return false;
		}
		return true;
	}

	updateImagePosition() {
		const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
		if (this.state.show) {
			return;
		}
		if (
			rect.bottom >= 0 &&
			rect.right >= 0 &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.left <= (window.innerWidth || document.documentElement.clientWidth)
		) {
			this.setState({
				show: true
			});
		}
	}

	render() {
		const { title, description, width, height, handleLoad } = this.props;
		const { show } = this.state;
		const url = show ? this.props.url : null;
		return (
			<Wrapper>
				<Image
					url={url}
					title={title}
					handleLoad={handleLoad}
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

export default ImageCard;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	min-height: 280px;
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
