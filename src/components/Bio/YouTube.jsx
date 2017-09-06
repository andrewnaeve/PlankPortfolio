import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../AnimatedContainer';

const YouTube = () => (
	<AnimatedContainer>
		<Frame />
	</AnimatedContainer>
);

const Frame = props => (
	<OuterWrapper>
		<MediaWrapper>
			<iframe
				title="Nancy Plank"
				style={iframeStyle}
				width="560"
				height="315"
				src="https://www.youtube.com/embed/B5nF1Mmte0M?rel=0"
				frameBorder="0"
				allowFullScreen
				onLoad={props.animate}
			/>
		</MediaWrapper>
	</OuterWrapper>
);

export default YouTube;

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
