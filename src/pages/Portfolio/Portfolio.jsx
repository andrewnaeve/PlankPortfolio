import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import ImageProperties from '../../ImageProperties';
import ImageCard from './ImageCard';
import debounce from 'lodash/debounce';

class Portfolio extends Component {
	constructor() {
		super();
		this._images = [];
		this.updateViewport = debounce(this.updateViewport).bind(this);
	}

	componentWillMount() {
		ImageProperties.map((x, i) => {
			return this._images.push(x);
		});
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
		this._images.forEach((x, i) => {
			if (x !== null) {
				return this[`img${i}`].updateImagePosition();
			}
		});
	}

	stopSendingEvents = i => {
		this._images[i] = null;
	};

	render() {
		return (
			<OuterContainer>
				{ImageProperties.map((x, i) => (
					<AnimatedContainer
						key={ImageProperties[i].url}
						render={({ handleLoad, renderAnimation }) =>
							renderAnimation(
								<ImageCard
									index={i}
									onRef={ref => (this[`img${i}`] = ref)}
									url={ImageProperties[i].url}
									title={ImageProperties[i].title}
									description={ImageProperties[i].description}
									stopSendingEvents={this.stopSendingEvents}
									handleLoad={handleLoad}
								/>
							)
						}
					/>
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
