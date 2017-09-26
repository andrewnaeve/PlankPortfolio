import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import ImageProperties from '../../ImageProperties';
import ImageCard from './ImageCard';

import debounce from 'lodash/debounce';

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			scrolling: false
		};
		this.updateViewport = debounce(this.updateViewport).bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.updateViewport, false);
		window.addEventListener('resize', this.updateViewport, false);
		this.updateViewport();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.updateViewport);
		window.removeEventListener('resize', this.updateViewport);
	}

	updateViewport() {
		this.setState({
			scrolling: !this.state.scrolling
		});
	}
	render() {
		console.log('rendered');
		return (
			<OuterContainer>
				{ImageProperties.map((x, i) => (
					<AnimatedContainer key={ImageProperties[i].url}>
						<ImageCard
							url={ImageProperties[i].url}
							title={ImageProperties[i].title}
							description={ImageProperties[i].description}
							scrolling={this.state.scrolling}
							width={ImageProperties[i].width}
							height={ImageProperties[i].height}
						/>
					</AnimatedContainer>
				))}
			</OuterContainer>
		);
	}
}

const OuterContainer = styled.div`
	flex: 1;
	max-width: 90%;
	margin-top: 30px;
	justify-content: center;
`;

export default Portfolio;
