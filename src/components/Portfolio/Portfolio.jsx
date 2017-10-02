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
		this.updateViewport = debounce(this.updateViewport, 100).bind(this);
		this.stopSendingEvents = this.stopSendingEvents.bind(this);
	}
	_activeListeners = [];
	componentWillMount() {
		ImageProperties.map((x, i) => this._activeListeners.push(x));
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
		if (this._activeListeners.length) {
			this._activeListeners.map((x, i) => {
				return this[`img${i}`].updateImagePosition();
			});
		}
	}
	stopSendingEvents(i) {
		if (this._activeListeners.length) {
			this._activeListeners = this._activeListeners
				.slice(0, i)
				.concat(
					this._activeListeners.slice(
						i + 1,
						this._activeListeners.length
					)
				);
		}
		console.log(i);
		console.log(this._activeListeners);
	}

	render() {
		return (
			<OuterContainer>
				{ImageProperties.map((x, i) => (
					<AnimatedContainer key={ImageProperties[i].url}>
						<ImageCard
							i={i}
							onRef={ref => (this[`img${i}`] = ref)}
							stopSendingEvents={this.stopSendingEvents}
							url={ImageProperties[i].url}
							title={ImageProperties[i].title}
							description={ImageProperties[i].description}
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
