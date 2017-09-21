import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import ImageProperties from '../../ImageProperties';
import ImageCard from './ImageCard';
import { media } from '../../Utilities/style-utils';
import LazyLoad from '../../Utilities/LazyLoad';

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			viewport: {
				top: 0,
				height: 0
			}
		};
		this.updateViewport = this.updateViewport.bind(this);
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
		// TODO: debounce this call
		this.setState({
			viewport: {
				top: window.pageYOffset,
				height: window.innerHeight
			}
		});
	}
	render() {
		return (
			<OuterContainer>
				{ImageProperties.map((x, i) => (
					<AnimatedContainer
						key={ImageProperties[i].url}
						title={ImageProperties[i].title}
					>
						<Column>
							<ImageCard
								url={ImageProperties[i].url}
								title={ImageProperties[i].title}
								viewport={this.state.viewport}
							/>
							<TextContainer>
								<Title>{ImageProperties[i].title}</Title>
								<Description>
									{ImageProperties[i].description}
								</Description>
							</TextContainer>
						</Column>
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

const Column = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
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

export default Portfolio;
