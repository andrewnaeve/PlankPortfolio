import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import ImageProperties from '../../ImageProperties';
import ImageCard from './ImageCard';
import { media } from '../../style-utils';

const Portfolio = () => (
	<OuterContainer>
		{ImageProperties.map((x, i) => (
			<AnimatedContainer
				key={ImageProperties[i].title}
				name={ImageProperties[i].url}
			>
				<Column>
					<ImageCard name={ImageProperties[i].url} />
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
