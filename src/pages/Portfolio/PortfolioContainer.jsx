import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import { ImageProperties } from '../../ImageProperties';
import ImageCard from './ImageCard';
import debounce from 'lodash/debounce';

class Portfolio extends Component {
	state = {
		scrollingActivity: false
	};

	_isScrolling = debounce(this._isScrolling, 50).bind(this);

	componentDidMount() {
		window.addEventListener('scroll', this._isScrolling, false);
		window.addEventListener('resize', this._isScrolling, false);
		this._isScrolling();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this._isScrolling);
		window.removeEventListener('resize', this._isScrolling);
	}

	render() {
		const { scrollingActivity } = this.state;
		return (
			<OuterContainer>
				{ImageProperties.map((image, i) => (
					<AnimatedContainer
						key={image.url}
						render={({ handleLoad, renderAnimation }) =>
							renderAnimation(
								<ImageCard
									index={i}
									url={image.firebaseUrl}
									title={image.title}
									description={image.description}
									handleLoad={handleLoad}
									scrollingActivity={scrollingActivity}
								/>
							)
						}
					/>
				))}
			</OuterContainer>
		);
	}

	_isScrolling() {
		this.setState(({ scrollingActivity }) => ({
			scrollingActivity: !scrollingActivity
		}));
	}
}

const OuterContainer = styled.div`
	flex: 1;
	max-width: 90%;
	margin-top: 30px;
	justify-content: center;
`;

export default Portfolio;
