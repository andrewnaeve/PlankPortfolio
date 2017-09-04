import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from './AnimatedContainer';

const YouTube = () => (
	<AnimatedContainer>
		<Frame />
	</AnimatedContainer>
);

const Frame = props => (
	<OuterWrapper>
		<MediaWrapper>
			<iframe
				style={iframeStyle}
				width="560"
				height="315"
				src="https://www.youtube.com/embed/B5nF1Mmte0M?rel=0"
				frameBorder="0"
				allowFullScreen
				onLoad={props.animate}
			/>
		</MediaWrapper>
		<Description>
			<p>
				"My goal in painting is to put down what I see, feel, and
				experience as beautiful in an object, person, or place. Ideally,
				it is sensitive, strong, and honest. It’s my joy and passion to
				paint."
			</p>
			<p>- Nancy Plank</p>
			<br />
			<p>
				Nancy Plank is a realism painter specializing in florals and
				portraits. She is available for commission work. Her studio is
				located in San Diego.
			</p>
		</Description>
	</OuterWrapper>
);

export default YouTube;

const Description = styled.div`
	margin-top: 20px;
	font-size: 1.5rem;
	font-family: 'Abel', sans-serif;
	justify-content: center;
	margin-bottom: 20px;
`;

const OuterWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding-top: 10px;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

const MediaWrapper = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 35px;
	height: 0;
	width: 100%;
	overflow: hidden;
	height: 100%;
`;

const iframeStyle = {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%'
};
